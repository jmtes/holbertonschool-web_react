import { normalize, schema } from 'normalizr';

// Define schema
const course = new schema.Entity('courses');

const coursesNormalizer = (data) => normalize(data, courses);

export default coursesNormalizer;
