import React from "react";
import Title from "./components/Titel";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Title />
      <div className="W-full max-w-[57.5rem] rounded-t-3xl p-8 bg-white">
        <Form />
      </div>
    </>
  );
}

export default App;
