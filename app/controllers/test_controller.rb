class TestController < ApplicationController
  def show
    user = User.find(1)
    
    json_response(yummly_search ["rice+noodles"])
  end
end