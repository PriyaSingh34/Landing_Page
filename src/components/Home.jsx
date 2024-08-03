import React from 'react';
import homeImg1 from "../assets/home img1.jpg"
import homeImg2 from"../assets/home img2.jpg"
import homeImg3 from "../assets/home img3.jpg"
import homeImg4 from "../assets/home img4.jpg"
import homeImg5 from "../assets/home img5.jpg"
import homeImg6 from "../assets/home img6.jpg"

const Home = () => {
  return (
    <section className="relative h-auto w-full mb-10 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="flex flex-col w-full  gap-10 items-center justify-center h-full">
        <h1 className="text-black text-[50px] lg:text-[78px] w-[60%] text-center mt-[50px] font-bold leading-[50px] lg:leading-[90px]">Welcome to Our<br className='hidden md:block'/> Landing Page</h1>
        <p className='w-[70%] text-center text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui libero officia illum laboriosam voluptatem dolores, labore impedit perspiciatis accusamus eveniet error hic dolor sint ducimus molestiae minima, rerum aliquam tenetur.</p>
        
        <div className='w-full flex flex-col md:flex-row  justify-center gap-4 md:gap-10 text-xl items-center'>


        <button className='py-3 px-4 bg-[#0099ff] text-white rounded-[25px]'>Get to use the Website</button>
        <button className='py-3 px-4 bg-black text-white  rounded-[25px]'>Contact us</button>
            
            
        </div>
        <div className='flex flex-wrap w-full lg:w-[80%]  gap-6 justify-center items-center'>
        <img src={homeImg1} className='w-[160px] h-[120px] md:w-[350px] md:h-[253px] rounded-[15px]' alt="" />
        <img src={homeImg2} className='w-[160px] h-[120px] md:w-[350px] md:h-[250px] rounded-[15px]' alt="" />
        <img src={homeImg3} className='w-[160px] h-[120px] md:w-[350px] md:h-[250px] rounded-[15px]' alt="" />
        <img src={homeImg4} className='w-[160px] h-[120px] md:w-[350px] md:h-[250px] rounded-[15px]' alt="" />
        <img src={homeImg5}  className='w-[160px] h-[120px] md:w-[350px] md:h-[250px] rounded-[15px]' alt="" />
        <img src={homeImg6} className='w-[160px] h-[120px] md:w-[350px] md:h-[250px] rounded-[15px]' alt="" />
      </div>
      </div>
      
    </section>
  );
};

export default Home;
