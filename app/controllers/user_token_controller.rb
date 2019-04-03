class UserTokenController < Knock::AuthTokenController

  # def current
  #   render json: current_user.as_json(only: %i(id email))
  # end

  def create
    render json: {"hello": "1"}, status: 200
  end
end
 