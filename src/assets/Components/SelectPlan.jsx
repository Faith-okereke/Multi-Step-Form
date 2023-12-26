import "/src/App.css";
import { useContext, useState } from "react";
import { PlanData } from "../Data/SelectPlanData";
import Context from "../Context/Context";

export default function SelectPlan() {
  const [isChecked, setChecked] = useState(false);
  const [selected, setSelected] = useState(false);
  const handleToggle = () => {
    setChecked(!isChecked);
  };
  const selectPlan = () => {
    setSelected(true);
  };
  const {monthly, selectedPlan, selectPeriodHandler, selectPlanHandler } = useContext(Context)
  return (
    <div className="stepTwo">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div
        onClick={selectPlan}
        style={{ cursor: "pointer" }}
        className="stepTwoFlex "
      >
        {PlanData.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.plan}</h3>
            <p>{item.price}</p>
            <p className="free">2 months free</p>
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center">
        <span>Before</span>
        <div className="toggle-switch relative my-0 mx-2">
          <input
            style={{ display: "none" }}
            type="checkbox"
            id="toggle"
            checked={isChecked}
            onChange={handleToggle}
          />
          <label htmlFor="toggle" className="switch"></label>
        </div>
        <span>After</span>
      </div>
    </div>
  );
}
