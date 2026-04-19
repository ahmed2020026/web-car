import { Link } from "react-router-dom"
import { assets } from "../SYSTEM/assets"

const Footer = () => {
    return (
        <div className="container border-t border-gray-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 p-2">
                <div>
                    <div className="max-w-xs">
                        <img src={assets.logo} alt="logo" className="block mb-2" />
                        <p className="text-sm text-gray-600">Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.</p>
                        <div className="flex justify-start items-center mt-5 mb-2.5">
                            <img src={assets.facebook_logo} alt="facebook" className="p-1 w-7 h-7 cursor-pointer hover:opacity-70" />
                            <img src={assets.instagram_logo} alt="instagram" className="p-1 w-7 h-7 cursor-pointer hover:opacity-70" />
                            <img src={assets.twitter_logo} alt="twitter" className="p-1 w-7 h-7 cursor-pointer hover:opacity-70" />
                            <img src={assets.gmail_logo} alt="gmail" className="p-1 w-7 h-7 cursor-pointer hover:opacity-70" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        <div>
                            <h2 className="text-lg font-medium uppercase mb-2">Quick Links</h2>
                            <ul>
                                <li><Link to={'/'} className="text-sm text-gray-600 mb-1">Home</Link></li>
                                <li><Link to={'/cars'} className="text-sm text-gray-600 mb-1">Cars</Link></li>
                                <li><Link to={'/list'} className="text-sm text-gray-600 mb-1">List Your Cars</Link></li>
                                <li><Link to={'/about'} className="text-sm text-gray-600 mb-1">About US</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium uppercase mb-2">Resources</h2>
                            <ul>
                                <li><Link to={'/'} className="text-sm text-gray-600 mb-1">Help Center</Link></li>
                                <li><Link to={'/cars'} className="text-sm text-gray-600 mb-1">Terms of Services</Link></li>
                                <li><Link to={'/list'} className="text-sm text-gray-600 mb-1">Privacy Policy</Link></li>
                                <li><Link to={'/about'} className="text-sm text-gray-600 mb-1">Insurance</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium uppercase mb-2">Contact</h2>
                            <ul>
                                <li className="text-sm text-gray-600 mb-1">1234 Luxury Drive</li>
                                <li className="text-sm text-gray-600 mb-1">San Francisco, CA 94107</li>
                                <li className="text-sm text-gray-600 mb-1">+1 234 567890</li>
                                <li className="text-sm text-gray-600 mb-1">info@example.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 border-t border-gray-300 mt-5">
                <p className="text-sm text-gray-600 text-center">© 2026 Brand. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer