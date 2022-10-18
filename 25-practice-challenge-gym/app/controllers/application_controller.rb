class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    private

    def render_not_valid_response(exception)
        render json: { "errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
        render json: { "error": "#{exception.model} not found"}, status: :not_found
    end

    def resource_class
        controller_path.classify.constantize
    end

    def find_resource
        @resource = resource_class.find(params[:id])
    end
end
