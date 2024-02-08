import React from "react";

function VegetableCardComponent({ imageSource }) {
  return (
    <>
      <div
        class="card mb-3 mt-4"
        style={{
          width: "380px",
          height: "189px",
          boxShadow: "0px 0px 6px #463C3C29",
          borderRadius: "8px",
          // margin: "0px 0px 0px 30px",
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={imageSource}
              class="img-fluid rounded-start"
              style={{ width: "137px", height: "189px" }}
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5
                class="card-title"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#22242B",
                }}
              >
                Title
              </h5>
              <p
                class="card-text"
                style={{
                  fontSize: "12px",
                  color: "#22242B",
                  width: "219px",
                  height: "67px",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </p>
              <p class="card-text">
                <button
                  className="d-flex float-end"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    fontSize: "12px",
                    color: "#22242B",
                    margin: "20px 0px 0px 0px",
                  }}
                >
                  Seller Name
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VegetableCardComponent;
