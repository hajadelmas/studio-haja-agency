import React, { useEffect, useRef } from "react"
import CircleType from 'circletype'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import './CircleLogo.scss'

function CircleLogo() {

    const circleInstance = useRef();


    useEffect(() => {

        new CircleType(circleInstance.current).radius(65);

        if (typeof window !== `undefined`) {
          gsap.registerPlugin(ScrollTrigger)
          gsap.core.globals(
            'ScrollTrigger',
            ScrollTrigger
          )
        }
    
        var rotate = gsap.timeline({
          scrollTrigger:{
            trigger: ".main_container",
            // pin: true,
            scrub:1,
            // pinSpacing: false,
            // markers: true,
            start: 'top top',
            // end:'+=1000',
          }
        })
        .to('#text', {
          rotation:360*5,
          duration:2, ease:'none',
        })
        
        
      }, [])




    return (
        <div className="container">  
            <div className="circular-text" id='text' ref={circleInstance}>
                <p className="text" id='text' ref={circleInstance}>Studio Haja • Studio Haja • Studio haja •</p>
            </div>

            
        </div>
    )
}

export default CircleLogo
