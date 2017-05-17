json.array! @characters do |character|
  json.id character.id
  json.picture_url asset_path(character.picture_url)
  json.name character.char_name
  json.city character.city_name
  json.latitude character.latitude
  json.longitude character.longitude
end
