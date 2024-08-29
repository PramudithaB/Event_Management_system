
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/Salary/BackButton';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom'

import backgroundImage from '../assets/SalaryAssets/bimage22.jpg'


const ShowSalaryRecoards = () => {

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
      <Link to={`/salary/details1/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Client UI
        </Link>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto '>
          <div className='my-4'>
            
            <span className='text-xl mr-4  font-bold text-black'>Id</span>
            <span className='font-bold text-violet-900'>{salary._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Name</span>
            <span className='font-bold text-violet-900'>{salary.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4  font-bold text-black'>Basic Salary</span>
            <span className='font-bold text-violet-900'>{salary.basicSalary}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Attendance</span>
            <span className='font-bold text-violet-900'>{salary.attendance}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Allowance</span>
            <span className='font-bold text-violet-900'>{salary.allowance}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Epf</span>
            <span className='font-bold text-violet-900'>{salary.epf}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Etf</span>
            <span className='font-bold text-violet-900'>{salary.etf}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Tax</span>
            <span className='font-bold text-violet-900'>{salary.tax}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>NetSalary</span>
            <span className='font-bold text-violet-900'>{salary.netSalary}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Create Time</span>
            <span className='font-bold text-violet-900'>{new Date(salary.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 font-bold text-black'>Last Update Time</span>
            <span className='font-bold text-violet-900'>{new Date(salary.updatedAt).toString()}</span>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};


export default ShowSalaryRecoards