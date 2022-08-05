class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.integer :count
      t.boolean :if_liked
      t.integer :user_id
      t.integer :pin_id

      t.timestamps
    end
  end
end
