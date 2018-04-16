class Student
    attr_reader :name, :gpa, :course
    def initialize(name,gpa,course)
        @name = name
        @gpa = gpa
        @course = course
    end

    def message
        "My name is #{name}. I am taking the #{course} course. My 
        GPA is #{gpa}"
    end
end

class SeiStudent < Student
    attr_reader :topics

    def initialize(name, gpa, hours_slept)
        @topics = ["design", "frontend", "backend"]
        @hours_slept = hours_slept
        super(name, gpa, "sei")
    end

    def minutes_slept
       @hours_slept*60
    end
end

sei = SeiStudent.new("Minhal", "4.0", 3)
puts sei.minutes_slept

