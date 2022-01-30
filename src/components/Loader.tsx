import React from "react";

const Loader = () => {
    return (
        <div className="absolute bg-black bg-opacity-20 w-screen h-screen z-100 flex items-center justify-center">
            <div className=" w-16 h-16 border-4 border-white border-solid rounded-full animate-spin border-t-transparent"></div>
        </div>
    );
};

export default Loader;
