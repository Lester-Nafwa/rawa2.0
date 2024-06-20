import React from 'react';
import { sectors } from '../../Utils/Menu';
import './sector.css';

const Sectors = () => {
  const colors = ['#6991c7', '#253A6E', '#5FA3D4', 'lightgreen', '#a3bded'];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="sectors-container">
      <div>
        <span className="sector_title">Sectors We Serve</span>
      </div>
      <div className="sectors-flex">
        {sectors.map((sector, index) => (
          <div key={index} className="sector-card" style={{ backgroundColor: getRandomColor() }}>
            <span className="subsect_title">{sector.name}</span>
            <p>{sector.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
