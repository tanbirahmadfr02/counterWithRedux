/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    let data = useSelector((state)=> state.counter.value)
  return (
    <>
    <h1 style={{textAlign: "center", fontSize: "70px"}}>{data}</h1>
    </>
  )
}

export default Result