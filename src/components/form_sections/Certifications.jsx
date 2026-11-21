import { CertificationEntry } from "./CertificationEntry.jsx";

export const Certifications = ({ certifications, setCertifications }) => {
  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        id: crypto.randomUUID(),
        name: "",
        organization: "",
        issueDate: "",
        expiryDate: "",
        url: "",
      },
    ]);
  };

  const removeCertification = (id) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
  };

  const updateCertification = (id, key, value) => {
    setCertifications(
      certifications.map((cert) =>
        cert.id === id ? { ...cert, [key]: value } : cert
      )
    );
  };

  return (
    <section>
      {certifications.map((cert) => (
        <CertificationEntry
          key={cert.id}
          data={cert}
          updateCertification={updateCertification}
          removeCertification={removeCertification}
        />
      ))}
      <button onClick={addCertification}>+ Add Certification</button>
    </section>
  );
};
