import React from 'react'
import './Navbar.css'
export default function Navbar({title}) {
  return (
    <>
        <nav>
            <h1>ELECTRONICS</h1>
            <h2 >{title.toUpperCase()}</h2>
        </nav>
    </>
  )
}