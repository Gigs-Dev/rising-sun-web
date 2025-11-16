import { howItWorksCardList, howItWorksList } from '@/data/game-collections';
import { Button } from '@/ui/primitives/buttons/Button';
import { Text } from '@/ui/primitives/typography';
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
            <Box className='w-full flex flex-col gap-[50px] h-full p-[20px] items-center justify-center'>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-3">
                  <Text className='text-[36px] font-[500] leading-[40px]'>How it works</Text>
                  <Text className='text-[16px]'>Get started in minutes and enjoy fast, secure gameplay.</Text>
                </div>

              <div className="flex flex-col gap-4">
                {howItWorksList.map((list) => (
                <div className="flex items-center gap-4" key={list.name}>
                  <div className="w-[40px] h-[44px] pt-1 rounded-[12px] bg-[#0284C7CC]"/>

                  <div className="flex flex-col gap-1">
                    <Text className='text-[16px] leading-[24px] font-[500] text-[#FFFFFF]'>{list.name}</Text>
                    <Text className='text-[#FFFFFFB2] text-[14px] font-[400]'>{list.desc}</Text>
                  </div>
                </div>
                ))}
              </div>

                <div className="flex items-center gap-4">
                  <Button className='font-[400] px-[20px] w-[151px] text-[#171717] leading-[24px]'>Get started</Button>
                  <Button className='border-[0.2px] border-[#ffffff38] bg-transparent hover:bg-transparent font-[400] px-[20px]'>Learn more</Button>
                </div>
              </div>
            </Box>

              {/* SECTION IMAGE AND CARD */}
            <Box className='w-full'>
              <Flex className='w-full md:w-[500px] mx-auto lg:h-[390px] flex flex-col gap-4 rounded-[16px] bg-[#0000004D] p-4'>
                <div className="w-[280px] lg:w-[500px] h-[280px] relative">
                  <Image src={HIWorks} alt='' fill className='w-full'  />
                </div>

                 <div className="flex items-center justify-between gap-3 w-full">
                  {howItWorksCardList.map((card, index) => (
                    <div className="w-[160px] h-[68px] flex flex-col items-center justify-center bg-[#2D2D3E] rounded-[12px]" key={index}>
                      <Text className='font-[500] text-[20px] leading-[28px] text-[#fff]'>{card.name}</Text>
                      <Text className='text-[#FFFFFF99] text-[12px] font-[400]'>{card.desc}</Text>
                    </div>
                  ))}
                 </div>
              </Flex>
            </Box>
        </Flex>
    </div>
  )
}

export default HowItWorks;
