class PinsController < ApplicationController
  def index
    render json: Pin.all
  end

  def create
    pin = @current_user.pins.create!(pin_params)
    render json: pin, status: :created
  end

  private

  def pin_params
    params.permit(:user_id, :image_url, :caption)
  end
end
