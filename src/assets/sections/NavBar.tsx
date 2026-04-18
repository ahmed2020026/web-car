import { Link } from "react-router-dom"
import { assets } from "../SYSTEM/assets"
import ButtonClick from "../component/ui/ButtonClick"
import { ChartNoAxesColumn , X} from "lucide-react"
import { useRef, useState } from "react"
import { useClickOut } from "../hooks/useClickOut"

const NavBar = () => {
    const [openMenu , setOpen] = useState(false);
    const MenuRef = useRef<HTMLElement>(null);
    const BtnRef = useRef<HTMLButtonElement>(null)

    useClickOut({
        btn: BtnRef,
        ref: MenuRef,
        func : () => setOpen(false)
    })
    
    return (
        <>
            <div className="container relative">
                <div className="flex justify-between items-center">
                    <Link to = {'/'} className="block">
                        <img src={assets.logo} alt="logo" />
                    </Link>
                    {/* menu in large screen */}
                    <nav className="hidden sm:block">
                        <ul className="flex justify-start items-center gap-3 bg-white">
                            <li className="p-2">
                                <Link to={'/'} className="text-base text-gray-500 hover:text-gray-800 transition-all">Home</Link>
                            </li>
                            <li className="p-2">
                                <Link to={'/cars'} className="text-base text-gray-500 hover:text-gray-800 transition-all">Cars</Link>
                            </li>
                            <li className="p-2">
                                <Link to={'/bookings'} className="text-base text-gray-500 hover:text-gray-800 transition-all">My Bookings</Link>
                            </li>
                            <li className="p-2">
                                <Link to={'/list'} className="text-base text-gray-500 hover:text-gray-800 transition-all">List Cars</Link>
                            </li>
                            <li>
                                <Link to={'/login'} className="block bg-gray-700 hover:bg-gray-900 transition-all text-white px-5 py-1.5 rounded">Login</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* menu in small screen */}
                    <nav ref={MenuRef} className={`sm:hidden transition-all duration-300 ease-in-out
                            ${openMenu
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 -translate-y-2 pointer-events-none'} absolute top-full left-0 w-full p-2 z-0`}>
                        <ul className="bg-white rounded shadow">
                            <li className="p-2">
                                <Link to={'/'} className="block text-left text-base text-gray-500 hover:text-gray-800 transition-all">Home</Link>
                            </li>
                            <li className="p-2">
                                <Link to={'/cars'} className="block text-left text-base text-gray-500 hover:text-gray-800 transition-all">Cars</Link>
                            </li>
                            <li className="p-2">
                                <Link to={'/bookings'} className="block text-left text-base text-gray-500 hover:text-gray-800 transition-all">My Bookings</Link>
                            </li>
                            <li className="p-2">
                                <Link to={'/list'} className="block text-left text-base text-gray-500 hover:text-gray-800 transition-all">List Cars</Link>
                            </li>
                            <li className="p-2">
                                <Link to={'/login'} className="inline-block bg-gray-700 hover:bg-gray-900 transition-all text-white px-5 py-1.5 rounded">Login</Link>
                            </li>
                        </ul>
                    </nav>
                    
                    <ButtonClick ref={BtnRef} aria-label={"Toggle menu"} onClick={() => setOpen(prev => !prev)} ClassName={'text-gray-700 hover:bg-gray-100 sm:hidden'} children={!openMenu? <ChartNoAxesColumn style={{transform:'rotateZ(-90deg)'}} /> : <X /> }/>
                </div>
            </div>
        </>
    )
}

export default NavBar