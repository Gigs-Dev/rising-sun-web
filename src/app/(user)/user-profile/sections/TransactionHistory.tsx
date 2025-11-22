import Button from '@/ui/primitives/buttons/Button';
import { Span, Text } from '@/ui/primitives/typography';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Data
import { transData } from '@/data/mockData';
import Card from './Card';


const TransactionHistory = () => {
  return (
    <Box className='max-w-[800px] w-full rounded-t-[16px] flex flex-col border border-[#FFFFFF0D]'>
        <Flex className='justify-between bg-[#FFFFFF08] px-[20px] py-[16px] w-full rounded-t-[16px]' >
            <Text className='text-[#FFFFFF] text-[18px] leading-[28px] font-semibold tracking-[0.45%]'>Transaction History</Text>

            <Button className='text-[#FFFFFFB2] text-[14px] leading-[20px] tracking-[0%] font-[400]' rightIcon={<ChevronRight />}>
                <Link href='/transaction'>
                    View all
                </Link>
            </Button>
        </Flex>

        {transData.map((data) => (
            <Card data={data} key={data?.id}/>
        ))}
            
    </Box>
  )
}

export default TransactionHistory;
