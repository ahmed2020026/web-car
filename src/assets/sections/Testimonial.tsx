import { Star } from "lucide-react"
import { testimonial } from "../SYSTEM/assets"
import Head from "../component/ui/Head"


const Testimonial = () => {
    return (
        <div className="container mb-10">
            <Head h1="What Our Customers Say" textStyle="sm:text-4xl" other="mt-20" p={"Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    testimonial.map((pers, index) => (
                        <div key={index} data-aos='zoom-in' className="bg-white p-5 rounded-md shadow-xl hover:shadow-none hover:-translate-y-2.5 duration-500">
                            <div className="flex justify-start items-start gap-3 mb-3">
                                <img src={pers.image} alt={pers.name} className="block w-15 rounded-full h-15 shrink-0" />
                                <div className="">
                                    <h3 className="text-lg font-medium">{pers.name}</h3>
                                    <p className="text-gray-600 text-sm">{pers.location}</p>
                                </div>
                            </div>
                            <div className="mb-3 flex justify-start items-start text-blue-600 gap-0.5">
                                <Star size={15} fill="currentColor" />
                                <Star size={15} fill="currentColor"/>
                                <Star size={15} fill="currentColor"/>
                                <Star size={15} fill="currentColor"/>
                                <Star size={15} fill="currentColor"/>
                            </div>
                            <div>
                                <p className="text-gray-600">{pers.review}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonial