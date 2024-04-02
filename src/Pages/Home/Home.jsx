import BanFour from "./BanFour";
import BanOne from "./BanOne";
import BanThree from "./BanThree";
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
         <BanThree/>
         <BanFour/>
        </div>
    );
};

export default Home;