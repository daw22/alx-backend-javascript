interface DirectorInterface {
  workFromeHome(): string;
  getCofferBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromeHome(): string;
  getCofferBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  
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

class Teacher implements TeacherInterface {
  
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

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'string') salary = parseInt(salary);
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
