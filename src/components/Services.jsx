import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className=" bg-white">
      <div className="w-full flex flex-col gap-6 items-center justify-center  py-16">
        <h2 className="text-[45px] font-bold mb-8">Our Services</h2>
        <div className="flex p-4  lg:p-0 flex-wrap md:gap-4 items-center justify-center w-full lg:w-[100%] xl:w-[90%]">
          <div className="w-full lg:w-[30%] md:w-[40%] flex flex-col md:gap-6">
            <div className="flex gap-2 items-center">
              <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
            
              <p className="text-[20px]">Wireframing</p>
            </div>
            <hr className="w-[95%] border my-3 md:my-0 border-gray-300"/>
          </div>
          <div className="w-full lg:w-[30%] md:w-[40%] flex flex-col  md:gap-6">
            <div className="flex gap-3 items-center">
            <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
              <p className="text-[20px]">Landing Page Design</p>
            </div>
            <hr className="w-[95%] my-3 md:my-0  border border-gray-300"/>
          </div>
          <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col md:gap-6">
            <div className="flex gap-3 items-center">

           
            <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
              
      
              <p className="text-[20px]">Logo & Branding Design</p>
            </div>

            <hr className="w-[95%] my-3 md:my-0 border border-gray-300"/>
          </div>
          <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col md:gap-6">
            <div className="flex gap-3 items-center">
            <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
              <p className="text-[20px]">Marketing Materials Design</p>
            </div>

            <hr className="w-[95%] my-3 md:my-0 border border-gray-300"/>
          </div>
          <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col md:gap-6">
            <div className="flex gap-3 items-center">
            <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
              <p className="text-[20px]">SaaS & Product Design</p>
            </div>

            <hr className=" w-[95%] my-3 md:my-0 border border-gray-300"/>
          </div>
          <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col md:gap-6">
            <div className="flex gap-3 items-center">
            <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
              <p className="text-[20px]">Design Systems</p>
            </div>

            <hr className="w-[95%] my-3 md:my-0 border border-gray-300"/>
          </div>
          <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col md:gap-6">
            <div className="flex gap-3 items-center">
            <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
              <p className="text-[20px]">Wireframing</p>
            </div>

            <hr className="w-[95%] my-3 md:my-0 lg:hidden block border border-gray-300"/>
          </div>
          <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col md:gap-6">
            <div className="flex gap-3 items-center">
            <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
              <p className="text-[20px]">Design Systems</p>
            </div>

            <hr className="w-[95%] my-3 md:my-0 lg:hidden block border border-gray-300"/>
          </div>
          <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col md:gap-6">
            <div className="flex gap-3 md:justify-center lg:justify-start items-center">
            <div>
              <FaCheckCircle size={25}  className="text-green-800"/>
              </div>
              <p className="text-[20px]">and many more ...</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
