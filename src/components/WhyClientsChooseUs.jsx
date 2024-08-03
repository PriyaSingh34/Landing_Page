import React from "react";
import img from "../assets/print.svg";
function WhyClientsChooseUs() {
  return (
    <div className="w-full h-auto flex flex-col p-10 gap-12 items-center">
      <h1 className=" font-bold text-center text-4xl">
        Why Clients Choose Us.
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-center items-center">
        <div className=" bg-[#0099ff] text-black w-[293px] h-[301px] rounded-[20px]">
          <div className=" flex flex-col gap-3 border border-black  rounded-[20px] bg-white p-4 transition-all duration-600 hover:-translate-y-4 hover:-translate-x-4 w-full h-full">
            <img className="w-14 h-14 mt-4" src={img} alt="" />
            <h1 className="text-xl font-semibold ">70x Faster</h1>
            <p>
              No more wasting months on hiring full-time or sourcing
              freelancers. Receive the design with an average turnaround time of
              48 hours or even same-day.
            </p>
          </div>
        </div>
        <div className=" bg-[#0099ff] text-black w-[293px] h-[301px] rounded-[20px]">
          <div className=" flex flex-col gap-3 border border-black  rounded-[20px] bg-white p-4 transition-all duration-600 hover:-translate-y-4 hover:-translate-x-4 w-full h-full">
            <img className="w-14 h-14 mt-4" src={img} alt="" />
            <h1 className="text-xl font-semibold ">70x Faster</h1>
            <p>
              No more wasting months on hiring full-time or sourcing
              freelancers. Receive the design with an average turnaround time of
              48 hours or even same-day.
            </p>
          </div>
        </div>
        <div className=" transition-all duration-500 ease-in-out bg-[#0099ff] text-black w-[293px] h-[301px] rounded-[20px]">
          <div className=" flex flex-col gap-3 border border-black  rounded-[20px] bg-white p-4 transition-all duration-600 hover:-translate-y-4 hover:-translate-x-4 w-full h-full">
            <img className="w-14 h-14 mt-4" src={img} alt="" />
            <h1 className="text-xl font-semibold ">70x Faster</h1>
            <p>
              No more wasting months on hiring full-time or sourcing
              freelancers. Receive the design with an average turnaround time of
              48 hours or even same-day.
            </p>
          </div>
        </div> 
        </div>
    </div>
  );
}

export default WhyClientsChooseUs;
