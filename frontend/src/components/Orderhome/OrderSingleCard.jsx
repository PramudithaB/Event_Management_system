import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import OrderModel from "./OrderModel";

const OrderSingleCard = ({ order }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    
    
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      
      <img src={`./public/images/${order.photo}`} alt="item img"/>
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-400 rounded-lg">
        {order.itemname}
      </h2>
      <h4 className="my-2 text-gray-500"></h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl " />
        <h2 className="my-1">{order.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{order.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModel(true)}
        />
        <Link to={`/order/details/${order._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
       {/*
        <Link to={`/order/edit/${order._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/order/delete/${order._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
  */}
      </div>
      {showModel && (
        <OrderModel order={order} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
};

export default OrderSingleCard;
