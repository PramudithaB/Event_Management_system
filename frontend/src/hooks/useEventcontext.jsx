import { useContext } from "react";
import { Eventcontext } from "../context/Eventcontext";

const useEventcontext = () => {
  const context = useContext(Eventcontext);

  if (!context) {
    throw new Error("context not working");
  }
  return context;
};

export default useEventcontext;
