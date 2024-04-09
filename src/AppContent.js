import React from "react";
import "./styles.css";
import cardImage from "./card-image.png";
import CustomInput from "./CustomInput";

const AppContent = () => {
  return (
    <div className="app-content">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: 100,
          margin: 20,
        }}
      >
        <div>
          <h1
            style={{
              justifyContent: "flex-start",
              fontWeight: "bold",
              color: "black",
              marginLeft: "30px",
              fontSize: 50,
            }}
          >
            uni
          </h1>
        </div>
        <div
          style={{
            borderRadius: 10,
            width: "400px",
            backgroundColor: "black",
            height: 40,
            justifyContent: "flex-end",
            marginLeft: "80%",
          }}
        >
          <h1 style={{ fontSize: 13, justifyContent: "center", marginTop: 2}}>Uni Paycheck</h1>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "70%",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <h1
            style={{
              display: "flex",
              color: "black",
              fontWeight: "bold",
              fontSize: 55,
              justifyContent: "flex-start",
            }}
          >
            <strong>NX Wave.</strong>
            <h1
              style={{
                display: "flex",
                fontWeight: "bold",
                fontSize: 33,
                justifyContent: "flex-end",
              }}
            >
              The next-gen credit card for those who love rewards
            </h1>
          </h1>
          <p style={{ color: "black", fontSize: 19, fontWeight: "bold" }}>
            1% Cashback + 5x Rewards + Zero Forex Markup
          </p>
          <div>
            {/* <input
              type="text"
              className="custom-textbox"
              placeholder="Enter phone number here"
            >
            </input> */}
            <CustomInput />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img
            src={cardImage}
            alt="Credit card"
            style={{ width: 400, height: 400 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppContent;
