import React, { useEffect, useRef } from 'react'

import gsap from 'gsap-trial'
import { SplitText } from 'gsap-trial/SplitText'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'

import './Partner.css'
import push from '../assets/img/push.webp'
import shardeum from '../assets/img/shardeum.png'
import buildbear from '../assets/img/buildbear.svg'

const Partner = () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const partnerRef = useRef(null);

    useEffect(() => {
        const partnerTitle = partnerRef.current;
        const split = new SplitText(partnerTitle, {type:"words,chars"});
        const chars = split.chars; 

        gsap.from(chars, {
            y: 150,
            stagger: 0.05,
            delay: 0.1,
            opacity: 0,
            duration: 1,
            ease: "back.out",
            scrollTrigger: {
                trigger: partnerTitle,
                start: "top 80%",
                markers: true,
            }
        });

    }, [])

    return (
        <div className='partner-container container-fluid d-flex'>
            <div className='partner-title col-md-5 d-flex align-item-center my-auto'>
                <h1 ref={partnerRef} className='mx-auto d-flex flex-column'>
                    {"Trusted By Partners".split(" ").map((word, wordIndex) => (
                        <div key={wordIndex} className="word">{word}</div>
                    ))}
                </h1>
            </div>
            <div className='partner-content col-md-7 d-flex my-auto'>
                <img src={push} alt='push-protocol' />
                <img src={shardeum} alt='shardeum' />
                <img src={buildbear} alt="build bear" />
            </div>
        </div>
    )
}

export default Partner