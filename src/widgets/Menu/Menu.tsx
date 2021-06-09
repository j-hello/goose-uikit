import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_FULL } from "./config";
import Avatar from "./Avatar";
import Hamburger from "./Hamburger";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--site-pad) var(--site-pad) 0;
  width: 100%;
  background-color: ${({ theme }) => theme.nav.background};
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div`
  flex-grow: 1;
  transform: translate3d(0, 0, 0);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const FloatingButton = styled.div`
  padding: calc(var(--site-pad) * 2) 0 var(--site-pad);
  text-align: center;
`;

const Menu: React.FC<NavProps> = ({ account, login, logout, cakePriceUsd, links, priceLink, profile, children }) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo href={homeLink?.href ?? "/"} />
        <Flex>
          {isMobile ? (
            <Hamburger togglePush={() => setIsPushed((prevState: boolean) => !prevState)} />
          ) : (
            <UserBlock account={account} login={login} logout={logout} />
          )}
        </Flex>
      </StyledNav>
      {isMobile && (
        <FloatingButton>
          <UserBlock account={account} login={login} logout={logout} />
        </FloatingButton>
      )}
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink}
        />
        <Inner>{children}</Inner>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
