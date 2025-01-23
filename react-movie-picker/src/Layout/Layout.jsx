import React from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default Layout