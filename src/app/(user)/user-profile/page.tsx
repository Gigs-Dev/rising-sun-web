import Button from '@/ui/primitives/buttons/Button';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import { Span, Text } from '@/ui/primitives/typography';
import Image from 'next/image';
import React from 'react'


// SVGs
import user from '@/svgs/new/user-profile-pic.svg';
import svg from '@/svgs/new/SVG.svg'
import { MoveDownRight, PanelTopClose, ChevronRight } from 'lucide-react';
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
                <Box className='bg-[#FFFFFF08] flex border border-[#FFFFFF1A] rounded-[12px] p-3 gap-3 w-full lg:w-[387px] '>
                    <div className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[12px] p-2 w-[32px] h-[32px]">
                        <Image src={svg} alt='' width={16} height={16} />
                    </div>

                    <Box className="flex flex-col gap-1">
                        <Text className="text-[18px] text-[#FFFFFF]">KYC</Text>
                        <Span 
                            text='Increase your limits by verifying your identity.' className='text-[14px] text-[#FFFFFFB2] w-2/3' />
                    </Box>

                    <Span 
                        text='Coming soon' 
                        className='text-[#67E8F9] bg-[#22D3EE33] text-[10px] leading-[16.5px] text-center flex items-center justify-center pt-[4px] px-[4px] py-1 rounded-2xl w-[85px] h-fit' />
                </Box>

                    {/* Bank information */}
                <Flex className='bg-[#FFFFFF08] border border-[#FFFFFF1A] rounded-[12px] p-3 gap-3 w-full lg:w-[387px]'>
                    <div className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[12px] p-2 w-[32px] h-[32px]">
                        <Image src={svg} alt='' width={16} height={16} />
                    </div>

                    <Box className="flex flex-col gap-1">
                        <Text className="text-[18px] text-[#FFFFFF]">Bank Information</Text>
                        <Span 
                            text='Update your bank details for cash withdrawals' className='text-[14px] text-[#FFFFFFB2] w-2/3' />
                    </Box>
                </Flex>
            </section>

            {/* Transaction history */}
            <Box className='max-w-[800px] w-full rounded-[16px] flex flex-col'>
                <Flex className='justify-between bg-[#FFFFFF08] px-[20px] py-[16px] rounded-[16px]' >
                    <Text className='text-[#FFFFFF] text-[18px] leading-[28px] font-semibold tracking-[0.45%]'>Transaction History</Text>

                    <Button className='text-[#FFFFFFB2] text-[14px] leading-[20px] tracking-[0%] font-[400]' rightIcon={<ChevronRight />}>
                        <Link href='/transaction'>
                            View all
                        </Link>
                    </Button>
                </Flex>
            </Box>
        </Box>

  )
}

export default UserProfile;

