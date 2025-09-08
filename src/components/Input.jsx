import React, { useState } from "react";

function Input({ label, icon, values, setValues }) {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;

    if (val === "0") {
      setError(true);
    } else {
      setError(false);
      switch (label) {
        case "Bill":
          setValues((prev) => ({ ...prev, bill: val }));
          break;
        case "Number of People":
          setValues((prev) => ({ ...prev, people: val }));
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-2 justify-between mb-1.5">
        <span>{label}</span>
        {error && <span className="text-red">Can't be zero</span>}
      </div>
      <input
        onChange={handleChange}
        value={label === "Bill" ? values.bill : values.people}
        style={{
          backgroundColor: "var(--color-light)",
          backgroundImage: `url(./${icon}.svg)`,
          backgroundPosition: "center left 19px ",
          backgroundRepeat: "no-repeat",
        }}
        className={`input ${error ? "outline-2 outline-red" : ""}`}
        type="number"
        placeholder="0"
      />
    </div>
  );
}

export default Input;
