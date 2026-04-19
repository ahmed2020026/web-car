import { Link } from "react-router-dom";
import type { CarType } from "../../../types/Car.type"
import { UsersRound,MapPin,CarFront,Fuel } from "lucide-react";


const Card = ({ product }: { product: CarType }) => {
    return (
        <div className="group bg-white p-3 relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

            <Link to={`/${product._id}`} className=" absolute w-full h-full top-0 left-0"></Link>
            {/* Image */}
            <div className="relative overflow-hidden pointer-events-none">
                <img
                    src={product.image}
                    alt={product.brand + " " + product.category}
                    className="w-full rounded-t-md h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge */}
                <span className="absolute top-2 left-2 capitalize bg-blue-500 text-white text-xs px-3 py-1 rounded-md">
                    {product.category}
                </span>
            </div>
            <div className="my-2.5">
                <h2 className="text-xl font-medium">{product.brand} {product.model}</h2>
                <p className="text-sm font-normal">{product.category} - {product.year}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-3">
                <div className="flex items-center justify-start gap-2 text-sm text-gray-600">
                    <UsersRound size={18}/>
                    {product.seating_capacity} Seats
                </div>
                <div className="flex items-center justify-start gap-2 text-sm text-gray-600">
                    <Fuel size={18}/>
                    {product.fuel_type}
                </div>
                <div className="flex items-center justify-start gap-2 text-sm text-gray-600">
                    <CarFront size={18}/>
                    {product.transmission}
                </div>
                <div className="flex items-center justify-start gap-2 text-sm text-gray-600">
                    <MapPin size={18}/>
                    {product.location}
                </div>
            </div>
        </div>
    )
}

export default Card