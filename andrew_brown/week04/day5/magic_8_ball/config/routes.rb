Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/home' => 'pages#home'

  get 'magic/' => 'magic#front'

  get 'magic/x' => 'magic#play'

  get 'secret/:guess' => 'secret#play'

  get 'rock_paper_scissors/' => 'rps#front'

  get 'rock_paper_scissors/:throw' => 'rps#play'

end
