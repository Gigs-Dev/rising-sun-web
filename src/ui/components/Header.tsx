"use client";

import { Box, Flex, HStack } from "@/ui/primitives/ui-layout";
import { Text } from "@/ui/primitives/typography";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import LogoIcon from "@/svgs/logo.svg";
import userIcon from "@/svgs/new/user.svg";
import MenuIcon from "@/svgs/menu.svg";
import CloseIcon from "@/svgs/close.svg";
import { TopBarData } from "@/data/top-bar-list";
// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import useUserStore from "@/store/state/use-user-state";
import { useRouter } from "next/navigation";
import { Button } from "../primitives/buttons/Button";



const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter()

  // const handlePayment = useFlutterwave(config);

  const { token, logout } = useUserStore();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleLogout = () => {
    logout();
    router.replace('/sign-in')
  }


  return (
    <Flex className="fixed top-[1px] left-0 w-full md:justify-around justify-between px-4 py-5 bg-transparent z-50">
      {/* Links container */}
      <Flex
        className={`lg:flex border border-[#555] rounded-[10px] px-3 py-1.5 bg-[#2D2D3E] backdrop-blur gap-8 w-full justify-between items-center lg:max-w-[1024px] lg:mx-auto relative h-[77px]`}
      >
        <Box className="ml-[1rem]">
          <Image
            priority
            src={LogoIcon}
            alt="recharge"
            width={50}
            height={50}
          />
        </Box>

          {/* Menu icon for small screens */}
          <Box className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <Image
              priority
              src={isMenuOpen ? CloseIcon : MenuIcon}
              alt="menu"
              width={24}
              height={24}
            />
          </Box>

        {/* Menu items */}
        <Flex
          className={`${isMenuOpen ? "flex" : "hidden"} ${
            isMenuOpen
              ? "border-b border-[#555] bg-[#31214e] text-[#f5f5f5] w-[96%] left-1/2 transform -translate-x-1/2 rounded-b-[10px] rounded-t-[4px]"
              : "border-none"
            } lg:flex flex-col lg:flex-row lg:items-center lg:gap-8 absolute lg:static top-full left-0 w-full lg:w-auto backdrop-blur lg:backdrop-blur-none lg:bg-transparent p-4 lg:p-0`}
            >

            {TopBarData.map((item) => (
                <Box
                key={item.name}
                className={`text-[.9rem] cursor-pointer pt-1 ${
                  isMenuOpen ? "py-[20px]" : "py-[0px]"
                } font-regular`}
                >
                  {item.name}
                </Box>
            ))}
            <Button className="inline-flex lg:hidden  bg-[#166594] items-center justify-center w-[181px] h-[51px] text-center py-[.4rem] rounded-[10px] px-[1.3rem] cursor-pointer">
                <Image
                  priority
                  src={userIcon}
                  alt="Sign-In"
                  width={32}
                  height={32}
                />
                <Link href="/sign-in">
                  <Text className="text-[.9rem] text-[#fff] text-center font-regular pt-1">
                    Sign In
                  </Text>
                </Link>
              </Button>
      </Flex>
  

          {/*  */}
          {( !token ) ? (
            <HStack
              className={`${
                isMenuOpen ? "border border-[#555]" : ""
              } hidden lg:inline-flex bg-[#166594] items-center justify-center w-[181px] h-[51px] text-center py-[.4rem] rounded-[10px] px-[1.3rem] cursor-pointer`}
            >
              <Image
                priority
                src={userIcon}
                alt="Sign-In"
                width={32}
                height={32}
              />
              <Link href="/sign-in">
                <Text className="text-[.9rem] text-[#fff] text-center font-regular pt-1">
                  Sign In
                </Text>
              </Link>
            </HStack>
          ) : (
            <>
            <div className="flex items-center justify-center rounded-full h-[45px] w-[45px] border-[#dff] border-2 cursor-pointer" onClick={handleLogout}>
              <span className="text-3xl mt-2 font-[500] text-center flex items-center justify-center">ZE</span>
            </div>
            {/* <Text onClick={handleLogout} className="cursor-pointer">Log out</Text> */}
            </>
          )}
      </Flex>
    </Flex>
  );
};

export default Header;
