import { Link } from "react-router-dom";
import type { CarType } from "../../../types/Car.type"
import { UsersRound, MapPin, CarFront, Fuel } from "lucide-react";


const Card = ({ product }: { product: CarType }) => {
    return (
        <div className="group bg-white p-3 relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

            <Link to={`/car/${product._id}`} className=" absolute w-full h-full top-0 left-0"></Link>
            {/* Image */}
            <div className="relative overflow-hidden pointer-events-none">
                <img
                    src={product.image}
                    alt={product.brand + " " + product.category}
                    className="w-full rounded-t-md h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge */}
                <span className={`absolute top-2 left-2 capitalize ${product.isAvaliable? "bg-green-500":"bg-red-500"} text-white text-xs px-3 py-1 rounded-md`}>
                    {product.isAvaliable? "available Now": "Not available"}
                </span>
            </div>
            <div className="my-2.5">
                <h2 className="text-xl font-medium">{product.brand} {product.model}</h2>
                <p className="text-sm font-normal">{product.category} - {product.year}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3">

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <UsersRound size={18} />
                    <span>{product?.seating_capacity} Seats</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Fuel size={18} />
                    <span>{product?.fuel_type}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CarFront size={18} />
                    <span>{product?.transmission}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={18} />
                    <span>{product?.location}</span>
                </div>

            </div>
        </div>
    )
}

export default Card