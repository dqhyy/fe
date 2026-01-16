import React from 'react'

const ImageLeftContentRight = ({ imageSrc, children }) => {
    return (
        <div className="flex flex-col md:flex-row items-start gap-15 py-10">
            <img src={imageSrc} alt="section" className="w-full md:w-1/2 " />
            <div className="md:w-1/2 space-y-4">
                <div className="text-gray-700 text-base leading-relaxed">{children}</div>
            </div>
        </div>
    )
}

export default ImageLeftContentRight