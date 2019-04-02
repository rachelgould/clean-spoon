class TextController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Missing a phone number!'}
    else
      from = '+16474925440' # Your Twilio number
      to = '+16478807629' # Should be changed to destination for production
      client = Twilio::REST::Client.new
      client.messages.create({
        from: from,
        to: to,
        body: 'Hello there! This is a test'
      })
      render(
        status: 200,
        json: { success: 'Message Sent!'}
      )
    end
  end

end
