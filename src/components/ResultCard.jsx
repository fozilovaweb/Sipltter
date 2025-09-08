import React from "react";

const ResultCard = ({ values, setValues }) => {
  const { bill, people, tip } = values;

  const tipAmount = people > 0 ? (bill * (tip / 100)) / people : 0;
  const total = people > 0 ? bill / people + tipAmount : 0;

  const handleReset = () => {
    setValues({ bill: 0, people: 0, tip: 0 });
  };

  return (
    <div className="bg-dark-green text-white p-10 rounded-2xl flex flex-col gap-14 w-72 sm:w-80 md:95 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">Tip Amount</p>
          <p className="text-gray">/ person</p>
        </div>
        <p className="text-3xl font-bold text-primary">
          ${tipAmount.toFixed(2)}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">Total</p>
          <p className="text-gray">/ person</p>
        </div>
        <p className="text-3xl font-bold text-primary">${total.toFixed(2)}</p>
      </div>

      <button
        onClick={handleReset}
        className="mt-6 bg-primary text-dark-green py-2 rounded-lg w-full hover:bg-secondr"
      >
        RESET
      </button>
    </div>
  );
};

export default ResultCard;
