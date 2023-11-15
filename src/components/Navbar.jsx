import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const Menu = () => {
  return (
    <Navbar className='barra' expand='lg'>
      <div className='navbar-brand'>
        <img src='/pokemon-pointer.png' alt='logo-pokemon' />
      </div>
      <div className='links'>
        <NavLink to='/' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/pokemones' activeClassName='active'>
          Pokemones
        </NavLink>
      </div>
    </Navbar>
  )
}

export default Menu
