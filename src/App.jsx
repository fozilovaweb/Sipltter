import React from "react";
import { Form, Title, ResultCard } from "./components";

function App() {
  return (
    <>
      <Title />
      <div className="W-full max-w-[57.5rem] flex  flex-col sm:flex-row  items-center gap-8   rounded-t-3xl sm:rounded-3xl p-8 bg-white">
        <Form />
        <ResultCard />
      </div>
    </>
  );
}

export default App;
