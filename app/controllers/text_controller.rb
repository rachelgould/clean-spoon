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
        @ingredients << [Ingredient.select("name").find(i)]
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
