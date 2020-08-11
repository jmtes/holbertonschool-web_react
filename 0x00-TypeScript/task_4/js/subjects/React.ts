/// <reference path="./Subject.ts"/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const { firstName, lastName, experienceTeachingReact } = this.teacher;

      if (experienceTeachingReact !== undefined && experienceTeachingReact > 0)
        return `Available Teacher: ${firstName} ${lastName}`;
      return 'No available teacher';
    }
  }
}
