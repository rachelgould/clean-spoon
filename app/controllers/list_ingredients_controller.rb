class ListIngredientsController < ApplicationController

  def index
    @user = User.find(params[:userId])
    @list_ingredients = @user.list_ingredients
    @ingredients = [];
    @list_ingredients.each do |i|
      @ingredients << [Ingredient.select("name, image").find(i)]
    end
    # @ingredients
    json_response(@ingredients)
  end

  def create

  end

  def destroy

  end

end