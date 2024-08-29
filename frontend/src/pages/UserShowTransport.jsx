import { useEffect, useState } from "react";
import axios from "axios";
import BooksCard from "../components/transport/TransportCard";
import Footer from "../components/footer";

const UserShowTransport = () => {
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
      <BooksCard books={books} />
      <br />
      <Footer />
    </div>
  );
};

export default UserShowTransport;
