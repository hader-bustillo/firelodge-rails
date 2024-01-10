Rails.application.routes.draw do
  get 'photos', to: 'photos#index'
  get 'welcome/index'
  get 'realtime-webcam', to: 'welcome#realtime_webcam'
  get 'articles/index'
  get 'articles/show'
  get 'house-manual-09b30e8d-3b9c-41ec-bd75-4b6df1ddf0d5', to: 'welcome#house_manual'
  get "up" => "rails/health#show", as: :rails_health_check

  root "welcome#index"
end
