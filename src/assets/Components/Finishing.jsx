import "/src/App.css";
import { useContext, createContext } from "react";
function Finishing() {
  const theme = useContext(ThemeContext)
  return (
    <div className="mainSection">
      <h2>Finishing up</h2>
      <p> Double-check everything looks OK before confirming.</p>
      <div className="finish-all">
        <div className="finish">
          <div>
            <h5>{selectedPlan}</h5> <p className="span-change">Change</p>
          </div>

          <p>{price}</p>
        </div>
        <div className="finish-2">
          <p>{SelectedTopic}</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="totalling">
        <p>{`Total(per ${plan})`}</p>
        <p>12</p>
      </div>
    </div>
  );
}
export default Finishing;
