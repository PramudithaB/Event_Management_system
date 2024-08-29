import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/users/BackButton';
import Spinner from '../components/Spinner';
//import { Link } from 'react-router-dom';

const ShowUser = () => {
  const[user, setUser] = useState({}); 
  const [loading, setLoading] = useState(false);
  const {id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios 
      .get(`http://localhost:5555/registers/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show User</h1>
      <div ref={ComponentsRef}>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{user._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{user.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Email</span>
            <span>{user.email}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Gender</span>
            <span>{user.gender}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Age</span>
            <span>{user.age}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Address</span>
            <span>{user.address}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Contact</span>
            <span>{user.contact}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(user.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(user.updatedAt).toString()}</span>
          </div>
        </div>

      )}
      </div>
    </div>
  )
}

export default ShowUser