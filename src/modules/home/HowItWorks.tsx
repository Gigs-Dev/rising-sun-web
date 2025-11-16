import { howItWorksList } from '@/data/game-collections';
import { Button } from '@/ui/primitives/buttons/Button';
import { Text } from '@/ui/primitives/typography';
import { Flex, Box } from '@/ui/primitives/ui-layout';
import React from 'react'

const HowItWorks = () => {
  return (
    <div className='mt-[50px] w-full'>
        <Flex className='h-[504px] bg-[#2D2D3E] w-[80%] rounded-tr-[32px] rounded-br-[32px] flex items-center'>
            <Box className='w-full flex flex-col gap-[50px] h-full p-[20px] items-center justify-center'>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-3">
                  <Text className='text-[36px] font-[500] leading-[40px]'>How it works</Text>
                  <Text className='text-[16px]'>Get started in minutes and enjoy fast, secure gameplay.</Text>
                </div>

              <div className="flex flex-col gap-4">
                {howItWorksList.map((list) => (
                <div className="flex items-center gap-4">
                  <div className="w-[40px] h-[44px] pt-1 rounded-[12px] bg-[#0284C7CC]"/>

                  <div className="flex flex-col gap-1">
                    <Text className='text-[16px] leading-[24px] font-[500] text-[#FFFFFF]'>{list.name}</Text>
                    <Text className='text-[#FFFFFFB2] text-[14px] font-[400]'>{list.desc}</Text>
                  </div>
                </div>
                ))}
              </div>

                <div className="flex items-center gap-4">
                  <Button className='bg-[#FFFFFF] font-[400] px-[20px] w-[151px] text-[#171717] leading-[24px]'>Play</Button>
                  <Button className='border-[0.2px] border-[#ffffff38] bg-transparent hover:bg-transparent font-[400] px-[20px]'>Learn more</Button>
                </div>
              </div>
            </Box>

            <Box className='w-full'>
              <Text>R</Text>
            </Box>
        </Flex>
    </div>
  )
}

export default HowItWorks;
