import React from "react";
import { act, screen, render, fireEvent } from "@testing-library/react";

import ContactForm from "./ContactForm";

test("get methods", async () => {
  render(<ContactForm />);

  const fname = screen.getByTestId(/fname/i);
  const lname = screen.getByTestId(/lname/i);
  const email = screen.getByTestId(/email/i);
  const message = screen.getByTestId(/message/i);

  fireEvent.change(fname, { target: { value: "Chris" } });
  fireEvent.change(lname, { target: { value: "Girvin" } });
  fireEvent.change(email, { target: { value: "chrisg@gmail.com" } });
  fireEvent.change(message, { target: { value: "This is a test" } });

  expect(fname).toHaveValue("Chris");
  expect(lname).toHaveValue("Girvin");
  expect(email).toHaveValue("chrisg@gmail.com");
  expect(message).toHaveValue("This is a test");

  const submit = screen.getByRole("button");
  fireEvent.click(submit);

  const newFName = await screen.findByText(/"firstname": "chris"/i);
  const newLName = await screen.findByText(/"lastname": "girvin"/i);
  const newEmail = await screen.findByText(/"email": "chrisg@gmail.com"/i);
  const newMessage = await screen.findByText(/"message": "this is a test"/i);
});
