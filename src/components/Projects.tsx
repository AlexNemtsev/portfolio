import { FlexWrapper } from './FlexWrapper';
import coverStub from '../assets/images/stub.webp';
import { ProjectData } from '../types/ProjectData';
import { ProjectCard } from './ProjectCard';

const projectsList: ProjectData[] = [
  {
    cover: `${coverStub}`,
    title: 'Project 1',
    skills: ['react', 'typescript', 'redux'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis maxime officia numquam eum tenetur eius nihil doloremque laborum molestiae explicabo?',
  },
  {
    cover: `${coverStub}`,
    title: 'Project 2',
    skills: ['react', 'typescript', 'redux'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis maxime officia numquam eum tenetur eius nihil doloremque laborum molestiae explicabo?',
  },
  {
    cover: `${coverStub}`,
    title: 'Project 3',
    skills: ['react', 'typescript', 'redux'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis maxime officia numquam eum tenetur eius nihil doloremque laborum molestiae explicabo?',
  },
  {
    cover: `${coverStub}`,
    title: 'Project 4',
    skills: ['react', 'typescript', 'redux'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis maxime officia numquam eum tenetur eius nihil doloremque laborum molestiae explicabo?',
  },
];

export const Projects = () => {
  return (
    <FlexWrapper $justify="center" $rowGap="20px" $columnGap="20px">
      {projectsList.map((project) => (
        <ProjectCard {...project} key={project.title} />
      ))}
    </FlexWrapper>
  );
};
