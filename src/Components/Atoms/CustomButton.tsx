import React from "react";
import { Button } from "antd";

let custom = {
  backgroundColor: "#13C2C2",
  borderRadius: "5px",
  fontWeight: "600",
  letterSpacing: "1px",
  color: "#fff",
  textAlign: "center",
  fontSize: "14px",
};

let large = {};

const CustomButton = (props: any) => {
  const { style, danger, href, icon, size, type, onClick } = props;

  return (
    <Button
      style={type === "default" ? custom : { ...style }}
      danger={danger}
      href={href}
      icon={icon}
      size={size}
      type={type === "large" ? large : { ...type }}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
