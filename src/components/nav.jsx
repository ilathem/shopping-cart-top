export default function Nav() {
  return (
    <div className='border-2 border-red w-64 m-5 rounded-2xl p-4 text-center'>
      <p className='text-3xl border-b-3 border-zinc-700'>Navigation</p>
      <ul >
        <li className='active:scale-90 text-2xl border-2 hover:border-zinc-500 border-zinc-700 cursor-pointer transition-all rounded-md my-2'>
          Home
        </li>
        <li className='active:scale-90 text-2xl border-2 hover:border-zinc-500 border-zinc-700 cursor-pointer transition-all rounded-md my-2'>
          Shop
        </li>
      </ul>
    </div>
  );
}
