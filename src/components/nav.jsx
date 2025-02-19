import { NavLink } from 'react-router';

export default function Nav() {
  return (
    <div className='border-2 border-red w-64 m-5 rounded-2xl p-4 text-center'>
      <p className='text-3xl border-b-3 border-zinc-700'>Navigation</p>
      <ul>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'text-zinc-200 transition-all' : 'transition-all'
          }
          end
        >
          <li className='active:scale-90 text-2xl border-2 hover:border-zinc-500 border-zinc-700 cursor-pointer transition-all rounded-md my-2'>
            Home
          </li>
        </NavLink>
        <NavLink
          to='/shop'
          className={({ isActive }) =>
            isActive ? 'text-zinc-200 transition-all' : 'transition-all'
          }
        >
          <li className='active:scale-90 text-2xl border-2 hover:border-zinc-500 border-zinc-700 cursor-pointer transition-all rounded-md my-2'>
            Shop
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
