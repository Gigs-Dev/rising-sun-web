import { popularGamesList } from '@/data/game-collections';
import { Button } from '@/ui/primitives/buttons/Button';
import { Text } from '@/ui/primitives/typography';
import { Box, Flex } from '@/ui/primitives/ui-layout';
import Image from 'next/image';
import React from 'react'
import HowItWorks from "./HowItWorks";

const PopularGames = () => {
  return (
    <div className='min-h-[900px] bg-[#070A1B] w-full px-2'>
      <Flex className='flex flex-col p-4 gap-[23px]'>
        <Box className='w-full lg:w-[800px] flex flex-col lg:flex-row justify-between mt-[100px]'>
          <div className="flex flex-col">
            <Text className='text-[32px]'>Popular games</Text>
            <Text className='text-[16px] md:text-[20px]'>Play crowd favorites or discover something new.</Text>
          </div>

          <Button className='bg-[transparent] border border-[#323444] mt-[30px] px-5 py-3 flex w-[170px] ml-[160px] md:ml-[80%] lg:ml-0'>
            <Text className='text-center text-[16px]'>Browse all</Text>
          </Button>
        </Box>

        <div className="flex flex-col lg:flex-row items-center gap-5 justify-center">
          {
            popularGamesList.map((game) => (
            <Box className='flex flex-col gap-2 h-[328px] w-[353px] bg-[#2D2D3E] rounded-[20px]'>
              <div className="flex-1 overflow-y-hidden">
                <Image src={game.icon} alt='' width={353} height={178} className='rounded-lg' />
              </div>

              <Box className="flex-1 flex flex-col p-4 gap-1.5">
                <Text className='text-[26px] font-[500] leading-[28px]'>{game.name}</Text>
                <Text className='text-[14px] font-[400]'>{game.desc}</Text>

                <div className="flex items-center gap-4">
                  <Button className='bg-[#0284C7] font-[400] w-[101px]'>Play</Button>
                  <Button className='border-[0.2px] border-[#ffffff38] bg-transparent hover:bg-transparent font-[400] w-[101px]'>Details</Button>
                </div>
              </Box>
            </Box>
            ))
          }
        </div>
      </Flex>

      <HowItWorks/>
    </div>
  )
}

export default PopularGames;
