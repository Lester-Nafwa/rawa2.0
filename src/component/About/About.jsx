import "./about.css";

const About = () => {
  return (
    <div className="about_us_container">
      <div className="about_us">
        <div className="about">
          <span className="about_title">Who We Are</span>
        </div>
        <p className="about_description">
          Established in 2005, Ras-Awad Welfare Association (RAWA) is a
          non-profit organization dedicated at improving community well-being
          through health, education, and advocacy. Focusing on WASH projects,
          capacity building, and education, RAWA supports underserved
          populations, including marginalized groups like pastoralists and
          girls. RAWA enhance educational access, provide vocational training,
          and run public health campaigns. RAWA’s evidence-based approach uses
          comprehensive research and continuous evaluation to ensure effective
          interventions and lasting community impact.
        </p>
        <div>
          <div className="objectives_sect">
            <span>Objective</span>
            <li>
              Improve Community Resilience: Setting up support systems and
              rallying resources to aid those in need
            </li>
            <li>
              Promote Self-Reliance: Honing skills, providing vocational
              training, and offering entrepreneurial guidance to pave the way
              for self-sufficiency
            </li>
            <li>
              Strengthen Local Capacities: Empower local government bodies,
              community entities, and organizations to tackle and oversee
              development needs for youths and women, involve them in health,
              education, environment, and economic activities, and enhance
              access to information on youth and social development for
              policymakers and practitioners
            </li>
          </div>
        </div>
      </div>
      <div className="sectors">
        <div className="mission_vision">
          <div className="mission">
            <span className="mission_title">Mission</span>
            <div>
              <p>
                To enhance the living standards of Somali communities by
                fostering self-reliance and prosperity. We achieve this through
                the provision of relief, rehabilitation, and development
                programs, and by strengthening local capacities to address their
                needs in a transparent and participatory manner.
              </p>
            </div>
          </div>
          <div className="vision">
            <span>Vision</span>
            <div>
              <p>
                A prosperous and self-reliant Somali society, where empowered
                communities effectively address their challenges and achieve
                sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
