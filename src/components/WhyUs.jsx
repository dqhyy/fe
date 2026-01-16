import React from "react";
import { whyus } from "../assets/data/data";

const WhyUs = () => {
    return (
        <div className="py-14">
            <div className="container mx-auto px-6">

                {/* Title */}
                <h1 className="font-bold text-3xl text-gray-800">
                    Tại sao nên chọn HyCare?
                </h1>
                <div className="mt-2 h-1 w-24 bg-maincolor mb-12"></div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/whyus.png"
                            alt="Tại sao nên chọn HyCare"
                            className="max-h-[600px] object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {whyus.map((item) => (
                            <div key={item.id}>
                                <div className="w-16 h-16 flex items-center justify-center mb-4">
                                    <img src={item.icon} alt={item.title} className="w-12 h-12" />
                                </div>

                                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyUs;
