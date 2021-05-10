import React from 'react'

import analyse from '../../images/services/analyse.png'
import assist from '../../images/services/assist.png'
import graphik from '../../images/services/graphik.png'
import responsive from '../../images/services/responsive.png'
import seoImg from '../../images/services/seo.png'
import veille from '../../images/services/veille.png'

import './MobileBrand.scss'

const MobileBrand = () => {
    return (
        <section className='mobile_brand'>
            <div className='mb_img_container'>
                <img src={analyse} alt=""/>
                <img src={assist} alt=""/>
                <img src={graphik} alt=""/>
                <img src={responsive} alt=""/>
                <img src={seoImg} alt=""/>
                <img src={veille} alt=""/>
            </div>
        </section>
    )
}

export default MobileBrand
