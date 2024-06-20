import './contact.css'
import Button from '../Button/Button';
const PartnerWithUs = () => {
  return (
    <div className="contact_us">
      <div className='contact_title'>
        <span>Want to Partner With Us?</span>
      </div>
      <div>
        <form className='contact_details'>
          <div>
            <div>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <input type="email" placeholder="Enter Your Email" />
            </div>
          </div>
          <div>
            <div>
              <input type="text" placeholder="Enter Phone Number" />
            </div>
            <div>
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div>
            <textarea type="comment" rows="7" cols="50" />
          </div>
         <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};
export default PartnerWithUs;
