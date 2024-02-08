import React from "react";

function InputComponent({
  width,
  height = 40,
  label,
  marginLeft = "",
  fontSize = 14,
  textAlign = "left",
  palceholder = "",
  backgroundColor = "",
  border = "",
  paddingLeft = "",
  borderRadius = "",
}) {
  return (
    <>
      &nbsp;
      <label
        style={{
          fontSize: fontSize,
          textAlign: textAlign,
          marginLeft: marginLeft,
        }}
      >
        {label}
      </label>
      <span style={{ color: "red" }}>*</span>
      <br />
      <input
        type="text"
        placeholder={palceholder}
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          marginLeft: marginLeft,
          borderRadius: borderRadius,
          marginBottom: "20px",
          border: border,
          color: "white",
          outline: "none",
          paddingLeft: paddingLeft,
        }}
      ></input>
    </>
  );
}

export default InputComponent;
