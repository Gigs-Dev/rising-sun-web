import { Button } from '@/ui/primitives/buttons/Button';
import { Text } from '@/ui/primitives/typography';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import React from 'react'

const PopularGames = () => {
  return (
    <div className='min-h-[800px] bg-[#070A1B]'>
      <Flex className='flex-col '>
        <Box className='w-[800px] flex justify-between mt-[100px]'>
          <div className="flex flex-col">
            <Text className='text-[32px]'>Popular games</Text>
            <Text className='text-[20px]'>Play crowd favorites or discover something new.</Text>
          </div>

          <Button className='bg-[transparent] border bg-[#070A1B] border-[#323444] mt-[30px] w-[124px]'>
            Browse all
          </Button>
        </Box>
      </Flex>
    </div>
  )
}

export default PopularGames;
