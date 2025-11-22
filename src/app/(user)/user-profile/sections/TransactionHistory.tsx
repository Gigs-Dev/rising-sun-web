import Button from '@/ui/primitives/buttons/Button';
import { Span, Text } from '@/ui/primitives/typography';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Data
import { transData } from '@/data/mockData';
import BasicTable from '@/ui/primitives/tables/BasicTable';


const columns = [
    {
        // header: 'type',
        accessor: 'type',
        className: ''
    },
    {
        // header: 'amount',
        accessor: 'amount',
        className: ''
    },
];


const renderRow = (item: any) => (
    <tr className='bg-transparent border-b border-'>
        <td className='py-[12px] px-[20px] flex gap-2'>
            <div className=""></div>

            <div className="flex flex-col gap-1">
                <Text>Deposit via Card</Text>
                <Span text='Apr 1, 14:22' className=''/>
            </div>
        </td>

         <td className='py-[12px] px-[20px]'>+ $500.00</td>
    </tr>
)

const TransactionHistory = () => {
  return (
    <Box className='max-w-[800px] w-full rounded-[16px] flex flex-col'>
        <Flex className='justify-between bg-[#FFFFFF08] px-[20px] py-[16px] rounded-[16px]' >
            <Text className='text-[#FFFFFF] text-[18px] leading-[28px] font-semibold tracking-[0.45%]'>Transaction History</Text>

            <Button className='text-[#FFFFFFB2] text-[14px] leading-[20px] tracking-[0%] font-[400]' rightIcon={<ChevronRight />}>
                <Link href='/transaction'>
                    View all
                </Link>
            </Button>
        </Flex>

        <BasicTable data={transData} columns={columns} renderRow={renderRow}/>
    </Box>
  )
}

export default TransactionHistory;
