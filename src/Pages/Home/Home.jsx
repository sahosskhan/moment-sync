import BanOne from "./BanOne";
import BanTwo from "./BanTwo";
import Banner from "./Banner";
import Sponsor from "./Sponsor";


const Home = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto">
         <Banner/>
         <Sponsor/>
         <BanOne/>
         <BanTwo/>
        </div>
    );
};

export default Home;