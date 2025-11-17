import { howItWorksList } from '@/data/game-collections';
import { Button } from '@/ui/primitives/buttons/Button';
import { Text } from '@/ui/primitives/typography';
import { Box } from '@/ui/primitives/ui-layout';
import React from 'react'

const HIWorksList = () => {
  return (
    <Box className='w-full flex flex-col gap-[50px] h-full p-[20px] items-center justify-center'>
        <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-3">
            <Text className='text-[36px] font-[500] leading-[40px]'>How it works</Text>
            <Text className='text-[16px]'>Get started in minutes and enjoy fast, secure gameplay.</Text>
        </div>

        <div className="flex flex-col gap-4">
        {howItWorksList.map((list) => (
        <div className="flex items-center gap-4" key={list.name}>
            <div className="w-[50px] h-[44px] pt-1 rounded-[12px] bg-[#0284C7CC]"/>

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
  )
}

export default HIWorksList;
