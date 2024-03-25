/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "./slices/counter/counterSlice";

const Minus = () => {
  let dispatch = useDispatch();
  return (
    <button
      style={{ padding: "10px 20px", margin: "0 40px", fontSize: "20px" }}
      onClick={() => dispatch(decrement())}
    >
      Minus
    </button>
  );
};

export default Minus;
