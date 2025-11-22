import React from 'react'
import Button from '@/ui/primitives/buttons/Button';
import { Input } from '@/ui/primitives/TextField';
import { Span, Text } from '@/ui/primitives/typography';
import { Flex } from '@/ui/primitives/ui-layout';

// ICONS
import { ArrowRight, Landmark } from 'lucide-react';
import BankIc from '@/svgs/new/deposit.svg'
import Image from 'next/image';


const Deposit = () => {
    
  return (
   <Flex className='flex-col justify-center h-[70vh] gap-5 py-3'>
        <div className="flex items-center justify-center bg-[#FFFFFF0D] w-[65px] h-[65px] rounded-[8px]">
            <Landmark style={{height: '50px', width: '50px'}}/>
            {/* <Image src={} alt='' width={50} height={50}/> */}
        </div>

        <Text className='text-[20px] leading-[26px] tracking-[0%]'>DEPOSIT FUNDS</Text>

        <Span text='Add money to your accound and start betting immediately' className='text-[16px] leading-[26px] tracking-[0%] font-[400]' />

        <Input label='Amount' 
            type='number'
            placeholder='Enter Amount' 
            className='no-arrows w-[320px] lg:w-[553px] bg-[#FFFFFF0D] border-0 py-5 px-4 text-[#9CA3AF] text-[18px] font-semibold leading-[100%]' />

        <Button 
            rightIcon={ <ArrowRight />} 
            className='text-[#0A0A0A] text-[14px] font-[500] leading-[100%] w-[280px] py-[10px] px-[16px] tracking-[100%] bg-[#818CF8]'>Proceed to deposit</Button>
   </Flex>
  )
}

export default Deposit;
