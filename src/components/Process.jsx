import React from "react";

const Process = () => {
  return (
    <section id="process" className="pb-10 lg:pb-20 pt-10 bg-white">
      <div className=" w-full  bg-gray-900 text-white px-10 py-16 lg:py-24 text-center">
        <h2 className="text-5xl font-bold mb-14 lg:mb-10">How it Works</h2>

        <div className="flex flex-col gap-6 w-full  ">

        <div className="flex flex-col gap-2">
          <div className="flex w-full gap-4 justify-start text-2xl">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-[#0099ff]">
              <p>1</p>
            </div>

            <h1>Subscribe</h1>
          </div>
          <p className="flex text-start text-lg">
            Pick one of our subscriptions, and get access to our design task
            board in Trello instantly. No contract, no pain.
          </p>
        </div>

<hr />
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 text-2xl">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-[#0099ff]">
              <p>2</p>
            </div>
            <h1>Submit your details</h1>
          </div>

          <p className="flex text-start text-lg">
            Put your design criteria in the task board, add as many tasks as you
            wish, and we'll handle them one by one.
          </p>
        </div>
        <hr />

        <div  className="flex flex-col gap-2">
          <div className="flex gap-4 text-2xl">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-[#0099ff]">
              <p>3</p>
            </div>
            <h1>Receive</h1>
          </div>
          <p className="flex text-start text-lg">
            Receive each design within 2 business days, and we'll happily revise
            them until you are 100% satisfied.
          </p>
        </div>
        <hr />

        <div className="flex flex-col gap-2">
          <div className="flex gap-4 text-2xl">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-[#0099ff]">
              <p>4</p>
            </div>
            <h1>Repeat</h1>
          </div>
          <p className="flex text-start text-lg">
            When we complete a design task, we'll move on to the next task from
            the board.
          </p>
        </div>

        </div>
        
      </div>
    </section>
  );
};

export default Process;
