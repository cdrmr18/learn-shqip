Rails.application.routes.draw do
  root to: 'pages#home'
  get '/new', to: 'vocabulary#new', as: 'vocab_new'
  get '/create', to: 'vocabulary#create', as: 'vocab_create'
  get '/destroy', to: 'vocabulary#destroy', as: 'vocab_destroy'
end
