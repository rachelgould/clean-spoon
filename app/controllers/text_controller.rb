class TextController < ApplicationController
  def index
    q = params[:q]
    if q.blank?
      render status: 400, json: { error: 'Missing a phone number!'}
    else
      @user = User.find(params[:id])
      @list_ingredients = @user.list_ingredients
      @ingredients = [];
      @list_ingredients.each do |i|
        fav_recipe = FavRecipe.find(i[:fav_recipe_id])
        ingredient = Ingredient.select("name, image").find(i[:ingredient_id])
        recipe = Recipe.select("name").find(fav_recipe[:recipe_id])
        @ingredients << "#{ingredient[:name]} for this recipe: #{recipe[:name]}"
      end
      from = '+16474925440' # Your Twilio number
      to = q
      message = @ingredients.join(', ')
      TwilioTextMessenger.new(message, to, from).call
      render(
        status: 200,
        json: { success: 'Message Sent!'}
      )
    end
  end
end