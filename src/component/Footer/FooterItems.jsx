import "./footer.css";
import { TfiEmail } from "react-icons/tfi";
import { FiVoicemail } from "react-icons/fi";
const ItemsContainer = () => {
  return (
    <div className="footer_items">
      <div className="mini_about">
        <div>
          <img src="/rawa_logos.png" alt="co logo" className="logo_design" />
        </div>
        <div>
          <p>
            {" "}
            Our efforts revolve around Water, Sanitation, and Hygiene (WASH)
            projects, education and capacity building endeavors, research
            activities, and advocacy works aimed at supporting underserved
            populations.
          </p>
        </div>
      </div>
      <div>
        <div>
          <span className="contacts">Contact</span>
        </div>
        <div className="tel_sect">
          <div>
            {" "}
            <TfiEmail />{" "}
          </div>
          <div>
            <p>Email:info@rawa.org.so</p>
          </div>
        </div>
        <div className="tel_sect">
          <div>
            {" "}
            <FiVoicemail />
          </div>{" "}
          <div>
            {" "}
            <p>Tel No:+252618608560</p>
          </div>
          
        </div>
        <div className="tel_sect">
            <div className="careers">Careers and Opportunities</div>
            &
            <div className="careers">Tenders</div>
          </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
