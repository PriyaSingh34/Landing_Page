import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      {/* <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
          <a href="#" className="mx-2 hover:underline">Terms of Service</a>
          <a href="#" className="mx-2 hover:underline">Contact Us</a>
        </div>
      </div> */}

      <div className="w-full flex flex-col items-center gap-10 ">
        <div className="flex w-full flex-col md:flex-row items-center justify-center md:items-start gap-6 md:gap-16 lg:justify-around ">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div>
              <h1 className="text-[40px]">Company</h1>
            </div>
            <p className="text-lg">Elevate your brand with our service</p>
            <p>
              techbrickteam@gmail.com
            </p>
          </div>
          <div className="flex mt-2  md:flex-row  items-center gap-20 md:gap-14 lg:gap-36">
            <div className="flex flex-col items-center md:items-start gap-3">
              <h1 className=" text-[18px] mb-2 ">MENU</h1>
              <ul className="text-lg flex flex-col items-center md:items-start gap-3">
                <li><a href="#">How it works</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Client Login</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-lg mb-2 md:items-start">WE ARE AT</h1>
              <ul className="text-lg flex flex-col items-center  md:items-start gap-3">
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-center md:text-start text-gray-400">&copy; All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
