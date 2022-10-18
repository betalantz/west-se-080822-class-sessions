class ClientsController < ApplicationController

    before_action :find_resource, except: :index

    def index
        render json: Client.all
    end

    def show
        render json: @resource, serializer: TotalMembershipsSerializer
    end

    def update
        @resource.update!(client_params)
        render json: @resource, status: :accepted
    end

    private

    def client_params
        params.permit(:name, :age)
    end

end
