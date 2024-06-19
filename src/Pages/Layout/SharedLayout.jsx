import React from 'react'
import { MyNav } from '../MyNav'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'

export  function SharedLayout() {
  return (
    <div>
      <MyNav></MyNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
