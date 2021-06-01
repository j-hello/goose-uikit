import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, SubMenuEntry } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

const SubContainer = styled(Container)`
  padding-top: 34px;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  const mainLinks = links.filter(entry => !entry.sub);
  const subLinks = links.filter(entry => entry.sub);

  return (
    <>
    <Container>
      {mainLinks.map((entry) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              <LinkLabel>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
    <SubContainer>
      {subLinks.map((entry) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <SubMenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </SubMenuEntry>
                ))}
            </Accordion>
          );
        }

        return (
          <SubMenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
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
