import React, { useRef,useState, useEffect } from "react"
import { window } from 'browser-monads'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'


import { RoughEase } from "gsap/EasePack"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from "gsap/TextPlugin"
import PaperPlane from '../images/paperplane.png'

import analyse from '../images/services/analyse.png'
import assist from '../images/services/assist.png'
import graphik from '../images/services/graphik.png'
import responsive from '../images/services/responsive.png'
import seoImg from '../images/services/seo.png'
import veille from '../images/services/veille.png'

import MobileBrand from "../components/mobile/MobileBrand"

import '../styles/indexPage.scss'


gsap.registerPlugin(TextPlugin, RoughEase);


export default function IndexPage() {

  const [brandMobile, setBrandMobile] = useState(false)


  let cursorEl = useRef(null)
  let boxEl = useRef(null)
  let hiEl = useRef(null)
  let textEl = useRef(null)
  let textHome = useRef(null)


  let planePath = useRef(null)
  let paperplane = useRef(null)


  const path = "M111.5,110.5c58.95-33.56,185.14,163.86,328,127,19.18-4.95,15.41-8.12,47-18,32.55-10.18,146-45.64,221-1,73.88,44,57,133.86,107,142,42.16,6.87,89-51.46,107-99,26.31-69.69,8.4-163.85-41-188-83.15-40.65-280.47,104.91-273,225,5.52,88.77,125.08,197.72,200,266,29.88,27.23,77.21,67.14,68,104-7.22,28.9-45.37,40.58-50,42-69.22,21.19-154.94-46.47-148-76,4-17.25,36.73-8.85,79-35,51.78-32,100.08-104.87,79-155-19.75-47-99.29-71.39-160-53-108.57,32.89-94.28,183.72-208,218-50.76,15.3-114,3.45-150-34-3.95-4.1-46.93-50.08-28-94,15.86-36.81,68.85-57.41,93-40,22.73,16.38,17.06,64.37,0,94-34.75,60.36-123,55.29-127,55-67.73-4.87-137.13-56.25-133-97,4.45-43.83,91.91-54.94,90-92-1.26-24.43-39.8-29.74-72-60C72.32,277.43,68.29,135.09,111.5,110.5Z"

  const words = [ "Passionnés.", "Rêveurs.", "Avant-Gardistes.", "Odacieux.", "Curieux."]


  useEffect(() => {

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin)
      gsap.core.globals(
        'MotionPathPlugin, ScrollTrigger, DrawSVGPlugin',
        MotionPathPlugin, ScrollTrigger, DrawSVGPlugin
      )
    }

    //show brand
    showBrandMobile()



    // WORDS
    let cursor = gsap.to(cursorEl, { opacity: 0, ease: "power2.inOut", repeat: -1})

    let boxTl = gsap.timeline()

    boxTl
      // .to(boxEl, { duration: 1, width:"18.3vw", delay: 0.5, ease: "power4.inOut" })
      .from(hiEl, { duration: 1, delay: 1.2, y:"8vw",skewY: "8vw" , opacity:0, ease: "power3.inOut", onComplete: () => masterTl.play() })
      // .to(boxEl, {  duration: .8, height: "7vw", ease:"power3.inOut" })

    let masterTl = gsap.timeline({  repeat: -1}).pause()

    words.forEach(word => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1})
        tl.to(textEl, { duration: 1, text: word })
        masterTl.add(tl)
    })


    // MOTION
    gsap.to(paperplane, {
      motionPath: {
        path: path,
        autoRotate: true,
        curviness: 1.7
      },
      duration: 30,
      repeat: -1,
      
    })

    // Scroll

    gsap.to(textHome, {
      yPercent: 150,
      ease: "none",
      autoAlpha: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".PageIndex",
        scrub: 1,
        // markers: true,
        start: "center center",
        end: "bottom"
      }
    })

    // scroll SVG

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#brandAnimation',
        scrub: true,
        pin: '.svgContainer',
        // markers: true,
        // pinSpacing: false,
        // markers: true,
        start: 'top top',
        end: 'bottom bottom',
      },
    })
    tl2.from('#designLine', { duration: 1, drawSVG: 0 }, 0)
    tl2.from('#designArr', 1, { autoAlpha: 0 })
    tl2.from('#designImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#apparelLine', { duration: 1, drawSVG: 0 })
    tl2.from('#apparelArr', 1, { autoAlpha: 0 })
    tl2.from('#apparelImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#webLine', { duration: 1, drawSVG: 0 })
    tl2.from('#webArr', 1, { autoAlpha: 0 })
    tl2.from('#webImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#experientialLine', { duration: 1, drawSVG: 0 })
    tl2.from('#experientialArr', 1, { autoAlpha: 0 })
    tl2.from('#experientialImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#promoLine', { duration: 1, drawSVG: 0 })
    tl2.from('#promoArr', 1, { autoAlpha: 0 })
    tl2.from('#promoImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#marketingLine', { duration: 1, drawSVG: 0 })
    tl2.from('#marketingArr', 1, { autoAlpha: 0 })
    tl2.from('#marketingImg', { duration: 3, autoAlpha: 0, scale: 0.95 })



    
  }, [])

  
// }

const showBrandMobile = () => {
    if(window.innerWidth <= 500) {
        setBrandMobile(true)
    } else {
        setBrandMobile(false)
    }
}

