import { useState, useEffect } from "react";
import { galleryData } from "../../Utils/Menu";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import "./news.css"; // Import CSS file

const News = () => {
  const [randomizedGallery, setRandomizedGallery] = useState([]);
  const navigate = useNavigate();

  const randomizeImages = () => {
    const randomized = galleryData.map((group) => {
      const randomImage = group.images?.length
        ? group.images[Math.floor(Math.random() * group.images.length)]
        : null;
      return { ...group, randomImage };
    });
    setRandomizedGallery(randomized);
  };

  useEffect(() => {
    randomizeImages();
    const interval = setInterval(randomizeImages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="resources-container">
      <h1 className="resources-title">Latest News</h1>

      <Marquee className="mb-6">
        {randomizedGallery.map((group, index) => (
          <div
            key={index}
            className="resources-card"
            onClick={() => navigate(`/Resources`)}
          >
            {group.randomImage && (
              <img
                src={group.randomImage}
                alt={group.title}
                className="resources-image"
              />
            )}
            <span className="resources-title-overlay">{group.title}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default News;
