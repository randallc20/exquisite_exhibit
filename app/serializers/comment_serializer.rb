class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :pin_id
  belongs_to :user
end
