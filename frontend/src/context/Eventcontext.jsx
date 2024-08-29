import { createContext, useReducer } from "react";

export const Eventcontext = createContext();

const eventReducer = (state, action) => {
  switch (action.type) {
    case "GET_EVENTS":
      return {
        events: action.payload1,
      };

    case "CREATE_EVENTS":
      return {
        events: [action.payload1, ...state.events],
      };

    case "DELETE_EVENTS":
      return {
        events: state.events.filter(
          (event) => event._id !== action.payload1._id
        ),
      };

    case "GET_CONTRIBUTERS":
      return {
        contributors: action.payload,
      };

    case "CREATE_CONTRIBUTERS":
      return {
        contributors: [action.payload, ...state.contributors],
      };

    case "DELETE_CONTRIBUTER":
      return {
        contributors: state.contributors.filter(
          (contributer) => contributer._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export const EventcontextProvider = ({ children }) => {
  const [state, dispatch1] = useReducer(eventReducer, { contributors: null });
  console.log(state);
  return (
    <Eventcontext.Provider value={{ ...state, dispatch1 }}>
      {children}
    </Eventcontext.Provider>
  );
};
