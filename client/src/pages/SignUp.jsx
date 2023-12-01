import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

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
      const res = await fetch('/server/auth/signup', {
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
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <main className='max-w-lg mx-auto p-3'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            className='border p-3 rounded-lg'
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            className='border p-3 rounded-lg'
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            className='border p-3 rounded-lg'
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <button
          className='bg-red-700 text-white p-3 rounded-lg uppercase'
        >
          Continue With Google
        </button>
        <p>Have an account? <Link to='/signin'><span className='text-blue-500'>Sign in</span></Link></p>
      </form>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </main>
  )
}
