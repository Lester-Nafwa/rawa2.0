import React from 'react';
import { Link } from 'react-router-dom';
import { sectors } from '../../Utils/Menu';
import './sector.css';

const SectorList = () => {
  return (
    <div>
      {sectors.map((sector, index) => (
        <div key={index}>
          <Link to={`/sectors/${sector.href}`} className="sector-link">
            <ul className='categories_details'>
              {sector.name}
            </ul>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SectorList;
