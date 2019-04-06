class ApplicationController < ActionController::API
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception

  def json_response(object, status = :ok)
    render json: object, status: status
  end

  def yummly_search(searchParameters, user) #user object, searchParameters object as seen in project_planning
    #Make the url
    url = "#{ENV["SEARCH_URL"]}#{ENV["YUMMLY_KEY"]}&requirePictures=true"

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

      when 'maxResult'.to_sym
        url = "#{url}&maxResult=#{value}"

      when 'start'.to_sym
        url = "#{url}&start=#{value}"

      end
    end

    # Get all users's fridge ingredients
    user.fridge_ingredients.each do |i|
      i.ingredient
    end



    searchResults = Net::HTTP.get(URI.parse(url))

    return searchResults
  end

    def yummly_get(recipeID)
      url = "#{ENV["SHOW_URL"]}#{recipeID}?#{ENV["YUMMLY_KEY"]}"
       return url
    end

  
end
