import { Col } from "antd";
import React from "react";
import CustomCard from "../Molecules/Card/CustomCards";

const CompanyStatus = () => {
  return (
    <>
      <Col span={4}>
        <CustomCard roud type="default" hoverable>
          Project
        </CustomCard>
      </Col>
      <Col span={4}>
        <CustomCard roud type="default" hoverable></CustomCard>
      </Col>
      <Col span={4}>
        <CustomCard roud type="default" hoverable></CustomCard>
      </Col>
      <Col span={4}>
        <CustomCard roud type="default" hoverable></CustomCard>
      </Col>
      <Col span={4}>
        <CustomCard roud type="default" hoverable></CustomCard>
      </Col>
      <Col span={4}>
        <CustomCard roud type="default" hoverable></CustomCard>
      </Col>
    </>
  );
};

export default CompanyStatus;
