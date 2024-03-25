/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByThree } from './slices/counter/counterSlice'

const IncrementByThree = () => {
let dispatch = useDispatch()
  return (
    <>
    <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={()=> dispatch(incrementByThree(3))}>IncrementByThree</button>
    </>
  )
}

export default IncrementByThree