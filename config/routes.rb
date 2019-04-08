Rails.application.routes.draw do
  scope '/api' do

    # TWILIO
    get :text, to: 'text#index'

    # USERS
    get '/users/:userId', to: 'users#show'
    put '/users/:userId', to: 'users#update'
    #post '/users/', to: 'users#create'

    # ALLERGIES
    post '/allergies/:userId', to: 'allergies#create'
    delete '/allergies/:userId', to: 'allergies#destroy'

    # RECIPES
    get '/favRecipes/:userId', to: 'fav_recipes#index'
    # post '/favRecipes/:userId', to: 'fav_recipes#create'
    # delete '/favRecipes/:favRecipeId', to: 'fav_recipes#destroy'
    get '/recipes/search/:userId', to: 'recipes#search'
    get '/recipes/:recipeId', to: 'recipes#show'

    # FRIDGE
    get '/fridges/:userId', to: 'fridge_ingredients#index'
    post '/fridges/:userId', to: 'fridge_ingredients#create'
    delete '/fridges/:fridgeIngredientId', to: 'fridge_ingredients#destroy'

    # SHOPPING LIST
    get '/lists/:userId', to: 'list_ingredients#index'
    post '/lists/:userId', to: 'list_ingredients#create'
    delete '/lists/:listIngredientId', to: 'list_ingredients#destroy'

    # TEST RESULTS
    get '/test', to: 'test#show'

  end
end
