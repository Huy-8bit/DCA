import Box from '@/components/button'
import Footer from '@/components/footer'
import CardProject from '@/components/portfolio/card'
import zkasino from '@/images/portfolio/Items.png'
import earlyfans from '@/images/portfolio/Items (1).png'
import solstorm from '@/images/portfolio/Items (2).png'
import ordify from '@/images/portfolio/Items (3).png'
import Minterest from '@/images/portfolio/Items (4).png'
import Solak from '@/images/portfolio/Items (5).png'
import Interlock from '@/images/portfolio/Items (7).png'
import AutoAir_Ai from '@/images/portfolio/Items (8).png'
import KIP from '@/images/portfolio/Items (9).png'
import Bac_Games from '@/images/portfolio/Items (10).png'
import Bitcoin_Virtual from '@/images/portfolio/Items (11).png'
import PortfolioSlide from '@/components/portfolio/portfolio-slide'

const projects = [
  {
    icon: zkasino,
    title: 'Zkasino'
  },
  {
    icon: earlyfans,
    title: 'Early Fans'
  },
  {
    icon: solstorm,
    title: 'Solstorm'
  },
  {
    icon: ordify,
    title: 'Ordify'
  },
  {
    icon: Minterest,
    title: 'Minterest'
  },
  {
    icon: Solak,
    title: 'Solak'
  },
  {
    icon: Interlock,
    title: 'Interlock'
  },
  {
    icon: AutoAir_Ai,
    title: 'AutoAir Ai'
  },
  {
    icon: KIP,
    title: 'KIP'
  },
  {
    icon: Bac_Games,
    title: 'Bac Games'
  },
  {
    icon: Bitcoin_Virtual,
    title: 'Bitcoin Virtual Machine'
  },
]

const Portfolio = () => {
  return (
    <div className='portfolio w-full min-h-screen h-full relative'>
      <video
        className="min-h-screen h-full w-full mx-auto object-cover mix-blend-luminosity"
        src="images/portfolio/earth.webm"
        typeof='video/webm'
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className='absolute w-full top-[20%] left-1/2 -translate-x-1/2 z-20'>
        <Box className='button mx-auto'>
          <button>Portfolio</button>
        </Box>
        <p className='text-[#fff] text-[32px] lg:text-[64px] text-center font-bold'>Our Portfolio</p>
        <div className='hidden lg:grid grid-cols-6 gap-6 w-full lg:w-[1045px] mt-10 mx-auto'>
          {projects.map((project, index) => {
            return (
              <CardProject key={index} icon={project.icon} title={project.title} />
            )
          })}
        </div>
        <PortfolioSlide />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10'></div>
      {/* <Footer /> */}
    </div>
  )
}

export default Portfolio