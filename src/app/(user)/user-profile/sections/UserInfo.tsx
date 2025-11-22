import { Box } from '@/ui/primitives/ui-layout';
import Image from 'next/image';
import { Span, Text } from '@/ui/primitives/typography';
import React, { FC } from 'react'


// ICONS
import svg from '@/svgs/new/SVG.svg';


interface UserInfoProp {
    title: string;
    desc: string;
    others?: string;
    className?: string;
}

const UserInfo: FC<UserInfoProp> = ({title, desc, others, className}) => {
  return (
    <Box className={`bg-[#FFFFFF08] flex border border-[#FFFFFF1A] rounded-[12px] p-3 gap-3 w-full lg:w-[387px] ${className}`}>
        <div className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-[12px] p-2 w-[32px] h-[32px]">
                <Image src={svg} alt='' width={16} height={16} />
            </div>

            <Box className="flex flex-col gap-1">
                <Text className="text-[18px] text-[#FFFFFF]">{title}</Text>
                <Span 
                    text={desc} className='text-[14px] text-[#FFFFFFB2] w-2/3' />
            </Box>

          {others &&  <Span 
                text={others} 
                className='text-[#67E8F9] bg-[#22D3EE33] text-[10px] leading-[16.5px] text-center flex items-center justify-center pt-[4px] px-[4px] py-1 rounded-2xl w-[85px] h-fit' />}
    </Box>
  )
}

export default UserInfo;
