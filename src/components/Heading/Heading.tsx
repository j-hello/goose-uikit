import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "16px",
  },
  [sizes.LG]: {
    fontSize: "22px",
  },
  [sizes.XL]: {
    fontSize: "32px",
  },
  [sizes.XXL]: {
    fontSize: "60px",
  },
};

const Heading = styled(Text)<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-weight: ${({ bold }) =>  bold ? "500" : "400"};
  line-height: 1.1;
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
