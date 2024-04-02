import BanFour from "./BanFour";
import BanOne from "./BanOne";
import BanThree from "./BanThree";
import BanTwo from "./BanTwo";
import Banner from "./Banner";
import Sponsor from "./Sponsor";
import Stats from "./Stats";
import Subscribe from "./Subscribe";


const Home = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto">
         <Banner/>
         <Stats/>
         <BanOne/>
         <BanTwo/>
         <Sponsor/>
         <BanThree/>
         <BanFour/>
         <Subscribe/>
        </div>
    );
};

export default Home;