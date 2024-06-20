import React from "react";
import ItemsContainer from "./FooterItems";
import { Icons } from "../../Utils/Menu";
import SocialIcons from "./SocialIcon";
import moment from "moment";
import "./footer.css";
const Footer = () => {
  const today = moment().format("yyy");
  return (
    <footer className="bg-gray-900 text-white">
      <div className="footer_sect">
        <div>
          {" "}
          <ItemsContainer />
        </div>
        <hr/>
        <div
          className="footer_text"
        >
          <span>©{today} Appy. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>
          <SocialIcons Icons={Icons} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
