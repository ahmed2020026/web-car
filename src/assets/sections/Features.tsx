import getCars from "../../redux/getCars"
import Head from "../component/ui/Head"
import Card from "../component/ui/Card";
import ButtonClick from "../component/ui/ButtonClick";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";
const Features = () => {
    const cars = getCars();
    const navig = useNavigate()
    return (
        <div className="container">
            <Head other={'mt-20'} textStyle={'sm:text-4xl'} h1={"Featured Vehicles"} p={"Explore our selection of premium vehicles available for your next adventure."} />
            <div className="grid grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3 pt-10">
                {cars.loading ? (
                    <p>Ahmed</p>
                ) : (
                    Array.from(cars.Cars.slice(0,3)).map((car, index) => (
                        <div key={index} className="sm:p-3 py-3">
                            <Card product={car}/>
                        </div>
                    ))
                )}
            </div>
            <div className="text-center pt-8">
                <ButtonClick children = {<>Explore all cars  <MoveRight size={15} /></>} onClick={() => navig(`/cars`)} ClassName="border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-medium px-5 py-2 rounded-lg" />
            </div>
        </div>
    )
}

export default Features