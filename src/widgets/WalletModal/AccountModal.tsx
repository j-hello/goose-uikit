import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="var(--lg-size)"
      color="var(--secondary-color)"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "12.75px" }}
    >
      {account}
    </Text>
    <Flex mb="25.5px">
      <LinkExternal
        color="var(--secondary-color)"
        href={`https://bscscan.com/address/${account}`}
        mr="17px"
        bold
        style={{ fill: "var(--secondary-color)" }}
      >
        BscScan
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy</CopyToClipboard>
    </Flex>
    <Flex justifyContent="flex-start">
      <Button
        variant="tertiary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(localStorageKey);
          onDismiss();
          window.location.reload();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
