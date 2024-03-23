import Box from '@/components/button'
import Footer from '@/components/footer'
import React from 'react'


const Portfolio = () => {
  return (
    <div className='portfolio w-full min-h-screen relative'>
      <video
        className="min-h-screen w-full mx-auto object-cover mix-blend-luminosity"
        src="images/portfolio/earth.webm"
        typeof='video/webm'
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className='absolute top-[20%] left-1/2 -translate-x-1/2'>
        <Box className='button'>
          <button>Portfolio</button>
        </Box>
      </div>
      <Footer isAbsolute />
    </div>
  )
}

export default Portfolio