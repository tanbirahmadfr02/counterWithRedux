/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { division } from './slices/counter/counterSlice'

const Division = () => {
    let dispatch = useDispatch()
  return (
    <>
    <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={()=> dispatch(division())}>Division</button>
    </>
  )
}

export default Division