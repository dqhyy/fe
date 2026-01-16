import React from "react";
import BF from "./BF";

const CoverSection = ({ title }) => {
    return (
        <div className="relative w-full h-[350px] pb-20 flex flex-col items-center justify-center text-white overflow-hidden">
            <img
                src="/bg_coversection.jpg"
                alt="bg_cover"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <h1 className="relative z-10 text-4xl md:text-5xl font-semibold text-center drop-shadow-lg">
                {title}
            </h1>

            <div className="absolute bottom-0 left-0 w-full z-10">
                <BF />
            </div>
        </div>
    );
};


export default CoverSection;
