import CarouselComponent from "../Carrosel/Carroselheader"
import Sectors from "../Sectors/Sectors"
import Footer from "../Footer/Footer"
import HeaderNav from "../Nav/NavBar"
import './dashboard.css'
const DashboardLayout=()=>{
    return(<>
    
    <div>
    <div className="header"> <HeaderNav /></div>
    <div> 
      <CarouselComponent/>
   <div></div>
      <Sectors/>
      <Footer />
      </div>
    </div>
    
    </>)
}
export default DashboardLayout