import "./tender.css";
import { availableOpportunities } from "../../Utils/Menu";
const Tenders = () => {
  return (
    <>
      <div className="tenders-main">
        <div>
          <h2>What to Work with Us</h2>
          <div>
            <img src="./we_are_hiring.jpg" className="we_hiring" />
          </div>
        </div>
        <div className="opportunities_list">
          <h2> Latest Opportunities</h2>
          {availableOpportunities.map((opportunity, index) => (
            <ul key={index}>
              <h2>{opportunity.title}</h2>
              <p>Issued Date: {opportunity.issuedDate}</p>
              <p>Closing Date: {opportunity.closingDate}</p>
              <p>{opportunity.description}</p>
              <p>
                <a
                  href={opportunity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link_opportunities"
                >
                  More info
                </a>
              </p>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
export default Tenders;
