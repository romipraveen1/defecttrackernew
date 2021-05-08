import React from "react";
import { FlexContainer } from "./FlexContainer";

const Flex = (props: any) => {
  return <FlexContainer {...props}>{props.children}</FlexContainer>;
};

export default Flex;
