import Button from '@/ui/primitives/buttons/Button';
import { Span, Text } from '@/ui/primitives/typography';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import React from 'react'

const TransactionHistory = () => {
  return (
   <Box className='flex flex-col gap-4'>
        <Flex className='flex-col lg:flex-row lg:justify-between gap-4'>
            <div className="flex flex-col gap-1">
                <Text className='text-[#FFFFFF] text-[24px] leading-[32px] font-semibold tracking-[0.45%] text-center lg:text-left'>Transaction History</Text>
                <Span 
                    text='Your latest deposits and withdrawals.' 
                    className='text-[#FFFFFFB2] text-[14px] leading-[20px] tracking-[0%] font-[400] text-center lg:text-left' />
            </div>

            <Button className='bg-[#b29d9d0d] ml-auto lg:ml-0'>Export CSV</Button>
        </Flex>
   </Box>
  )
}

export default TransactionHistory;
 