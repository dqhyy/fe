import React from "react";
import { partners } from "../assets/data/data";

const Partner = () => {
    return (
        <section className="py-14 ">
            <div className="container mx-auto px-6 text-center">

                <h1 className="font-bold text-3xl text-gray-800">
                    Đối tác của chúng tôi
                </h1>
                <div className="mt-2 h-1 w-24 bg-maincolor mx-auto mb-12"></div>

                <div className="flex flex-wrap justify-between gap-y-8 text-left px-10">
                    {partners.map((img, index) => (
                        <div key={index} className="w-[48%] sm:w-[30%] md:w-[22%] lg:w-[18%] flex items-center justify-center" >
                            <img src={img} alt={`Đối tác ${index + 1}`} className="max-h-16 object-contain" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Partner;
