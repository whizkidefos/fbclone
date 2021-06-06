import Image from 'next/image';
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <div>
            
            {/* Left */}
            <div className="flex items-center">
                <Image src='/images/facebook-logo.png' width={50} height={50} layout='fixed' />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-500" />
                    <input type="text" placeholder='Search Facebook' className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-400" />
                </div>
            </div>

            {/* center */}

            {/* Right */}

        </div>
    )
}

export default Header
