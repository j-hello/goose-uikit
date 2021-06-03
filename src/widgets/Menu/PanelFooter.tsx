import React from "react";
import styled from "styled-components";
import { GooseRoundIcon as Logo } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 34px 51px 0;
`;

const PriceEntry = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  .egg-icon {
    width: 50px;
  }
`;

const PanelFooter: React.FC<Props> = ({ cakePriceUsd, priceLink }) => {

  cakePriceUsd = cakePriceUsd ? cakePriceUsd : 0;
  return (
    <Container>
      <PriceEntry>
        <Logo className="egg-icon" mr="17px" />
        <Text color="text" fontSize="20px">{`$${cakePriceUsd.toFixed(3)}`}</Text>
        <Button size="sm" href={priceLink}>Buy</Button>
      </PriceEntry>
    </Container>
  );
};

export default PanelFooter;
