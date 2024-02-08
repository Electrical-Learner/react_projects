import React from "react";

function RightSideImage({ src }) {
  return (
    <div>
      <img
        className="image"
        src={src}
        style={{
          objectFit: "cover",
          height: "100%",
          width: "50vw",
          position: "absolute",
          opacity: 0.6,
          //   object-fit: cover;
          //   height: 100%;
          //   width: 50vw;
          //   position: absolute;
          //   opacity: 1;
        }}
        alt=""
      />
    </div>
  );
}

export default RightSideImage;
