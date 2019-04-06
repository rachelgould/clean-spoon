class RecipesController < ApplicationController


  def search
    user = User.find(params[:userId])
    searchParameters = {
      extraAllergies: ["dairy", "eggs"],
      diet: { vegan: false, vegetarian: true},
      maxResult: 10,
      start: 0
    }
    searchResults = yummly_search(searchParameters, user)
    json_response(searchResults)
  end

  def show
    #recipeID = "Hot-Dogs-with-Krautslaw-894904";
    url = yummly_get(params[:recipeId])
    info = Net::HTTP.get(URI.parse(url))
    json_response(info)
  end 


end