import "/src/App.css";
import { useContext } from "react";
import { ContextData } from "../../ContextStore";
import { ToastContainer, toast } from "react-toastify";

function Finishing() {
  const {
    nextPage,
    prevPage,
    selectedPlans,
    monthly,
    addOnsSelectedValue,
    setCurrentStep,
    isChecked
  } = useContext(ContextData);

  const totalPrice = selectedPlans.price +
  addOnsSelectedValue.reduce((total, item) => total + item.price * (!isChecked.checked ? 1 : 10), 0);

  console.log(addOnsSelectedValue);
  const handleSubmit = (event) => {
    event.preventDefault();
    nextPage();
  };

  const handleChangePlan = () => {
    setCurrentStep(2);
  };

  return (
    <div className="lg:w-[30vw]">
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
                {selectedPlans.plan} ({!isChecked.checked ? "Monthly" : "Yearly"})
              </h5>
              <a
                className="text-coolGray span-change underline hover:text-purpleBlue text-[9px] cursor-pointer"
                onClick={handleChangePlan}
              >
                Change
              </a>
            </div>
            <p className="text-xs font-bold text-marineBlue">
              {selectedPlans.price} /{!isChecked.checked? "mo" : "yr"}
            </p>
          </div>
        </div>
        {addOnsSelectedValue.map((item) => (
          <div
            className="text-xs flex items-center justify-between"
            key={item.id}
          >
            <p className="text-coolGray py-2">{item.topic}</p>
            <p>
             {!isChecked.checked ? ` ${ item.price }/mo` : `${item.price*10} /yr`}
            </p>
          </div>
        ))}
      </div>
      <div className="text-sm py-6 flex justify-between items-center">
        <p className="text-coolGray">
          Total (per {!isChecked.checked ? "month" : "year"})
        </p>
        <p className="total-price text-[12px] text-purpleBlue font-bold">
          ${totalPrice} /{!isChecked.checked ? "mo" : "yr"}
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
