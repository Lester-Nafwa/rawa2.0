import "./contact.css";
import Button from "../Button/Button";

const PartnerWithUs = () => {
  return (
    <div className="contact_us">
      <div className="contact_title">
        <span className="partnership_titles">Want to Partner With Us?</span>
        <p>
          By donating to RAWA, you are supporting vulnerable groups including
          women and youth with improved livelihoods and access to basic utilities
          Water, Sanitation, and Health facilities. The Funds will also
          facilitate in capacity building of key public institutions including in
          the education sector. Your kind gift will fund vital projects like these,
          making a real difference in helping people build safer lives. 88% of
          your donation goes to RAWA's projects; the rest is used for our core
          costs – which includes our communications, supporting learning from
          our programming across the organisation and raising further
          much-needed income for our work. If you would like to contact us
          directly about supporting RAWA, please give us a call at<span className="contactss">  +252612863388</span>
          &nbsp; or send us an email at<span className="contactss"> info@rawa.org.so or sayid@rawa.org.so</span>
        </p>
      </div>
      <div>
        <form className="contact_details">
          <div><h3>Contact Details</h3></div>
          <div className="input_group">
            <div>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <input type="email" placeholder="Enter Your Email" />
            </div>
          </div>
          <div className="input_group">
            <div>
              <input type="text" placeholder="Enter Phone Number" />
            </div>
            <div>
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div>
            <textarea type="comment" rows="7" cols="50" placeholder="Your Message" className="comments_area" />
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default PartnerWithUs;
