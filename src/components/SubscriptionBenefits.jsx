import React from "react";
import design from "../assets/design.svg";
import team from "../assets/team.svg";
import custom from "../assets/custom.svg";
import delivery from "../assets/delivery.svg";
import print from "../assets/print.svg";
import notes from "../assets/notes.svg";

function Footer2() {
  return (
    <div className="w-full h-auto bg-gray-950 flex flex-col  p-12 gap-10 items-center">
      <h1 className="text-white text-center font-bold text-4xl">
        Subscription Benefits
      </h1>

      <div className="flex flex-col gap-10 text-white w-[80%]">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-center items-center">
          <div className="flex flex-col md:flex-row md:gap-8 md:items-center lg:flex-col gap-2 justify-center items-center">
            <img className="w-20 h-20" src={design} alt="" />
            <div className="flex flex-col gap-2 items-center md:items-start lg:items-center">
              <h1 className="text-xl font-medium mt-3">Design Board</h1>
              <p className="text-center md:text-start lg:text-center">
                Add unlimited design tasks to your board, And we'll solve them
                one-by-one
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-8 md:items-center lg:flex-col gap-2 justify-center items-center">
            <img className="w-20 h-20" src={team} alt="" />
            <div className="flex flex-col gap-2 items-center md:items-start lg:items-center">
              <h1 className="text-xl font-medium mt-3">Design Board</h1>
              <p className="text-center md:text-start lg:text-center">
                Add unlimited design tasks to your board, And we'll solve them
                one-by-one
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-8 md:items-center lg:flex-col gap-2 justify-center items-center">
            <img className="w-20 h-20" src={custom} alt="" />
            <div className="flex flex-col gap-2 items-center md:items-start lg:items-center">
              <h1 className="text-xl font-medium mt-3">Design Board</h1>
              <p className="text-center md:text-start lg:text-center">
                Add unlimited design tasks to your board, And we'll solve them
                one-by-one
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-center items-center">
        <div className="flex flex-col md:flex-row md:gap-8 md:items-center lg:flex-col gap-2 justify-center items-center">
            <img className="w-20 h-20" src={delivery} alt="" />
            <div className="flex flex-col gap-2 items-center md:items-start lg:items-center">
              <h1 className="text-xl font-medium mt-3">Design Board</h1>
              <p className="text-center md:text-start lg:text-center">
                Add unlimited design tasks to your board, And we'll solve them
                one-by-one
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-8 md:items-center lg:flex-col gap-2 justify-center items-center">
            <img className="w-20 h-20" src={print} alt="" />
            <div className="flex flex-col gap-2 items-center md:items-start lg:items-center">
              <h1 className="text-xl font-medium mt-3">Design Board</h1>
              <p className="text-center md:text-start lg:text-center">
                Add unlimited design tasks to your board, And we'll solve them
                one-by-one
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-8 md:items-center lg:flex-col gap-2 justify-center items-center">
            <img className="w-20 h-20" src={notes} alt="" />
            <div className="flex flex-col gap-2 items-center md:items-start lg:items-center">
              <h1 className="text-xl font-medium mt-3">Design Board</h1>
              <p className="text-center md:text-start lg:text-center">
                Add unlimited design tasks to your board, And we'll solve them
                one-by-one
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
