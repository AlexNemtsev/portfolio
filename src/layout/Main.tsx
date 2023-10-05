import styled from 'styled-components';
import photo from '../assets/images/photo.webp';
import { FlexWrapper } from '../components/FlexWrapper';
import { HighlightedLink } from '../components/StyledLinks';
import { Icon } from '../components/Icon';
import { Container } from '../components/Container';

export const Main = () => {
  return (
    <FlexWrapper as={Section} $direction="column" id="main" $rowGap="100px" $justify="center">
      <FlexWrapper as={Container} $justify="space-between" $align="center">
        <FlexWrapper $direction="column" $align="flex-start">
          <MainHeader>Front-end developer</MainHeader>
          <Name>Nemtsev Alexander</Name>
          <ContactLink href="#contacts">Contact Me</ContactLink>
        </FlexWrapper>
        <StyledPhoto src={photo} alt="My photo" />
      </FlexWrapper>
      <FlexWrapper $justify="center">
        <a href="#about">
          <Icon
            iconId="arrow"
            sizes={{ $web: { width: '32px', height: '32px' } }}
            viewBox="0 0 32 32"
          />
        </a>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const Section = styled.section`
  box-sizing: border-box;
  min-height: calc(100vh - (1rem + 2 * 40px));
  padding: 100px 0 0;
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

const ContactLink = styled(HighlightedLink)`
  font-weight: 500;
`;
