Rails.application.routes.draw do  
  namespace :api do
    resources :characters, only: [:create, :show] do
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
end
