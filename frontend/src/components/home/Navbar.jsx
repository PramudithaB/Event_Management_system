const Navbar = () => {
    return (
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">MEGA Events</h1>
          <nav className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-white">
              <span className="font-semibold">email@email.com</span>
              <button className="bg-white text-pink-500 hover:text-white hover:bg-pink-500 px-4 py-2 rounded-md transition duration-300 ease-in-out">Log out</button>
            </div>
            <a className="text-white hover:text-gray-200 text-sm font-semibold" href="#">Sign Up</a>
            <a className="text-white hover:text-gray-200 text-sm font-semibold" href="#">Login</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;