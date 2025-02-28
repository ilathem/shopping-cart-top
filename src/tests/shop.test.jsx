import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { beforeAll, afterAll, afterEach } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routesConfig from "../routes/routesConfig";
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

describe("Shop component api", () => {
  it("correctly calls the api", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: "Shop" }));
    expect(
      screen.getAllByRole("heading", { name: "product-title" })[0].textContent,
    ).toMatch("Product title");
  });
});
