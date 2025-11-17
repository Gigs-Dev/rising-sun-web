import { Text } from '@/ui/primitives/typography';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import React from 'react';

// ICONS
import { Mail, Phone } from 'lucide-react';
import { Input } from '@/ui/primitives/TextField';


const HelpCenter = () => {
  return (
    <Flex className='h-full w-full justify-center'>
      <Box className='flex justify-center flex-col lg:flex-row gap-[50px] lg:gap-[64px] w-full lg:w-[1024px] mt-8 p-[48px]'>
        <Box className='flex flex-col gap-3 w-[345px]'>
          <Text className='text-[#3B82F6] text-[28px] leading-[28px] font-[400] '>Help Center</Text>
          <Text className='text-[40px] leading-[60px] font-[500] tracking-[0%]'>Contact Support</Text>
          <Text className='text-[18px] leading-[30px] font-[400] text-[#D4D4D4] tracking-[0%]'>Have questions about your experience so far, Send us a message now and we’ll get in touch?</Text>

          <div className="flex items-center gap-2">
            <Mail style={{color: '#3B82F6'}}/>

            <div className="flex flex-col">
              <Text className='text-[#FFFFFF] text-[14px] leading-[20px] tracking-[0%]'>Email</Text>
              <Text className='text-[#A3A3A3] text-[14px] leading-[20px] tracking-[0%]'>risingsun@gmail.com</Text>
            </div>
          </div>


          <div className="flex items-center gap-2">
            <Phone style={{color: '#3B82F6'}}/>

            <div className="flex flex-col">
              <Text className='text-[#FFFFFF] text-[14px] leading-[20px] tracking-[0%]'>Phone</Text>
              <Text className='text-[#A3A3A3] text-[14px] leading-[20px] tracking-[0%]'>+234 913 635 1002</Text>
            </div>
          </div>
        </Box>

        <Box className='w-[380px] lg:w-[514px] bg-[#1F293733] rounded-[12px] border-[1px] border-[#2626264D] flex flex-col p-4'>
          <Text className='text-[24px] font-[500] leading-[32px] text-left tracking-[0%]'>Send us a message</Text>

          <div className="flex flex-wrap gap-3">
            <Input label="Name" placeholder="Enter your name" className='w-[215px] bg-[#404040]'/>

            <Input label="Email Address" placeholder="Enter your email" className='w-[215px] bg-[#404040]'/>

            <Input label="Subject" placeholder="Enter your email" className='w-[450px] bg-[#404040]'/>

            <Input label="Email Address" placeholder="Enter your email" className='w-[450px] bg-[#404040]'/>
          </div>
        </Box>
      </Box>
    </Flex>
  )
}

export default HelpCenter;
