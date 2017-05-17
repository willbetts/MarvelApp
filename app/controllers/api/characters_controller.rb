class Api::CharactersController < ApplicationController
  def index
    @characters = Character.sort_by_distance(params[:location])
    render "api/characters/index"
  end

end
