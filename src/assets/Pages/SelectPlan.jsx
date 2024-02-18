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
    if (
      selectedPlans.plan === "" ||
      selectedPlans.plan === undefined ||
      selectedPlans.price === undefined
    ) {
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
    <div className="mainSection rounded-lg z-10 bg-white mt-[-50px] pl-3 pr-3 mx-[20px] pb-3 sm:mt-0">
      <ToastContainer />
      <h2 className="font-[700] text-[20px]">Select your plan</h2>
      <p className="pb-[15px] text-[12px] text-coolGray">You have the option of monthly or yearly billing.</p>
      <form id="selectPlanForm">
        <div className="stepTwoFlex flex-col sm:flex-row">
          {SelectPlans.monthly.map((item, idx) => (
            <div
              onClick={() => planSelect(idx)}
              style={num == idx + 1 ? styling : null}
              className="border-hsl(231, 11%, 63%) border-[1px] p-[10px] sm:w-[110px] sm:pr-[30px] rounded-[7px] w-[250px] sm:mt-[40px] cursor-pointer"
              key={item.id}
            >
              <div className="flex justify-left items-center gap-4  sm:block">
                <img src={item.img} alt="" />
                <div>
                  <h3 className="mt-4 text-marineBlue font-bold text-[13px]">
                    {item.plan}
                  </h3>
                  <p className="p-0 text-[9px] text-coolGray">
                    {isChecked.checked
                      ? `$${item.price * 10}/yr`
                      : `$${item.price}/mo`}
                  </p>
                  <p className="text-marineBlue pt-[2px] text-[10px]">
                    {isChecked.checked ? "2 months free" : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="toggle-div bg-alabaster flex justify-center items-center py-3 space-x-8 rounded-md mt-4">
          <p
            className={`${
              handleToggle ? "text-coolGray " : "text-marineBlue"
            }text-[12px] sm:text-[14px] font-[500]"`}
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
            } text-[12px] sm:text-[14px] font-[500]`}
          >
            Yearly
          </p>
        </div>
        <div className="bottom items-center mt-3 sm:mt-[30px]">
          <Link className="goBack no-underline" to="/">
            Go back
          </Link>
          <button
            onClick={handleSubmit}
            className="bg-marineBlue text-white py-2 px-3 rounded-md text-xs float-right cursor-pointer mt-8"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
