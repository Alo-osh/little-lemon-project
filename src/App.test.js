import updateTimes from './Components/updateTimes';
import {screen,render,fireEvent} from '@testing-library/react'
import LogIn from './Components/LogIn.js'
test("removes reserved time correctly", () => {
  const handleSubmit=jest.fn();
  render(<LogIn />)
  const email=screen.getByLabelText(/email:/i);
  fireEvent.change(email,{target:{value:"habeebali072@gmail.com"}});
  const passWord=screen.getByLabelText(/password:/i);
  fireEvent.change(passWord,{target:{value:"12345678"}})
  const submitButton=screen.getByRole("button");
  fireEvent.click(submitButton)
    const email2=screen.getByLabelText(/email:/i);
  fireEvent.change(email2,{target:{value:"habeebali072@gmail.com"}});
  const passWord2=screen.getByLabelText(/password:/i);
  fireEvent.change(passWord2,{target:{value:"125678"}})
  const submitButton2=screen.getByRole("button");
fireEvent.click(submitButton2)
  const initialState = {
    e: ["17:00", "18:00", "19:00"],
  };

  const action = {
    type: "reserve_time",
    payload: "17:00",
  };

  const result = updateTimes(initialState, action);
  expect(submitButton).not.toHaveAttribute("disabled");
  expect(submitButton2).toHaveAttribute("disabled");

  expect(result.e).toEqual(["18:00", "19:00"]);
});