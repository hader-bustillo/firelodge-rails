Rails.application.routes.draw do
  get 'photos', to: 'photos#index'
  get 'welcome/index'
  get 'realtime-webcam', to: 'welcome#realtime_webcam'
  get 'articles/index'
  get 'articles/show'
  get 'house-manual-09b30e8d-3b9c-41ec-bd75-4b6df1ddf0d5', to: 'welcome#house_manual'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "welcome#index"
end
