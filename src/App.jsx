import React, { useState } from 'react';
import { GeneralInfo } from "./components/GeneralInfo.jsx";
import { Summary } from "./components/Summary.jsx";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Daniel",
    lastName: "Baker",
    address: "",
    tel: "",
    email: "",
  });
  const [summary, setSummary] = useState("Hello");
  return (
    <>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Summary summary={summary} setSummary={setSummary} />
    </>
  );
}

export default App;
