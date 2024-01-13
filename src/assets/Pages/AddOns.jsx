import "/src/App.css";
import AddContext from "../Data/AddOnsData";
import ContextPlans from "../Data/SelectPlanData";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddOns() {

  const [isChecked, setIsChecked] = useState(true);
  let {addOnsSelected, setAddOnsSelected} = useContext(AddContext);
  const navigate = useNavigate();
  const SelectAddOns = useContext(AddContext);
  const { selectedMonthlyPlan } = useContext(ContextPlans);
  const { selectedYearlyPlan } = useContext(ContextPlans);

  const checkAddons = (e, AddId) => {
    const { name, checked } = e.target;
    setIsChecked((prevState) => {
      return {
        ...prevState,
        [AddId]: checked,
      };
    });
  };

  const ChooseAddOns = (AddId) => {
    setAddOnsSelected(AddId);
    console.log(addOnsSelected)
  };

 const handleSubmit =(event)=>{
  event.preventDefault()
  navigate("/review");
  
 }
  return (
    <div className="mainSection">
      <ToastContainer />
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        {SelectAddOns.addOnsData.map((item) => (
          <div
            onClick={() => ChooseAddOns(item.id)}
            style={
              isChecked[item.id]
                ? {
                    border: "1.5px solid  hsl(243, 100%, 62%)",
                    cursor: "pointer",
                  }
                : { border: "1px solid hsl(229, 24%, 87%)", cursor: "pointer" }
            }
            className="boxes"
            key={item.id}
          >
            <div className="boxes-first">
              <input
                onChange={(e) => checkAddons(e, item.id)}
                type="checkbox"
                name="checked"
                id="checked"
                value={isChecked[item.id]}
                checked={isChecked[item.id] || false}
              />

              <div>
                <h4>{item.topic}</h4>
                <p>{item.perks}</p>
              </div>
            </div>
            <p>{selectedYearlyPlan?`+$${item.price*10}/yr` : `+$${item.price}/mo`}</p>
          </div>
        ))}
        <div className="bottom mt-0">
          <Link className="goBack no-underline" to="/select-plan">
            Go back
          </Link>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue text-white py-2 px-3 rounded-md text-xs float-right cursor-pointer mt-8"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddOns;
