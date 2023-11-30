import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <main className='max-w-lg mx-auto p-3'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
          <input
            className='border p-3 rounded-lg'
            id="email"
            type="email"
            placeholder="Email"
          />
          <input
            className='border p-3 rounded-lg'
            id="password"
            type="password"
            placeholder="Password"
          />
        <button
          className='bg-slate-700 text-white p-3 rounded-lg'
        >
          Sign In
        </button>
        <button
          className='bg-red-700 text-white p-3 rounded-lg'
        >
          Continue With Google
        </button>
        <p>Dont have an account? <Link to='/signup'><span className='text-blue-500'>Sign up</span></Link></p>
      </form>
    </main>
  )
}
