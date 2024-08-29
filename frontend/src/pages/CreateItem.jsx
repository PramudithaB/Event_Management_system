import React, { useState } from 'react';
import BackButton from '../components/Orderhome/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Navbar from '../components/Navbar';

const CreateOrderRecoard = () => {
  const [itemname, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file,setFile] = useState()

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSaveOrder = () => {


    //itemname validation

    if (!/^[A-Za-z]+$/.test(itemname)) {
      enqueueSnackbar('Please enter letters only for Item Name', { variant: 'error' });
      return;
    }


     // price validation
     if (!/^\d+$/.test(price)) {
      enqueueSnackbar('Please enter a valid number for price', { variant: 'error' });
      return;
    }

 // description validation

if (!/^[A-Za-z\s]+$/.test(description)) {
  enqueueSnackbar('Please enter words only for descriiption', { variant: 'error' });
  return;
}

    






    const subdata  = new FormData();

    subdata.append("itemname",itemname)
    subdata.append("price",price)
    subdata.append("description",description)
    subdata.append("file",file)


    setLoading(true);
    axios
      .post('http://localhost:5555/order', subdata)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Order Created successfully', { variant: 'success' });
        navigate('/order');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    
    <div className='p-4'>
      
      <BackButton />
      <h1 className='text-3xl my-4'>Create Order</h1>
      {loading ? <Spinner /> : ''}



      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Item Name</label>
          <input
            type='text'
            value={itemname}
            onChange={(e) => setItemName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Price</label>
          <input
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
            placeholder='$'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Photo
          </label>
          <input
            type='File'
            onChange={(e) => setFile(e.target.files[0])}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveOrder}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateOrderRecoard;
