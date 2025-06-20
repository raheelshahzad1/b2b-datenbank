import Header from "./components/header";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";
import VideoReviews from "./components/VideoReviews";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer"
import TrustItems from "./components/TrustItems"

export default function Home() {
    return (
        <>
            <Header />
            <Pricing />
            <TrustItems />
            <Testimonials />
            <VideoReviews />
            <CallToAction />
            <Footer />
        </>
    );
}
