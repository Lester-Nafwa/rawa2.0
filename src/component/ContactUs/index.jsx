import "./contactme.css";
const ContactTemplate = () => {
  const randomColors = ["#2c5131", "#755100", "#646970", "#c5d9ed"];
  const getRandomColor = () =>
    randomColors[Math.floor(Math.random() * randomColors.length)];

  return (
    <div className="contactperson">
      <div
        className="contact_sect"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div>
          <img src="/map_24dp.svg" alt="maps" />
        </div>
        <span>Mogadishu Somalia</span>{" "}
      </div>
      <div
        className="contact_sect"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div>
          <img src="/contact_mail_24dp.svg" alt="emails" />
        </div>{" "}
        <span> info@rawa.org.so</span>
      </div>
      <div
        className="contact_sect"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div>
          <img
            src="/dialpad_24dp.png"
            alt="phone number"
            style={{ height: "1.5em", width: "2em" }}
          />
        </div>
        <span> +252618608560</span>
      </div>
    </div>
  );
};
export default ContactTemplate;
