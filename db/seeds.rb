# This file will seed all data needed

# Helper Functions

# Images will be stored in the seed_images folder
# Which can then be seeded by using> image: get_image('profile.jpg')
def get_image file_name
  File.open(Rails.root.join('db', 'seed_images', file_name))
end

users.create!({
  name: tristan,
  email: tristan@gmail.com
})