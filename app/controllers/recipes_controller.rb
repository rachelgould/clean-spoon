class RecipesController < ApplicationController


  def search
    user = User.find(params[:userId])
    searchParameters = {
      diet: { vegan: false, vegetarian: false}
    }
    searchResults = yummly_search(searchParameters, user)

    bigImages = []
     searchResults["matches"].each do |recipe|
      result = JSON.parse(yummly_get(recipe["id"]))
       recipe["bigImage"] = result["images"][0]["hostedLargeUrl"]
       recipe["courses"] = result["attributes"]["course"]
     end
    
    json_response(searchResults)
  end

  def show
    #recipeID = "Hot-Dogs-with-Krautslaw-894904";
    info = yummly_get(params[:recipeId])
    json_response(info)
  end 


end