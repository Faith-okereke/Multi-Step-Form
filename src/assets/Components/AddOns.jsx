import "/src/App.css";
import { AddOnsData } from "../Data/AddOnsData";
import { useState } from "react";
function AddOns() {
  const [isChecked, setIsChecked] = useState({checked:false});
  return (
    <div className="mainSection">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      {AddOnsData.map((item) => (
        <div style={!isChecked?{border:"1px solid  hsl(243, 100%, 62%)"} : {border: "1px solid hsl(229, 24%, 87%)"}} className= "boxes" key={item.id}>
          <div className="boxes-first">
            <input type="checkbox" name="checkbox" id="checked" checked={isChecked}/>

            <div>
              <h4>{item.topic}</h4>
              <p>{item.perks}</p>
            </div>
          </div>
          <p>{`$${item.price}/mo`}</p>
        </div>
      ))}
    </div>
  );
}
export default AddOns;
