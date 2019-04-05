class ApplicationController < ActionController::API
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception

  def json_response(object, status = :ok)
    render json: object, status: status
  end

  def yummly_search(parameters)
    url = "#{ENV["SEARCH_URL"]}#{ENV["YUMMLY_KEY"]}"
    parameters.each do |parameter|
      url = "#{url}#{parameter}"
    end
    return url
  end

    def yummly_get(recipeID)
      url = "#{ENV["SHOW_URL"]}#{recipeID}?#{ENV["YUMMLY_KEY"]}"
       return url
    end

  
end
