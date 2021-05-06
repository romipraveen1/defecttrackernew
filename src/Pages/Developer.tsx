import { Col, Row } from "antd";
import React from "react";
import CustomCard from "../Components/Molecules/Card/CustomCards";
import { StyledCard } from "../Components/StyledComponents/StyledCard";

const Developer = () => {
  return (
    <div>
      <Row>
        <Col span={6}>
          <StyledCard></StyledCard>
        </Col>
      </Row>
    </div>
  );
};

export default Developer;
