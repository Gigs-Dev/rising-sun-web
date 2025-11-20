import React from 'react';

import Button from '@/ui/primitives/buttons/Button';
import { Box } from '@/ui/primitives/ui-layout';
import Link from 'next/link';


const UserProfileLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
     <main className='bg-[#0E132C] w-full min-h-screen'>
         <Box className='flex flex-col max-w-[1400px] gap-6 px-1 py-5 mx-auto'>
            <Link href='/'>
             <Button className='bg-[#22D3EE4D] text-[#67E8F9] text-[11px] rounded-full leading-[16.5px] font-[400] tracking-[0%] text-center w-max'>Go back</Button>
            </Link>

             {children}
         </Box>
     </main>
    </>
  )
}

export default UserProfileLayout;
