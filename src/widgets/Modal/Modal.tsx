import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background-color: var(--primary-color);
  box-shadow: var(--glow);
  border-radius: 2em;
  width: calc(100% - var(--site-pad));
  z-index: 100;
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    min-width: 400px;
    max-width: 500px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  padding: var(--card-pad) var(--card-pad) 0;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
  color: var(--secondary-color);
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "var(--card-pad)",
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8.5px">
            <ArrowBackIcon color="secondary" width="18px" />
          </IconButton>
        )}
        <Heading bold color="var(--secondary-color)">
          {title}
        </Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon fill="var(--secondary-color)" width="18px" />
        </IconButton>
      )}
    </ModalHeader>
    <Flex flexDirection="column" p={bodyPadding}>
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
