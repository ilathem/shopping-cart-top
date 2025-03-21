# Shopping Cart

This is a project for [The Odin Project](https://www.theodinproject.com/), an
open-source web dev curriculum. The link for this specific project can be
found [here](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart).

Created By Isaiah Lathem.

## Planning

### Requirements Specification

- Needs at least 2 pages (routes): Home and Shop
- Shop page includes the shopping cart component
- Nav bar component that is displayed at all times and shows the number of items in the cart
  - There needs to be a "checkout and pay" button by the number of items in the cart (doesn't do anything yet)
- Each product needs to be in a separate Card component
  - Increment and decrement buttons
  - Text input for quantity
  - Add to cart button
  - Title for each product and picture
  - Fetch data from Fakestore API
- number of items in cart dynamically changes
- no `missing in props validation` errors
- test thoroughly with react testing library
- add all styles
- host

### Components

- Nav bar on left always displayed
  - Contains links to Home, Shop
  - Displays number of items that changes whenever "Add to Cart" is clicked
  - Checkout and Pay button (doesn't do anything)
- Home page displays landing image and link to shop
- Shop page displays grid of Products
- Each Product is a Card component that has:
  - increment/decrement buttons
  - text input for quantity
  - Add to cart button
  - Picture and title
  - Needs to fetch from Fakestore API
- Testing suite to test:
  - Adding to cart
  - Incrementing
  - Decrementing
  - Text input + error handling
  - Fakestore returns valid data

## TODO

- [x] init project
- [x] set up routes
- [x] set up catch-all page not found route
- [x] set up tailwind
- [x] style overall page layout
- [x] style navigation component
- [x] write [tests](https://reactrouter.com/start/framework/testing) for navigation routing
- [x] implement navigation to pass tests
- [x] write tests for home
- [x] implement home
- [x] test/implement Product component
  - [x] code and style UI for product component (with placeholders)
  - [x] implement style tests for product UI
  - [x] write tests for inc/dec buttons
  - [x] implement inc/dec buttons
  - [x] write tests for text input
  - [x] implement text input
  - [x] write tests for add to cart
  - [x] implement add to cart
  - [x] write tests for fetching from Fakestore API and displaying picture + title
  - [x] implement fetching from Fakestore API and displaying picture + title
  - [x] style shop with fakestore data
- [x] test/implement shop route
- [x] deploy (hosted at https://ornate-belekoy-24829a.netlify.app/)
