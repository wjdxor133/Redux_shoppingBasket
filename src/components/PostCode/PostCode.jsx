import React from "react";
import DaumPostcode from "react-daum-postcode";

const Postcode = ({ setVisible, setAddress }) => {
  const handleComplete = (data) => {
    console.log("data", data);
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setVisible(false);
    setAddress(fullAddress);
  };

  const postStyle = {
    position: "fixed",
    backgroundColor: "white",
    padding: "0.3em 0.4em",
    borderRadius: "5px",
    width: "50%",
    height: "60%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      style={postStyle}
      autoClose={true}
      autoResize={true}
    />
  );
};

export default Postcode;
