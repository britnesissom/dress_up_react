# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


# tops
image = Cloudinary::Uploader.upload("app/assets/images/navy_cardigan.png")
Clothing.create(name: "Cardigan with Pinstripe Shirt", url: image["secure_url"], category: :top)

image = Cloudinary::Uploader.upload("app/assets/images/burgundy_blazer.png")
Clothing.create(name: "Burgundy Blazer with Lace Shirt", url: image["secure_url"], category: :top)

image = Cloudinary::Uploader.upload("app/assets/images/red_shirt.png")
Clothing.create(name: "Dark Red Shirt", url: image["secure_url"], category: :top)

image = Cloudinary::Uploader.upload("app/assets/images/deo_jacket.png")
Clothing.create(name: "DEO Jacket", url: image["secure_url"], category: :top)

image = Cloudinary::Uploader.upload("app/assets/images/gray_cardigan.png")
Clothing.create(name: "Gray Cardigan", url: image["secure_url"], category: :top)

image = Cloudinary::Uploader.upload("app/assets/images/snowflake_sweater.png")
Clothing.create(name: "Snowflake Sweater", url: image["secure_url"], category: :top)

image = Cloudinary::Uploader.upload("app/assets/images/pink_sweater.png")
Clothing.create(name: "Light Pink Sweater", url: image["secure_url"], category: :top)

image = Cloudinary::Uploader.upload("app/assets/images/leather_jacket.png")
Clothing.create(name: "Leather Jacket", url: image["secure_url"], category: :top)

image = Cloudinary::Uploader.upload("app/assets/images/clown_top.png")
Clothing.create(name: "Clown Shirt", url: image["secure_url"], category: :top)



# dresses
image = Cloudinary::Uploader.upload("app/assets/images/rainbow_suit.png")
Clothing.create(name: "Rainbow Suit", url: image["secure_url"], category: :dress)

image = Cloudinary::Uploader.upload("app/assets/images/red_floral_dress.png")
Clothing.create(name: "Red Floral Dress", url: image["secure_url"], category: :dress)

image = Cloudinary::Uploader.upload("app/assets/images/flower_romper.png")
Clothing.create(name: "Flower Romper", url: image["secure_url"], category: :dress)

image = Cloudinary::Uploader.upload("app/assets/images/black_sundress.png")
Clothing.create(name: "Black Sundress", url: image["secure_url"], category: :dress)



#pants
image = Cloudinary::Uploader.upload("app/assets/images/deo_sweatpants.png")
Clothing.create(name: "DEO Sweatpants", url: image["secure_url"], category: :bottom)

image = Cloudinary::Uploader.upload("app/assets/images/clown_pants.png")
Clothing.create(name: "Clown Pants", url: image["secure_url"], category: :bottom)

image = Cloudinary::Uploader.upload("app/assets/images/gray_dress_pants.png")
Clothing.create(name: "Gray Dress Pants", url: image["secure_url"], category: :bottom)

image = Cloudinary::Uploader.upload("app/assets/images/distressed_shorts.png")
Clothing.create(name: "Distressed Shorts", url: image["secure_url"], category: :bottom)

image = Cloudinary::Uploader.upload("app/assets/images/workout_shorts.png")
Clothing.create(name: "Workout Shorts", url: image["secure_url"], category: :bottom)

image = Cloudinary::Uploader.upload("app/assets/images/swim_shorts.png")
Clothing.create(name: "Floral Swim Shorts", url: image["secure_url"], category: :bottom)

image = Cloudinary::Uploader.upload("app/assets/images/orange_chino.png")
Clothing.create(name: "Burnt Orange Chinos", url: image["secure_url"], category: :bottom)

image = Cloudinary::Uploader.upload("app/assets/images/olive_jeans.png")
Clothing.create(name: "Olive Green Pants", url: image["secure_url"], category: :bottom)



#shoes
image = Cloudinary::Uploader.upload("app/assets/images/clown_shoes.png")
Clothing.create(name: "Clown Shoes", url: image["secure_url"], category: :shoes)

image = Cloudinary::Uploader.upload("app/assets/images/brown_loafers.png")
Clothing.create(name: "Brown Loafers", url: image["secure_url"], category: :shoes)

image = Cloudinary::Uploader.upload("app/assets/images/black_heels.png")
Clothing.create(name: "Black Stilettos", url: image["secure_url"], category: :shoes)

image = Cloudinary::Uploader.upload("app/assets/images/tan_booties.png")
Clothing.create(name: "Tan Booties", url: image["secure_url"], category: :shoes)

image = Cloudinary::Uploader.upload("app/assets/images/cat_vans.png")
Clothing.create(name: "Cat Vans", url: image["secure_url"], category: :shoes)

image = Cloudinary::Uploader.upload("app/assets/images/white_converse.png")
Clothing.create(name: "White Converse", url: image["secure_url"], category: :shoes)

image = Cloudinary::Uploader.upload("app/assets/images/doc_martens.png")
Clothing.create(name: "Black Doc Martens", url: image["secure_url"], category: :shoes)



#accessories
image = Cloudinary::Uploader.upload("app/assets/images/big_belly_burger.png")
Clothing.create(name: "Big Belly Burger", url: image["secure_url"], category: :accessory)

image = Cloudinary::Uploader.upload("app/assets/images/donut.png")
Clothing.create(name: "Donut", url: image["secure_url"], category: :accessory)

image = Cloudinary::Uploader.upload("app/assets/images/pizza.png")
Clothing.create(name: "Slice of Pizza", url: image["secure_url"], category: :accessory)

image = Cloudinary::Uploader.upload("app/assets/images/wine.png")
Clothing.create(name: "Glass of Wine", url: image["secure_url"], category: :accessory)

image = Cloudinary::Uploader.upload("app/assets/images/phone.png")
Clothing.create(name: "Cell Phone", url: image["secure_url"], category: :accessory)

image = Cloudinary::Uploader.upload("app/assets/images/kale.png")
Clothing.create(name: "Kale", url: image["secure_url"], category: :accessory)

image = Cloudinary::Uploader.upload("app/assets/images/magazine.png")
Clothing.create(name: "Magazine", url: image["secure_url"], category: :accessory)
