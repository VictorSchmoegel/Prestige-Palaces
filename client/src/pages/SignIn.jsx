import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
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
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
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
        <button
          className='bg-red-700 text-white p-3 rounded-lg uppercase'
        >
          Continue With Google
        </button>
        <p>Dont have an account? <Link to='/signup'><span className='text-blue-500'>Sign up</span></Link></p>
      </form>
      {error && <p className='text-red-500'>{error}</p>}
    </main>
  )
}
