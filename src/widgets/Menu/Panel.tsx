import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean }>`
  flex-direction: column;
  align-self: flex-start;
  justify-items: space-between;
  flex-shrink: 0;
  width: 100%;
  z-index: 11;
  transform: translate3d(0, 0, 0);
  padding: var(--site-pad);
  padding-right: 0;
  margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : "-" + SIDEBAR_WIDTH_FULL}px`};

  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};

  ${({ theme }) => theme.mediaQueries.nav} {
    max-width: ${SIDEBAR_WIDTH_FULL}px;
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed } = props;
  return (
    <StyledPanel isPushed={isPushed}>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
