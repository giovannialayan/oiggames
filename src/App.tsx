import './App.css';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Project from './components/Project/Project';
import data from './assets/projects.json';

function App() {
  return (
    <>
      {data.projectSections.map((section) => {
        return (
          <ProjectSection title={section.title}>
            {section.projects.map((project) => {
              return <Project title={project.title} image={project.image} links={project.links}></Project>;
            })}
          </ProjectSection>
        );
      })}
    </>
  );
}

export default App;
