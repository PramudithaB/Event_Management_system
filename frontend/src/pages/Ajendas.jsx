import { useEffect, useState } from "react";
import Sessionform from "../components/events/Sessionform";
import AjendaDetail from "../components/events/AjendaDetail";
import useAjendacontext from "../hooks/useAjendacontext";
import SideNavbar from "../components/SideNavbar";
import ProfileCard from "../components/events/ProfileCard";
import { useParams } from "react-router-dom";
import useEventcontext from "../hooks/useEventcontext";

const Ajendas = () => {
  const { eventId } = useParams();
  //const [ajendas, setAjendas] = useState(null);
  //const [contributors, setContributors] = useState(null);

  const { ajenda, dispatch } = useAjendacontext();
  const { contributors, dispatch1 } = useEventcontext();
  useEffect(() => {
    const fetchajenda = async () => {
      const response = await fetch(
        `http://localhost:5555/api/ajendas/${eventId}`
      );

      const data = await response.json();
      //console.log(data);
      if (response.ok) {
        //setAjendas(data);
        dispatch({ type: "GET_AJENDAS", payload: data });
      }
    };
    fetchajenda();
  }, [dispatch, eventId]);
  console.log(ajenda);

  useEffect(() => {
    const fetchcontributors = async () => {
      const response = await fetch(
        `http://localhost:5555/api/contributors/${eventId}`
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        //setContributors(data);
        dispatch1({ type: "GET_CONTRIBUTERS", payload: data });
      }
    };
    fetchcontributors();
  }, [dispatch1, eventId]);

  return (
    <>
      <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-row">
        <SideNavbar />
        <div className="flex-[55%] bg-[#f1f1f1] p-[20px]">
          {ajenda && ajenda.length < 1 ? null : (
            <h1 className="mb-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800">
              Sessions
            </h1>
          )}
          <div className="sessions">
            {ajenda &&
              ajenda.map((ajend) => (
                <AjendaDetail key={ajend._id} ajend={ajend} />
              ))}
          </div>
          {contributors && contributors.length != 0 ? (
            <h1 className="mb-4 mt-8 text-2xl font-semi bold leading-none tracking-tight text-gray-800">
              Contributors
            </h1>
          ) : null}
          <div className="grid grid-cols-2 gap-2 px-4 pt-4 ">
            {contributors &&
              contributors.map((contributor) => (
                <ProfileCard key={contributor._id} contributor={contributor} />
              ))}
          </div>
        </div>
        <div className="flex-[25%] p-[20px]">
          <Sessionform />
        </div>
      </div>
    </>
  );
};

export default Ajendas;
