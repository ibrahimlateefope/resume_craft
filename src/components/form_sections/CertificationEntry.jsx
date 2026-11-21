export const CertificationEntry = ({
  data,
  updateCertification,
  removeCertification,
}) => {
  const fields = [
    { key: "name", type: "text", label: "Certification/Course Name", placeholder: "e.g. AWS Certified Developer" },
    { key: "organization", type: "text", label: "Issuing Organization", placeholder: "e.g. Amazon" },
    { key: "issueDate", type: "date", label: "Issue Date", placeholder: "Issue Date" },
    { key: "expiryDate", type: "date", label: "Expiration Date (optional)", placeholder: "Expiration Date" },
    { key: "url", type: "text", label: "Credential URL (optional)", placeholder: "https://..." },
  ];
  return (
    <div data-id={data.id}>
      {fields.map(({ key, type, label, placeholder }) => (
        <div key={data.id + key}>
          <label htmlFor={data.id + key}>{label}</label>
          <input
            id={data.id + key}
            type={type}
            placeholder={placeholder}
            value={data[key]}
            onChange={(e) => updateCertification(data.id, key, e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => removeCertification(data.id)}>🗑️ Delete</button>
    </div>
  );
};
