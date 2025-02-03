import "./about.css";
import { aboutData } from "../../Utils/About";
import { useState } from "react";

const About = () => {
  // Default to "Who We Are" (index 0)
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="about_us_container">
      <section>
        <nav className="about_nav">
          <ul>
            {aboutData.map((item, index) => (
              <li
                key={index}
                className={selectedIndex === index ? "active" : ""}
                onClick={() => setSelectedIndex(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section>
        <div className="about_us">
          <div className="about">
            <span className="about_title">
              {aboutData[selectedIndex].title}
            </span>
            <div className="about_content_sub_container">
              <div c >  
                <img
                  src={aboutData[selectedIndex].Image}
                  alt={aboutData[selectedIndex].title}
                  className="about_image_container"
                />
              </div>
              <div className="about_description_container">
                <p className="about_description">
                  {aboutData[selectedIndex].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
