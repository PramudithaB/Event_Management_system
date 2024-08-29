import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import FeedPdf from "./FeedPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";

import backgroundImage from '../../assets/FeedbackAsserts/blur.jpg'

const BooksTable = ({ books }) => {

  const [query, setQuery] = useState("");
  const keys = [
    "Name",
   "Email"
];

const search = (data) => {
  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query))
  );
};
  return (

    <div
      className='p-4'
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Adjust background image size
        backgroundPosition: 'center', // Adjust background image position
        minHeight: '100vh', // Ensure the background covers the entire screen
      }}
     >
       
    
    
    <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Name</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Email
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
          Service
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
          Expected
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Feedback
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Rate
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {search(books).map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center ">
              {book.Name}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.Email}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.Service}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.Expected}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.Feedback}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.rate}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/feedback/details/${book._id}`}>
                  <BsInfoCircle className=" text-2xl text-green-800" />
                </Link>
                <Link to={`/feedback/edit/${book._id}`}>
                  <AiOutlineEdit className=" text-2xl text-yellow-600" />
                </Link>
                <Link to={`/feedback/delete/${book._id}`}>
                  <MdOutlineDelete className=" text-2xl text-red-600" />
                </Link>
                
                <PDFDownloadLink
                  document={<FeedPdf book={book} />}
                  fileName="FORM"
                >
                  {({ loading }) =>
                    loading ? (
                      <button>loading...</button>
                    ) : (
                      <button>download</button>
                    )
                  }
                </PDFDownloadLink>
              </div>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    
    
    </div>
  );
};

export default BooksTable;
