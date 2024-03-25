/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { multiplication } from './slices/counter/counterSlice'

const Multiplication = () => {
    let dispatch = useDispatch()
  return (
    <>
    <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={()=> dispatch(multiplication())}>Multiplication</button>
    </>
  )
}

export default Multiplication