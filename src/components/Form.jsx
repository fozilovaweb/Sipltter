import React from "react";
import { Input } from "./";
import SelectTip from "./SelectTip";

function Form({ values, setValues }) {
  return (
    <div className="w-72 sm:w-80 md:95 flex flex-col gap-8 sm:gap-3">
      <Input label="Bill" icon="dollar" values={values} setValues={setValues} />
      <SelectTip values={values} setValues={setValues} />
      <Input
        label="Number of People"
        icon="user"
        values={values}
        setValues={setValues}
      />
    </div>
  );
}

export default Form;
