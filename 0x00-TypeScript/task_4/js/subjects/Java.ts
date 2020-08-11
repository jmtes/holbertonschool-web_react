/// <reference path="./Subject.ts"/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const { firstName, lastName, experienceTeachingJava } = this.teacher;

      if (experienceTeachingJava !== undefined && experienceTeachingJava > 0)
        return `Available Teacher: ${firstName} ${lastName}`;
      return 'No available teacher';
    }
  }
}
