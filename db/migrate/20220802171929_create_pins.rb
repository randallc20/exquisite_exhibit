class CreatePins < ActiveRecord::Migration[7.0]
  def change
    create_table :pins do |t|
      t.text :caption
      t.string :image_url
      t.integer :user_id

      t.timestamps
    end
  end
end
