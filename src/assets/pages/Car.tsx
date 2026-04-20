import { useParams } from "react-router-dom";
import getCars from "../../redux/getCars"
import { useMemo } from "react";
import FieldInput from "../component/ui/InputField";
import ButtonClick from "../component/ui/ButtonClick";
import { UsersRound,MapPin,CarFront,Fuel,CircleCheckBig } from "lucide-react";
import useScrollTop from "../hooks/useScrollTop";


const Car = () => {
    useScrollTop();
    const { id } = useParams();
    const { Cars } = getCars();
    const car = useMemo(() => {
        return Cars?.find((c) => c._id === id);
    }, [Cars, id]);

    return (
        <section className="sectionPage pt-5">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2 p-2">
                        <div className="shadow bg-white rounded p-5">
                            <div>
                                <img src={car?.image} data-aos='fade' className="w-full h-auto md:max-h-100 object-cover rounded mb-6 shadow-md border border-white" />
                            </div>
                            <div className="mb-3">
                                <h2 className="text-2xl font-medium">{car?.brand} {car?.model}</h2>
                                <p className="text-md text-gray-600">{car?.category} . {car?.year}</p>
                            </div>
                            <div>
                                <div className="grid grid-cols-2 gap-2 pt-3 mb-5">
                                    <div className="flex items-center justify-start gap-2 text-sm text-gray-600 bg-gray-100 p-3 rounded border border-gray-200">
                                        <UsersRound size={18} />
                                        {car?.seating_capacity} Seats
                                    </div>
                                    <div className="flex items-center justify-start gap-2 text-sm text-gray-600 bg-gray-100 p-3 rounded border border-gray-200">
                                        <Fuel size={18} />
                                        {car?.fuel_type}
                                    </div>
                                    <div className="flex items-center justify-start gap-2 text-sm text-gray-600 bg-gray-100 p-3 rounded border border-gray-200">
                                        <CarFront size={18} />
                                        {car?.transmission}
                                    </div>
                                    <div className="flex items-center justify-start gap-2 text-sm text-gray-600 bg-gray-100 p-3 rounded border border-gray-200">
                                        <MapPin size={18} />
                                        {car?.location}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h2 className="text-2xl font-medium mb-2">Description</h2>
                                    <p className="text-gray-600">{car?.description}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-medium mb-2">Features</h2>
                                    <ul className="grid grid-cols-2">
                                        <li className="flex items-center justify-start gap-2.5 text-gray-600 py-1.5">
                                            <CircleCheckBig size={15} color="#2563eb" /> 360 Camera
                                        </li>
                                        <li className="flex items-center justify-start gap-2.5 text-gray-600 py-1.5">
                                            <CircleCheckBig size={15} color="#2563eb" /> Bluetooth
                                        </li>
                                        <li className="flex items-center justify-start gap-2.5 text-gray-600 py-1.5">
                                            <CircleCheckBig size={15} color="#2563eb" /> GPS
                                        </li>
                                        <li className="flex items-center justify-start gap-2.5 text-gray-600 py-1.5">
                                            <CircleCheckBig size={15} color="#2563eb" /> Heated Seats
                                        </li>
                                        <li className="flex items-center col-span-2 justify-start gap-2.5 text-gray-600 py-1.5">
                                            <CircleCheckBig size={15} color="#2563eb" /> Rear View Mirror
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="shadow bg-white p-5 rounded">
                            <div className="border-b border-gray-300 flex justify-between items-center py-3">
                                <h2 className="font-semibold text-xl text-gray-900">130$</h2>
                                <p className="font-medium text-gray-400">per day</p>
                            </div>
                            <div className="relative">
                                <form>
                                    <div className="mb-5 mt-5">
                                        <label className="text-sm text-gray-400 block mb-2">Pick up Date</label>
                                        <FieldInput type="date" label="Pick_date" padding="p-2" placeHolder="Pick up Date" />
                                    </div>
                                    <div className="mb-5">
                                        <label className="text-sm text-gray-400 block mb-2">Return Date</label>
                                        <FieldInput type="date" label="return_date" padding="p-2" placeHolder="Return Date" />
                                    </div>
                                    <ButtonClick children={"Book Now"} ClassName="bg-gray-900 text-center hover:bg-gray-950 text-gray-200" />
                                </form>
                                <p className="text-sm text-gray-400 mt-5 text-center">No credit card required to reserve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Car