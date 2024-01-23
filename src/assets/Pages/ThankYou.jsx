import check from "/src/assets/images/icon-thank-you.svg";
export default function StepFive() {
  return (
    <div className="mainSection rounded-lg z-10 bg-white mt-[-50px] pl-3 pr-3 mx-[20px] pb-3 sm:mt-0">
      <div className="this">
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
