Rails.application.routes.draw do
  #postsコントローラーのindexアクションを呼び出す
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
end
