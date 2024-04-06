import { Helmet } from "react-helmet-async";
import Stats from "../Home/Stats";
import About from "./About";
import Accordion from "./Accordion";
import AppDownload from "./AppDownload";


const AboutMain = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto">
                                                <Helmet>
        <title>About Us | Moment Sync</title>
      </Helmet>
            <About/>
            <Stats/>
            <Accordion/>
            <AppDownload/>
        </div>
    );
};

export default AboutMain;