import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sectors } from "../../Utils/Menu";
import SectorList from "./SectorList";
import "./sector.css";

const DynamicSectors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sector, setSector] = useState(null);

  useEffect(() => {
    if (!id || id === "our-work") {
      const defaultSector = sectors.find((sec) => sec.href === "research");
      if (defaultSector) {
        setSector(defaultSector);
      } else {
        navigate("/not-found");
      }
    } else {
      const selectedSector = sectors.find((sec) => sec.href === id);
      if (selectedSector) {
        setSector(selectedSector);
      } else {
        navigate("/not-found"); 
      }
    }
  }, [id, navigate]);

  if (!sector) {
    return <div>Loading...</div>; // You can show a loading indicator here
  }

  return (
    <div className="main-sections">
      <div className="list_sections">
        <div>
          <span>What We Do</span>
        </div>
        <SectorList />
      </div>
      <div className="details_sector">
        <div>
          <span className="title_details">{sector.name}</span>
        </div>
        <div className="">
          <ul>
            {sector.items.map((item, idx) => (
              <li key={idx} className="items_details">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DynamicSectors;
