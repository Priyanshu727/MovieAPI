import React from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar_Li = ({isActive, link, li_title}) => {
  return (
    <li className={`${s.header_li} ${isActive ? s.active_li : ''} py-2 px-3`}><Link className='text-decoration-none text-dark' to={link}>{li_title}</Link></li>
  )
}

export default Navbar_Li
