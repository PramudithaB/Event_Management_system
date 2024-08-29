import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from "react-router-dom";

import backgroundImage from '../assets/UserAssets/bachg3.jpg'



const UpdateUserProfile = () => {
    const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
          .get(`http://localhost:5555/register/${id}`)
          .then((res) => {
           //const userData = response.data;
            setName(res.data.name);
            //setEmail(response.data.email);
            setGender(res.data.gender);
            setAge(res.data.age);
            setAddress(res.data.address);
            setContact(res.data.contact);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            enqueueSnackbar('An error occurred. Please check console.', { variant: 'error' });
            console.log(error);
          });
      }, []);

      const handleEditUserProfile = () => {
        const data = { 
          name, 
          gender, 
          age,
          address,
          contact, 
        };
        setLoading(true);
        axios
          .put(`http://localhost:5555/register/${id}`, data)
          .then(() => {
            setLoading(false);
            enqueueSnackbar("Error", { variant: "error" });
            //navigate('/');
          })
          .catch((error) => {
            setLoading(false);
            enqueueSnackbar('User edited successfully', { 
                variant: 'success'
               });
            console.log(error);
          });
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
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Update User Profile</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div clasName='my-4'>
          <lable className='text-xl mr-4 text-gray-500'>Name</lable>
          <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        
        <div clasName='my-4'>
          <lable className='text-xl mr-4 text-gray-500'>Gender</lable>
          <input
          type='text'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div clasName='my-4'>
          <lable className='text-xl mr-4 text-gray-500'>Age</lable>
          <input
          type='text'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div clasName='my-4'>
          <lable className='text-xl mr-4 text-gray-500'>Address</lable>
          <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div clasName='my-4'>
          <lable className='text-xl mr-4 text-gray-500'>Contact</lable>
          <input
          type='text'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <Link to = ''>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditUserProfile}>Update</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default UpdateUserProfile