export interface DirectorInterface {
  workFromeHome(): string;
  getCofferBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromeHome(): string;
  getCofferBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  
  workFromeHome(): string {
    return 'Working from home';
  }

  getCofferBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  
  workFromeHome(): string {
    return 'Cannot work from home';
  }

  getCofferBreak(): string {
    return 'Cannot have break'
  }

  workTeacherTasks(): string {
    return 'Getting to work'
  }
  
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'string') salary = parseInt(salary);
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math'
  } else if (todayClass === 'History') {
    return 'Teaching History'
  }
}
