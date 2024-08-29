import  { useState, useEffect } from 'react';
import BackButton from '../components/Ticket/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


import backgroundImage from '../assets/TicketAssets/back2.jpg'

const EditTicket = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [eventType, setEventType] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [requestType, setRequestType] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/ticket/${id}`)
    .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email)
        setRegistrationNumber(response.data.registrationNumber)
        setEventType(response.data.eventType);
        setContactNumber(response.data.contactNumber)
        setRequestType(response.data.requestType)
        setSubject(response.data.subject);
        setMessage(response.data.message)
        setFile(response.data.attachment)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [id])
  
  const handleEditBook = () => {
    /*const data = {
      name,
      email,
      registrationNumber,
      eventType,
      contactNumber,
      requestType,
      subject,
      message,
      attachment,
    };*/
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("registrationNumber", registrationNumber);
    data.append("eventType", eventType);
    data.append("contactNumber", contactNumber);
    data.append("requestType", requestType);
    data.append("subject", subject);
    data.append("message", message);
    data.append("file", file);
    setLoading(true);
    axios
      .put(`http://localhost:5555/ticket/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Ticket Edited successfully', { variant: 'success' });
        navigate('/ticket');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (

    
    <div
      className='p-4'
      style={{
        backgroundImage:` url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Adjust background image size
        backgroundPosition: 'center', // Adjust background image position
        minHeight: '100vh', // Ensure the background covers the entire screen
      }}
    >
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-blue-800'>Edit Ticket</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>Reg_No</label>
          <input
            type='number'
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>Event_Type</label>
          <input
            type='text'
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          </div>
           <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>Contact_No</label>
          <input
            type='string'
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          </div>
           <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>Req_type</label>
          <input
            type='text'
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          </div>
           <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>Subject</label>
          <input
            type='text'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          </div>
           <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>Message</label>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          </div>
           <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue-800'>File</label>
          <input
            type='File'
            
            onChange={(e) => setFile(e.target.files[0])}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Update
        </button>
      </div>
    </div>
    </div>
  )
}

export default EditTicket;