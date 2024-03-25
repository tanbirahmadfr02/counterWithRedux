/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByFive } from './slices/counter/counterSlice'

const IncrementByFive = () => {
    let dispatch = useDispatch()
  return (
    <>
    <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={()=> dispatch(incrementByFive())}>Increment By Five</button>
    </>
  )
}

export default IncrementByFive