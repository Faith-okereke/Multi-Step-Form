import "/src/App.css";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextData } from "../../ContextStore";

export default function PersonalInfo() { 
  const {
    personalData,
    setPersonalData,
    nextPage,
  } = useContext(ContextData);

  function submitPersonalInfo(event) {
    event.preventDefault();

    if (personalData.name && personalData.email && personalData.number) {
      nextPage();
      console.log(personalData);
    } else {
      toast.error("Enter a valid Input");
    }
  }

  function changeInput(e) {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    });
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
          <form onSubmit={submitPersonalInfo} id="personalInfo" >
            <div className="flex flex-col gap-2">
              <label className="text-marineBlue" htmlFor="name">Name</label> {/* Updated for accessibility */}
              <input
              className="border-2 rounded-md p-2"
                onChange={changeInput}
                name="name"
                type="text"
                placeholder="e.g. Stephen King"
                value={personalData.name}
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-marineBlue pt-3" htmlFor="email">Email Address</label> {/* Updated for accessibility */}
              <input
              className="border-2 rounded-md p-2"
                onChange={changeInput}
                name="email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                value={personalData.email}
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-marineBlue pt-3" htmlFor="number">Phone Number</label>
              <input
              className="border-2 rounded-md p-2"
                onChange={changeInput}
                name="number"
                type="tel"
                placeholder="e.g. +1 234 567 890"
                value={personalData.number}
                id="number"
              />
            </div>
            <div className="pt-20 bg-white">
            <button
              type="submit"
              className="bg-marineBlue text-white py-3 px-4  rounded-md float-right cursor-pointer text-xs"
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
