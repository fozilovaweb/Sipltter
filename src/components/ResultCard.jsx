import React from "react";
const ResultCard = ({ tipAmount, total }) => {
  return (
    <div className="bg-dark-green text-white p-10 rounded-2xl flex flex-col gap-14 w-72 sm:w-80 md:95 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className=" font-semibold">Tip Amount</p>
          <p className=" text-gray">/ person</p>
        </div>
        <p className="text-3xl font-bold text-primary">${tipAmount}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className=" font-semibold">Total</p>
          <p className=" text-gray">/ person</p>
        </div>
        <p className="text-3xl font-bold text-primary">${total}</p>
      </div>
      <button className="mt-6 bg-primary text-dark-green py-2 rounded-lg w-full hover:bg-secondr ">
        RESET
      </button>{" "}
    </div>
  );
};
export default ResultCard;
