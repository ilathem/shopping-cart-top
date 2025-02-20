export default function Home() {
  return (
    <div className='m-5 border-2 p-4 rounded-2xl ml-0'>
      <h1 className='text-4xl border-b-3 border-zinc-600 pb-1 mb-2'>Home page</h1>
      <Greeting />
    </div>
  );
}

function Greeting() {
  return (
    <div>
      <section className='p-2 border-2 border-zinc-700/50 my-2 rounded-xl hover:border-zinc-700 transition-all'>
        <p className='text-2xl'>Welcome to the shopping cart app!</p>
        <p>Created by Isaiah Lathem</p>
      </section>
      <section className='p-2 my-2 border-2 rounded-xl border-zinc-700/50 hover:border-zinc-700 transition-all'>
        <p>How to use:</p>
        <p>
          Click &quot;Shop&quot; in the Nav to navigate to the shop page, then
          add various items to the cart by updating their quantity and clicking
          Add to Cart.
        </p>
      </section>
      <section className='p-2 my-2 border-2 rounded-xl border-zinc-700/50 hover:border-zinc-700 transition-all'>
        <p>
          <a
            className='hover:text-zinc-200 transition-all'
            href='https://github.com/ilathem/shopping-cart-top'
            target='_blank'
          >
            Click here to visit the GitHub repo
          </a>
        </p>
      </section>
    </div>
  );
}
