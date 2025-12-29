img <- magick::image_read("public/images/ebf_website.png") |>
  magick::image_resize("1200x") |>
  magick::image_strip()

magick::image_write(
  img,
  path = "ebf.webp",
  format = "webp",
  quality = 100
)
