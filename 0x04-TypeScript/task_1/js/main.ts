// teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [index: string]: any;
}

// directors interface, extends teacher interface
export interface Directors extends Teacher {
  numberOfReports: number;
}
// function interface
export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string; 
}

export let printTeacher: PrintTeacherFunction;

printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}

//class Interface
export interface ClassInterface {
  workOnHomeWork(): string;
  displayName(): string;
}
// interface for class constructor
export interface ConstructorInterface {
  new (firstName: string, lastName: string): ClassInterface;
}
// class- StudentClass
export class StudentClass implements ClassInterface {
  firstName: string;
  lastName: number;
  
  constructor(firstName: string, lastName: number) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstName;
  }
}