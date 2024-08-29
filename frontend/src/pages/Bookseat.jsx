import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import BackButton from "../components/transport/BackButton";

import backgroundImage from '../assets/TransportAssets/blur3.jpg'

const Cart = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [quantity, setQuantity] = useState(1); // Default quantity to 1
  const [totalAmount, setTotalAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5555/transport/${id}`)
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
      setTotalAmount(total);
    };
    calculateTotal();
  }, [quantity, order]);

  const handleQuantityChange = (event) => {
    const { value } = event.target;
    // Parse the input value to an integer
    let parsedValue = parseInt(value);

    // Check if the parsed value is a valid positive integer
    if (!isNaN(parsedValue) && parsedValue > 0) {
      // Set the quantity state to the parsed value
      setQuantity(parsedValue);
    } else {
      // If the input is not a valid positive integer, set the quantity to 1 (minimum value)
      setQuantity(1);
    }
  };

  const handlePayment = () => {
    // Handle payment logic here
    alert("Redirecting to payment gateway...");
  };

  const handleSendReport = () => {
    const phoneNumber = "+94767958695";
    const message = 'hi';
    const WhatsAppUrl = 'https://web.whatsapp.com/send?phone=${phoneNumber}&text={encodeURIComponent(message)}';

    window.open(whatsappUrl, "_blank");
  }

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
    
    <div>
      
      <br></br>
      <br></br>
      <BackButton />
      <br></br>
      <br></br>

      

      <p className='text-green uppercase tracking-wide font-medium text-lg'>selected bus</p>
      
      <br></br>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Bus ID</th>
              <th>Destination</th>
              <th>Seat Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td> {order._id}</td>
              <td> {order.destination}</td>
              <td>{order.price}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="my-4">
        <label className="my-2 text-gray-500 label">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="border-2 border-gray-500 px-4 py-2  w-full"
          min="1" // Set minimum value to 1
        />
      </div>

      <div className="my-4">
        <label className="my-2 text-gray-500 label">Total Amount</label>
        <input
          type="text"
          value={`${totalAmount}`}
          readOnly
          className="border-2 border-gray-500 px-4 py-2  w-full"
        />
      </div>

      <div className="flex justify-center">
        <button onClick={handlePayment} className="btn btn-primary mt-4">Pay Here</button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
