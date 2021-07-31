class Clothing < ApplicationRecord
    has_and_belongs_to_many :characters
    has_one_attached :image

    enum category: { top: 'top', bottom: 'bottom', dress: 'dress', shoes: 'shoes', accessory: 'accessory' }
end
