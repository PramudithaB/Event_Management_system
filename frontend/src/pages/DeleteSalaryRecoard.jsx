import  { useState } from 'react';
import BackButton from '../components/Salary/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteSalaryRecoard = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { _id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteSalary = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/salary/${_id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Salary Deleted successfully', { variant: 'success' });
        navigate('/salary');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Salary</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this salary recoard?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteSalary}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteSalaryRecoard