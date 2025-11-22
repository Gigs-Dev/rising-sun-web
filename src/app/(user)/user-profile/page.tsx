import Button from '@/ui/primitives/buttons/Button';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import { Span, Text } from '@/ui/primitives/typography';
import TransactionHistory from './sections/TransactionHistory';
import UserInfo from './sections/UserInfo';
import Image from 'next/image';
import React from 'react'


// SVGs
import user from '@/svgs/new/user-profile-pic.svg';
import { MoveDownRight, PanelTopClose } from 'lucide-react';
import Link from 'next/link';


const UserProfile = () => {

  return (
        <Box className='flex flex-col lg:flex-row gap-6'>
            {/* User Profile */}
            <section className='flex flex-col gap-4'>
                <Box className='flex flex-col gap-4 w-full lg:w-[387px] lg:p-[20px] border-0 lg:border-[1px] lg:bg-[#FFFFFF0A] lg:border-[#2D2D3E] lg:rounded-[16px]'>
                    <Flex className='gap-2'>
                        <Image src={user} alt='USER' width={80} height={80} />
                        <section className='flex flex-col gap-0.5 mt-auto'>
                            <Text className='text-[20px] text-[#FFFFFF] leading-[28px] tracking-[0.5%]'>Joshua Ejiro</Text>
                            <Span className='text-[#6EE7B7] bg-[#10B98126] text-[11px] leading-[16.5px] text-center flex items-center justify-center pt-[4px] px-[8px] rounded-2xl w-fit ' text='Verified'/>
                        </section>
                    </Flex>

                    <div className="flex flex-col bg-[#FFFFFF1A] border border-[#2D2D3E] rounded-[12px] p-3 gap-1">
                        <Span className='text-[#FFFFFF99] text-[12px] font-[400] leading-[16px] tracking-[0%]' text='Balance'/>
                        <Text className='text-[18px] text-[#FFFFFF] leading-[28px] tracking-[0.45%] font-semibold'>₦ 12,480.22</Text>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <Button leftIcon={<MoveDownRight style={{height: '15px', color: '#7DD3FC'}} />} className='bg-[#0EA5E933] w-full flex items-center justify-center text-center'>
                            <Link href='/deposit' className='w-full h-full'>
                            Deposit
                            </Link>
                        </Button>

                        <Button leftIcon={<PanelTopClose style={{height: '15px', color: '#7DD3FC'}}/>} className='bg-[#6366F133] w-full'>Withdraw</Button>
                    </div>
                </Box>


                {/* KYC Section */}
            <UserInfo title='KYC' desc='Increase your limits by verifying your identity.' others='Coming soon' />

            {/* Bank information */}
            <UserInfo title='Bank Information' desc='Update your bank details for cash withdrawals' className='items-center'/>
        </section>

            {/* Transaction history */}
            <div className="w-full">
                <TransactionHistory/>
            </div>

        </Box>

  )
}

export default UserProfile;

