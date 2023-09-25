import styled, { css } from 'styled-components';
import { ProjectData } from '../types/ProjectData';
import { FlexWrapper } from './FlexWrapper';
import { Highlighted } from './Highlighted';

type ProjectCardProps = ProjectData;

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <FlexWrapper as={Card} $direction="column" $align="flex-start" $maxWidth="530px">
      <img src={props.cover} alt="project card cover" width="100%" />
      <FlexWrapper as={ProjectInfo} $direction="column">
        <CardTitle>{props.title}</CardTitle>
        <FlexWrapper $columnGap="12px">
          {props.skills.map((skill) => (
            <Highlighted as={StyledSpan} key={skill}>
              {skill}
            </Highlighted>
          ))}
        </FlexWrapper>
        <p>{props.description}</p>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const StyledSpan = styled.span`
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  text-transform: uppercase;
`;

const Card = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme.projectCard.backgroundColor};

  overflow: hidden;

  ${(props) =>
    props.theme.projectCard.boxShadow &&
    css`
      box-shadow: ${props.theme.projectCard.boxShadow};
    `};
`;

const ProjectInfo = styled.div`
  padding: 30px 10px 30px 26px;
`;
