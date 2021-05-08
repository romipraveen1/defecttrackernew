import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-items:${(props: any) => (props.center ? "center" : "")}
  height: ${(props: any) =>
    props.titles ? "40px" : props.steps ? "150px" : ""};
  justify-content: ${(props: any) =>
    props.flex === "start"
      ? "flex-start"
      : props.flex === "even"
      ? "space-evenly"
      : props.flex === "end"
      ? "flex-end"
      : "space-between"};
  flex-wrap: wrap;
  flex-direction: ${(props: any) => (props.column ? "column" : "row")};
`;
