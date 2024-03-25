/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './slices/counter/counterSlice'

const Plus = () => {
    let dispatch = useDispatch()
  return (
    <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={()=> dispatch(increment())}>Plus</button>
  )
}

export default Plus