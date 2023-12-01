import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/server/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
      console.log(error);
    }
  };


  return (
    <main className='max-w-lg mx-auto p-3'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            className='border p-3 rounded-lg'
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className='border p-3 rounded-lg'
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
        <p>Dont have an account? <Link to='/signup'><span className='text-blue-500'>Sign up</span></Link></p>
      </form>
      {error && <p className='text-red-500'>{error}</p>}
    </main>
  )
}
