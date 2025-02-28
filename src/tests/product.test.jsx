import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router";
import routesConfig from "../routes/routesConfig";
import Product from "../components/product";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { productItems } from "./productTestData";

const handlers = [
  // simulating fakestore api
  http.get(`https://fakestoreapi.com/products`, () => {
    return HttpResponse.json(productItems);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" })); // Start the fake server

afterAll(() => server.close()); // Close the server

afterEach(() => server.resetHandlers()); // For test isolation

describe("Product component UI", () => {
  it("renders image with placeholder in case of absent url", () => {
    render(<Product />);
    expect(screen.getByRole("img", { name: "product-image" }).src).toMatch(
      "https://placehold.co/600x400",
    );
  });

  it("renders product title and description", () => {
    render(<Product />);
    expect(
      screen.getByRole("heading", { name: "product-title" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("paragraph", { name: "product-description" }),
    ).toBeInTheDocument();
  });

  it("contains form for updating quantity, increment and decrement buttons, and submit", () => {
    render(<Product />);
    expect(screen.getByLabelText("Quantity"));
    expect(screen.getByRole("spinbutton", { name: "quantity-input" }));
    expect(
      screen.getByRole("button", { name: "quantity-increment" }).textContent,
    ).toMatch("+1");
    expect(
      screen.getByRole("button", { name: "quantity-decrement" }).textContent,
    ).toMatch("-1");
    expect(screen.getByRole("button", { name: "quantity-submit" }));
  });
});

describe("Product component UI functionality", () => {
  it("increment button increments by one", async () => {
    const user = userEvent.setup();
    render(<Product />);
    await user.click(
      screen.getByRole("button", { name: "quantity-increment" }),
    );
    console.log(screen.getByRole("spinbutton", { name: "quantity-input" }));
    expect(
      screen.getByRole("spinbutton", { name: "quantity-input" }).value,
    ).toMatch(1);
  });

  it("decrement button decrements by one", async () => {
    const user = userEvent.setup();
    render(<Product />);
    await user.click(
      screen.getByRole("button", { name: "quantity-increment" }),
    );
    await user.click(
      screen.getByRole("button", { name: "quantity-decrement" }),
    );
    expect(
      screen.getByRole("spinbutton", { name: "quantity-input" }).value,
    ).toMatch("");
  });

  it("decrement button does not go below zero", async () => {
    const user = userEvent.setup();
    render(<Product />);
    await user.click(
      screen.getByRole("button", { name: "quantity-decrement" }),
    );
    expect(
      screen.getByRole("spinbutton", { name: "quantity-input" }).value,
    ).toMatch("");
  });

  it("text input only accepts numbers", async () => {
    const user = userEvent.setup();
    render(<Product />);
    await user.click(
      screen.getByRole("spinbutton", { name: "quantity-input" }),
    );
    await user.keyboard("abc");
    expect(
      screen.getByRole("spinbutton", { name: "quantity-input" }).value,
    ).toMatch("");
  });

  it("text input only accepts positive numbers", async () => {
    const user = userEvent.setup();
    render(<Product />);
    await user.click(
      screen.getByRole("spinbutton", { name: "quantity-input" }),
    );
    await user.keyboard("-1");
    expect(
      screen.getByRole("spinbutton", { name: "quantity-input" }).value,
    ).toMatch("");
  });

  it("clicking add to cart adds specified quantity to cart", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: "Shop" }));
    await user.click(
      screen.getAllByRole("spinbutton", { name: "quantity-input" })[0],
    );
    await user.keyboard("1");
    await user.click(
      screen.getAllByRole("button", { name: "quantity-submit" })[0],
    );
    expect(
      screen.getByRole("emphasis", { name: "cart-quantity" }).textContent,
    ).toMatch("1");
  });
});
