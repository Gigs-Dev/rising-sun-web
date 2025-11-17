import { howItWorksCardList } from '@/data/game-collections';
import { Text } from '@/ui/primitives/typography';
import React from 'react'

const HowItWorkCard = () => {
  return (
    <div className="flex items-center justify-between gap-3 w-full">
        {howItWorksCardList.map((card, index) => (
            <div className="w-[260px] h-[68px] py-3 px-6 flex flex-col items-center justify-center bg-[#2D2D3E] rounded-[12px]" key={index}>
                <Text className='font-[500] text-[20px] leading-[28px] text-[#fff]'>{card.name}</Text>
                <Text className='text-[#FFFFFF99] text-[12px] font-[400]'>{card.desc}</Text>
            </div>
        ))}
    </div>
  )
}

export default HowItWorkCard;
