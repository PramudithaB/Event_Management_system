import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import BooksCard from '../components/home/BooksCard';

const UserShowBook = () => {
    const [books, setBooks] = useState([]);
  
  useEffect(() => {
    
    axios
      .get("http://localhost:5555/books")
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
    </div>
  )
}

export default UserShowBook