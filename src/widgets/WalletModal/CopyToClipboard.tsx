import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { CopyIcon } from "../../components/Svg";

interface Props {
  toCopy: string;
}

const StyleButton = styled(Text).attrs({ role: "button" })`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
`;

const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
  return (
    <StyleButton bold {...props}>
      {children}
      <CopyIcon fill="var(--secondary-color)" width="20px" color="secondary" ml="4.25px" />
    </StyleButton>
  );
};

export default CopyToClipboard;
