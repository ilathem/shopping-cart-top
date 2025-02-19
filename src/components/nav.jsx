export default function Nav() {
  return (
    <div className='border-2 border-red w-64 m-5 rounded-2xl p-4 text-center'>
      <h1 className='text-3xl border-b-3 border-zinc-700'>Navigation</h1>
      <ul >
        <li className='active:scale-90 text-2xl border-2 hover:border-zinc-500 border-zinc-700 cursor-pointer transition-all rounded-md my-2'>
          <a href="#">Home</a>
        </li>
        <li className='active:scale-90 text-2xl border-2 hover:border-zinc-500 border-zinc-700 cursor-pointer transition-all rounded-md my-2'>
          <a href="#">Shop</a>
        </li>
      </ul>
    </div>
  );
}
