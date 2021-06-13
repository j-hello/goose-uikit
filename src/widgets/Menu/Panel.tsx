import React, { useEffect } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Sticky = styled.div<{ isPushed: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  z-index: 12;
  transform: ${({ isPushed }) => `translate3d(${isPushed ? "0" : "100%"}, 0, 0)`};
  transition: transform 0.25s ease-in-out;

  ${({ theme }) => theme.mediaQueries.nav} {
    position: sticky;
    left: 0;
    bottom: auto;
    right: auto;
    width: 375px;
    z-index: 10;
    transform: translate3d(0, 0, 0);
    transition: none;
  }
`;

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: space-between;
  height: 100%;
  padding: calc(var(--site-pad) * 1.5) calc(var(--site-pad) * 1.5);
  opacity: 1;
  background-color: var(--secondary-color);

  .mobile-menu-hide & {
    opacity: 0;
  }

  ${({ theme }) => theme.mediaQueries.nav} {
    padding: var(--site-pad);
    opacity: 1 !important;
    background: none;
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed } = props;

  return (
    <Sticky isPushed={isPushed}>
      <StyledPanel>
        <PanelBody {...props} />
        <PanelFooter {...props} />
      </StyledPanel>
    </Sticky>
  );
};

export default Panel;
