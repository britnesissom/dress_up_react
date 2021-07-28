class CreateClothingTypeEnum < ActiveRecord::Migration[6.1]
  def change
    execute <<-SQL
      CREATE TYPE clothing_category AS ENUM ('top', 'bottom', 'dress', 'shoes', 'accessory');
    SQL
    add_column :clothings, :category, :clothing_category
    add_index :clothings, :category
  end
end