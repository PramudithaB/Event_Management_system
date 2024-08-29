import React from "react";
import { useEffect, useState } from "react";
import TicketTable from "../components/Ticket/TicketTable";
import axios from "axios";
import SideNavbar from "../components/SideNavbar";
import Footer from "../components/footer";

const TicketAdmin = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/ticket")
      .then((response) => {
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
          <TicketTable books={books} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TicketAdmin;
