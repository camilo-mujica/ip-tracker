import React from "react";
import { IData } from "../interfaces";
import { useContext } from "react";
import AppContext from "../context/AppContext";

type CardProps = {
    title: string;
    data: string;
    first?: boolean;
};

const Card = ({ title, data, first = false }: CardProps) => {
    return (
        <div
            className={`flex py-4 md:py-8 ${
                !first &&
                "md:before:content-[''] md:before:w-0.5 md:before:bg-gray-300"
            } max-h-24 md:max-h-fit`}
        >
            <div className="flex flex-col justify-start px-6 text-center md:text-left grow">
                <h2 className="text-sm font-medium tracking-widest text-gray-400">
                    {title}
                </h2>
                <p className="text-base font-medium text-gray-800 md:pt-2 2xl:text-2xl">
                    {data}
                </p>
            </div>
        </div>
    );
};

const InformationBar = () => {
    const { data } = useContext(AppContext);

    return (
        <section className="grid w-5/6 grid-rows-4 -mt-16 overflow-hidden bg-white md:h-40 md:grid-rows-1 lg:w-2/3 rounded-2xl md:grid-cols-4 absolute z-100">
            <Card title="IP ADDRESS" data={data.ip} first />
            <Card title="LOCATION" data={data.location} />
            <Card title="TIMEZONE" data={data.timezone} />
            <Card title="ISP" data={data.isp} />
        </section>
    );
};

export default InformationBar;
