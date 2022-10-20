// REDUXERS
import { CREATE, UPDATE, DELETE } from "./Actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE: {
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    }
    case UPDATE: {
      return {
        ...state,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return action.payload;
          }
          return student;
        }),
      };
    }
    case DELETE: {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

export default reducer;
