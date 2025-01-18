import React from 'react';

const DynamicBackground = (imageUrl: string) => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center
                       flex justify-center items-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >

        </div>
    );
};

export default DynamicBackground;
