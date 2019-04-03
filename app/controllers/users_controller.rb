class UsersController < ApplicationController

  def show
    @user = User.select("id, name, email, vegan, vegetarian, gf, allergies").find(params[:userId])
    json_response(@user)
  end

  def update
    @user = User.select("id, name, email, vegan, vegetarian, gf, allergies").find(params[:userId])
    #if (@user != params[:user])
      
  end

  def create

  end



end