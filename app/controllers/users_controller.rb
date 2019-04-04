class UsersController < ApplicationController

  def show
    @user = User.select("id, name, email, vegan, vegetarian, gf, allergies").find(params[:userId])
    json_response(@user)
  end

  def update
    User.update!(user_params)
    #if (@user != params[:user])
    # if @user.save
    #   json_response(@user)
    # else
    #   json_response({error: "Could not find user"}, :)
    # end
  end

  def create
    @user = User.create!(user_params)
  end

  def user_params
    params.require(:user).permit(:name, :email, :vegan, :vegetarian, :gf, :allergies)
  end

end