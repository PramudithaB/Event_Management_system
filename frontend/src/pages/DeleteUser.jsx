import React, { useState } from 'react';
//import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const DeleteUser = () => {
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteUser = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/register/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: "error" });
        navigate('/users');
      })
      .catch((error) => {
        setLoading(false);
        //alert('An error happened. Please Check console');
        enqueueSnackbar('User Deleted Successfully', { variant: "success" });
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Delete User</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this User</h3>

      <Link to={'/users'}>
        <button className= 'p-4 bg-red-600 text-wite m-8 w-full'
        onClick={handleDeleteUser}
        >
          Yes, Delete it
        </button>
        </Link>
      </div>
    </div>
  )
}

export default DeleteUser