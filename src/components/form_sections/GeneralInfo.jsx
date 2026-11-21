export const GeneralInfo = ({ generalInfo, setGeneralInfo }) => {
  const fields = [
    {
      key: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "e.g., Daniel",
      autoComplete: "given-name",
    },
    {
      key: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "e.g., Baker",
      autoComplete: "family-name",
    },
    {
      key: "city",
      label: "City",
      type: "text",
      placeholder: "e.g., Tokyo",
      autoComplete: "city",
    },
    {
      key: "country",
      label: "Country",
      type: "text",
      placeholder: "e.g., Nigeria",
      autoComplete: "country",
    },
    {
      key: "tel",
      label: "Contact no.",
      type: "tel",
      placeholder: "e.g.,08023546423",
      autoComplete: "tel",
    },
    {
      key: "email",
      label: "Email",
      type: "email",
      placeholder: "e.g., daniel@example.com",
      autoComplete: "email",
    },
  ];

  const handleInput = (key, value) => {
    setGeneralInfo({
      ...generalInfo,
      [key]: value,
    });
  };

  return (
    <form>
      {fields.map(({ key, label, type, placeholder, autoComplete }) => (
        <div key={key}>
          <label htmlFor={key}>{label}</label>
          <input
            id={key}
            name={key}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={generalInfo[key] || ""}
            onChange={(e) => handleInput(key, e.target.value)}
          />
        </div>
      ))}
    </form>
  );
};
