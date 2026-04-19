import type { CarType } from "../../../types/Car.type"

const Card = ({ product }: { product: CarType }) => {
    return (
        <div className="group bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

            {/* Image */}
            <div className="relative overflow-hidden">
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
        </div>
    )
}

export default Card