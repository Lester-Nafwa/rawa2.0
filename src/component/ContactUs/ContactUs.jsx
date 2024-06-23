import "./contactme.css";
import ContactTemplate from ".";
const ContactUs = () => {
  
  return (

    <div className="main_contact_sect">
      <ContactTemplate/>
      <div class="contact-image">
        <img src="/rocket-contact.png" alt="rocket_contact" />
      </div>
      <form className="form_details">
        <h3>Drop Us a Message</h3>
        <div className="row">
          <div className="input_details">
            <input
              type="text"
              name="txtName"
              className="form-control"
              placeholder="Your Name *"
              required
            />
            <br />

            <input
              type="email"
              name="txtEmail"
              className="form-control"
              placeholder="Your Email *"
              required
            />
            <br />
            <input
              type="number"
              name="txtPhone"
              className="form-control"
              placeholder="Your Phone Number *"
              required
            />
            <br />
            <input type="submit" name="btnSubmit" className="btnContact" />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="txtMsg"
                required
                className="form-control"
                placeholder="Your Message *"
                style={{ maxWidth: "100%", height: "150px" }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      
    </div>
  );
};
export default ContactUs;
