import "/src/App.css";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import SelectPlan from "./SelectPlan";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Personalnfo() {
  const [elments, setElements] = useState(
    JSON.parse(localStorage.getItem("")) || {
      name: "",
      email: "",
      number: "",
    }
  );
  useEffect(() => {
    localStorage.setItem("", JSON.stringify(elments));
  });
  const Context = createContext();
  const navigate = useNavigate();
  function SubmitPersonalInfo(event) {
    event.preventDefault();

    if (elments.name && elments.email && elments.number) {
      navigate("/select-plan");
      console.log(elments);
    } else {
      toast.error("Enter a valid Input");
    }
  }
  function changeInput(e) {
    setElements({
      ...elments,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <div className="mainSection">
        <ToastContainer />
        <div className="firstStep">
          <h2>Personal info</h2>
          <p> Please provide your name, email address, and phone number.</p>
          <form  onSubmit={SubmitPersonalInfo} id="personalnfo" action="">
            <div>
              <label htmlFor="Name">Name</label>
              <input
                onChange={changeInput}
                name="name"
                type="text"
                placeholder="e.g. Stephen King"
                value={elments.name}
              />
            </div>
            <div>
              <label htmlFor="Email"> Email Address</label>
              <input
                onChange={changeInput}
                name="email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                value={elments.email}
              />
            </div>
            <div>
              <label htmlFor="Phone">Phone Number</label>
              <input
                onChange={changeInput}
                name="number"
                type="tel"
                placeholder="e.g. +1 234 567 890"
                value={elments.number}
              />
            </div>
            <div>
              
            </div>
            <button
              type="submit"
              className="bg-dark text-white py-2 px-3 rounded-md float-right cursor-pointer text-xs"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
