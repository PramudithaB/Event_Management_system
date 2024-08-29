import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import OrderCard from "../components/Orderhome/OrderCard";
import OrderTable from "../components/Orderhome/OrderTable";


const UserView = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setShowtype] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/order")
      .then((response) => {
        setOrders(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <NavBar />
      <OrderCard order={orders} />
    </div>
  );
};

export default UserView;
