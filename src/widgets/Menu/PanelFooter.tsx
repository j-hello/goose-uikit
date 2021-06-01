import React from "react";
import styled from "styled-components";
import { GooseRoundIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  flex: none;
  padding: 17px 51px 0;
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
`;

const PanelFooter: React.FC<Props> = ({ cakePriceUsd, priceLink }) => {
  cakePriceUsd = cakePriceUsd ? cakePriceUsd : 0;
  return (
    <Container>
      <SocialEntry>
        <PriceLink href={priceLink}>
          <GooseRoundIcon width="24px" mr="8px" />
          <Text color="text" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
        </PriceLink>
      </SocialEntry>
      <SocialEntry>
        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "text", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "8px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="text">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
