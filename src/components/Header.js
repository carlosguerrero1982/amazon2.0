import Image from "next/image"
import {MenuIcon,SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline"
import {signIn,signOut,useSession} from "next-auth/client"


function Header() {

    const[session] = useSession()

    
    return (
    
    <header>

        <div className="flex items-center flex-grow p-1 py-0 bg-amazon_blue">

            <div className="flex items-center flex-grow px-2 mt-2 sm:flex-grow-0">
                <Image className="cursor-pointer" src="https://links.papareact.com/f90" width={100} height={100} objectFit="contain" />

            </div>

        {/* search */}

            <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 sm:flex">
                <input className="flex-grow flex-shrink w-6 h-full p-2 rounded rounded-l-md focus:outline-none" type="text"/>
                <SearchIcon className="h-12 p-4" />
            </div>

            {/* right */}

            <div className="flex items-center px-2 space-x-6 text-xs text-white whitespace-nowrap">
                <div onClick={signIn} className=" link">
                    <p>{session ? `Hello, ${session.user.name}`:`SignIn`}</p>
                    <p className="font-extrabold md:text-sm">Accounts &  Lists</p>
                </div>

                <div className=" link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">Orders</p>
                </div>

                <div className="relative flex items-center link">
                <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">0</span>
                    <ShoppingCartIcon className="h-10" />
                    <p className="hidden font-extrabold md:inline md:text-sm">Basket</p>
                </div>
            </div>
          
        </div>



        {/* bottom */}
      <div className="flex items-center p-2 pl-6 space-x-3 text-white bg-amazon_blue-light">

            <p className="flex items-center link">
                <MenuIcon className="h-6 mr-1" />
                All
            </p>

            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link">Today´s Deal</p>
            <p className="hidden link lg:inline-flex">Electronics</p>
            <p className="hidden link lg:inline-flex">Food & Grocery</p>
            <p className="hidden link lg:inline-flex">Prime</p>
            <p className="hidden link lg:inline-flex">Buy Again</p>
            <p className="hidden link lg:inline-flex">Shop Toolkit</p>
            <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>


    </header>
    )
}

export default Header
