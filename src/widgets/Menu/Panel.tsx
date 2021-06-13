import React, { useEffect } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-items: space-between;
  flex-shrink: 0;
  z-index: 12;
  padding: calc(var(--site-pad) * 1.5) calc(var(--site-pad) * 1.5);
  height: 100%;
  width: 75%;
  transform: ${({ isPushed }) => `translate3d(${isPushed ? "0" : "100%"}, 0, 0)`};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  opacity: 1;
  background-color: var(--secondary-color);
  transition: transform 0.25s ease-in-out;

  .menu-hidden & {
    opacity: 0;
  }

  ${({ theme }) => theme.mediaQueries.nav} {
    width: 375px;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    padding: var(--site-pad);
    position: sticky;
    left: 0;
    bottom: auto;
    right: auto;
    opacity: 1;
    background: none;
    transition: none;
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
