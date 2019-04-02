class TextController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Missing a phone number!'}
    else
      render(
        status: 200,
        json: User
      )
    end
  end
end
