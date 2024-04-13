import { ReactElement } from 'react';
import './ProjectSection.css';

interface Props {
  children: ReactElement[];
  title: string;
}

function ProjectSection({ children, title }: Props) {
  return (
    <div>
      <p className='fs-1 mb-1'>{title}</p>
      <div className='projectsParent'>{children}</div>
    </div>
  );
}

export default ProjectSection;
