import React, { useState, useEffect } from "react";
import { Progress } from "@ant-design/charts";
import { StyledProgress } from "./style";

const ProgressBar = (props: any) => {
  let { height, width, percent, withratio, title, color, style, type } = props;
  const rounded = {};
  // {
  //   type === "round" ? (style = rounded) : style;
  // }
  var config = {
    height: height,
    width: width,
    autoFit: true,
    percent: percent,
    barWidthRatio: 0.2,
    color: color,
    style: { borderRadius: "10px" },
  };
  return (
    <div>
      <h4>{title}</h4>
      <StyledProgress {...config} />
    </div>
  );
};

export default ProgressBar;
