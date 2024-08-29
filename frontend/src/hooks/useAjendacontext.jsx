import { Ajendacontext } from "../context/Ajendacontext";
import { useContext } from "react";

const useAjendacontext = () => {
  const context = useContext(Ajendacontext);

  if (!context) {
    throw new Error("context not working");
  }

  return context;
};

export default useAjendacontext;
