 // Sectors.js
import React from 'react';
import { sectors } from '../../Utils/Menu';
import './sector.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sectors = () => {
  const colors = ['#6991c7', '#253A6E', '#5FA3D4', 'lightgreen', '#a3bded'];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="sectors-container">
      <div className="sectors-flex">
        {sectors.map((sector, index) => (
          <div 
            key={index} 
            className="sector-card" 
            style={{ backgroundImage: `url(${sector.image})`, backgroundColor: getRandomColor() }}
          >
            <div className="sector-content">
              <Link to={`/sectors/${sector.href}`} className="sector-link">
                <span className="subsect_title">{sector.name}</span>
                <div className="read_btn">
                  <Button className='btn_read'>Read</Button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
