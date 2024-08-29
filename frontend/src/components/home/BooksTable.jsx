import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";
import Marketpdf from "./Marketpdf";

const BooksTable = ({ books }) => {
  const [query, setQuery] = useState("");
  const keys = [
    "title",
   
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
          <th className="border border-slate-600 rounded-md">Event Name</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Description
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Event Date
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Image
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
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.photo}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className=" text-2xl text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className=" text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className=" text-2xl text-red-600" />
                </Link>

                <PDFDownloadLink
                          document={<Marketpdf market={book} />}
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
   </>
  );
};

export default BooksTable;
