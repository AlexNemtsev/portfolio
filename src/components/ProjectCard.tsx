import { ProjectData } from '../types/ProjectData';
import { FlexWrapper } from './FlexWrapper';

type ProjectCardProps = ProjectData;

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <FlexWrapper $direction="column">
      <img src={props.cover} alt="project card cover" />
      <h3>{props.title}</h3>
      <FlexWrapper>
        {props.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </FlexWrapper>
      <p>{props.description}</p>
    </FlexWrapper>
  );
};
