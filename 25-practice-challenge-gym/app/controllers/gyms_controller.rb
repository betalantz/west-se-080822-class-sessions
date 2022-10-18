class GymsController < ApplicationController

    # before_action :find_gym # abstracting this onto ApplicationController
    before_action :find_resource, except: :index

    def index
        render json: Gym.all
    end

    def show
        render json: @resource, serializer: GymWithClientsSerializer #not in deliverables
    end

    def update
        @resource.update!(gym_params)
        render json: @resource, status: :accepted
    end

    def destroy
        @resource.destroy
        head :no_content
    end

    private

    def gym_params
        params.permit(:name, :address)
    end

    # def find_gym
    #     @gym = Gym.find(params[:id])
    # end
end
