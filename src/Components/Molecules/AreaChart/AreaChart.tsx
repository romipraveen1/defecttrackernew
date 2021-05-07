import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/charts";
import { Col, Row } from "antd";

const AreaChart = (props: any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const { title } = props;

  var config: any = {
    areaStyle: function areaStyle() {
      return { fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff" };
    },
    data: data,
    autoFit: true,
    height: 190,
    xField: "Date",
    yField: "scales",
    xAxis: { tickCount: 5 },
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: { isArea: true },
    },
  };
  return (
    <div>
      <Row>
        <Col span={12}> </Col>
        <Col span={12}>
          <h5>{title}</h5>
        </Col>
      </Row>

      <Area {...config} />
    </div>
  );
};

export default AreaChart;
