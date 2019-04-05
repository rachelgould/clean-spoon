class TestController < ApplicationController
  def show
    json_response(User.find(1))
  end
end