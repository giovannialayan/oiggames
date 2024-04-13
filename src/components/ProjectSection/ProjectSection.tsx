import { ReactElement } from 'react';

interface Props {
  children: ReactElement[];
  title: string;
}

function ProjectSection({ children, title }: Props) {
  return (
    <div>
      <p className='fs-1'>{title}</p>
      <div className='d-flex flex-row justify-content-center gap-5'>{children}</div>
    </div>
  );
}

export default ProjectSection;
