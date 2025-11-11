import React from "react";
import Image from "next/image";
import { Box, HStack } from "@/ui/primitives/ui-layout";
import { Text } from "@/ui/primitives/typography";

// icons
import GameIcon from "@/svgs/new/energy.svg";
import CubeIcon from "@/svgs/cube.svg";
import ApkIcon from "@/svgs/apk.svg";
import One from '@/svgs/new/1.svg';
import Two from '@/svgs/new/2.svg';
import Three from '@/svgs/new/1.svg';

const HeroBox = () => {

  const d = [
    {text: 'Welcome Bonus up to 500 NGN', icon: One},
    {text: 'Swift and timely Withdrawals', icon: Two},
    {text: 'Sports betting and Virtual Sports', icon: Three},
  ]


  return (
    <Box className="my-[4rem] lg:my-[6rem] max-w-[1400px] w-full mx-auto px-2">
      <HStack className="flex flex-col-reverse mx-auto lg:flex-row lg:justify-between">
        {/* left */}
        <Box className="py-[2rem]">
          <Text
            className={
              "font-medium text-[2.5rem] md:text-[3rem] lg:text-[4rem] md:tracking-normal md:leading-[3rem] lg:leading-[5rem] leading-[3.6rem] relative"
            }
          >
            <span className="text-[#eee]">Prepare</span> to 
            explore, <br/> play  and{" "} <span className="text-[#64C3FC]">win</span>
            <br />
            <span className="relative inline-block font-bold-italic">
              games
              <span className="absolute bottom-[8px] left-0 w-full h-[4px] bg-[#ffba08]"></span>
            </span>
          </Text>
          <Text
            className={
              "font-regular text-[1rem] md:text-[20px] mt-[.4rem]"
            }
          >
            Discover popular games, fund your wallet and start winning{" "}
          </Text>
          <HStack className="inline-flex my-[.5rem] bg-[#ffffff] text-center py-[.4rem] rounded-[10px] px-[1.5rem] gap-2 ml-[1rem] mt-[20px] items-center justify-center">
            <Image priority src={CubeIcon} alt="game" width={26} height={26} />
            <Text className="text-[#000] text-[.9rem] pt-[3px]">
              Start Playing
            </Text>
          </HStack>
          <HStack className="inline-flex my-[.5rem] border border-[#ffffff] text-center py-[.4rem] rounded-[10px] px-[1.5rem] gap-2 ml-[1rem] items-center justify-center">
            <Image priority src={ApkIcon} alt="apk" width={26} height={26} />
            <Text className="text-[#ffffff] text-[.9rem] pt-[3px]">
              Download APK
            </Text>
          </HStack>
        </Box>

        {/* right */}
        <Box className="">
          <Image priority src={GameIcon} alt="game" className="w-[420px] h-[460px] md:w-[470px] md:h-[600] lg:w-[720px] lg:h-[750px]" />
        </Box>
      </HStack>

      <div className="hidden lg:flex items-center justify-around w-[800px] mx-auto mt-4">
        {d.map((d, i) => (
        <Box className="flex items-center gap-2 w-[220px] h-[64px]" key={i}>
          <Box className="h-[64px] w-[68px] rounded-md bg-[#166594] flex items-center justify-center">
            <Image src={d.icon} alt={d.text} width={40} height={40} />
          </Box>
          <Text>{d.text}</Text>
        </Box>
        ))}

      </div>
    </Box>
  );
};

export default HeroBox;
