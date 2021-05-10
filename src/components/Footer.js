import React from 'react'
import { Link } from 'gatsby'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div to='/contact' className="contact-us">
                <h1>Envie de nous contacter ?</h1>
                <Link to='/contact' className='f_button'>
                    <div className='f_contact_button'>Nous contacter</div>
                </Link>
                
            </div>
            <div className="mysite">
                © {new Date().getFullYear()}, 
                {` `}
                <a href="https://www.gatsbyjs.com">Studio Haja</a>
            </div>
        </footer>
    )
}

export default Footer
