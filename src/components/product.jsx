import PropTypes from 'prop-types';

export default function Product({ link }) {
  return (
    <div className='h-min text-center border-zinc-700/50 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-700/50 rounded-xl transition-all p-4 flex flex-col border-2 w-sm items-center'>
      <img
        src={link || 'https://placehold.co/600x400'}
        className='mb-2 shadow-lg shadow-zinc-400/50'
      />
      <p className='text-2xl'>Title</p>
      <p className='text-sm mb-2'>Description Description Description Description Description Description Description</p>
      <div className='border-zinc-700/50 hover:border-zinc-700 transition-all rounded-xl pb-2 border-2 flex flex-col w-full'>
        <p className='text-xl text-center'>Quantity</p>
        <div className='flex flex-row items-center gap-2  justify-center'>
          <p className='active:scale-90 border-2 border-zinc-600 hover:border-zinc-500 hover:text-zinc-300 cursor-pointer select-none transition-all py-1 px-4 rounded-md'>
            -1
          </p>
          <input
            type='number'
            className='border-zinc-600 hover:border-zinc-500 transition-all border-2 rounded-md w-20 p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            min='0'
          />
          <p className='active:scale-90 border-2 border-zinc-600 hover:border-zinc-500 hover:text-zinc-300 cursor-pointer select-none transition-all py-1 px-4 rounded-md'>
            +1
          </p>
        </div>
      </div>
      <button className='active:scale-95 shadow-md hover:shadow-lg shadow-zinc-500/50 border-2 rounded-xl border-zinc-600 hover:border-zinc-500 transition-all py-2 px-8 mt-4 cursor-pointer hover:text-zinc-300'>Add to cart</button>
    </div>
  );
}

Product.propTypes = {
  link: PropTypes.string,
};
