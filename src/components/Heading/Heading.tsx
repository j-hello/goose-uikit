import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "var(--md-size)",
  },
  [sizes.LG]: {
    fontSize: "var(--lg-size)",
  },
  [sizes.XL]: {
    fontSize: "var(--xl-size)",
  },
  [sizes.XXL]: {
    fontSize: "var(--xxl-size)",
  },
};

const Heading = styled(Text)<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-weight: ${({ bold }) => (bold ? "500" : "400")};
  line-height: ${({ clamped }) => (clamped ? "1.1" : "1.4")};
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
