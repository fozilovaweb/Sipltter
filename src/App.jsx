import React, { useState } from "react";
import { Form, Title, ResultCard } from "./components";

function App() {
  const [values, setValues] = useState({ bill: 0, people: 0, tip: 0 });

  return (
    <>
      <Title />
      <div className="W-full max-w-[57.5rem] flex flex-col sm:flex-row items-center gap-8 rounded-t-3xl sm:rounded-3xl p-8 bg-white">
        {/* Props orqali Form va ResultCard ga beramiz */}
        <Form values={values} setValues={setValues} />
        <ResultCard values={values} />
      </div>
    </>
  );
}

export default App;
