
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/Salary/BackButton';
import Spinner from '../components/Spinner';

import backgroundImage from '../assets/SalaryAssets/bimage24.jpg'


const ShowSalary = () => {

  const [salary, setSalary] = useState({});
  const [loading, setLoading] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/salary/${_id}`)
      .then((response) => {
        setSalary(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


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
    

    <div className='p-4 '>
      <BackButton />
      <h1 className='text-3xl my-4 text-center font-bold text-black'>Show Salary</h1>
     
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500 '>Id</span>
            <span className='font-bold text-black'>{salary._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Name</span>
            <span className='font-bold text-black '>{salary.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Basic Salary</span>
            <span className='font-bold text-black'>{salary.basicSalary}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Attendance</span>
            <span className='font-bold text-black'>{salary.attendance}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Allowance</span>
            <span className='font-bold text-black'>{salary.allowance}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Epf</span>
            <span className='font-bold text-black'>{salary.epf}</span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Etf</span>
            <span className='font-bold text-black'>{salary.etf}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Tax</span>
            <span className='font-bold text-black'>{salary.tax}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>NetSalary</span>
            <span className='font-bold text-black'>{salary.netSalary}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Create Time</span>
            <span className='font-bold text-black'>{new Date(salary.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500 font-bold text-blue-500'>Last Update Time</span>
            <span className='font-bold text-black'>{new Date(salary.updatedAt).toString()}</span>
          </div>
        </div>
      )}
      </div>
    </div>
    
  );
};


export default ShowSalary