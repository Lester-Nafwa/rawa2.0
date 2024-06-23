import React from 'react';
import { parterImage } from "../../Utils/Menu";
import "./partners.css";

const Partner = () => {
  return (
    <div>
      <div className='partner_header'>  <h1>Partners</h1></div> 
    <div className="partners_list">
   
      {parterImage.map((item, index) => (
        <div key={index} className="partner-card">
          <img src={item.image} alt={`Partner ${index + 1}`} className="partner-image" />
        </div>
      ))}
    </div>
    </div>
  );
};
 
export default Partner;
