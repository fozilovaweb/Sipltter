import React, { useState } from "react";

const data = [
  { id: 1, value: 5, isSelected: false },
  { id: 2, value: 10, isSelected: false },
  { id: 3, value: 15, isSelected: false },
  { id: 4, value: 25, isSelected: false },
  { id: 5, value: 50, isSelected: false },
];

function SelectTip({ setValues }) {  
  const [buttons, setButtons] = useState(data);

  const handleChange = (e) => {
    setValues((prev) => {
      return { ...prev, tip: +e.target.value };
    });
    setButtons((prev) =>
      prev.map((button) => {
        return { ...button, isSelected: false };
      })
    );
  };

  const handleClick = (id, value) => {
    setValues((prev) => {
      return { ...prev, tip: value };
    });
    setButtons((prev) =>
      prev.map((button) => {
        return { ...button, isSelected: button.id === id };
      })
    );
  };

  return (
    <div className="flex flex-col gap-4 ">
      <span>Select Tip %</span>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-3.5 ">
        {buttons.map((button) => {
          return (
            <li key={button.id}>
              <button
                onClick={() => handleClick(button.id, button.value)}
                className={`w-full h-full text-2xl rounded-[5px] p-1.5 leading-[1.5] ${
                  button.isSelected
                    ? "bg-primary text-dark-green"
                    : "bg-dark-green text-white"
                }`}
                type="button"
              >
                {button.value}%
              </button>
            </li>
          );
        })}
        <li>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Custom"
            className="w-full h-full rounded-[5px] text-center text-2xl border border-gray-300"
          />
        </li>
      </ul>
    </div>
  );
}

export default SelectTip;
