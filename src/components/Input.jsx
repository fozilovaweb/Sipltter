import React, { useState } from "react";

function Input({ label, icon, setValues }) {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "0") {
      setError(true);
      e.target;
    } else {
      switch (label) {
        case "Bill":
          setValues((prev) => {
            return { ...prev, bill: +e.target.value };
          });
          break
          case "Number of People":
            setValues((prev)=> {
              return {...prev, people: +e.target.value }
            })
            break
      }
      setError(false);
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
        style={{
          backgroundColor: "var(--color-light)",
          backgroundImage: `url(./${icon}.svg)`,
          backgroundPosition: "center left 19px ",
          backgroundRepeat: "no-repeat",
        }}
        className={`input ${error ? "outline-2 outline-red" : ""}`}
        type="number"
        placeholder="0"
        name="bill"
      />
    </div>
  );
}

export default Input;
