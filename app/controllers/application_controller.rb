class ApplicationController < ActionController::API
  include Knock::Authenticable
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception

  def json_response(object, status = :ok)
    render json: object, status: status
  end
    
end
