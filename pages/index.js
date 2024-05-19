import Apartments from "@/components/Apartments";
import Cities from "@/components/Cities";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Cities />
            <Apartments />
            <Trending />
            <Explore />
            <footer>
                <Footer />
            </footer>
        </main>
    )
}