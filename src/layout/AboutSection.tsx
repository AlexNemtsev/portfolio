import styled from 'styled-components';
import { SectionTitle } from '../components/SectionTitle';
import { Container } from '../components/Container';

export const AboutSection = () => {
  return (
    <Container as="section">
      <SectionTitle id="about" $margin="0 0 20px">
        About me
      </SectionTitle>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste recusandae accusantium
        voluptatibus facere dolorem corrupti quae! Fugit ipsum, qui saepe quasi tempore quae
        veritatis laudantium corrupti numquam dignissimos consectetur.
      </StyledParagraph>
    </Container>
  );
};

const StyledParagraph = styled.p`
  box-sizing: border-box;
  max-width: 865px;
  position: relative;
  padding-left: 22px;
  margin: 0;

  &::before {
    content: ' ';
    position: absolute;
    width: 5px;
    height: 95%;
    border-radius: 2px;
    background-color: ${(props) => props.theme.accentColor};
    left: 0;
    bottom: 0;
  }
`;
