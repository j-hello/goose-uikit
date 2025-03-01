import styled from "styled-components";

export const Handle = styled.div`
  background-color: var(--secondary-color);
  border-radius: 50%;
  cursor: pointer;
  height: 32px;
  left: 4px;
  position: absolute;
  top: 4px;
  transition: left 200ms ease-in;
  width: 32px;
  z-index: 1;
`;

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - 36px);
  }
`;

const StyledToggle = styled.div<{ checked: boolean; background?: string }>`
  align-items: center;
  background-color: ${({ background }) => (background ? background : `var(--text-subtle-color)`)};
  background-color: ${({ checked }) => (checked ? `var(--primary-color)` : ``)};
  border-radius: 2em;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  position: relative;
  transition: background-color 200ms;
  width: 72px;
`;

export default StyledToggle;
