import React from "react";
import "./Register.css";
import AccountVerifyText from "./atoms/inputComponents/AccountVerifyText";
import ButtonSwitchBtFarmerAndBuyer from "./atoms/inputComponents/ButtonSwitchBtFarmerAndBuyer";
import InputComponent from "./atoms/inputComponents/InputComponent";
import Logo from "./atoms/inputComponents/Logo";
import CancleButton from "./atoms/CancleButton";
import RegisterButton from "./atoms/RegisterButton";
import RightSideImage from "./atoms/RightSideImage";

function RegisterAsFarmer() {
  return (
    <div>
      <div class="container align-center" style={{ display: "inline-flex" }}>
        <div class="row right-img">
          <div class="col-md-6">
            <Logo />
            <form>
              <AccountVerifyText
                text={"Already have an Account?"}
                greet={"Login"}
                msg={"Create new account"}
                dot={"."}
              />
              <ButtonSwitchBtFarmerAndBuyer />
              <div
                className="row"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div className="col md-6">
                  <InputComponent
                    label={"First Name"}
                    width={"260px"}
                    marginLeft={"4.5rem"}
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
              <div
                className="row"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
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
              <div className="col">
                <InputComponent
                  label={"Location of the Agriculture filed"}
                  width={"587px"}
                  marginLeft={"4.5rem"}
                />{" "}
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
          <div class="col-md-6">
            <RightSideImage
              src={
                "https://blog.agcurate.com/content/images/size/w1200/2023/07/erik-oHSmhHK-BB0-unsplash-2.jpg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAsFarmer;