window.addEventListener('resize', showBrandMobile)

  return (
    <Layout>
      <SEO title="Home" />
      
      
      <section className='PageIndex'>
          <div className="text_container">
            <div className='textHome' ref={el => (textHome = el)}>
              <h1>
                <span className="box" ref={el => (boxEl = el)}></span>
                <span className="hi" ref={el => (hiEl = el)} style={{marginRight:`10px`}}>Studio Haja , création de site pour les </span>
              </h1>
            
              <div className='textApres'>
                <h1>
                  <span className="text" ref={el => (textEl = el)}></span>
                  <span className="cursor" ref={el => (cursorEl = el)}>_</span>
                </h1>
              </div>
            </div>
          </div>
          

          <img src={PaperPlane} className='paperplane' ref={el => (paperplane = el)} alt=""/>
      </section>



      {
        brandMobile ? <MobileBrand />
        : 
        <section className='section2' id='brandAnimation'>
        <div className="svgContainer" style={{ height: "100vh", position: "relative" }}>
          
          <svg
          fill="none"
          viewBox="0 0 1920 1080"
        >
          <rect width="100%" height="100%" fill="" />
          <g
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="#fff"
            strokeWidth="6"
          >
            <path
              id="designLine"
              className="line"
              d="M978.3 477.8c25.4-15.6 62.3-34.4 78.9-71.7 14.1-31.4 11.3-80.4 10.5-90.5-.8-10.1-4.3-35.7-4.3-35.7"
            />
            <path
              id="apparelLine"
              className="line"
              d="M1124.6 524.7s15.8 8.8 49.4 13.7c33.6 4.8 53.2 2 70.4-1.3 17.2-3.2 31.4-17.2 35.4-27.1 4-9.9.5-24.4-13.8-28.2-14.4-3.8-19.8 7-19 14.2.7 7.2 9.7 17.2 22.3 19.2s33.8 2.2 66.3-2.7c26.6-4 46.7 2 46.7 2"
            />
            <path
              id="promoLine"
              className="line"
              d="M1161.9 610.8s15.9-7.1 31.4-5.9 26.8 5 46.4 18.8c19.5 13.8 37 39.7 48.5 62.4 11.5 22.8 22 49.5 28.4 63.3 6.3 13.8 18.4 39.1 33.3 54.5 13.1 13.5 33.8 23.9 57.6 14.6"
            />
            <path
              id="webLine"
              className="line"
              d="M776.1 581.7s-22.6 39.8-32.7 61.6c-10.1 21.8-19.1 43.6-22.6 59.6-4.1 19-2.4 43.8 12.1 53.5 9 6 33.5 14.8 53.7 8.6 20.1-6.2 19.5-28.2 16.4-36.1s-15.6-30.3-40.2-12c-25.6 19-34 50-37.4 64.8-2.9 12.8-4.8 44.3 14.7 61.3 11.2 9.8 31.5 17.3 54.5 4.7 23-12.5 40.8-39.2 40.8-39.2"
            />
            <path
              id="marketingLine"
              className="line"
              d="M681.6 534.4s-60.5-6.7-107.1-2.2C528 536.8 496.8 551.9 473 571c-23.8 19.1-51 50.6-65.7 94.3"
            />
            <path
              id="experientialLine"
              className="line"
              d="M758.5 462.3s-15.4-43.7-33-63.9c-15.8-18.1-31.5-29.6-56.9-32.3-20.1-2.2-39.3 2.6-40.5 13.5-1.3 10.9 16 17.5 24.3 12.4 8.3-5.2 19.6-13.4 15.7-38.3-3.9-25.5-28.2-42.4-44.1-51.5-15.9-9.1-35.9-17.3-60.9-19.7"
            />
            <path
              id="designArr"
              className="arrow"
              d="M1083.15 300.517s-8.128-13.024-16.316-23.517c-6.169 8.811-12.028 28.076-12.028 28.076s16.354-23.719 18.495-26.533"
            />
            <path
              id="apparelArr"
              className="arrow"
              d="M1375.28 498.393s13.315 15.437 19.667 19.134c-8.874 3.286-32.034 8.799-32.034 8.799"
            />
            <path
              id="promoArr"
              className="arrow"
              d="M1382.99 807.475s4.73 5.692 11.26 8.239c7.339 2.988 12.182 2.219 15.119 2.066-2.087 4.644-6.19 14.118-17.635 22.851 5.107-7.395 17.319-22.838 18.753-24.132"
            />
            <path
              id="webArr"
              className="arrow"
              d="M819.708 809.239s16.325-6.981 24.744-13.935c-.03 6.046-1.107 33.214-1.107 33.214"
            />
            <path
              id="marketingArr"
              className="arrow"
              d="M399.357 646.653l2.86 21.14s13.249-11.662 34.01-20.564"
            />
            <path
              id="experientialArr"
              className="arrow"
              d="M576.006 265.906S570.2 274.775 563 282.5c4.061 1.61 6.421 5.161 7.17 10.762"
            />
          </g>

            <image
              id="designImg"
              className="img"
              href={analyse}
              x="694.22"
              y="107.15"
              width="471"
              height="210"
            />
          
            <image
              id="apparelImg"
              className="img"
              href={graphik}
              x="1319.14"
              y="398.25"
              width="401"
              height="210"
            />
            <image
              id="promoImg"
              className="img"
              href={responsive}
              x="1342.91"
              y="723.88"
              width="382"
              height="197"
            />
            <image
              id="webImg"
              className="img"
              href={seoImg}
              x="760.066"
              y="700.86"
              width="483"
              height="205"
            />
            <image
              id="marketingImg"
              className="img"
              href={veille}
              x="150.455"
              y="700.031"
              width="411"
              height="250"
            />
            <image
              id="experientialImg"
              className="img"
              href={assist}
              x="185.84"
              y="153.94"
              width="390"
              height="250"
            />
          
        </svg>

        </div>
      
      </section>
      }

      
      

      

  

    </Layout>
  )
}

