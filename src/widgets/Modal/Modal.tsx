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
  background: ${({ theme }) => theme.modal.background};
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
  border-radius: 24px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 420px;
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  padding: 25.5px 25.5px 0;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "25.5px",
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" width="18px" />
          </IconButton>
        )}
        <Heading bold>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon color="primary" width="18px" />
        </IconButton>
      )}
    </ModalHeader>
    <Flex flexDirection="column" p={bodyPadding}>
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
