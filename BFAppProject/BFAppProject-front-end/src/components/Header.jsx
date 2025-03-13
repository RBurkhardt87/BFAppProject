import React from 'react'
import '../styling/Header.css';

const Header = ({ pageName }) => {

  

  return (
    <div className="page-header">
      <h1>Welcome to the {pageName} Page</h1>
    </div>
  )
}

export default Header
