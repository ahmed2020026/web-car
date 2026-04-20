import Head from "../component/ui/Head"
import useScrollTop from "../hooks/useScrollTop"

const Booking = () => {
    useScrollTop()
    return (
        <section className="sectionPage">
            <div className="container">
                <div className="pt-15 pb-10">
                    <Head h1="My Bookings" p="View and manage your all car bookings" />
                </div>
            </div>
        </section>
    )
}

export default Booking