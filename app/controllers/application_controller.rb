class ApplicationController < ActionController::API
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception

  def json_response(object, status = :ok)
    render json: object, status: status
  end

  def yummly_get(recipeID)
    url = "#{ENV["SHOW_URL"]}#{recipeID}?#{ENV["YUMMLY_KEY"]}"
      return url
  end

  def yummly_search(searchParameters, user) #user object, searchParameters object as seen in project_planning
    #Make the url
    url = "#{ENV["SEARCH_URL"]}#{ENV["YUMMLY_KEY"]}&requirePictures=true"
    url = "#{url}&maxResult=40" # 40 matches will give us 20 unique guarenteed
    url = "#{url}&start=0"

    #Add user allergies
    user.allergies.each do |allergy|
      if (allergy.is_ingredient)
        url = "#{url}&excludedIngredient[]=#{allergy.name}"
      else
        url = "#{url}&allowedAllergy[]=#{AllowedItems.instance.allowed_allergies[allergy.name.to_sym]}"
      end
    end
    #loop through searchParams object keys to format into url string
    parameters = [];
    searchParameters.each do |key, value|
      case key
      when 'extraAllergies'.to_sym
        value.each do |allergy_name|
          if (AllowedItems.instance.allowed_allergies[allergy_name.to_sym] != nil)
            url = "#{url}&allowedAllergy[]=#{AllowedItems.instance.allowed_allergies[allergy_name.to_sym]}"
          elsif (AllowedItems.instance.allowed_ingredients[allergy_name])
            url = "#{url}&excludedIngredient[]=#{allergy_name}"
          end
        end

      when 'diet'.to_sym
        if (value[:vegetarian])
          url = "#{url}&allowedDiet[]=vegetarian"
        end
        if (value[:vegan])
          url = "#{url}&allowedDiet[]=vegan"
        end
      end
    end

    # query database for fridge ingredients beforehand for ease of checking terminal
    fitems = []
    user.fridge_ingredients.each do |i|
      fitems << i.ingredient.name
    end

    finalResult = { # the recipes to pass to the user
      "matches" => [],
      "ids" => {},
      "ingredients" => {},
      "searches" => 0
    } 
    numberOfIngredientsStart = 6
    if (fitems.length < 6)
      numberOfIngredientsStart = fitems.length
    end
    return searchFromFridge(fitems, numberOfIngredientsStart, url, finalResult, 1)
  end 

  def searchFromFridge fitems, choose, baseUrl, finalResult, iteration
    # Get all users's fridge ingredients and find recipes based off of them
    # ----------------------------------------
    # PsuedoCode:
    # Search with all ingredients, then search with 1 less, 2 less, etc
    # Save all unique recipes Until there is 20
    # ----------------------------------------
    url = baseUrl

    # Get the correct iteration of n Choose r where n is the number of fridge ingredients and r is n, n-1, ..., 1 
    filter = []
    CombinationGenerator.new(choose - 2, fitems).each do |element|
      filter << element
    end 
    ingredients = filter[iteration - 1]

    # make url For all fridge ingredients we want
    ingredients.each do |ingredient|
      url = "#{url}&q=#{ingredient.split(" ").join("+")}"
    end

    #make api request and parse into hash For evaluation
    searchResults = Net::HTTP.get(URI.parse(url))
    searchResults = JSON.parse searchResults
    finalResult["searches"] = finalResult["searches"] + 1

    # If there are matches, save them in the array Until we have 20 saved
    if (searchResults["totalMatchCount"] > 0)
      index = 0
      while (finalResult["matches"].length < 20 && index < searchResults["matches"].length) do
        #check If the recipe is already in results, If not add to results
        recipe = searchResults["matches"][index]
        if (finalResult["ids"][recipe["id"]] == nil && finalResult["ingredients"][recipe["recipeName"]] == nil)
          finalResult["matches"] << recipe
          finalResult["ids"][recipe["id"]] = recipe["id"]
          finalResult["ingredients"][recipe["recipeName"]] = ingredients
        end
        index = index + 1
      end
    end

    p "Looking at #{choose} ingredients"
    puts "We have found #{finalResult["matches"].length} recipes in #{finalResult["searches"]} searches so far"
    # done If we have our results
    if (finalResult["matches"].length == 20)
      return finalResult 
    end

    # otherwise set up For next iteration
    # -----------------------------------------

    if (choose == fitems.length)
      choose = choose - 1
      iteration = 1
    # If all the iterations have been completed
    elsif (iteration == Combinatorics::Choose.cardinality(fitems.length, choose))
      choose = choose - 1
      iteration = 1
    end
    return searchFromFridge(fitems, choose, baseUrl, finalResult, iteration + 1)
  end

end
