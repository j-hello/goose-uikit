import React, { useEffect } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Sticky = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  z-index: 12;
  overflow-y: auto;

  ${({ theme }) => theme.mediaQueries.nav} {
    z-index: 10;
    position: sticky;
    left: 0;
    bottom: auto;
    right: auto;
  }
`;

const StyledPanel = styled.div<{ isPushed: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: space-between;
  flex-shrink: 0;
  padding: calc(var(--site-pad) * 1.5) calc(var(--site-pad) * 1.5);
  transform: ${({ isPushed }) => `translate3d(${isPushed ? "0" : "100%"}, 0, 0)`};
  opacity: 1;
  background-color: var(--secondary-color);
  transition: transform 0.25s ease-in-out;

  .mobile-menu-hide & {
    opacity: 0;
  }

  ${({ theme }) => theme.mediaQueries.nav} {
    width: 375px;
    transform: translate3d(0, 0, 0);
    padding: var(--site-pad);
    opacity: 1 !important;
    background: none;
    transition: none;
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed } = props;

  return (
    <Sticky>
      <StyledPanel isPushed={isPushed}>
        <PanelBody {...props} />
        <PanelFooter {...props} />
      </StyledPanel>
    </Sticky>
  );
};

export default Panel;
