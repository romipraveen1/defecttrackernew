import React from "react";
import { Calendar } from "antd";

const Calender = () => {
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode);
  }
  return (
    <div>
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
};

export default Calender;
