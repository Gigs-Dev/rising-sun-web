'use client';

import { useRouter } from 'next/navigation';
import Button from '@/ui/primitives/buttons/Button';

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className='bg-[#22D3EE4D] text-[#67E8F9] text-[11px] rounded-full leading-[16.5px] font-[400] tracking-[0%] text-center w-max'
    >
      Go back
    </Button>
  );
};

export default GoBackButton;
