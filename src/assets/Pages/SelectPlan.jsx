import "/src/App.css";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { ContextData } from "../../ContextStore";
import PlanData from "../Data/SelectPlanData";
import PrevNextKeys from "../Component/PrevNextKeys";
export default function SelectPlan() {
  const { nextPage, selectedPlans,setSelectedPlans, monthly,setMonthly } = useContext(ContextData);

  const [isChecked, setChecked] = useState({ checked: false });
  const [num, setNum] = useState(0);
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
      nextPage();
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
  const planSelect = (id) => {
    setSelectedPlans({
      plan: monthly[id].plan,
      price: monthly[id].price,
    });
    setNum(id + 1);
  };

  const styling = {
    border: "2px solid hsl(243, 100%, 62%)",
    backgroundColor: " hsl(231, 100%, 99%)",
  };
  return (
    <div className="">
      <ToastContainer />
      <h2 className="font-[700] text-[20px]">Select your plan</h2>
      <p className="pb-[15px] text-[12px] text-coolGray">
        You have the option of monthly or yearly billing.
      </p>
      <form onSubmit={handleSubmit} id="selectPlanForm">
        <div className="flex flex-col sm:flex-row md:gap-8 gap-3">
          {PlanData.map((item, idx) => (
            <div
              onClick={() => planSelect(idx)}
              style={num == idx + 1 ? styling : null}
              className="border-hsl(231, 11%, 63%) border-[1px] p-[10px] sm:w-[110px] sm:pr-6 rounded-md  sm:mt-[40px] cursor-pointer"
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
       <PrevNextKeys/>
      </form>
    </div>
  );
}
