class ListIngredientsController < ApplicationController

  def index
    @user = User.find(params[:userId])
    @list_ingredients = @user.list_ingredients
    @ingredients = []
    @list_ingredients.each do |i|
      @ingredients << {
        name: i.ingredient[:name],
        image: i.ingredient[:image],
        recipe_name: i.fav_recipe.recipe[:name]
      }
    end
    json_response(@ingredients)
  end

  def create

  end

  def destroy

  end

end