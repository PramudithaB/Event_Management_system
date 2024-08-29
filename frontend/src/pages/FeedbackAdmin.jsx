import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FeedbackTable from "../components/feedback/FeedbackTable";
import SideNavbar from "../components/SideNavbar";
import Footer from "../components/footer";

const FeedbackAdmin = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/feedback")
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
          <FeedbackTable books={books} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedbackAdmin;
