class TextController < ApplicationController
  def index
    q = params[:q]
    if q.blank?
      render status: 400, json: { error: 'Missing a phone number!'}
    else
      from = '+16474925440' # Your Twilio number
      to = '+16478807629' # Should be changed to destination for production
      message = "This should be changed to the grocery list" #change to grocery list
      TwilioTextMessenger.new(message, to, from).call
      render(
        status: 200,
        json: { success: 'Message Sent!'}
      )
    end
  end

end
