export default class HolbertonCourse {
  /**
   *
   * @param {String} name
   * @param {Number} lenght
   * @param {String[]} students
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get length() {
    return this._length;
  }

  get name() {
    return this._name;
  }

  get students() {
    return this.students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new Error('Students must be an array of strings');
    }

    let allString = true;
    students.forEach((student) => {
      if (typeof student !== 'string') {
        allString = false;
      }
    });
    if (!allString) {
      throw new Error('Students must be an array of strings');
    }

    this._students = students;
  }
}
