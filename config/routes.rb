Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  scope '/api' do

    # TWILIO
    get :text, to: 'text#index'

    # USERS
    get '/users/:userId', to: 'users#show'
    put '/users/:userId', to: 'users#update'
    post '/users/', to: 'users#create'
    # Generates a token for the specified user ID (used in client 'handsake' with rails API to validate user)
    # post '/user_token/' => 'user_token#create'

    # RECIPES
    get '/favRecipes/:userId', to: 'fav_recipes#index'
    # post '/favRecipes/:userId', to: 'favRecipes#create'
    # delete '/favRecipes/:favRecipeId', to: 'favRecipes#destroy'
    # get '/recipes/:userId', to: 'recipes#search'

    # # FRIDGE
    # get '/fridges/:userId', to: 'fridgeIngredients#index'
    # post '/fridges/:userId', to: 'fridgeIngredients#create'
    # delete '/fridges/:fridgeIngredientId', to: 'fridgeIngredients#destroy'

    # # SHOPPING LIST
    # get '/lists/:userId', to: 'listIngredients#index'
    # post '/lists/:userId', to: 'listIngredients#create'
    # delete '/lists/:userId', to: 'listIngredients#destroy'

  end
end
