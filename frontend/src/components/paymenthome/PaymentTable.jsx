import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">name</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            email
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
             order id
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Photo
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
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
                <Link to={`/payment/details/${book._id}`}>
                  <BsInfoCircle className=" text-2xl text-green-800" />
                </Link>
                <Link to={`/payment/edit/${book._id}`}>
                  <AiOutlineEdit className=" text-2xl text-yellow-600" />
                </Link>
                <Link to={`/payment/delete/${book._id}`}>
                  <MdOutlineDelete className=" text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
