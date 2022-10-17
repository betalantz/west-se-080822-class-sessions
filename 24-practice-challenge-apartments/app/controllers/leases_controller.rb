class LeasesController < ApplicationController

    def create
        render json: Lease.create!(lease_params), status: :created
    end

    def delete
        Lease.find(params[:id]).destroy
        head :no_content
    end

    private

    def lease_params
        params.permit(:rent, :apartment_id, :tenant_id)
    end


end
