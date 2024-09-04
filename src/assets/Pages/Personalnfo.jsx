import "/src/App.css";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextData } from "../../ContextStore";

export default function PersonalInfo() {
  const { personalData, setPersonalData, nextPage } = useContext(ContextData);
  const [error, setError] = useState(false);

  function submitPersonalInfo(event) {
    event.preventDefault();

    if (!personalData.name) {
      setError(!error);
    } else if (!personalData.email) {
      setError(!error);
    } else if (!personalData.number) {
      setError(!error);
    } else {
      setError(false)
      nextPage()
    }
  }

  function changeInput(e) {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    });
    setError(false)
  }

  return (
    <>
      <div className="">
        <ToastContainer />
        <div className="">
          <h2 className="font-bold text-marineBlue text-xl">Personal info</h2>
          <p className="pb-[15px] text-coolGray text-[12px] sm:text-[14px]">
            Please provide your name, email address, and phone number.
          </p>
          <form onSubmit={submitPersonalInfo} id="personalInfo">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label className="text-marineBlue" htmlFor="name">
                  Name
                </label>
                {error && (
                  <p className="text-brightRed text-sm font-bold text-right">
                    This field is required
                  </p>
                )}
              </div>

              <input
                className={`border-[1px] rounded-md p-2 outline-marineBlue  ${
                  error ? `error` : ``
                }`}
                onChange={changeInput}
                name="name"
                type="text"
                placeholder="e.g. Stephen King"
                value={personalData.name}
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between pt-4">
                <label className="text-marineBlue" htmlFor="email">
                  Email address
                </label>
                {error && (
                  <p className="text-brightRed text-sm font-bold text-right">
                    This field is required
                  </p>
                )}
              </div>

              <input
                className={`border-[1px] rounded-md p-2 outline-marineBlue ${
                  error ? `error` : ``
                }`}
                onChange={changeInput}
                name="email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                value={personalData.email}
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="flex justify-between pt-4">
                <label className="text-marineBlue" htmlFor="number">
                  Phone number
                </label>
                {error && (
                  <p className="text-brightRed text-sm font-bold text-right">
                    This field is required
                  </p>
                )}
              </div>

              <input
                className={`border-[1px] rounded-md p-2 outline-marineBlue ${
                  error ? `error` : ``
                }`}
                onChange={changeInput}
                name="number"
                type="tel"
                placeholder="e.g. +1 234 567 890"
                value={personalData.number}
                id="number"
              />
            </div>
            <div className="pt-20 hidden lg:block">
              <button
                type="submit"
                className="bg-marineBlue text-white py-3 px-4  rounded-md float-right cursor-pointer text-xs  hover:bg-opacity-80 "
              >
                Next Step
              </button>
            </div>{" "}
            <div className="lg:hidden flex justify-between w-screen p-5 fixed bottom-0 bg-white right-0 items-center">
              <button
                type="submit"
                className="bg-marineBlue text-white py-3 px-4 rounded-lg ml-auto cursor-pointer text-xs "
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
