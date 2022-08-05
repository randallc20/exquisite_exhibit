class PinSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :image_url, :caption, :title, :category
  has_many :likes
  has_many :comments
  belongs_to :user
end
