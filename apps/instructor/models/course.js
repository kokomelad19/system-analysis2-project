const createCourseDto = require("../dto/createCourseDto");

class Course {
  constructor(dto) {
    this.name = dto.name;
    this.creditHours = dto.creditHours;
    this.startDate = dto.startDate;
    this.availableSeats = dto.availableSeats;
  }

  static async validateAndConstruct(dto, schema = createCourseDto) {
    const result = await schema.validateAsync(dto);
    return new Course(result);
  }
}

module.exports = Course;
