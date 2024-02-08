import React from "react";

function AccountVerifyText({ text, greet, msg, dot }) {
  return (
    <div>
      <h6
        style={{
          paddingLeft: 55,
        }}
      >
        {text}&nbsp;
        <a
          style={{ textDecoration: "none", border: "none", color: "#1592E6" }}
          href="..."
        >
          {greet}
        </a>
        <h1 class="mt-0 " style={{ fontSize: "40px", fontWeight: "bolder" }}>
          {msg}
          <span style={{ color: "#F86935" }}> {dot}</span>
        </h1>
      </h6>
    </div>
  );
}

export default AccountVerifyText;
