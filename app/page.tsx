import Navber from "./components/ui/Navber";
import Banner from "./components/ui/Banner";
import FlashSale from "./components/ui/FlashSale";
import TopCategory from "./components/ui/TopCategory";
import MostPopular from "./components/ui/MostPopular";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
<div>
       <Navber/>
        <Banner/>
        <FlashSale/>
        <TopCategory/>
     <MostPopular/>
     <Footer/>
        </div>
  );
}
