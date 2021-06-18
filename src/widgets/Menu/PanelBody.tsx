import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Accordion from "./Accordion";
import UserBlock from "./UserBlock";
import { MenuEntry, LinkLabel, SubMenuEntry } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";
import Close from "./Close";
import { Login } from "../WalletModal/types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  account?: string;
  login: Login;
  logout: () => void;
}

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: var(--site-pad);
  ${({ theme }) => theme.mediaQueries.nav} {
    padding-top: 0;
  }
`;

const SubContainer = styled(Container)`
  padding-top: var(--site-pad);
`;

const Ping = styled.span`
  position: absolute;
  top: 0;
  right: -4.25px;
  width: 11px;
  height: 11px;
  background: var(--primary-color);
  border-radius: 100%;

  @keyframes ping {
    75%,
    to {
      transform: scale(2);
      opacity: 0;
    }
  }

  > span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--primary-color);
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;

const PanelBody: React.FC<Props> = ({ pushNav, isMobile, links, account, login, logout }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  const mainLinks = links.filter((entry) => !entry.sub);
  const subLinks = links.filter((entry) => entry.sub);

  return (
    <>
      {isMobile && (
        <Actions>
          <Close togglePush={() => pushNav(false)} />
          <UserBlock account={account} login={login} logout={logout} isMobile />
        </Actions>
      )}
      <Container>
        {mainLinks.map((entry) => {
          const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

          if (entry.items) {
            return (
              <Accordion key={entry.label} label={entry.label} initialOpenState={false} className={calloutClass}>
                {entry.items.map((item) => (
                  <MenuEntry
                    key={item.href}
                    secondary
                    isActive={item.href === location.pathname || location.pathname.includes(item.href)}
                    onClick={handleClick}
                  >
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
              </Accordion>
            );
          }
          return (
            <MenuEntry
              key={entry.label}
              isActive={entry.href ? entry.href === location.pathname || location.pathname.includes(entry.href) : false}
              className={calloutClass}
            >
              <MenuLink href={entry.href} onClick={handleClick}>
                <LinkLabel>{entry.label}</LinkLabel>
              </MenuLink>

              {entry.featured && (
                <Ping>
                  <span></span>
                </Ping>
              )}
            </MenuEntry>
          );
        })}
      </Container>
      <SubContainer>
        {subLinks.map((entry) => {
          const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

          if (entry.items) {
            return (
              <Accordion key={entry.label} label={entry.label} initialOpenState={false} className={calloutClass} sub>
                {entry.items.map((item) => (
                  <SubMenuEntry
                    key={item.href}
                    secondary
                    isActive={item.href === location.pathname || location.pathname.includes(item.href)}
                    onClick={handleClick}
                  >
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </SubMenuEntry>
                ))}
              </Accordion>
            );
          }

          return (
            <SubMenuEntry
              key={entry.label}
              isActive={entry.href ? entry.href === location.pathname || location.pathname.includes(entry.href) : false}
              className={calloutClass}
            >
              <MenuLink href={entry.href} onClick={handleClick}>
                <LinkLabel>{entry.label}</LinkLabel>
              </MenuLink>
            </SubMenuEntry>
          );
        })}
      </SubContainer>
    </>
  );
};

export default PanelBody;
