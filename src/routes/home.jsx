export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Greeting />
    </div>
  );
}

function Greeting() {
  return (
    <div>
      <p>Welcome to the shopping cart app!</p>
      <p>Created by Isaiah Lathem</p>
      <p>How to use:</p>
      <p>
        Click &quot;Shop&quot; in the Nav to navigate to the shop page, then add
        various items to the cart by updating their quantity and clicking Add to
        Cart.
      </p>
      <p>
        <a href='https://github.com/ilathem/shopping-cart-top' target='_blank'>
          Click here to visit the GitHub repo
        </a>
      </p>
    </div>
  );
}
