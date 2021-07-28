Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "characters#index"
  
  resources :characters, only: [:show, :create] do
    member do
      post :select
    end
  end
  resources :clothings, only: :index do
      member do
        post :select
      end
  end
end
