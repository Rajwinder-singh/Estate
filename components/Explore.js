import Image from "next/image";
import React from "react";
import explore from './../assets/images/projects.jpg'

const Explore = () => {
  return (
    <div className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
            <Image 
                src={explore}
                alt="explore"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="absolute left-4 lg:left-20 top-32 text-white max-w-[400px]">
            <h3 className="text-2xl mb-3 w-64">EXPLORE THE HOT INVESTMENT AREAS IN INDONESIA</h3>
            <p>Tlore ipsum dolor ahsjah hjaajb hj an na m
            nbashbah . aj ahj best way to unplug from
            the pushes and pulls of.
            </p>
            <button className="mt-2 text-sm font-bold bg-blue-500 px-4 py-2 rounded-lg">
            See Projects
            </button>
        </div>
    </div>
  );
};

export default Explore;
