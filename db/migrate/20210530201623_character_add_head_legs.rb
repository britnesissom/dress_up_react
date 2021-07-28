class CharacterAddHeadLegs < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :head, :string
    add_column :characters, :legs, :string
  end
end
