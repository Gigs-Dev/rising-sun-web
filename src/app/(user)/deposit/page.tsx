import { Input } from '@/ui/primitives/TextField';
import { Span, Text } from '@/ui/primitives/typography';
import { Flex } from '@/ui/primitives/ui-layout';
import React from 'react'

const Deposit = () => {
  return (
   <Flex className='flex-col justify-center'>
        <div className=""></div>

        <Text>DEPOSIT FUNDS</Text>

        <Span text='Add money to your accound and start betting immediately' className='' />

        <Input label='Amount' />
   </Flex>
  )
}

export default Deposit;
