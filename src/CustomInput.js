import React from "react";

const CustomInput = ({}) => {
  return (
    <div >
      <input
        type="text"
        className="custom-textbox"
        placeholder="Enter phone number here"
      ></input>
      <button className="button-box">
        <h3 style={{color: "black"}}>Apply Now</h3>
      </button>
    </div>
  );
};

export default CustomInput;
