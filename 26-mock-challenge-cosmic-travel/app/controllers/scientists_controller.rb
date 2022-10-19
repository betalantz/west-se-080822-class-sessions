class ScientistsController < ApplicationController

    before_action :find_scientist, only: :show

    def index
        render json: Scientist.all
    end

    def show
        render json: @scientist, serializer: ScientistWithPlanetsSerializer
    end

    private

    def find_scientist
        @scientist = Scientist.find(params[:id])
    end
end
