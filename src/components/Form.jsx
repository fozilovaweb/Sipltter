import React from "react";

function Form() {
  return (
    <form className="flex flex-col gap-8">
      <label className="flex flex-col ">
        <div>
          <span> Bill</span>
          <span>Can't be zero</span>
        </div>
        <span>
          <input type="number" placeholder="0" />
        </span>
      </label>
    </form>
  );
}

export default Form;
