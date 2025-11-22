import { Box } from '@/ui/primitives/ui-layout';
import TransactionHistory from './sections/TransactionHistory';
import UserInfo from './sections/UserInfo';
import Profile from './sections/Profile';


const UserProfile = () => {

  return (
    <Box className='flex flex-col lg:flex-row gap-6'>
        <section className='flex flex-col gap-4'>
            {/* User Profile */}
            <Profile/>

            {/* KYC Section */}
            <UserInfo title='KYC' desc='Increase your limits by verifying your identity.' others='Coming soon' />

            {/* Bank information */}
            <UserInfo title='Bank Information' desc='Update your bank details for cash withdrawals' className='items-center'/>
        </section>

        {/* Transaction history */}
        <div className="w-full">
            <TransactionHistory/>
        </div>

    </Box>

  )
}

export default UserProfile;

