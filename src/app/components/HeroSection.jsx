"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-12'>
      <motion.div 
        initial = {{oppacity: 0}}
        animate = {{oppacity: 1}}
        transition={{duration: 0.5}}
        className='col-span-7 md:col-span-6 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700'>
          Hola, I&apos;m{" "}
          </span>
          <br></br>
          <TypeAnimation
            sequence={[
            'Cesar',
            1000, 
            'Web Developer',
            1000,
            'Explorer',
            1000,
            'Software Engineer',
            1000,
            'Pathfinder',
            1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
        </h1>
        <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
          I&apos;m dedicated to building innovative web solutions that simplify and enhance our everyday lives.        
        </p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 hover:bg-slate-200 text-white'
          onClick={() => document.getElementById('emailSection').scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </button>
          <a href="/CesarResume.pdf" download>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
          </button>
          </a>
        </div>
      </motion.div>
      <motion.div 
      initial = {{oppacity: 0}}
      animate = {{oppacity: 1}}
      transition={{duration: 0.5}} 
      className='col-span-1 sm:col-span-5 md:col-span-6 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mx-auto relative'>
          <Image
            src="/images/cesitar.png"
            alt="hero image"
            className='rounded-full' // This keeps the image round within the container
            width={300}
            height={300}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
