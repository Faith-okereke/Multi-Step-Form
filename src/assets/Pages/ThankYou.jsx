import check from "/src/assets/images/icon-thank-you.svg";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function ThankYou() {
  useEffect(()=>{
    toast.info("The Page will refresh now")
    setTimeout(() => {
      window.location.reload()
    }, 10000);
  },)
  return (
    <div className="pt-[25%]">
      <ToastContainer/>
      <div className="flex flex-col justify-center place-items-center items-center gap-5 m-auto">
        <img className="check w-16 " src={check} alt="check-done" />

        <h2 className="text-center"> Thank you!</h2>
        <p className="text-center sm:w-[400px] text-sm text-coolGray pb-[30px]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
