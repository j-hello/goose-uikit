import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const StyledPanel = styled.div`
  display: none;
  flex-direction: column;
  align-self: flex-start;
  justify-items: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: 100%;
  z-index: 11;
  transform: translate3d(0, 0, 0);
  padding-top: 51px;

  ${({ theme }) => theme.mediaQueries.nav} {
    max-width: 300px;
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
  }
`;

const Panel: React.FC<Props> = (props) => {
  return (
    <StyledPanel>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
