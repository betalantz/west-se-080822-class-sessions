class MissionsController < ApplicationController

    def create
        mission = Mission.create!(mission_params)
        render json: mission.planet, status: :created
        # if mission.id
        #     render json: mission.planet, status: :created
        # else
        #     render json: { errors: mission.errors.full_messages }, status: :unprocessable_entity
        # end
    end

    private

    def mission_params
        params.permit(:name, :scientist_id, :planet_id)
    end
end
