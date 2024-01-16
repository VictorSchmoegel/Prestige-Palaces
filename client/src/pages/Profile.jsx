import { useSelector } from "react-redux"

export default function Profile() {
  const { currentUser } = useSelector(state => state.user)
  return (
    <main className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img
          src={currentUser.avatar}
          alt='profile'
          className='rounded-full h-24 w-24 object-cover mx-auto cursor-pointer'
        />
        <input
          type='text'
          placeholder='Username'
          defaultValue={currentUser.username}
          id='username'
          className='border p-3 rounded-lg'
        />
        <input
          type='email'
          placeholder='Email'
          defaultValue={currentUser.email}
          id='email'
          className='border p-3 rounded-lg'
        />
        <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          Update
        </button>
        <button className='bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          Create listing
        </button>
      </form>
      <section className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </section>
    </main>
  )
}
