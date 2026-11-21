import { ProjectEntry } from "./ProjectEntry.jsx";

export const Projects = ({ projects, setProjects }) => {
  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: crypto.randomUUID(),
        name: "",
        description: "",
        link: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  const removeProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };
  const updateProject = (id, key, value) => {
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, [key]: value } : p)),
    );
  };
  return (
    <section>
      <h2>Projects</h2>
      {projects?.map((project) => (
        <ProjectEntry
          key={project.id}
          project={project}
          updateProject={updateProject}
          removeProject={removeProject}
        />
      ))}
      <button onClick={addProject}>+Add Project</button>
    </section>
  );
};
