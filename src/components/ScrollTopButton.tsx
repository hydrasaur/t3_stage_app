import React, { useState } from 'react';


const ScrollButton = () => {
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };

    return (
        <div className="flex justify-center items-center h-[200px] h-">
            <button className="text-3xl font-bold  text-zinc-400 border border-gray-700 bg-[#161b22]"
                onClick={scrollToTop}>
                Go back to top
            </button>
        </div>
    );
}

export default ScrollButton;