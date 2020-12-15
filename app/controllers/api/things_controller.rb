class Api::ThingsController < ApplicationController

     # remember to start rails on a different server. rails s -p 3001

  def index
    render json: Thing.all
  end

end
