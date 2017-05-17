class Character < ApplicationRecord
  validates :char_name, :city_name, :picture_url, presence: true
  geocoded_by :city_name
  after_validation :geocode

  def self.sort_by_distance(location)
    location = Geocoder.coordinates(location)
    self.all.sort_by{ |char| char.distance_from(location) }
  end
end
