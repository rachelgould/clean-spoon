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
        @ingredients << Ingredient.select("name").find(i[:ingredient_id]).name
      end
      from = '+16474925440' # Your Twilio number
      to = q
      message = @ingredients.join(', ')
      puts "calling twilio"
      TwilioTextMessenger.new(message, to, from).call
      puts "send message"
      render(
        status: 200,
        json: { success: 'Message Sent!'}
      )
    end
  end
end