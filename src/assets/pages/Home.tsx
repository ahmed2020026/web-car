import Dea from "../sections/Dea"
import Features from "../sections/Features"
import Hero from "../sections/Hero"
import Own from "../sections/Own"
import Testimonial from "../sections/Testimonial"

const Home = () => {
    return (
        <main className="p-3">
            <section className="sectionPage flex items-center justify-center md:pt-10">
                <Hero />
            </section>
            <section>
                <Features />
            </section>
            <section>
                <Own />
            </section>
            <section>
                <Testimonial />
            </section>
            <section>
                <Dea />
            </section>
        </main>
    )
}

export default Home