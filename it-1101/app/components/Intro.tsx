import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Navbar from "./Navbar";

const Intro = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen relative flex justify-between gap-10" ref={"Landing"}>
        <div className="relative flex flex-col items-center">
          {/* Adjust the line's position and remove gap */}
          <FaCircle className="text-2xl relative z-10 top-[290px]" />
          <div className="absolute transform -translate-x-1/2 top-[300px] w-px h-[775px] bg-white" />
        </div>
        <section className="flex gap-4 items-center justify-start h-[50vh] relative">
          <div className="flex flex-col justify-center py-10">
            {/* content */}
            <span className="text-gray-500 text-[80px]">
              // First Generation (1940s-1950s)
            </span>
            <p className="text-3xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              quaerat ab explicabo quasi velit. Quo tempora odio itaque quaerat.
              Repellat illum reiciendis ratione itaque expedita amet, dolore vel
              iure dicta?
            </p>
          </div>
         
        </section>
        <div className="absolute bottom-0 right-[50%] top-[90%]">
            asdfasd
          </div>
      </main>
    </>
  );
};

export default Intro;
