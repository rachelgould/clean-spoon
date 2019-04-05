class UsersController < ApplicationController

  def show
    @user = User.select("id, name, email, vegan, vegetarian").find(params[:userId])
    @allergies = @user.allergies
    allergyArray = []
    @allergies.each do |object|
      allergyArray << object.name
    end
    data = {
      name: @user.name,
      email: @user.email,
      vegan: @user.vegan,
      vegetarian: @user.vegetarian,
      allergies: allergyArray
    }
    json_response(data)
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
    params.require(:user).permit(:name, :email, :vegan, :vegetarian)
  end

end