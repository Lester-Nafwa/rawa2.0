import { useState } from "react";
import { galleryData } from "../../Utils/Menu";
import "./resources.css"; // Import CSS file

const Resources = () => {
  const [selectedGroup, setSelectedGroup] = useState(galleryData[0]);

  return (
    <div className="resources-container">
      <h1 className="resources-title">Photo Gallery</h1>
      <div className="resources-buttons">
        {galleryData.map((group, index) => (
          <button
            key={index}
            className={`resources-button ${
              selectedGroup.title === group.title ? "active" : "inactive"
            }`}
            onClick={() => setSelectedGroup(group)}
          >
            {group.title}
          </button>
        ))}
      </div>
      <div className="resources-gallery">
        {selectedGroup.images.map((img, idx) => (
          <div key={idx} className="resources-card">
            <img src={img} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
