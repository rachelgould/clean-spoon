class TestController < ApplicationController
  def show
    #user = User.find(1)
    
    # json_response(yummly_search ["rice noodles"])
    # recipe-id
    # recipeID = 

    recipeID = "Hot-Dogs-with-Krautslaw-894904";
  

    url = yummly_get(recipeID)

    info = Net::HTTP.get(URI.parse(url))

    json_response(info)

  end
end