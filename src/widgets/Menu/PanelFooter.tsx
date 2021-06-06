import React from "react";
import styled from "styled-components";
import { GooseRoundIcon as Logo } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 34px 0 0 51px;
`;

const PriceEntry = styled.div`
  display: flex;
  align-items: center;
  .egg-icon {
    margin-right: 17px;
    width: 50px;
  }
  a {
    margin-left: auto;
  }
`;

const PanelFooter: React.FC<Props> = ({ cakePriceUsd, priceLink }) => {

  cakePriceUsd = cakePriceUsd ? cakePriceUsd : 0;
  return (
    <Container>
      <PriceEntry>
        <Logo className="egg-icon" mr="17px" />
        <Text color="text" fontSize="22px" letterSpacing="0.01em">{`$${cakePriceUsd.toFixed(3)}`}</Text>
        <Button as="a" variant="primary" href={priceLink}>Buy</Button>
      </PriceEntry>
    </Container>
  );
};

export default PanelFooter;
