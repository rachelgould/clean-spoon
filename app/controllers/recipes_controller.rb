class RecipesController < ApplicationController


  def search

  end

  def show
    #recipeID = "Hot-Dogs-with-Krautslaw-894904";
    url = yummly_get(params[:recipeId])
    info = Net::HTTP.get(URI.parse(url))
    json_response(info)
  end 


end