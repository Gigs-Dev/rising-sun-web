import React from 'react';

import { Box } from '@/ui/primitives/ui-layout';
import GoBackButton from './general/GoBackBtn';


const UserProfileLayout = ({children}: {children: React.ReactNode}) => {

  return (
    <>
     <main className='bg-[#0E132C] w-full min-h-screen'>
         <Box className='flex flex-col max-w-[1400px] gap-6 px-1 py-5 mx-auto'>
          <GoBackButton/>

             {children}
         </Box>
     </main>
    </>
  )
}

export default UserProfileLayout;
