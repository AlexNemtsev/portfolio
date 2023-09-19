import styled from 'styled-components';
import { ProjectData } from '../types/ProjectData';
import { FlexWrapper } from './FlexWrapper';
import { Highlighted } from './Highlighted';

type ProjectCardProps = ProjectData;

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <FlexWrapper $direction="column" $align="flex-start" $maxWidth="530px">
      <img src={props.cover} alt="project card cover" width="100%" />
      <CardTitle>{props.title}</CardTitle>
      <FlexWrapper $columnGap="6px">
        {props.skills.map((skill) => (
          <Highlighted as={StyledSpan} key={skill}>
            {skill}
          </Highlighted>
        ))}
      </FlexWrapper>
      <p>{props.description}</p>
    </FlexWrapper>
  );
};

const StyledSpan = styled.span`
  text-transform: uppercase;
  padding: 8px 12px;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  margin: 0;
`;
