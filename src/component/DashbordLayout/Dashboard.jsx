import CarouselComponent from "../Carrosel/Carroselheader";
import Sectors from "../Sectors/Sectors";
import Footer from "../Footer/Footer";
import HeaderNav from "../Nav/NavBar";
import Partner from "../Partner/Partners";
import "./dashboard.css";
import Intro from "../About/intro";
import News from "../News";
const DashboardLayout = () => {
  return (
    <>
      <div>
        <div className="header">
          {" "}
          <HeaderNav/>
        </div>
        <div>
          <CarouselComponent />
          <Intro />
          <Sectors />
          <Partner />
          <News/>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
