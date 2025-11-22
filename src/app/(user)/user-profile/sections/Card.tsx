import { Text } from '@/ui/primitives/typography';
import { Flex } from '@/ui/primitives/ui-layout';
import { ArrowDownRight, Banknote } from 'lucide-react';
import React from 'react';


interface dataProps {
    id: number;
    type: string;
    date: string;
    amount: string;
    type1: string
}

// Credit and Debit Transaction card
const Card = ({data}: {data: dataProps}) => {
  return (
    <Flex className='justify-between py-[12px] px-[20px] border-b border-b-[#FFFFFF0D]'>
        <Flex className='gap-2'>
            <div className={` ${data?.type1 === 'credit' ? 'bg-[#10B98126]': 'bg-[#F43F5E26]'} w-[32px] h-[32px] rounded-[8px] flex justify-center items-center p-[8px]`}>
                {data.type1 === 'credit' ?
                (
                    <ArrowDownRight style={{width: '16px', height: '16px', color: '#6EE7B7'}} />
                ): (
                    <Banknote style={{width: '16px', height: '16px', color: '#FDA4AF'}}/>
                )}
            </div>

            <div className="flex flex-col gap-0.5">
                <Text className='text-[15px] leading-[20px] tracking-[0%] text-[#FFFFFFFF] font-[500]'>{data?.type}</Text>
                <Text className='text-[12px] leading-[16px] tracking-[0%] text-[#FFFFFF99] font-[400]'>{data?.date}</Text>
            </div>
        </Flex>

        <Text className={`${data.type1 === 'credit' ? 'text-[#6EE7B7]': 'text-[#FDA4AF]'} text-[14px] leading-[20px] tracking-[0.35%] font-semibold`}>
           {data.type1 === 'credit' ? '+ ': '- '} ₦{data.amount}
        </Text>
    </Flex>
  )
}

export default Card;


