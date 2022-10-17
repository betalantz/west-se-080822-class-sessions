class InstructorsController < ApplicationController

    before_action :find_instructor, except: [:index, :create]

    def index
        render json: Instructor.all
    end

    def show
        render json: @instructor
    end

    def create
        instructor = Instructor.create!(instructor_params)
        render json: instructor, status: :created
    end

    def update
        @instructor.update(instructor_params)
        render json: @instructor, status: :accepted
    end

    def destroy
        @instructor.destroy
        head :no_content
    end

    private

    def find_instructor
        @instructor = Instructor.find(params[:id])
    end

    def instructor_params
        params.permit(:name)
    end
end
