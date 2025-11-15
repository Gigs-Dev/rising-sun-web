import React from "react";
import Image from "next/image";
import { Box, HStack } from "@/ui/primitives/ui-layout";
import { Text } from "@/ui/primitives/typography";
import { GameCollectionsList } from "@/data/game-collections";
import Link from 'next/link'




const GameCollections = () => {
  return (
    <Box className="mt-[5rem] mx-auto min-h-[925px] py-3">
      <Box className="flex flex-col items-center justify-center">
        <Text className="text-center font-medium text-[1.4rem] md:text-[2.1rem] tracking-[.1px] mb-[1rem] mt-3 px-2 lg:px-[5rem] inline-flex">
          BET SMART .  PLAY BIG  . WIN BIGGER 
        </Text>

         <Text className="text-center font-medium text-[14px] lg:text-[1.4rem] md:text-[1.1rem] mb-[1rem] px-1 lg:px-[4rem] w-full lg:w-[680px]">
         Choose your favorite game, place your bet, and experience the thrill. We’ve got something for every player — anytime, anywhere
        </Text>
      </Box>

      <Box className="flex flex-col items-center">
        
        {/* GAME LISTING */}
        <HStack className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 justify-center items-center">
          {GameCollectionsList.map((game) => {
            const { name } = game;
            return (
              <Link href={game.link} key={game.link}>
                <Box className="flex flex-col items-center">
                  <Box className="w-[20rem] h-[20rem] md:w-[17rem] md:h-[17rem] rounded-[20px] flex items-center justify-center">
                    <Image alt="img" src={game.icon} width={320} height={320} />
                  </Box>
                  <Text className="mt-[10px]">{name}</Text>
                </Box>
              </Link>
            );
          })}

          <Box className="w-[20rem] h-[20rem] border border-[#ddd8df] md:w-[17rem] md:h-[17rem] rounded-[20px] flex flex-col gap-2 items-center justify-center bg-[#1C2037] mb-[30px]">
             <Image src='/games/circle.svg' alt="Browse" width={101} height={91} />
             <Text className="text-[20px]">Browse all</Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default GameCollections;
