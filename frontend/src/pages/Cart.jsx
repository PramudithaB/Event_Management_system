import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';

const Cart = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [quantity, setQuantity] = useState(1); // Default quantity to 1
  const [totalAmount, setTotalAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5555/order/${id}`)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Update total amount and tax whenever quantity or order price changes
  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = order.price || 0;
      const total = totalPrice * quantity;
      const tax = total * 0.05; // 5% tax
      setTaxAmount(tax);
      setTotalAmount(total + tax);
    };
    calculateTotal();
  }, [quantity, order]);

  const handleQuantityChange = (event) => {
    const { value } = event.target;
    // Check if value is a positive integer
    if (/^\d+$/.test(value) && parseInt(value) > 0) {
      setQuantity(parseInt(value));
    } else {
      // If not a positive integer, reset quantity to 1
      setQuantity(1);
      // You can also provide feedback to the user that the input is invalid
      // For example, you can display an error message or highlight the input field
      console.log("Please enter a valid positive integer for quantity");
    }
  };

  const handlePayment = () => {
    // Handle payment logic here
    alert("Redirecting to payment gateway...");
  };

  const handleSendReport = () => {
    const phoneNumber = "+94767958695";
    const message = 'hi';
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(WhatsAppUrl, "_blank");
  };

  return (
    <div>
      <Navbar/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">MEGA STORE CART</h1>
            <p className="py-6">"Discover endless treasures online! Shop our curated collection for the latest trends, unbeatable deals, and must-have essentials. Start exploring now!".</p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <p className='text-green uppercase tracking-wide font-medium text-lg'>selected item</p>

      <br />

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Order ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{order._id}</td>
              <td>{order.itemname}</td>
              <td>{order.price}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="my-4">
        <label className="my-2 text-gray-500 label">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="border-2 border-gray-500 px-4 py-2  w-full"
        />
      </div>

      <div className="my-4">
        <label className="my-2 text-gray-500 label">Tax Amount (5%)</label>
        <input
          type="text"
          value={`$${taxAmount}`}
          readOnly
          className="border-2 border-gray-500 px-4 py-2  w-full"
        />
      </div>

      <div className="my-4">
        <label className="my-2 text-gray-500 label">Total Amount</label>
        <input
          type="text"
          value={`$${totalAmount}`}
          readOnly
          className="border-2 border-gray-500 px-4 py-2  w-full"
        />
      </div>

      <div className="flex justify-center">
        <button onClick={handlePayment} className="btn btn-primary mt-4">Pay Here</button>
      </div>
    </div>
  );
};

export default Cart;
