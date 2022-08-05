require "pry"
class CommentsController < ApplicationController
  skip_before_action :authorize, only: %i[index create show update destroy]
  def index
    comments = Comment.all
    render json: comments
  end

  def create
    # binding.pry
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  def show
    comment = Comment.find_by!(id: params[:user_id])
    render json: user
  end

  def update
    comment = Comment.find_by(id: params[:id])
    comment.update(comment_params)
    render json: comment
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    comment.destroy
    head :no_content
  end

  private

  def comment_params
    params.permit(:content, :user_id, :pin_id)
  end
end
