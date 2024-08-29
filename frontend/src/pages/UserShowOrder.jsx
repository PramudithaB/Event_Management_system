import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../components/Orderhome/OrderCard";

const UserShowOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/order")
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);
  return (
    <div>
      <OrderCard order={orders} />
      
    </div>
  );
};

export default UserShowOrder;
