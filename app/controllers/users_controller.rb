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

    allergyArray = params[:allergies]
   
    @user = User.update(params[:userId], {
      name: params[:name],
      email: params[:email],
      vegan: params[:vegan],
      vegetarian: params[:vegetarian]
     })

     #Remove existing allergies
     @user = User.find(params[:userId])
     @user.user_allergies.destroy_all 
     
    allergyArray.each do |item|

      if (AllowedItems.instance.allowed_allergies[item])
        allergy = Allergy.find_or_create_by(
          name: item,
          is_ingredient: false
          )
        user_allergy = allergy.user_allergies.find_or_create_by(user_id: @user.id)
       # json_response("Success": "Allergy created or found")
      elsif (AllowedItems.instance.allowed_ingredients[item])
        allergy = Allergy.find_or_create_by(
          name: item,
          is_ingredient: true
          )
        user_allergy = allergy.user_allergies.find_or_create_by(user_id: @user.id)
      #  json_response("Success": "Allergy created or found")
      else 
      #  json_response("Failure": "Not a valid allergy")
      end


   @allergies = @user.allergies
   allergyArray = []
   @allergies.each do |object|
     allergyArray << object.name

    end
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

  def create
    @user = User.create!(user_params)
  end

  def user_params
    params.require(:user).permit(:name, :email, :vegan, :vegetarian)
  end

end