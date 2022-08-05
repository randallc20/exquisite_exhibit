Rails.application.routes.draw do
  resources :comments
  resources :likes
  resources :pins
  resources :users

  # route to test your configuration
  get "/hello", to: "application#hello_world"
  get "/users/:id/pins", to: "users#displayPins"
  # Defines the root path route ("/")
  # root "articles#index"
  # auth routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
