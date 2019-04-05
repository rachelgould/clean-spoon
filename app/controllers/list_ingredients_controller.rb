class ListIngredientsController < ApplicationController

  def index
    @user = User.find(params[:userId])
    @list_ingredients = @user.list_ingredients
    @ingredients = []
    @list_ingredients.each do |i|
      @ingredients << {
        name: i.ingredient[:name],
        image: i.ingredient[:image],
        id: i[:ingredient_id],
        # recipe_name: i.fav_recipe.recipe[:name]
      }
    end
    json_response(@ingredients)
  end

  def create
    user = User.find(params[:userId])
    ingredient = Ingredient.find_or_create_by(name: params[:name])
    list = ingredient.list.create!(fridge_id: user.fridge.id)
    json_response("Success": "Ingredient added to list")
  end

  def destroy
    ListIngredient.destroy(params[:listIngredientId])
    json_response("Success": "Ingredient removed from fridge")
  end

end