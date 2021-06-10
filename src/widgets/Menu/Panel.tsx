import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean }>`
  flex-direction: column;
  align-self: flex-start;
  justify-items: space-between;
  flex-shrink: 0;
  z-index: 11;
  padding: calc(var(--site-pad) * 4) calc(var(--site-pad) * 2);
  width: 75%;
  transform: ${({ isPushed }) => `translate3d(${isPushed ? "0" : "100%"}, 0, 0)`};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
  transition: transform 0.25s ease-in-out;

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${SIDEBAR_WIDTH_FULL}px;
    transform: translate3d(0, 0, 0);
    padding: var(--site-pad);
    padding-right: 0;
    display: flex;
    position: sticky;
    top: 0;
    right: auto;
    left: 0;
    box-shadow: none;
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
