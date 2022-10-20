// CONTEXT
import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./Actions";
import reducer from "./Reducers";

export const AppContext = createContext();

const initialState = {
  students: [
    {
      id: 1,
      name: "Erudito",
      age: 20,
    },
    {
      id: 2,
      name: "Jorge",
      age: 35,
    },
  ],
};

export const AppProvider = ({ children }) => {
  // reducers
  const [state, dispatch] = useReducer(reducer, initialState);

  // operations
  const createStudent = (students) => {
    dispatch({
      type: CREATE,
      payload: students,
    });
  };

  const updateStudent = (students) => {
    dispatch({
      type: UPDATE,
      payload: students,
    });
  };

  const deleteStudent = (students) => {
    dispatch({
      type: DELETE,
      payload: students,
    });
  };

  // our context data
  const values = {
    students: state.students,
    createStudent,
    updateStudent,
    deleteStudent,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

// custom hook
export const useAppContext = () => {
  return useContext(AppContext);
};
