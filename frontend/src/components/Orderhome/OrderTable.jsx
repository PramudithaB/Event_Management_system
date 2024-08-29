import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import OrderPdf from "./OrderPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";


const OrderTable = ({ order }) => {
  const [query, setQuery] = useState("");
  const keys = ["itemname"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
    <br/>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <br/>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">itemname</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              price
            </th>
            <th className="border border-slate-600 rounded-md">description</th>
            <th className="border border-slate-600 rounded-md">photo</th>

            <th className="border border-slate-600 rounded-md">operation</th>
          </tr>
        </thead>
        <tbody>
          {search(order).map((order, index) => (
            <tr key={order._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                {order.itemname}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {order.price}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {order.description}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {order.photo}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/order/details/${order._id}`}>
                    <BsInfoCircle className=" text-2xl text-green-800" />
                  </Link>
                  <Link to={`/order/edit/${order._id}`}>
                    <AiOutlineEdit className=" text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/order/delete/${order._id}`}>
                    <MdOutlineDelete className=" text-2xl text-red-600" />
                  </Link>
                  <PDFDownloadLink document={<OrderPdf order={order}/>} fileName="FORM">
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

export default OrderTable;
