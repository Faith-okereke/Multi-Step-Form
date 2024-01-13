import "/src/App.css";
import { useContext, useState } from "react";
import ContextPlans from "../Data/SelectPlanData";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function SelectPlan() {
  const [isChecked, setChecked] = useState({ checked: false });
  const navigate = useNavigate();
  const SelectPlans = useContext(ContextPlans);
  const [num, setNum] = useState(0);
  const { selectedPlans, setSelectedPlans } = useContext(ContextPlans);

  const planSelect = (id) => {
    setSelectedPlans({
      plan: SelectPlans.monthly[id].plan,
      price: SelectPlans.monthly[id].price,
    });
    setNum(id + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedPlans.plan);
    console.log(selectedPlans.price);
    console.log(num);
    if (selectedPlans.plan === "" ||selectedPlans.plan === undefined|| selectedPlans.price === undefined ) {
      toast.error("Select a plan");
    } else {
      navigate("/add-ons");
    }
  };

  const handleToggle = (event) => {
    const { checked, name } = event.target;
    if (isChecked.checked) {
      console.log("Monthly Plan activated");
    } else {
      console.log("Yearly Plan activated");
    }
    setChecked((prevData) => {
      return {
        ...prevData,
        [name]: checked,
      };
    });
    return true;
  };

  const styling = {
    border: "1.5px solid hsl(243, 100%, 62%)",
    backgroundColor: " hsl(231, 100%, 99%)",
  };
  return (
    <div className="stepTwo">
      <ToastContainer />
      <h2 className="font-[700] text-[20px]">Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form id="selectPlanForm">
        <div className="stepTwoFlex">
          {SelectPlans.monthly.map((item, idx) => (
            <div
              onClick={() => planSelect(idx)}
              style={num == idx +1 ? styling : null}
              className="cursor-pointer w-31"
              key={item.id}
            >
              <img src={item.img} alt="" />
              <h3 className="mt-4">{item.plan}</h3>
              <p>
                {isChecked.checked
                  ? `$${item.price * 10}/yr`
                  : `$${item.price}/mo`}
              </p>
              <p className="free">{isChecked.checked ? "2 months free" : ""}</p>
            </div>
          ))}
        </div>
        <div className="toggle-div bg-alabaster flex justify-center items-center py-3 space-x-8 rounded-md mt-4">
          <p
            className={`${
              handleToggle ? "text-coolGray " : "text-marineBlue"
            }"text-[14px] font-[500]"`}
          >
            Monthly
          </p>
          <div className="toggle-switch relative my-0 mx-2">
            <input
              onChange={handleToggle}
              style={{ visibility: "hidden" }}
              type="checkbox"
              id="checked"
              checked={isChecked.checked}
              name="checked"
            />
            <label
              htmlFor="checked"
              className="inline-flex relative items-center cursor-pointer"
            >
              <div
                onClick={handleToggle}
                className="w-11 h-6 peer-focus:outline-none  rounded-full peer dark:bg-marineBlue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"
              ></div>{" "}
            </label>
          </div>
          <p
            className={`${
              handleToggle ? "text-marineBlue" : "text-coolGray "
            } text-[14px] font-[500]`}
          >
            Yearly
          </p>
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
