import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import TransportTable from "../components/transport/TransportTable";
import SideNavbar from "../components/SideNavbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const TransportAdmin = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/transport")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-col">
        <SideNavbar />
        <div className="flex-[85%] p-[20px]">
          <Link to={"/transport/create"}>
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
          <TransportTable books={books} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TransportAdmin;
