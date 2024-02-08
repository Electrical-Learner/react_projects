import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputComponent from "./atoms/inputComponents/InputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";

function AddNewItemModal({ setShow, show }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <form className="mt-3">
          <div style={{ display: "inline-flex" }}>
            <div
              style={{
                border: "0.5px solid #a6a6a6",
                width: "150px",
                height: "150px",
                marginLeft: "40px",
                marginBottom: "20px",
                color: "#a6a6a6",
                borderRadius: "4px",
              }}
            >
              <FontAwesomeIcon
                icon={faImage}
                style={{
                  color: "#a6a6a6",
                  borderRadius: "4px",
                  width: "36px",
                  height: "27px",
                  margin: "55px 0px 0px 55px",
                }}
              />
              <br />
              <p
                className="position-absolute"
                style={{
                  color: "#A6A6A6",
                  width: "45px",
                  height: "14px",
                  fontSize: "12px",
                  margin: "0px 0px 80px 50px",
                }}
              >
                + Image
              </p>
            </div>
            <div
              style={{
                border: "0.5px solid #a6a6a6",
                width: "150px",
                height: "150px",
                marginLeft: "40px",
              }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                style={{
                  color: "#a6a6a6",
                  width: "23px",
                  height: "57px",
                  margin: "40px 0px 0px 60px",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>

          <InputComponent
            label={"Name Of the product"}
            palceholder={"eg. carrot"}
            border="0.5px solid #A6A6A6"
            width={"385px"}
            marginLeft="55px"
            borderRadius="4px"
          />
          <InputComponent
            label={"farmer name"}
            palceholder={"eg. Doe"}
            border="0.5px solid #A6A6A6"
            width={"385px"}
            marginLeft="55px"
            borderRadius="4px"
          />
          <InputComponent
            label={"farmer ID"}
            palceholder={"eg. FAR254hgb"}
            border="0.5px solid #A6A6A6"
            width={"385px"}
            marginLeft="55px"
            borderRadius="4px"
          />
          <label
            style={{ marginLeft: "55px", fontSize: "14px", textAlign: "left" }}
          >
            description
          </label>
          <span style={{ color: "red" }}>*</span>
          <br />
          <textarea
            placeholder="Type here..."
            style={{
              marginLeft: "55px",
              width: "385px",
              height: "95px",
              paddingTop: "10px",
              border: "0.5px solid #A6A6A6",
            }}
          ></textarea>
          <Modal.Body></Modal.Body>
        </form>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#E3E3E3",
              width: "96px",
              height: "32px",
              borderRadius: "4px",
              color: "#3F3F3F",
              border: "none",
            }}
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#1E92FF",
              width: "96px",
              height: "32px",
              borderRadius: "4px",
              border: "none",
              color: "#FFFFFF",
            }}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewItemModal;
