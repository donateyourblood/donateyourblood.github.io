import About from '../components/about.js';
import Donate from '../components/donate.js';
import Faq from '../components/faq.js';
import Footer from '../components/footer.js';
import Gallery from '../components/gallery.js';
import Header from '../components/header.js';
import Information from '../components/information.js';
import Slider from '../components/slider.js';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-186023870-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function HomePage() {

    return (
        <>
            {/* Header */}
            <Header />

            {/* Slider */}
            <Slider />

            {/* about us */}
            <About />

            {/* donate now */}
            <Donate />

            {/* do's and don'ts */}
            <Information />

            {/* gallery */}
            <Gallery />

            {/* faq */}
            <Faq />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default HomePage;