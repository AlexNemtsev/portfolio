import styled from 'styled-components';
import photo from '../assets/images/photo.webp';
import { FlexWrapper } from '../components/FlexWrapper';
import { StyledLink } from '../components/StyledLink';
import icons from '../assets/images/icons-sprite.svg';

export const Main = () => {
  return (
    <>
      <FlexWrapper $justify="space-between" $isContainer>
        <FlexWrapper $direction="column" $align="flex-start">
          <MainHeader>Front-end developer</MainHeader>
          <span>Nemtsev Alexander</span>
          <StyledLink $filled>Contact Me</StyledLink>
        </FlexWrapper>
        <StyledPhoto src={photo} alt="My photo" />
      </FlexWrapper>
      <FlexWrapper $justify="center">
        <a href="">
          <svg width="32" height="32">
            <use xlinkHref={`${icons}#arrow`}></use>
          </svg>
        </a>
      </FlexWrapper>
    </>
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
