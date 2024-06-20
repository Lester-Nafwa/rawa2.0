import "./App.css";
import About from "./component/About/About";
import PartnerWithUs from "./component/PartnerUs/PartnerUs";
import DashboardLayout from "./component/DashbordLayout/Dashboard";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import DesignLayout from "./Layouts/DesignLayout";
import ContactUs from "./component/ContactUs/ContactUs";
import Sectors from "./component/Sectors/Sectors";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DesignLayout />}>
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<ContactUs />} />
          <Route path="partnerships" element={<PartnerWithUs />} />
          <Route path="sectors" element={<Sectors />} />
        </Route>
        <Route path="/home" element={<DashboardLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/partnerships" element={<PartnerWithUs />} />
        <Route path="/sectors" element={<Sectors />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
