import React from "react";
import { Idata } from "../interfaces";

type barType = {
    data: Idata;
};

const InformationBar = ({ data }: barType) => {
    return (
        <section className="w-2/3 bg-white -mt-16 rounded-2xl h-40 overflow-hidden grid grid-cols-4">
            <div className="bg-gray-100 pl-6 py-8 flex">
                <div className="grow">
                    <h2 className="text-gray-400 font-medium text-sm tracking-widest">
                        IP ADDRESS
                    </h2>
                    <p className="text-3xl pt-2 text-gray-800 font-medium">
                        {data.ip}
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 py-8 flex">
                <div className="bg-gray-300 w-0.5"></div>

                <div className="grow px-6">
                    <h2 className="text-gray-400 font-medium text-sm tracking-widest">
                        LOCATION
                    </h2>
                    <p className="text-3xl pt-2 text-gray-800 font-medium w-40 truncate  ">
                        {data.location}{" "}
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 py-8 flex">
                <div className="bg-gray-300 w-0.5"></div>

                <div className="grow px-6">
                    <h2 className="text-gray-400 font-medium text-sm tracking-widest">
                        TIMEZONE
                    </h2>
                    <p className="text-3xl pt-2 text-gray-800 font-medium">
                        {data.timezone}
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 py-8 flex">
                <div className="bg-gray-300 w-0.5"></div>

                <div className="grow px-6">
                    <h2 className="text-gray-400 font-medium text-sm tracking-widest">
                        ISP
                    </h2>
                    <p className="text-3xl pt-2 text-gray-800 font-medium w-40 truncate  ">
                        {data.isp}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InformationBar;
