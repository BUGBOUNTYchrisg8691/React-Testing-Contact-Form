import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", async () => {
  render(<App />);
});
