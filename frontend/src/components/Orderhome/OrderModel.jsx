import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Cart from "../../pages/Cart";

const OrderModel = ({ order, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(order.price);
  const taxRate = 0.05;   // 5% tax rate

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      const subtotal = order.price * newQuantity;
      const taxAmount = subtotal * taxRate;
      const total = subtotal + taxAmount;
      setTotalPrice(total);
    } else {
      // Handle invalid quantity input
      alert("Please enter a valid quantity.");
    }
  };

  

  const [cart, setCart] = useState([]);

  const handleAddtoCart = async (order) => {
    console.log(order)
    let isPresent = false;
    cart.forEach((product) => {
      if(order._id == product._id)
      isPresent=true;
    })

    if (isPresent)
    return;
   
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-400 rounded-lg">
          {order.itemname}
        </h2>
        <h4 className="my-2 text-gray-500"> order id: {order._id}</h4>

        <h4 className="my-2 text-gray-500"> Item name: {order.itemname}</h4>

        <p className="my-2 text-gray-500"> Description : {order.description}</p>

        <h2 className="my-2 text-gray-500"> Price : ${order.price}</h2>

        <div className="my-4">
         
           
          
        </div>
        

        <Link to= {`/cart/${order._id}`}className="btn" >Add to Cart</Link>
      </div>
    </div>
  );
};

export default OrderModel;
