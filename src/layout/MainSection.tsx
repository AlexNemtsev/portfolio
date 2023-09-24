import styled from 'styled-components';
import photo from '../assets/images/photo.webp';
import { FlexWrapper } from '../components/FlexWrapper';
import { HighlightedLink } from '../components/StyledLinks';
import { Icon } from '../components/Icon';
import { Container } from '../components/Container';

export const MainSection = () => {
  return (
    <FlexWrapper as={Section} $direction="column" id="main" $rowGap="100px">
      <FlexWrapper as={Container} $justify="space-between" $align="center">
        <FlexWrapper $direction="column" $align="flex-start">
          <MainHeader>Front-end developer</MainHeader>
          <Name>Nemtsev Alexander</Name>
          <HighlightedLink href="#contacts">Contact Me</HighlightedLink>
        </FlexWrapper>
        <StyledPhoto src={photo} alt="My photo" />
      </FlexWrapper>
      <FlexWrapper $justify="center">
        <a href="#about">
          <Icon iconId="arrow" width="32" height="32" viewBox="0 0 32 32" />
        </a>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const Section = styled.section`
  min-height: 100vh;
`;

const StyledPhoto = styled.img`
  height: 400px;
`;

const MainHeader = styled.h1`
  font-family: Tinos, serif;
  font-size: 20px;
  font-weight: inherit;
  margin: 0;
`;

const Name = styled.span`
  font-size: 72px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
  max-width: 380px;
  margin: 10px 0 30px;
`;
