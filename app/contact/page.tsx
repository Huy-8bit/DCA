import React from 'react'
import bgContact from '@/images/contact/BG.png'
import light from '@/images/contact/light.png'
import Image from 'next/image'
import Box from '@/components/button'
import ic_email from '@/images/contact/Email.svg'
import FormContact from '@/components/contact/form'
import Footer from '@/components/footer'


const Contact = () => {
  return (
    <main className='w-full h-full relative pt-[135px] pb-[60px] get_in_touch'>
      <Image src={bgContact} alt='background' fill priority objectPosition='center' />

      <section className='relative lg:z-[10] w-full lg:max-w-[1440px] flex flex-col gap-10 lg:flex-row items-center justify-between px-4 lg:px-10 mx-auto mb-20'>
        <section className='w-full lg:max-w-[630px] lg:h-[488px] flex flex-col justify-between'>
          <div>
            <div>
              <div className='flex justify-center lg:justify-start'>
                <Box className='button'>
                  <button>Contact</button>
                </Box>
              </div>

              <h2 className='heading text-[32px] lg:text-[64px] text-center lg:text-left mt-6'>Get In Touch</h2>
              <p className='des mt-8 mb-4 text-center lg:text-left'>We highly appreciate if you wish to stay in touch with us. Your feedback is valuable to us, so please fill out the form.</p>
              <div className='flex justify-center lg:justify-start'>
                <div className='w-[160px] h-1 bg-gradient-retangle'></div>
              </div>
            </div>
          </div>
          <div className='w-[172px] lg:flex items-center space-x-4 hidden'>
            <Image src={ic_email} alt='email' className='w-[60px] h-[60px] min-w-[60px]' />
            <p className='flex flex-col gap-1'>
              <span className='text-lg text-[#fff] font-normal'>Email</span>
              <span className='text-[#8F9399] font-normal text-sm'>help@dca.com</span>
            </p>
          </div>
        </section>

        <FormContact />
      </section>
      <Footer />
      <Image src={light} alt='light' className='absolute top-0 right-0' />
    </main>
  )
}

export default Contact