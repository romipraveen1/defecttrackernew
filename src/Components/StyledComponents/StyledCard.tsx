import React from "react";
import styled, { css } from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  border-radius: ${(props) => props.about};
  -webkit-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.58);
`;
