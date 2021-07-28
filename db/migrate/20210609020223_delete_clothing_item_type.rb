class DeleteClothingItemType < ActiveRecord::Migration[6.1]
  def change
    remove_column :clothings, :item_type
  end
end
