import React from 'react';
import { Link } from 'react-router-dom';
import { sectors } from '../../Utils/Menu';
import './sector.css';

const SectorList = () => {
  return (
    <div className="sidebar">
      <ul className="sector-list">
        {sectors.map((sector, index) => (
          <li key={index} className="sector-item">
            <Link to={`/sectors/${sector.href}`} className="sector-link">
              {sector.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectorList;
