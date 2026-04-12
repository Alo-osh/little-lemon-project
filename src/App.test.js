import updateTimes from './Components/updateTimes';

test("removes reserved time correctly", () => {
  const initialState = {
    times: ["17:00", "18:00", "19:00"],
  };

  const action = {
    type: "reserve_time",
    payload: "17:00",
  };

  const result = updateTimes(initialState, action);

  expect(result.times).toEqual(["18:00", "19:00"]);
});