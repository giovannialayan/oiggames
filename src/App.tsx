import './App.css';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Project from './components/Project/Project';
import data from './assets/projects.json';
import KoFiButton from './components/KoFiButton/KoFiButton';

function App() {
  return (
    <div className='d-flex flex-column align-items-center mb-5'>
      <KoFiButton></KoFiButton>
      <div className='d-flex flex-column align-items-center gap-4'>
        <p className='title'>oig games</p>
        {data.projectSections.map((section) => {
          return (
            <ProjectSection key={section.title} title={section.title}>
              {section.projects.map((project) => {
                return <Project key={project.title} title={project.title} image={project.image} links={project.links}></Project>;
              })}
            </ProjectSection>
          );
        })}
      </div>
    </div>
  );
}

export default App;
