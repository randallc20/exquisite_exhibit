class LikesController < ApplicationController
  skip_before_action :authorize, only: %i[index create show update destroy]
  def index
    likes = Like.all
    render json: likes
  end

  def create
    # binding.pry
    like = Like.create!(like_params)
    render json: like, status: :created
  end

  def show
    like = like.find_by!(id: params[:user_id])
    render json: user
  end

  def update
    like = Like.find_by(id: params[:id])
    like.update(like_params)
    render json: like
  end

  def destroy
    like = like.find_by(id: params[:id])
    like.destroy
    head :no_content
  end

  private

  def like_params
    params.permit(:content, :user_id, :pin_id)
  end
end
