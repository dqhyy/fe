import React from 'react'

const ContentLeftImageRight = ({ imageSrc, children }) => {
    return (
        <div className="flex flex-col md:flex-row items-start gap-15 py-10">
            <div className="md:w-1/2 space-y-4 order-2 md:order-1">
                <div className="text-gray-700 text-base leading-relaxed">{children}</div>
            </div>
            <img src={imageSrc} alt="section" className="w-full md:w-1/2 order-1 md:order-2" />
        </div>
    );
};

export default ContentLeftImageRight