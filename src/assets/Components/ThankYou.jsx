import check from "/src/assets/images/icon-thank-you.svg";
export default function StepFive() {
  return (
    <div className="mainSection">
      <div className="this">
        <img className="check" src={check} alt="check-done" />

        <h2 className="thankyou-head"> Thank you!</h2>
        <p className="thankyou">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
