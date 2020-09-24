import { normalize, schema } from 'normalizr';

// Define schema
const course = new schema.Entity('courses');
const courseArray = new schema.Array(course);

const coursesNormalizer = (data) => normalize(data, courseArray);

export default coursesNormalizer;
