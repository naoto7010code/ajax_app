class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    # 投稿されたメモの内容を変数postに格納
    post = Post.create(content: params[:content])
    # レスポンスで返却されるデータフォーマットにJSONを指定
    render json:{ post: post }
  end
end
