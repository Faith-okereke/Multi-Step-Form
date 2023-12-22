import "/src/App.css";
import { AddOnsData } from "../Data/AddOnsData";
function AddOns() {
  return (
    <div className="mainSection">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      {AddOnsData.map((item) => (
        <div className="boxes" key={item.id}>
          <div className="boxes-first">
           <input type="checkbox" name="" id="" />
            
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
