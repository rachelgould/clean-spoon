Rails.application.routes.draw do
  scope '/api' do

    # TWILIO
    get :text, to: 'text#index'

    # USERS
    get '/users/user[:id]', to: 'users#show'
    put '/users/user[:id]', to: 'users#update'
    post '/users/', to: 'users#create'

    # RECIPES
    get '/fav_recipes/user[:id]', to: 'fav_recipes#index'
    post '/fav_recipes/user[:id]', to: 'fav_recipes#create'
    delete '/fav_recipes/fav_recipe[:id]', to: 'fav_recipes#destroy'
    get '/recipes/user[:id]', to: 'recipes#search'

    # FRIDGE
    get '/fridges/user[:id]', to: 'fridge_ingredients#index'
    post '/fridges/user[:id]', to: 'fridge_ingredients#create'
    delete '/fridges/fridge_ingredient[:id]', to: 'fridge_ingredients#destroy'

    # SHOPPING LIST
    get '/lists/user[:id]', to: 'list_ingredients#index'
    post '/lists/user[:id]', to: 'list_ingredients#create'
    delete '/lists/user[:id]', to: 'list_ingredients#destroy'

    # Allergies
    post '/allergies/user[:id]', to: 'allergies#create'
    delete '/allergies/user[:id]', to: 'allergies#destroy'

  end
end
