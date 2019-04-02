class TwilioTextMessenger
  attr_reader :message

  def initialize(message, to, from)
    @message = message.to_s
    @to = to.to_s
    @from = from.to_s
  end

  def call
    client = Twilio::REST::Client.new
    client.messages.create({
      from: @from,
      to: @to,
      body: @message
    })
  end
end