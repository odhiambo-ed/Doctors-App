Rails.application.routes.draw do
  # resources :appointments
  # resources :physicians
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      post '/users', to: 'users#create'
    post '/login', to: 'users#login'
    resources :physicians
    resources :appointments
    end
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
