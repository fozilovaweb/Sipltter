import React, { useState } from "react";
import { Input } from "./";
import SelectTip from "./SelectTip";

function Form() {
  const [values, setValues] = useState({ bill: 0, people: 0, tip: 0 });
  console.log(values);
  return (
    <div className="w-72 sm:w-80 md:95 flex flex-col gap-8  sm:gap-3  ">
      <Input label={"Bill"} icon={"dollar"} setValues={setValues} />
      <SelectTip setValues={setValues} />
      <Input label={"Number of People"} icon={"user"} setValues={setValues} />
    </div>
  );
}

export default Form;
