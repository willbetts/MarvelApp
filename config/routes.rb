Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to:"home_page#homepage"
  namespace :api, defaults: {format: :json} do
    resources :characters, only: [:index]
  end
end
