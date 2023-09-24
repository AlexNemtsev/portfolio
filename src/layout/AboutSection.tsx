import styled from 'styled-components';
import { Section } from '../components/Section';
import { SectionTitle } from '../components/SectionTitle';

export const AboutSection = () => {
  return (
    <Section>
      <SectionTitle id="about">About me</SectionTitle>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste recusandae accusantium
        voluptatibus facere dolorem corrupti quae! Fugit ipsum, qui saepe quasi tempore quae
        veritatis laudantium corrupti numquam dignissimos consectetur.
      </StyledParagraph>
    </Section>
  );
};

// TODO: Вынести все цвета в темы
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
    background-color: #5222d0;
    left: 0;
    bottom: 0;
  }
`;
