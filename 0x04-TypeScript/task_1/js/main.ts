// teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [index:string]: any
}

// directors interface, extends teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}
// function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string; 
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}

//class Interface
interface ClassInterface {
  workOnHomeWork(): string;
  displayName(): string;
}
// interface for class constructor
interface ConstructorInterface {
  new (firstName: string, lastName: string): ClassInterface;
}
// class- StudentClass
class StudentClass implements ClassInterface {
  firstName: string;
  lastName: number;
  
  constructor(firstName: string, lastName: number) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return ''
  }

  displayName(): string {
    return ''
  }
}