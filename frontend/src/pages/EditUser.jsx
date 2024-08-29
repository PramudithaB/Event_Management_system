import { useState, useEffect } from 'react';
import BackButton from '../components/users/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      .get(`http://localhost:5555/users/${id}`)
      .then((response) => {
       //const userData = response.data;
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
        setAge(response.data.age);
        setAddress(response.data.address);
        setContact(response.data.contact);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
       // enqueueSnackbar('An error occurred. Please check console.', { variant: 'error' });
        console.log(error);
      });
  }, []);

  const handleEditUser = () => {
    const data = { 
      name, 
      email, 
      gender, 
      age,
      address,
      contact, 
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/users/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('User edited successfully', { 
          variant: 'success'
         });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit User</h1>
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
          <lable className='text-xl mr-4 text-gray-500'>Email</lable>
          <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditUser}>
        Save
        </button>
      </div>
    </div>
  );
};

export default EditUser