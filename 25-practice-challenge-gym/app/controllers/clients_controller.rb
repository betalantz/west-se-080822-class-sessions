class ClientsController < ApplicationController

    before_action :find_resource

    def show
        render json: @resource
    end

end
