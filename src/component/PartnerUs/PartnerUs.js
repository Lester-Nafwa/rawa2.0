 import "./contact.css";
import Button from "../Button/Button";

const PartnerWithUs = () => {
  return (
    <> 
  <div className="about_we">
    <img src="/20250513033128_IMG_6723.JPG" style={{width:"98vw",justifySelf:"center",display:"flex"}}/>
      <h1 className="about_hero_text">Partner with Us</h1>
</div>
    <div className="contact_us">
      <div className="contact_title">
        <span className="partnership_titles">Want to Partner With Us?</span>
        <p>
          By donating to RAWA, you are supporting vulnerable groups — including women and youth — with improved livelihoods and access to basic utilities such as water, sanitation, and health facilities.
        </p>
        <p>
          Your donation will also support the capacity building of key public institutions, particularly in the education sector. Your kind gift will fund vital projects that help people build safer, more secure lives.
        </p>
        <p>
          88% of your donation goes directly to RAWA's projects; the remaining 12% supports core operational needs — including communications, program learning, and income generation for our work.
        </p>
        <p>
          If you’d like to contact us directly about supporting RAWA, please reach out by phone at
          <span className="contactss"> +252618608560</span> or email us at
          <span className="contactss"> info@rawa.org.so</span> 
        </p>
        <p>
          <strong>Donation Account Details:</strong><br />
          Account No: <span className="contactss">020300370001</span><br />
          Bank: <span className="contactss">Premier Bank Somalia</span>
        </p>
      </div>

      <div>
        <form className="contact_details">
          <h3>Contact Details</h3>
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
            <textarea
              rows={7}
              cols={50}
              placeholder="Your Message"
              className="comments_area"
            />
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </div>
   </>
  );
};

export default PartnerWithUs;
