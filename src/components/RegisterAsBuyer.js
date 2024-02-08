import React from "react";
import "./Register.css";
import Logo from "./atoms/inputComponents/Logo";
import AccountVerifyText from "./atoms/inputComponents/AccountVerifyText";
import ButtonSwitchBtFarmerAndBuyer from "./atoms/inputComponents/ButtonSwitchBtFarmerAndBuyer";
import InputComponent from "./atoms/inputComponents/InputComponent";
import CancleButton from "./atoms/CancleButton";
import RegisterButton from "./atoms/RegisterButton";
import RightSideImage from "./atoms/RightSideImage";
import plantingRice from "./images/eduardo-prim-3u51-uLQICc-unsplash@2x.jpg";
function RegisterAsBuyer() {
  return (
    <>
      <div className="row right-img">
        <div className="col-md-6">
          <Logo />
          <form>
            <AccountVerifyText
              text={"Already have an Account?"}
              greet={"Login"}
              msg={"Create new account"}
              dot={"."}
            />
            <ButtonSwitchBtFarmerAndBuyer />
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="col md-6">
                <InputComponent
                  label={"First Name"}
                  width={"260px"}
                  marginLeft={"4.5rem"}
                  backgroundColor={"#333645"}
                  border="none"
                  borderRadius="8px"
                />{" "}
              </div>
              <div className="col md-6">
                <InputComponent
                  label={"Last Name"}
                  width={"260px"}
                  marginLeft={"1rem"}
                />
              </div>
            </div>
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="col md-6">
                <InputComponent
                  label={"Mobile Number"}
                  width={"260px"}
                  marginLeft={"4.5rem"}
                />{" "}
              </div>
              <div className="col md-6">
                <InputComponent
                  label={"E-mail ID"}
                  width={"260px"}
                  marginLeft={"1rem"}
                />
              </div>
            </div>
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="col md-6">
                <InputComponent
                  label={"Company Name"}
                  width={"260px"}
                  marginLeft={"4.5rem"}
                />{" "}
              </div>
              <div className="col md-6">
                <InputComponent
                  label={"Compant GST"}
                  width={"260px"}
                  marginLeft={"1rem"}
                />
              </div>
            </div>
            <div className="col">
              <InputComponent
                label={"Password"}
                width={"587px"}
                marginLeft={"4.5rem"}
              />{" "}
            </div>
            <div className="col">
              <InputComponent
                label={"Confirm Password"}
                width={"587px"}
                marginLeft={"4.5rem"}
              />{" "}
            </div>
            <div
              className="d-flex justify-content-right mb-4"
              style={{ display: "flex" }}
            >
              <CancleButton />
              <RegisterButton />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <RightSideImage src={plantingRice} />
        </div>
      </div>
    </>
  );
}

export default RegisterAsBuyer;
