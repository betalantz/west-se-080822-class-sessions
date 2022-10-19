class ScientistsController < ApplicationController

    def index
        render json: Scientist.all
    end
end
