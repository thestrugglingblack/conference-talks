Rails.application.routes.draw do
  resources :contacts

  #Home route
  root 'contacts#index'
end
