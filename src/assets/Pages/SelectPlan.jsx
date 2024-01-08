import "/src/App.css";
import { useContext, useState } from "react";
import ContextPlans from "../Data/SelectPlanData";
import { useNavigate, Link } from "react-router-dom";

export default function SelectPlan() {
  const [isChecked, setChecked] = useState({ checked: false });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const SelectPlans = useContext(ContextPlans);
  const navigate = useNavigate();
  const handleToggle = (event, planId) => {
    console.log(event.target.name);
    const { checked, name } = event.target;
    setChecked((prevData) => {
      return {
        ...prevData,
        [name]: checked,
      };
    });
  };
  const planSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const styling = {
    border: "2px solid hsl(243, 100%, 62%)",
    backgroundColor: " hsl(231, 100%, 99%)",
  };
  return (
    <div className="stepTwo">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form
        id="selectPlanForm"
      >
        <div className="stepTwoFlex">
          {SelectPlans.monthly.map((item) => (
            <div
              onClick={() => planSelect(item.id)}
              style={selectedPlan === item.id ? styling : null}
              className="cursor-pointer"
              key={item.id}
            >
              <img src={item.img} alt="" />
              <h3>{item.plan}</h3>
              <p>
                {isChecked.checked
                  ? `$${item.price * 10}/yr`
                  : `$${item.price}/mo`}
              </p>
              <p className="free">{isChecked.checked ? "2 months free" : ""}</p>
            </div>
          ))}
        </div>
        <div className="toggle-div">
          <span>Monthly</span>
          <div className="toggle-switch relative my-0 mx-2">
            <input
              onChange={handleToggle}
              style={{ visibility: "hidden" }}
              type="checkbox"
              id="checked"
              checked={isChecked.checked}
              name="checked"
            />
            <label htmlFor="checked" className="switch"></label>
          </div>
          <span>Yearly</span>
        </div>
        <div className="bottom">
          <Link className="goBack no-underline" to="/">
            Go back
          </Link>
          <button  onClick={() => {
          navigate("/add-ons");
        }} className="bg-dark text-white py-2 px-3 rounded-md text-sm float-right cursor-pointer">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
