class StudentsController < ApplicationController

    before_action :find_student, only: [:show, :update, :destroy]

    def index
        render json: Student.all
    end

    def show
        render json: @student
    end

    def create
        student = Student.create!(student_params)
        render json: student, status: :created
    end

    def update
        @student.update(student_params)
        render json: @student, status: :accepted
    end

    def destroy
        @student.destroy
        head :no_content
    end

    private

    def student_params
        params.permit(:name, :major, :age, :instructor_id)
    end

    def find_student
        @student = Student.find(params[:id])
    end
end
