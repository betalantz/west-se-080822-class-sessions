class GymsController < ApplicationController

    # before_action :find_gym
    before_action :find_resource

    def show
        render json: @resource
    end

    def destroy
        @resource.destroy
        head :no_content
    end

    private

    # def find_gym
    #     @gym = Gym.find(params[:id])
    # end
end
