import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "16px",
  },
  [sizes.LG]: {
    fontSize: "25.89px",
  },
  [sizes.XL]: {
    fontSize: "32px",
  },
  [sizes.XXL]: {
    fontSize: "67.77px",
  },
};

const Heading = styled(Text)<HeadingProps>`
  ${({ size }) => style[`calc( ${size || sizes.MD} * 0.7);`]}
  font-weight: ${({ bold }) =>  bold ? "500" : "400"};
  line-height: 1.3;

  ${({ theme }) => theme.mediaQueries.xs} {
    ${({ size }) => style[`calc( ${size || sizes.MD} * 0.75);`]}
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    ${({ size }) => style[`calc( ${size || sizes.MD} * 0.8);`]}
  }
  ${({ theme }) => theme.mediaQueries.md} {
    ${({ size }) => style[`calc( ${size || sizes.MD} * 0.85);`]}
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    ${({ size }) => style[`calc( ${size || sizes.MD} * 0.9);`]}
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    ${({ size }) => style[size || sizes.MD]}
  }

`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
