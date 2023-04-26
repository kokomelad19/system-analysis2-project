const createCourseDto = require("../dto/createCourseDto");

class Course {
  constructor(dto) {
    const { error } = createCourseDto.validate(dto);
    if (error) throw new Error("Invalid Model");

    this.name = dto.name;
    this.creditHours = dto.creditHours;
    this.startDate = dto.startDate;
    this.availableSeats = dto.availableSeats;
  }
}

module.exports = Course;
