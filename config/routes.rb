Rails.application.routes.draw do
  scope '/api' do
    get :text, to: 'text#index'
  end
end
