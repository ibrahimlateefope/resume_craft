import { ExperienceEntry } from "./ExperienceEntry.jsx";

export const Experiences = ({ experiences, setExperiences }) => {
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: crypto.randomUUID(),
        role: "",
        company: "",
        location: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id, key, value) => {
    setExperiences(
      experiences.map((exp) => (exp.id === id ? { ...exp, [key]: value } : exp))
    );
  };

  return (
    <section>
      {experiences.map((exp) => (
        <ExperienceEntry
          key={exp.id}
          data={exp}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
        />
      ))}
      <button onClick={addExperience}>+ Add Experience</button>
    </section>
  );
};