import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import TicketPDF from "./TicketPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

const TicketTable = ({ books }) => {
  const [query, setQuery] = useState("");
  const keys = ["name", "eventType"];

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
            <th className="border border-slate-600 rounded-md">Name</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Email
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Registration_No
            </th>
            <th className="border border-slate-600 rounded-md">Event_type</th>
            <th className="border border-slate-600 rounded-md">Contact_No</th>
            <th className="border border-slate-600 rounded-md">Req_type</th>
            <th className="border border-slate-600 rounded-md">Subject</th>
            <th className="border border-slate-600 rounded-md">Message</th>
            <th className="border border-slate-600 rounded-md">File</th>
          </tr>
        </thead>
        <tbody>
          {search(books).map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.name}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.email}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.registrationNumber}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.eventType}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.contactNumber}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.requestType}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.subject}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.message}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.photo}
              </td>

              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/ticket/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/ticket/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/ticket/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>

                  <PDFDownloadLink
                    document={<TicketPDF book={book} />}
                    fileName="FORM"
                  >
                    {({ loading }) =>
                      loading ? (
                        <button>loading...</button>
                      ) : (
                        <button>DOWNLOAD Report</button>
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

export default TicketTable;
