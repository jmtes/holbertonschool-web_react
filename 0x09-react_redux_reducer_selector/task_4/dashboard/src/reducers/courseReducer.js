import { Map } from 'immutable';

import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';

import coursesNormalizer from '../schema/courses';

const initialState = {
  courses: []
};

const courseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      action.data = action.data.map((course) => ({
        ...course,
        isSelected: false
      }));

      return {
        ...state,
        courses: Map(coursesNormalizer(action.data))
      };
    case SELECT_COURSE:
      return {
        ...state,
        courses: state.courses.setIn(
          ['entities', 'courses', action.index.toString(), 'isSelected'],
          true
        )
      };
    case UNSELECT_COURSE:
      return {
        ...state,
        courses: state.courses.setIn(
          ['entities', 'courses', action.index.toString(), 'isSelected'],
          false
        )
      };
    default:
      return state;
  }
};

export default courseReducer;
