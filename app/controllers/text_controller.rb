class TextController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Missing a phone number!'}
    else
      boot_twilio
      from = '+16474925440' # Your Twilio number
      to = '+16474925440' # Should be changed to destination for production
      sms = @client.messages.create(
        from: from,
        to: to,
        body: "Hey friend!" # Replace this with the current user's grocery list
      )
      render(
        status: 200,
        json: { success: 'Message Sent!'}
      )
    end
  end

  private

  def boot_twilio
    account_sid = ENV["TWILIO_SID"]
    auth_token = ENV["TWILIO_AUTH"]
    @client = Twilio::REST::Client.new(account_sid, auth_token)
  end
end
