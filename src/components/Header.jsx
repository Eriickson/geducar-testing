import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-light bg-light border-b py-4">
        <div className="container">
          <Link to="/" style={{
            textDecoration: "none",
            color: "#000"
          }}>
            <h1 className="h4">Geducar Test</h1></Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
