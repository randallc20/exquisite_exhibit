class User < ApplicationRecord
  has_many :pins
  has_many :likes
  has_many :comments

  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
  validates :name, presence: true
  validates :profile_pic, presence: true
  validates :email, presence: true
end
