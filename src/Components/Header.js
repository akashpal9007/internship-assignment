import React, { useState } from "react"
import './Header.css'
import {Link} from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import logo from '../img/logo.png'
// import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <div className='header'>
        <div className='logo'>
          <img src={logo}/>
          Logo
          </div>
        <nav className='navbar'>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/company">COMPANY</Link></li>
                <li><Link to="/team">TEAM</Link></li>
                <li><Link to="/abouut">ABOUT</Link></li>
                <li className='navbtn'><Link to="/joinnow">JOIN NOW</Link></li>
        </nav>
        <button className="nav-m-btn" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{backgroundColor:'gray',border:'0', width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{  width: "40px", height: "40px" }} />
          )}
        </button>
        <div className={`${navbarOpen ? "menuNav" : "hideMenu"}`}>
        <ul className="showMenu" onClick={closeMenu}><Link to="/">HOME</Link></ul>
        <ul className="showMenu" onClick={closeMenu}><Link to="/company">COMPANY</Link></ul>
        <ul className="showMenu" onClick={closeMenu}><Link to="/team">TEAM</Link></ul>
        <ul className="showMenu" onClick={closeMenu}><Link to="/abouut">ABOUT</Link></ul>
        <ul className="showMenu" onClick={closeMenu}><Link to="/joinnow">JOIN NOW</Link></ul>
        </div>
    </div>
  )
}

export default Header