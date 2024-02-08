import React from "react";
import Logo from "./atoms/inputComponents/Logo";
import AccountVerifyText from "./atoms/inputComponents/AccountVerifyText";
import InputComponent from "./atoms/inputComponents/InputComponent";
import RightSideImage from "./atoms/RightSideImage";
import LoginButton from "./atoms/LoginButton";
import buyer from "./images/beth-macdonald-6P-J1ZLD6cQ-unsplash.jpg";
function WelcomeBackPageOfBuyer() {
  return (
    <>
      <div class="row right-img">
        <div class="col-md-6">
          <Logo />
          <form style={{ marginTop: "60px" }}>
            <AccountVerifyText
              text={"Don't have an Account?"}
              greet={"Register"}
              msg={"Welcome back"}
              dot={"!"}
            />
            <div
              className="col"
              style={{
                marginTop: "40px",
              }}
            >
              <InputComponent
                label={"E-mail ID/Phone number"}
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
            <LoginButton />
          </form>
        </div>
        <div class="col-md-6">
          <RightSideImage src={buyer} />
        </div>
      </div>
    </>
  );
}

export default WelcomeBackPageOfBuyer;
