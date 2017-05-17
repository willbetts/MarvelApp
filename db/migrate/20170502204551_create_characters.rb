class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :char_name, null: false
      t.string :city_name, null: false
      t.string :picture_url, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false 
      t.timestamps
    end
  end
end
