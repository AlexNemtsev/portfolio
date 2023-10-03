import styled from 'styled-components';
import { Container } from '../components/Container';
import { FlexWrapper } from '../components/FlexWrapper';
import { FooterMenu } from '../components/FooterMenu';
import { SocialNetworks } from '../components/SocialNetworks';

export const Footer = () => {
  return (
    <Container as={StyledFooter}>
      <FlexWrapper $direction="column" $rowGap="48px">
        <SocialNetworks />
        <FooterMenu />
        <StyledSpan>Front-end developer 2023</StyledSpan>
      </FlexWrapper>
    </Container>
  );
};

const StyledFooter = styled.footer`
  font-size: 14px;
  padding: 190px 0 100px;
`;

const StyledSpan = styled.span`
  text-align: center;
  text-transform: uppercase;
`;
