class ApplicationController < ActionController::API
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception

  def json_response(object, status = :ok)
    render json: object, status: status
  end

  def yummly_search(searchParameters, user)

    #Make the url
    url = "#{ENV["SEARCH_URL"]}#{ENV["YUMMLY_KEY"]}&requirePictures=true"

    if (!user.vegetarian)
      url = "#{url}&allowedDiet[]=vegetarian"
    end
    if (user.vegan)
      url = "#{url}&allowedDiet[]=vegan"
    end

    parameters = [];
    #searchParameters.each do |key, value| #loop through object to format into url string
      # case key
      # when 'extraAllergies'
      # end
    #end

    
    parameters.each do |parameter|
      url = "#{url}#{parameter}"
    end

    return url

  end
  
end
