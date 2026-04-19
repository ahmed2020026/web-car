import Features from "../sections/Features"
import Hero from "../sections/Hero"

const Home = () => {
    return (
        <main className="p-3">
            <section className="sectionPage flex items-center justify-center md:pt-10">
                <Hero />
            </section>
            <section className="sectionPage">
                <Features />
            </section>
        </main>
    )
}

export default Home