class CampersController < ApplicationController

    def index
        render json: Camper.all
    end

    def show
        render json: Camper.find(params[:id]), serializer: CamperWithActivitiesSerializer
    end

    def create
        camper = Camper.create!(camper_params)
        render json: camper, status: :created
    end

    private

    def camper_params
        params.permit(:name, :age)
    end
end
