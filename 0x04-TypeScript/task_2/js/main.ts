interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

createEmployee(salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Expected result:

// console.log(createEmployee(200));
// Teacher
// console.log(createEmployee(1000));
// Director
// console.log(createEmployee('$500'));
// Director

isDirector(employee: Director | Teacher): employee is Director => {
  return employee instanceof Director;
}

executeWork(employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

// Expected result:

// executeWork(createEmployee(200));
// Getting to work
// executeWork(createEmployee(1000));
// Getting to director tasks

type Subjects = "Math" | "History";

teachClass(todayClass: Subjects): string => {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Expected result:

// teachClass('Math');
// Teaching Math
// teachClass('History');
// Teaching History
