import getCars from "../../redux/getCars"
import Head from "../component/ui/Head"
import Card from "../component/ui/Card";
const Features = () => {
    const cars = getCars();
    return (
        <div className="container">
            <Head other={'mt-8'} textStyle={'sm:text-4xl'} h1={"Featured Vehicles"} p={"Explore our selection of premium vehicles available for your next adventure."} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
                {cars.loading ? (
                    <p>Ahmed</p>
                ) : (
                    Array.from(cars.Cars.slice(0,3)).map((car, index) => (
                        <div key={index} className="p-3">
                            <Card product={car}/>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Features