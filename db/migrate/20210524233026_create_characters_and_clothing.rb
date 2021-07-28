class CreateCharactersAndClothing < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :body

      t.timestamps
    end

    create_table :clothings do |t|
      t.string :name
      t.string :url
      t.string :item_type

      t.timestamps
    end

    create_table :characters_clothings, id: false do |t|
      t.belongs_to :character
      t.belongs_to :clothing
    end
  end
end
