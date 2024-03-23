import React from 'react'
import bgHighlight from '@/images/hightlight/Grid.png'
import icon1 from '@/images/hightlight/Items.svg'
import icon2 from '@/images/hightlight/Items (1).svg'
import icon3 from '@/images/hightlight/Items (2).svg'
import icon4 from '@/images/hightlight/Items (3).svg'
import card from '@/images/hightlight/Card.png'
import Image from 'next/image'
import light from '@/images/hightlight/Light.png'
import highlight1 from '@/images/hightlight/highlight1.svg'
import highlight2 from '@/images/hightlight/highlight2.svg'
import highlight3 from '@/images/hightlight/highlight3.svg'
import highlight4 from '@/images/hightlight/highlight4.svg'
import Box from '../button'
import HighLightItem from './item'
const HighLight = () => {
    return (

        <main className='bg-[#000] relative'>
            <div className='w-full lg:w-[1312px] hight_light mx-auto h-[860px] relative'>
                <section className='pt-[70px]'>
                    <Box className='button mx-auto'>
                        <button>Highlight</button>
                    </Box>
                    <div className='grid grid-cols-2 w-full lg:w-[1097px] mx-auto mt-[40px] relative z-20'>
                        <HighLightItem icon={icon1} iconHover={highlight1} title='Communities' des='Endorsed by 3 communities with over 20k members each.'/>
                        <HighLightItem icon={icon2} iconHover={highlight2} title='Funding' des='Executing strategic investments of over $50k per project' />
                        <HighLightItem icon={icon3} iconHover={highlight3} title='Marketing' des='Endorsed by 3 communities with over 20k members each.' />
                        <HighLightItem icon={icon4} iconHover={highlight4} title='Media' des='Media support provided by major partners (including Cointelegraph).' />
                    </div>
                </section>
            </div>

            <Image src={light} alt='light' className='absolute top-0 right-0' />

        </main>
    )
}

export default HighLight