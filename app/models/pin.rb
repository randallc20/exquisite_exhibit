class Pin < ApplicationRecord
  belongs_to :user
  has_many :likes
  has_many :comments
end
