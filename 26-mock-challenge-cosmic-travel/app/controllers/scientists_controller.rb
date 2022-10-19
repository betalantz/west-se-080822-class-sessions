class ScientistsController < ApplicationController

    before_action :find_scientist, only: [:show, :update, :destroy]

    def index
        render json: Scientist.all
    end

    def show
        render json: @scientist, serializer: ScientistWithPlanetsSerializer
    end

    def create
        scientist = Scientist.create!(scientist_params)
        render json: scientist, status: :created
    end

    def update
        @scientist.update!(scientist_params)
        render json: @scientist, status: :accepted
    end

    def destroy

    end

    private

    def scientist_params
        params.permit(:name, :field_of_study, :avatar)
    end

    def find_scientist
        @scientist = Scientist.find(params[:id])
    end
end
