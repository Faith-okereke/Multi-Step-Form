import "/src/App.css";
import AddContext from "../Data/AddOnsData";
import ContextPlans from "../Data/SelectPlanData";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function AddOns() {
  const [isChecked, setIsChecked] = useState(true);
  const [addOnsSelected, setAddOnsSelected] = useState(true);
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
  };
  console.log(SelectAddOns)
  return (
    <div className="mainSection">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        {SelectAddOns.addOnsData.map((item) => (
          <div
            onClick={() => ChooseAddOns(item.id)}
            style={
              isChecked[item.id]
                ? {
                    border: "1px solid  hsl(243, 100%, 62%)",
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
        <div className="bottom">
          <Link className="goBack no-underline" to="/select-plan">
            Go back
          </Link>
          <button
            onClick={() => {
              navigate("/review");
            }}
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddOns;
