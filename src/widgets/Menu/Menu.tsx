import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Overlay from "../../components/Overlay/Overlay";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import Hamburger from "./Hamburger";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav`
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

const Menu: React.FC<NavProps> = ({ account, login, logout, cakePriceUsd, links, priceLink, children }) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);

  useEffect(() => {
    function handleOverlay() {
      isPushed && isMobile
        ? document.body.setAttribute("style", "position: fixed; top: 0; left: 0; right: 0")
        : document.body.setAttribute("style", "");
    }

    window.addEventListener("resize", handleOverlay);
    handleOverlay();

    return () => window.removeEventListener("resize", handleOverlay);
  }, [isPushed]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav>
        <Logo href={homeLink?.href ?? "/"} />
        {isMobile ? (
          <Hamburger togglePush={() => setIsPushed((prevState: boolean) => !prevState)} />
        ) : (
          <UserBlock account={account} login={login} logout={logout} />
        )}
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          cakePriceUsd={cakePriceUsd}
          pushNav={() => setIsPushed(false)}
          links={links}
          priceLink={priceLink}
        />
        <Inner>{children}</Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
