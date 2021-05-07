import { Col, Row } from "antd";
import React from "react";
import ProgressBar from "../Components/Atoms/ProgressBar/ProgressBar";
import AreaChart from "../Components/Molecules/AreaChart/AreaChart";
import CustomCard from "../Components/Molecules/Card/CustomCards";
import { StyledCard } from "../Components/StyledComponents/StyledCard";

const Developer = () => {
  return (
    <div>
      <Row gutter={48}>
        <Col span={12}>
          <StyledCard>
            <ProgressBar
              width="100%"
              height="10"
              title="New"
              color={["#F44336", "#f5f5f5d4"]}
              percent={0.5}
            />
            <ProgressBar
              width="100%"
              height="10"
              title="Open"
              color={["#8BC34A", "#f5f5f5d4"]}
              percent={0.4}
            />
            <ProgressBar
              width="100%"
              height="10"
              title="Closed"
              color={["#00D1C2", "#f5f5f5d4"]}
              percent={0.8}
            />

            <ProgressBar
              width="100%"
              height="10"
              title="Rejected"
              color={["#21C299", "#f5f5f5d4"]}
              percent={0.3}
            />
          </StyledCard>
        </Col>
        <Col span={12} style={{ gridGap: "20px" }}>
          <StyledCard>
            <AreaChart title="Total Defect & Closed Defect" />
          </StyledCard>
        </Col>
      </Row>
    </div>
  );
};

export default Developer;
