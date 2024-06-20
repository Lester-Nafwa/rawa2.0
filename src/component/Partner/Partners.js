import { parterImage } from "../../Utils/Menu";
import "./partners.css";

const Partner = () => {
  console.log("imgaes ", parterImage);
  return (
    <div className="partners_list">
      {parterImage.map((item) => {
        <div key="index">{item.image}</div>;
      })}
    </div>
  );
};
export default Partner;
