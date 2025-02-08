import { useState } from "react";
import { galleryData } from "../../Utils/Menu";

const Resources = () => {
  const [selectedGroup, setSelectedGroup] = useState(galleryData[0]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Photo Gallery</h1>

      {/* Group selection buttons */}
      <div className="flex justify-center gap-4 mb-6" style={{maxWidth:"100%"}}>
        {galleryData.map((group, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedGroup.title === group.title
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            style={{ padding: "0.5em", margin: "0.5em" ,maxWidth:'30%'}}
            onClick={() => setSelectedGroup(group)}
          >
            {group.title}
          </button>
        ))}
      </div>

      {/* Horizontal Image Gallery with Flexbox */}
      <div className="flex flex-wrap justify-center gap-4"  style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",  
          gap: "15px",
          justifyContent: "center",
        }}>
        
          {selectedGroup.images.map((img, idx) => (
            <div
              key={idx}
               className="w-1/4 p-2 max-w-xs rounded-lg shadow-lg overflow-hidden"
              style={{ width: "100%" }}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="h-40 object-cover w-full"
                style={{ width: "100%", borderRadius: "1em" ,margin:'1em'}}
              />
            </div>
          ))}
        </div>
    </div>
  );
};

export default Resources;
