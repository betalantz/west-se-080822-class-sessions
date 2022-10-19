class ApplicationController < ActionController::API

    wrap_parameters format: []

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    private

    def render_invalid_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
