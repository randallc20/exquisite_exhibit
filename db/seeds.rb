puts "🌱 Seeding..."

User.create(
  name: "first user",
  username: "first",
  password: "123",
  email: "first@test.com",
  profile_pic:
    "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg"
)

Pin.create(
  caption: "the first post ever",
  image_url:
    "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
  user_id: 1
)

puts "✅ Done seeding!"
