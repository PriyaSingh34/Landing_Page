import React from "react";
import workImg1 from "../assets/globe.jpg";
import workImg2 from "../assets/Our recent works2.jpg";
import workImg3 from "../assets/Our recent works3.jpg";

const Works = () => {
  return (
    <section id="works" className="pb-20 xl:py-20 bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-4 p-3 md:p-5 w-full text-center">
        <h2 className="text-[48px] font-bold mb-10">Our Recent Works</h2>

        <div className="flex w-full xl:w-[70%] flex-col justify-center items-center gap-10">
          <div className="flex  flex-col lg:flex-row justify-center items-center lg:items-center gap-10 lg:gap-12  xl:gap-32">
            <div className="w-[400px] rounded-[12px] bg-[#0099ff] px-5 py-6">
            <img className="w-[380px] h-[380px] rounded-[12px] " src={workImg1} alt="" />
            </div>
        
            <div className="flex flex-col md:p-3 justify-center text-left w-full md:w-[90%] lg:w-[50%] items-center gap-4">
              <h1 className="text-[40px] font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                autem cupiditate est ab, perspiciatis, in adipisci ducimus quae
                aliquid repudiandae reiciendis hic fugiat cumque sint possimus
                necessitatibus, nesciunt dolor. Consequatur! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Itaque voluptatum
                consequatur provident nihil suscipit repellat, reprehenderit
                eligendi laboriosam natus, cumque, aliquam distinctio aut.
                Possimus, recusandae impedit. Doloribus possimus quo quae?
              </p>
            </div>
          </div>
          <div className="flex  flex-col-reverse lg:flex-row justify-center items-center lg:items-center gap-10 lg:gap-12  xl:gap-32">
            
            <div className="flex flex-col justify-center md:p-3 text-start w-full md:w-[90%] lg:w-[50%] items-center gap-4">
              <h1 className="text-[40px] font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                autem cupiditate est ab, perspiciatis, in adipisci ducimus quae
                aliquid repudiandae reiciendis hic fugiat cumque sint possimus
                necessitatibus, nesciunt dolor. Consequatur! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Itaque voluptatum
                consequatur provident nihil suscipit repellat, reprehenderit
                eligendi laboriosam natus, cumque, aliquam distinctio aut.
                Possimus, recusandae impedit. Doloribus possimus quo quae?
              </p>
            </div>
            
            <div className="w-[400px] rounded-[12px] bg-gray-800 px-5 py-6">
            <img className="w-[380px] h-[380px] rounded-[12px]" src={workImg2} alt="" />
            </div>
           
          </div>
          <div className="flex flex-col lg:flex-row justify-center  items-center lg:items-center gap-10 lg:gap-12 xl:gap-32">
          <div className="w-[400px] rounded-[12px] bg-[#0099ff] px-5 py-6">
            <img className="w-[380px] h-[380px] rounded-[12px]" src={workImg2} alt="" />
            </div>
            <div className="flex flex-col justify-center text-start md:p-3 w-full md:w-[90%] lg:w-[50%] items-center gap-4">
              <h1 className="text-[40px] font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                autem cupiditate est ab, perspiciatis, in adipisci ducimus quae
                aliquid repudiandae reiciendis hic fugiat cumque sint possimus
                necessitatibus, nesciunt dolor. Consequatur! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Itaque voluptatum
                consequatur provident nihil suscipit repellat, reprehenderit
                eligendi laboriosam natus, cumque, aliquam distinctio aut.
                Possimus, recusandae impedit. Doloribus possimus quo quae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
