import getCars from "../../redux/getCars"
import Card from "../component/ui/Card";
import Head from "../component/ui/Head";
import useScrollTop from "../hooks/useScrollTop";

const Cars = () => {
    const cars = getCars();
    useScrollTop()
    return (
        <section className="sectionPage">
            <div className="container mb-10">
                <div className="pt-15 pb-10">
                    <Head h1={"Available Cars"} p={"Browse our selection of premium vehicles available for your next adventure"} />
                </div>
                <div className="grid grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3 pt-10">
                    {
                        Array.from(cars.Cars).map((car, index) => (
                            <div key={index} className="p-3" data-aos="zoom-in">
                                <Card product={car} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Cars