import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/Orderhome/BackButton';
import Spinner from '../components/Spinner';

const ShowOrderRecoards = () => {

  const [order ,setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/order/${_id}`)
      .then((response) => {
        setOrder(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Order</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{order._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Item Name</span>
            <span>{order.itemname}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Price</span>
            <span>{order.price}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Description</span>
            <span>{order.description}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(order.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(order.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowOrderRecoards;
