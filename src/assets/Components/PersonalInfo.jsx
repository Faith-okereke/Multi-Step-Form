import "/src/App.css";

export default function StepOne() {
  const elments = {
    name: "",
    email: "",
    number: "",
  };
  return (
    <>
      <div className="mainSection">
        <div className="firstStep">
          <h2>Personal info</h2>
          <p> Please provide your name, email address, and phone number.</p>
          <form id="form" action="">
            <div>
              <label htmlFor="">Name</label>
              <input
                value={elments.name}
                type="text"
                placeholder="e.g. Stephen King"
              />
            </div>
            <div>
              <label htmlFor="Email"> Email Address</label>
              <input
                value={elments.email}
                type="text"
                placeholder="e.g. stephenking@lorem.com"
              />
            </div>
            <div>
              <label htmlFor="Phone">Phone Number</label>
              <input
                value={elments.number}
                type="text"
                placeholder="e.g. +1 234 567 890"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
