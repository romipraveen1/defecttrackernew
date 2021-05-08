import { Col, Row } from "antd";
import React from "react";
import CompanyStatus from "../Components/Organisms/CompanyStatus";

const Company = (props: any) => {
  return (
    <div>
      <Row gutter={5}>
        <CompanyStatus />
      </Row>
    </div>
  );
};

export default Company;
