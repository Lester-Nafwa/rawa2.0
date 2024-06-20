import "./contactme.css";
const ContactUs = () => {
  const randomColors=['#2c5131','#755100','#646970','#c5d9ed']
  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];
  return (
    <div className="main_contact_sect">
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
      <div className="contactperson"  >
        <div className="contact_sect" style={{ backgroundColor: getRandomColor() }}><div><img src="/map_24dp.svg" alt="maps"/></div><span>Mogadishu Somalia</span> </div>
        <div className="contact_sect" style={{ backgroundColor: getRandomColor() }}><div><img src="/contact_mail_24dp.svg" alt="emails"/></div> <span> rawasad@gmail.com</span></div>
        <div className="contact_sect"style={{ backgroundColor: getRandomColor() }}><div><img src="/dialpad_24dp.png" alt="phone number" style={{height:"1.5em",width:'2em'}}/></div><span> +252612863388</span></div>
      </div>
    </div>
  );
};
export default ContactUs;
