import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  ${space}
`;

CardFooter.defaultProps = {
  p: "17px",
};

export default CardFooter;
