Rails.application.routes.draw do
  resources :memberships, only: :create
  resources :clients, except: [:create, :destroy]
  resources :gyms, except: :create
end
