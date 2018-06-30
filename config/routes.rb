Rails.application.routes.draw do
  resources :authorships
  resources :authors
  resources :books
  root to: 'books#index'
end
