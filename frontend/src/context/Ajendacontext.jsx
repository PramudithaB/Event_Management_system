import { createContext, useReducer } from "react";

// this context contains all the states
export const Ajendacontext = createContext();

// reducer function hanle all the state changes
const ajendaReducer = (state, action) => {
  switch (action.type) {
    case "GET_ID":
      return {
        ajenda: action.payload,
        _id: action.payload1,
      };
    case "GET_AJENDAS":
      return {
        ajenda: action.payload,
      };
    case "CREATE_AJENDA":
      return {
        ajenda: [action.payload, ...state.ajenda],
      };
    case "UPDATE_AJENDA":
      return {
        ajenda: state.ajenda.map((aj) => {
          if (aj._id == action.payload._id) {
            return { ...aj, ...action.payload };
          }
          return aj;
        }),
      };
    case "DELETE_AJENDA":
      return {
        ajenda: state.ajenda.filter((aj) => aj._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// AjendacontextProvider takes the argument chilldren
export const AjendacontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ajendaReducer, {
    ajenda: null,
    _id: null,
  });
  //console.log(state);
  //console.log({ ...state });
  // in this return value passed the children as consumer of provider
  // all the children components can access the data of context
  return (
    <Ajendacontext.Provider value={{ ...state, dispatch }}>
      {children}
    </Ajendacontext.Provider>
  );
};

//Spread operators allow us to expand an array or object into its individual elements
// rest operators allow us to condense multiple elements into a single array or object.
