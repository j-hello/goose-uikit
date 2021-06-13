import styled from "styled-components";

interface BarProps {
  primary?: boolean;
}

export const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  height: 17px;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: false,
};

const StyledProgress = styled.div`
  position: relative;
  background-color: var(--input-color);
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  height: 17px;
  overflow: hidden;
`;

export default StyledProgress;
