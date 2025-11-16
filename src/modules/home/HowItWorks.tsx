import HowItWorkCard from '@/sections/HowItWorkCard';
import HIWorksList from '@/sections/HIWorksList';
import { Flex, Box } from '@/ui/primitives/ui-layout';
import Image from 'next/image';
import React from 'react'


// ICONS
import HIWorks from '@/svgs/games/hiworks.svg'

const HowItWorks = () => {
  return (
    <div className='mt-[50px] w-full'>
       {/* HOW IT WORKS SECTION */}
        <Flex className='h-full lg:h-[504px] bg-[#2D2D3E] w-full lg:w-[80%] lg:rounded-tr-[32px] lg:rounded-br-[32px] flex flex-col lg:flex-row items-center'>
          <HIWorksList/>
        
            {/* SECTION IMAGE AND CARD */}
          <Box className='w-full'>
            <Flex className='w-full md:w-[500px] mx-auto lg:h-[390px] flex flex-col gap-4 rounded-[16px] bg-[#0000004D] p-4'>
              <div className="w-[280px] lg:w-[500px] h-[280px] relative">
                <Image src={HIWorks} alt='' fill className='w-full'  />
              </div>

              <HowItWorkCard/>

            </Flex>
          </Box>
        </Flex>
    </div>
  )
}

export default HowItWorks;
