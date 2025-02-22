import { describe, it, expect } from "vitest";
import { render, screen, userEvent } from "@testing-library/react";
// import { RouterProvider, createMemoryRouter } from 'react-router';
import Product from "../components/product";

describe("Product component UI", () => {
  it("renders image with placeholder in case of absent url", () => {
    render(<Product />);
    expect(screen.getByRole("img", { name: "product-image" }).src).toMatch(
      "https://placehold.co/600x400",
    );
  });

  it("renders product title and description", () => {
    render(<Product />);
    expect(screen.getByRole("heading", { name: "product-title" }));
    expect(screen.getByRole("paragraph", { name: "product-description" }));
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

describe("Product component functionality", () => {
  it("increment button increments by one", async () => {
    console.log("running test...");
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
});
