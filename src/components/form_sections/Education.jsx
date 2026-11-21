import { EducationEntry } from "./EducationEntry.jsx";
export const Education = ({ education, setEducation }) => {
  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: crypto.randomUUID(),
        qualification: "",
        institution: "",
        location: "",
        achievement: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  const removeEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };
  const updateEducation = (id, key, value) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [key]: value } : edu)),
    );
  };
  return (
    <section>
      {education?.map((edu) => (
        <EducationEntry
          key={edu.id}
          edu={edu}
          updateEducation={updateEducation}
          removeEducation={removeEducation}
        />
      ))}
      <button
        onClick={() => {
          addEducation();
        }}
      >
        +Add
      </button>
    </section>
  );
};
