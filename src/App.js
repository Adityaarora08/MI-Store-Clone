import './App.css';
import Navbar from './Navbar';
import PreNavBar from './components/PreNavBar';
import Slider from'./components/Slider.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import packageInfo from "./data/data.json";
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOptions from './components/NavOptions.js';
function App() {
  return (
    <div>
     <Router>
     <PreNavBar/>
     <Navbar/>
     <NavOptions miPhones={packageInfo.miPhones} redmiPhones={packageInfo.redmiPhones} tv={packageInfo.tv} laptop={packageInfo.laptop} fitnessAndLifeStyle={packageInfo.fitnessAndLifeStyle} home={packageInfo.home} audio={packageInfo.audio}  accessories={packageInfo.accessories}></NavOptions>
     <Slider start={packageInfo.banner.start}/>
     <Offers offer={packageInfo.offer}/>
     <Heading text="STAR PRODUCTS"></Heading>
     <StarProduct starProduct={packageInfo.starProduct}></StarProduct>
     <Heading text="HOT ACCESSORIES"></Heading>
     <HotAccessoriesMenu></HotAccessoriesMenu>
     <Routes>
     <Route path="/music" element={ <HotAccessories music={packageInfo.hotAccessories.music} musicCover={packageInfo.hotAccessoriesCover.music}></HotAccessories>}> </Route>
     <Route path="/smartDevice" element={ <HotAccessories smartDevice={packageInfo.hotAccessories.smartDevice} smartDeviceCover={packageInfo.hotAccessoriesCover.smartDevice}></HotAccessories>}></Route>
     <Route path="/home" element={ <HotAccessories home={packageInfo.hotAccessories.home} homeCover={packageInfo.hotAccessoriesCover.home}></HotAccessories>}> </Route>
     <Route path="/lifeStyle" element={ <HotAccessories lifeStyle={packageInfo.hotAccessories.lifeStyle} lifeStyleCover={packageInfo.hotAccessoriesCover.lifeStyle}></HotAccessories>}> </Route>
     <Route path="/mobileAccessories" element={ <HotAccessories mobileAccessories={packageInfo.hotAccessories.mobileAccessories} mobileAccessoriesCover={packageInfo.hotAccessoriesCover.mobileAccessories}></HotAccessories>}> </Route>
     </Routes>
     <Heading text="PRODUCT REVIEWS"></Heading>
     <ProductReviews productReviews={packageInfo.productReviews}></ProductReviews>
     <Heading text="VIDEOS"></Heading>
     <Videos videos={packageInfo.videos}></Videos>
     <Heading text="IN THE PRESS"></Heading>
     <Banner banner={packageInfo.banner}></Banner>
     <Footer footer={packageInfo.footer}></Footer>
     </Router>
    </div>
  );
}

export default App;
