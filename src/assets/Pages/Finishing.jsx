import "/src/App.css";
import { useContext } from "react";
import { ContextData } from "../../ContextStore";
import { ToastContainer, toast } from "react-toastify";

function Finishing() {
  const {
    nextPage,
    prevPage,
    selectedPlans,
    monthlyPlan,
    addOnsSelectedValue,
    setCurrentStep
  } = useContext(ContextData);

  const totalPrice = selectedPlans.price + addOnsSelectedValue.reduce((total, item) => total + item.price, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (addOnsSelectedValue.length === 0) {
      toast.error("Select at least one add-on");
    } else {
      nextPage();
    }
  };

  const handleChangePlan = () => {
    setCurrentStep(2); 
  };

  return (
    <div className="">
      <ToastContainer />
      <h2 className="font-bold text-[20px]">Finishing up</h2>
      <p className="pb-[15px] text-[12px] text-coolGray">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-lightGray rounded-lg p-3 my-5">
        <div className="border-b-[1px] border-b-coolGray">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col gap-0">
              <h5 className="text-sm font-900 text-marineBlue">
                {selectedPlans.plan} ({monthlyPlan ? 'Monthly' : 'Yearly'})
              </h5>
              <a className="text-coolGray span-change hover:underline text-xs cursor-pointer" onClick={handleChangePlan}>
                Change
              </a>
            </div>
            <p className="text-xs font-bold text-marineBlue">
              ${monthlyPlan ? selectedPlans.price : selectedPlans.price * 12}/{monthlyPlan ? 'mo' : 'yr'}
            </p>
          </div>
        </div>
        {addOnsSelectedValue.map((item) => (
          <div className="finish-2" key={item.id}>
            <p className="text-coolGray pt-[10px]">{item.topic}</p>
            <p>
              ${monthlyPlan ? item.price : item.price * 12}/{monthlyPlan ? 'mo' : 'yr'}
            </p>
          </div>
        ))}
      </div>
      <div className="text-sm py-6 flex justify-between items-center">
        <p className="text-coolGray">Total (per {monthlyPlan ? 'month' : 'year'})</p>
        <p className="total-price text-[12px] text-purpleBlue font-bold">
          ${monthlyPlan ? totalPrice : totalPrice * 12}/{monthlyPlan ? 'mo' : 'yr'}
        </p>
      </div>
      <div className="flex justify-between items-center sm:mt-[30px] pt-20">
        <p
          className="no-underline text-lightGray font-bold cursor-pointer hover:underline"
          onClick={prevPage}
        >
          Go back
        </p>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-purpleBlue text-white py-3 px-4 rounded-md float-right cursor-pointer text-xs"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Finishing;