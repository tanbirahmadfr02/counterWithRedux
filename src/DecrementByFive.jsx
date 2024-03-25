/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { decrementByFive } from "./slices/counter/counterSlice";

export const DecrementByFive = () => {
  let dispatch = useDispatch();
  return (
    <>
      <button
        style={{ padding: "10px 20px", fontSize: "20px" }}
        onClick={() => dispatch(decrementByFive())}
      >
        Decrement By Five
      </button>
    </>
  );
};
