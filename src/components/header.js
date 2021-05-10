import React, { useState, useEffect } from 'react'
import { window } from 'browser-monads'
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Headroom from 'react-headroom'


import { FaBars, FaTimes } from "react-icons/fa";


import './Header.scss'


function Header({ siteTitle }) {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [navbar, setNavbar] = useState(false)


    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    


    window.addEventListener('resize', showButton)
    
    useEffect(() => {
        showButton()
    }, [])

    

    const changeBackground = () => {
        if(window.scrollY >= 60) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)


    return (
        <>
            <Headroom>
                <nav className={navbar ? "navbar active" : "navbar"}>
                    <div className="navbar-container">
                        <Link to="/" className='navbar-logo-link' onClick={closeMobileMenu}>
                            <StaticImage
                                className='navbar-logo'
                                src="../images/logo_site_final3.png"
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="logo"
                                
                            
                            />
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? FaTimes : FaBars} />
                            { click ? <FaTimes /> : <FaBars /> }
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/realisations' className='nav-links' onClick={closeMobileMenu}>
                                    Les réalisations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                    Le studio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                        {button && <button className=' btn btn--outline'><Link to='/contact'>CONTACT</Link></button>}
                    </div>
                </nav>

            </Headroom>
        </>
    )
  }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header


