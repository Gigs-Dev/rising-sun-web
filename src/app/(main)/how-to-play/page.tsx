import { Box, Flex, HStack } from '@/ui/primitives/ui-layout';
import Image from 'next/image';
import React from 'react'

// ICONS
import HIWorks from '@/svgs/games/works-rounded.svg'
import HowItWorkCard from '@/sections/HowItWorkCard';
import HIWorksList from '@/sections/HIWorksList';

const HowToPlay = () => {
  return (
    <Box className='w-full bg-[#0E132C]'>
        <Flex className='w-full md:w-[540px] flex-col gap-8 mx-auto'>
            <div className="flex w-full justify-center items-center py-4">
                <Image src={HIWorks} alt='HI' width={300} height={400} className='rounded-[999px] object-cover' />
            </div>

            <HowItWorkCard/>

            <HIWorksList/>

        </Flex>
    </Box>
  )
}

export default HowToPlay;
