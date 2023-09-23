import styled from 'styled-components';
import photo from '../assets/images/photo.webp';
import { FlexWrapper } from '../components/FlexWrapper';
import { HighlightedLink } from '../components/StyledLinks';
import { Icon } from '../components/Icon';
import { Section } from '../components/Section';

export const MainSection = () => {
  return (
    <Section $minHeight="100vh" id="main">
      <FlexWrapper $justify="space-between">
        <FlexWrapper $direction="column" $align="flex-start">
          <MainHeader>Front-end developer</MainHeader>
          <span>Nemtsev Alexander</span>
          <HighlightedLink href="">Contact Me</HighlightedLink>
        </FlexWrapper>
        <StyledPhoto src={photo} alt="My photo" />
      </FlexWrapper>
      <FlexWrapper $justify="center">
        <a href="">
          <Icon iconId="arrow" width="32" height="32" viewBox="0 0 32 32" />
        </a>
      </FlexWrapper>
    </Section>
  );
};

const StyledPhoto = styled.img`
  height: 400px;
`;

const MainHeader = styled.h1`
  font-family: Tinos, serif;
  font-size: 20px;
  margin: 0;
`;
