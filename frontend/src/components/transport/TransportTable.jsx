import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import TransportPdf from "../TransportPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";


const BooksTable = ({ books }) => {
  const [query, setQuery] = useState("");
  const keys = [
    "destination",
   
];

const search = (data) => {
  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query))
  );
};
  return (


    
    <>
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
          <th className="border border-slate-600 rounded-md">Bus_code</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Destination
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Departure Time
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Arrival Time
          </th>
          <th className="border border-slate-600 rounded-md">Available Seats</th>
          <th className="border border-slate-600 rounded-md">Price</th>
          <th className="border border-slate-600 rounded-md">Photo</th>
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
              {book.b_Code}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.destination}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.d_time}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.a_time}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.a_seat}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.price}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.photo}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/transport/details/${book._id}`}>
                  <BsInfoCircle className=" text-2xl text-green-800" />
                </Link>
                <Link to={`/transport/edit/${book._id}`}>
                  <AiOutlineEdit className=" text-2xl text-yellow-600" />
                </Link>
                <Link to={`/transport/delete/${book._id}`}>
                  <MdOutlineDelete className=" text-2xl text-red-600" />
                </Link>

                <PDFDownloadLink document={<TransportPdf book={book}/>} fileName="FORM">
      {({ loading }) =>
        loading ? <button>loading...</button> : <button>DOWNLOAD</button>
      }
    </PDFDownloadLink>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default BooksTable;
