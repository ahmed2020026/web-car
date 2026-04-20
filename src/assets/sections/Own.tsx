import ButtonClick from "../component/ui/ButtonClick"
import { assets } from "../SYSTEM/assets"

const Own = () => {
    return (
        <div className="container mt-20 mb-10">
            <div className="p-5 grid gap-10 lg:gap-5 overflow-hidden justify-center lg:grid-cols-3 rounded-md bg-gradient-to-l from-blue-400 to-blue-700 text-white">
                <div className="lg:col-span-2 text-center md:text-left" data-aos="fade">
                    <h2 className="font-semibold text-2xl mb-1.5">Do You Own a Luxury Car?</h2>
                    <div>
                        <p>Monetize your vehicle effortlessly by listing it on CarRental.</p>
                        <p className="mb-5">We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>
                        <ButtonClick children={'List your cars'} ClassName="bg-gray-200 text-gray-900 hover:bg-gray-300 px-7"/>
                    </div>
                </div>
                <div className="p-0 md:px-20 lg:p-0" data-aos="fade-left">
                    <img src={assets.banner_car_image} alt="banner_car_image" className="h-48 w-full" />
                </div>
            </div>
        </div>
    )
}

export default Own