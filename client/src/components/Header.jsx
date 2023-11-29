import { FaSearch } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Palaces</span>
            <span className='text-slate-700'>Prestige</span>
          </h1>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            type="text"
            placeholder="Search..."
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
          <ul className='flex gap-4'>
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
            <li className='text-slate-700 hover:underline cursor-pointer'>Sign Up</li>
          </ul>
      </div>
    </header>
  )
}