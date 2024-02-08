import React, { useState } from "react";
import logo from "./images/Mask Group 1.png";
import logoutIcon from "./images/Mask Group 5@2x.jpg";
import VegetableCardComponent from "./VegetableCardComponent";
import AddNewItemModal from "./AddNewItemModal";
function VegetableDetails() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <nav
        class="navbar bg-body-tertiary"
        style={{ height: "64px", paddingLeft: "40px" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="nothing"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
              style={{ width: "38px", height: "38px" }}
            />
          </a>
          <div className="d-grid gap-3 d-md-flex justify-content-md-end mx-5">
            <button
              className="btn btn-primary"
              style={{ borderRadius: "20px" }}
              onClick={() => handleShow()}
            >
              + new item
            </button>
            <div>
              <div className="flex">
                <button
                  class="btn btn-outline-danger"
                  style={{
                    color: "#C40000",
                    border: "none",
                    backgroundColor: "#FCF2F2",
                  }}
                >
                  <img
                    src={logoutIcon}
                    alt="..."
                    style={{
                      width: "16px",
                      height: "16px",
                      background: "transparent",
                    }}
                  ></img>{" "}
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="row">
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://img.freepik.com/free-photo/high-angle-arrangement-delicious-fresh-broccoli-close-up_23-2148642993.jpg?w=360&t=st=1707363003~exp=1707363603~hmac=97144815a83abe63a07724497175697e836e3bf2a6e99c825b13ee87073e8e0b"
            }
          />
        </div>
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://img.freepik.com/free-photo/close-up-fresh-green-okra_1127-246.jpg?w=1060&t=st=1707364650~exp=1707365250~hmac=ae3586832f895ea47f39bf55eea1412af7a6f21b2dd4bf022288698bdb7bcb99"
            }
          />
        </div>
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://img.freepik.com/free-vector/vector-ripe-yellow-orange-red-whole-sliced-mango-cubes-with-leaf-isolated-white-background_1284-45465.jpg?w=826&t=st=1707364792~exp=1707365392~hmac=9531c6bb9be48350667a840e00d6f12084bacb6dccbe7bac30373e562c1d5859"
            }
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://img.freepik.com/free-photo/premium-fresh-organic-carrots_158595-5797.jpg?w=1060&t=st=1707365306~exp=1707365906~hmac=06ebe6dbb7a73dcfb18a1f70dbfecb376ad6f831fe7a39ae77e925a740072713"
            }
          />
        </div>
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://balconygardenweb.b-cdn.net/wp-content/uploads/2023/04/Cashew-Fruit1.jpg"
            }
          />
        </div>
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://img.freepik.com/free-photo/fresh-raw-green-beans_181624-6071.jpg?w=1060&t=st=1707365483~exp=1707366083~hmac=ba970df270e609c5a05dde1b545256f2c00ac5051db44e9dc2a90faf650eeb05"
            }
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://img.freepik.com/free-photo/vertical-view-fresh-natural-green-feijoas-small-vitamin-bomb_140725-136786.jpg?w=360&t=st=1707365532~exp=1707366132~hmac=4e866a3ed47a9ddd75abcc9a88bf414745e5ad9332fe958c9e092364237edd00"
            }
          />
        </div>
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://img.freepik.com/free-photo/eggplant_144627-18693.jpg?size=626&ext=jpg&ga=GA1.1.697680075.1702379535&semt=sph"
            }
          />
        </div>
        <div class="col">
          <VegetableCardComponent
            imageSource={
              "https://img.freepik.com/free-photo/strawberries-cut-half-whole-berries-ripe-berries-top-view-background-ripe-strawberries-delicious-natural-dessert_166373-2358.jpg?size=626&ext=jpg&ga=GA1.1.697680075.1702379535&semt=sph"
            }
          />
        </div>
      </div>
      {show && <AddNewItemModal setShow={setShow} show={show} />}
    </>
  );
}

export default VegetableDetails;
