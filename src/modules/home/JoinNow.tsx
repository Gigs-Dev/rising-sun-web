import Button from '@/ui/primitives/buttons/auth-button';
import { Text } from '@/ui/primitives/typography';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import React from 'react'

const JoinNow = () => {
  return (
    <div className='bg-[#070A1B] w-full py-12'>
        <Flex className='w-full lg:w-[1000px] h-full md:h-[260px] bg-[#0284C7] p-[34px] lg:rounded-[32px] flex flex-col gap-[50px] md:flex-row items-center justify-between mx-auto'>
            <Box className='flex flex-col gap-4 w-full md:w-[490px]'>
                <Text className='text-[24px] text-center md:text-start md:text-[36px] leading-[25px] md:leading-[40px] font-[500]'>Join now and claim your welcome bonus</Text>
                <Text className='text-[16px] font-[400] leading-[24px] text-center md:text-start'>Start playing instantly</Text>

                <Box className='flex items-center gap-4'>
                    <Button>Create free account</Button>
                    <Button>Terms apply</Button>
                </Box>
            </Box>

            <Box className='bg-[#FFFFFF33] w-[310px] md:w-[370px] h-[100px] p-4 rounded-[16px] flex flex-col gap-3'>
                <div className="flex items-center justify-between">
                    <Text>Bonus progress</Text>
                    <Text>0/500 NGN</Text>
                </div>

                <progress value={40} max={100} className="progress-custom h-2 w-full"></progress>

                <Text className='text-[12px] font-[400] leading-[16px]'>Wager on any game to unlock your bonus faster.</Text>

            </Box>
        </Flex>
    </div>
  )
}

export default JoinNow;
