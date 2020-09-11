import immutable from 'immutable';

const { Seq } = immutable;

const makeUppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const printBestStudents = (obj) => {
  const bestStudents = Seq(obj)
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: makeUppercase(firstName),
        lastName: makeUppercase(lastName)
      };
    });

  bestStudents.forEach((student) => console.log(student));
};

export default printBestStudents;
