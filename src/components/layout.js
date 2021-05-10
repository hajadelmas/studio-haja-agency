/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CircleLogo from './CircleLogo'
import gsap from 'gsap'
import { CursorProvider } from 'react-cursor-custom'

import Header from './Header'
import "./layout.scss"
import circletypeMin from "circletype"
import Footer from "./Footer"

const Layout = ({ children }) => {

  useEffect(() => {
    
    gsap.to('.cercle', { duration: 1, "clipPath": "circle(0px at 94.5% 90%)" })

  }, [])


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="cercle"></div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className='main_container'>
        
          <main>
              {children}
          </main>
        
        
        <Footer />
        <CircleLogo />
      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

