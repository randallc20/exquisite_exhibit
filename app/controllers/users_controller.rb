require "pry"

class UsersController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorize, only: %i[index create show displayPins]

  def index
    render json: User.all
  end

  def show
    user = User.find_by!(id: params[:user_id])
    render json: user
  end

  def displayPins
    user = User.find_by!(id: params[:id])
    pins = user.pins
    render json: pins
  end

  def create
    # binding.pry
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:name, :username, :password, :profile_pic, :email)
  end
end
