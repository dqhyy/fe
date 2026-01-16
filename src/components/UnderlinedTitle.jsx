import React from 'react'

const UnderlinedTitle = ({ title }) => {
    return (
        <div className="inline-block">
            <h2 className="text-[28px] font-bold">{title}</h2>
            <div className="h-1 bg-underlinecolor mt-1 w-30"></div>
        </div>
    );
};

export default UnderlinedTitle;
