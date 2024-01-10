import "/src/App.css";
import { useContext, useState } from "react";
import ContextPlans from "../Data/SelectPlanData";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function SelectPlan() {
  const [isChecked, setChecked] = useState({ checked: false });
  const SelectPlans = useContext(ContextPlans);
  const [num, setNum] = useState(0);
  const { selectedPlans, setSelectedPlans } = useContext(ContextPlans);
  const planSelect = (id) => {
    setSelectedPlans({
      title: SelectPlans.monthly[id].title,
      price: SelectPlans.monthly[id].price,
    });
    setNum(id + 1);
    console.log(selectedPlans.price);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(selectedPlans.title);
    // if (selectedPlans.title !== "") {
    navigate("/add-ons");
    // } else {
    //   toast.error("Select a plan");
    // }
  };

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
  const styling = {
    border: "2px solid hsl(243, 100%, 62%)",
    backgroundColor: " hsl(231, 100%, 99%)",
  };
  return (
    <div className="stepTwo">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form id="selectPlanForm">
        <div className="stepTwoFlex border-">
          {SelectPlans.monthly.map((item, idx) => (
            <div
              onClick={() => planSelect(idx)}
              style={selectedPlans.id === item.id ? styling : null}
              key={item.id}
              className={`plan ${
                num != idx + 1 ? "bg-white" : "bg-primary-lightBlue"
              } border-2 ${
                num != idx + 1
                  ? "border-neutral-lightGray"
                  : "border-"
              } `}
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
        <div className="bottom items-center mt-3">
          <Link className="goBack no-underline" to="/">
            Go back
          </Link>
          <button
            onClick={handleSubmit}
            className="bg-blue text-white py-2 px-3 rounded-md text-xs float-right cursor-pointer mt-8"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
