class TextController < ApplicationController
  def index
    q = params[:q]
    list = params[:list]
    if q.blank?
      render status: 400, json: { error: 'Missing a phone number!'}
    else
      from = '+16474925440' # Your Twilio number
      to = q # Should be changed to destination for production
      message = list.join(', ')
      TwilioTextMessenger.new(message, to, from).call
      render(
        status: 200,
        json: { success: 'Message Sent!'}
      )
    end
  end

end
