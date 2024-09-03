import "/src/App.css";
import { useContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { ContextData } from "../../ContextStore";
import PlanDataContext from "../Data/SelectPlanData";
import PrevNextKeys from "../Component/PrevNextKeys";

export default function SelectPlan() {
  const {
    nextPage,
    selectedPlans,
    setSelectedPlans,
    setIsMonthlyPlan,
    planData,
    setPlanData,
    isChecked,
    setChecked,
  } = useContext(ContextData);

  // Use selectedPlans from context to initialize num
  const [num, setNum] = useState(() => {
    const selectedPlanIndex = PlanDataContext.findIndex(
      (plan) => plan.plan === selectedPlans.plan
    );
    return selectedPlanIndex !== -1 ? selectedPlanIndex + 1 : 0;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
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
    setIsMonthlyPlan(!checked);
    setChecked((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const planSelect = (id) => {
    setSelectedPlans({
      plan: PlanDataContext[id].plan,
      price: isChecked.checked
        ? PlanDataContext[id].price * 10
        : PlanDataContext[id].price,
    });
    setNum(id + 1);
  };

  useEffect(() => {
    // Update selectedPlans when isChecked changes
    if (selectedPlans.plan) {
      const planIndex = PlanDataContext.findIndex(
        (plan) => plan.plan === selectedPlans.plan
      );
      if (planIndex !== -1) {
        setSelectedPlans({
          plan: selectedPlans.plan,
          price: isChecked.checked
            ? PlanDataContext[planIndex].price * 10
            : PlanDataContext[planIndex].price,
        });
      }
    }
  }, [isChecked.checked]);

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
        <div className="flex lg:flex-row sm:flex-row flex-col justify-center md:gap-8 gap-3">
          {PlanDataContext.map((item, idx) => (
            <div
              onClick={() => planSelect(idx)}
              style={num === idx + 1 ? styling : null}
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
            className={`text-[12px] sm:text-[14px] font-[500] ${
              !isChecked.checked ? "text-marineBlue" : "text-coolGray"
            }`}
          >
            Monthly
          </p>
          <div className="flex items-center justify-between relative my-0 mx-2">
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
                className={`w-11 h-6 rounded-full ${
                  isChecked.checked ? "bg-marineBlue" : "bg-marineBlue"
                } transition-colors`}
              >
                <div
                  className={`absolute top-[4px] left-[4px] w-4 h-4 bg-white border border-gray-300 rounded-full transition-transform ${
                    isChecked.checked ? "translate-x-full border-white" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>

          <p
            className={`text-[12px] sm:text-[14px] font-[500] ${
              isChecked.checked ? "text-marineBlue" : "text-coolGray"
            }`}
          >
            Yearly
          </p>
        </div>
        <PrevNextKeys />
      </form>
    </div>
  );
}
