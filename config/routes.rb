Rails.application.routes.draw do
  root to: 'pages#home'
  get 'new', to: 'phrases#new', as: 'phrase_new'
  get 'create', to: 'phrases#create', as: 'phrase_create'
  get 'destroy', to: 'phrases#destroy', as: 'phrase_destroy'
end
