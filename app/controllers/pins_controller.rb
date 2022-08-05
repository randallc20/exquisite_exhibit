class PinsController < ApplicationController
  skip_before_action :authorize
  def index
    render json: Pin.all
  end

  def create
    user = User.find_by!(id: params[:user_id])
    pin = user.pins.create!(pin_params)
    render json: pin, status: :created
  end

  def show
    pin = Pin.find_by!(id: params[:id])
    render json: pin
  end

  private

  def pin_params
    params.permit(:user_id, :image_url, :caption, :title, :category)
  end
end
