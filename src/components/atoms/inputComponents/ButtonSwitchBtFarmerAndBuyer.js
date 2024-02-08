import React from "react";
import "./ButtonSwitchBtFarmerAndBuyer.css";
function ButtonSwitchBtFarmerAndBuyer() {
  return (
    <div>
      <div class="button-box">
        <div id="btn"></div>
        <button type="button" class="toggle-btn">
          As Farmer
        </button>
        <button type="button" class="toggle-btn">
          As Buyer
        </button>
      </div>
    </div>
  );
}

export default ButtonSwitchBtFarmerAndBuyer;
