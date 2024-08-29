import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">MEGA Events</h1>
        </Link>
        <nav className="flex items-center space-x-4">
          <a className="text-white hover:text-gray-200 text-sm font-semibold">
            <Link to="/eventsview" className="activity home-a">
              <h1>Events</h1>
            </Link>
          </a>
          <a className="text-white hover:text-gray-200 text-sm font-semibold">
            <Link to="/usershowtransport" className="activity home-a">
              <h1>Transport</h1>
            </Link>
          </a>
          <a className="text-white hover:text-gray-200 text-sm font-semibold">
            <Link to="/ticket" className="activity home-a">
              <h1>Ticket</h1>
            </Link>
          </a>
          <a className="text-white hover:text-gray-200 text-sm font-semibold">
            <Link to="/feedback/create" className="activity home-a">
              <h1>feedback</h1>
            </Link>
          </a>
          <a className="text-white hover:text-gray-200 text-sm font-semibold">
            <Link to="/usershowbook" className="activity home-a">
              <h1>Gallery</h1>
            </Link>
          </a>
          <a className="text-white hover:text-gray-200 text-sm font-semibold">
            <Link to="/usershoworder" className="activity home-a">
              <h1>Shop</h1>
            </Link>
          </a>

          {/*<div className="flex items-center space-x-4 text-white">
              <span className="font-semibold"></span>
              <button className="bg-white text-pink-500 hover:text-white hover:bg-pink-500 px-4 py-2 rounded-md transition duration-300 ease-in-out">Log out</button>
           </div>*/}

          <a className="text-white hover:text-gray-200 text-sm font-semibold">
            <Link to="/regi" className="activity home-a">
              <h1>Sign Up</h1>
            </Link>
          </a>
          <a className="text-white hover:text-gray-200 text-sm font-semibold">
            <Link to="/log" className="activity home-a">
              <h1>Log In</h1>
            </Link>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
