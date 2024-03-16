"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRect } from "@studio-freight/hamo";
import gsap from 'gsap';

interface HeroSectionProps {
    // Define the props for your component here
}

function mapRange(in_min: number, in_max: number, input: number, out_min: number, out_max: number) {
    return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

const HeroSection: React.FC<HeroSectionProps> = ({ /* Destructure the props here */ }) => {
    const squareContainer = useRef(null);
    const [ref, rect] = useRect();
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        const target = mapRange(0, rect.height, latest, 90, -10);

        gsap.to(squareContainer.current, { rotationY: target, duration: 0.5, ease: "power2.out"});
    });

    return (
        <>
            <div className='bg-black flex justify-between h-[100vw] w-full overflow-hidden'>
                <img src=''/>
                <div ref={ref} className='w-[100vw] h-[100vh]'></div>
                    <div ref={squareContainer} className='mt-10'>
                        <div
                            className='bg-white w-[100vw] h-[100vw] mt-[50%] overflow-visible rotate-45'
                        ></div>
                    </div>
                
            </div>
        </>
    );
}

export default HeroSection;
