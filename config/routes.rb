Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :things
  end

  # namespace :api do
  #   resources :users
  # end

  # namespace :api do         # maybe later you create more stuff and you have different versions of your api, like
  #   namespace: v2                   #( I don't remember how this needs to be written though)
  #   resources :things
  # end

end
