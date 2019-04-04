class ListIngredientsController < ApplicationController

  def index
    @user = User.find(params[:userId])
    @list_ingredients = @user.list_ingredients
    @ingredients = []
    @list_ingredients.each do |i|
      fav_recipe = FavRecipe.find(i[:fav_recipe_id])
      ingredient = Ingredient.select("name, image").find(i[:ingredient_id])
      recipe = Recipe.select("name").find(fav_recipe[:recipe_id])
      @ingredients << {
        name: ingredient[:name],
        image: ingredient[:image],
        recipe_name: recipe[:name]
      }
    end
    # @ingredients
    json_response(@ingredients)
  end

  def create

  end

  def destroy

  end

end