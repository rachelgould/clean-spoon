class FavRecipesController < ApplicationController

  def index
    user = User.find(params[:userId])
    recipes = [];
    user.fav_recipes.each do |i|
      result = JSON.parse(yummly_get(i.yummly_id))
      result.delete("nutritionEstimates")
      result["fav_id"] = i.id
      recipes << result
    end
    json_response(recipes)
  end

  def create
    user = User.find(params[:userId])
    user.fav_recipes.create(yummly_id: params[:recipeId]) ? json_response("Created!") : json_response("Failed to create")
  end

  def destroy
    FavRecipe.destroy(params[:favRecipeId])
  end

end