import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <div className="flex-[5%]  p-[20px]">
        <div className="grid  [@media_screen_and(max-width:700px)]:flex-col">
          <Link to={"/users"}>
            <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
              users
            </a>
          </Link>
          <br />
          <Link to={"/events"}>
            <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
              Events
            </a>
          </Link>
          <br />
          <Link to={"/salary"}>
            <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
              salary
            </a>
          </Link>
          <br />
          <Link to={"/order"}>
            <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
              order
            </a>
          </Link>
          <br />
          <Link to={"/ticketadmin"}>
            <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
              ticket
            </a>
          </Link>
          <br />
          <Link to={"/transportadmin"}>
            <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
              trsport
            </a>
          </Link>
          <br />
          <Link to={"/feedbackadmin"}>
            <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
              fdback
            </a>
          </Link>
          <br />
          <Link to={"/bookadmin"}>
            <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
              Markting
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
