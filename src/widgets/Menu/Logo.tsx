import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import { LogoIcon as LogoWithText } from "./icons";

interface Props {
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .desktop-icon {
    width: 225px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ href }) => {
  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Goose home page">
          <LogoWithText className="desktop-icon" />
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Goose home page">
          <LogoWithText className="desktop-icon" />
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
