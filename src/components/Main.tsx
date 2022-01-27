import React from "react";
import InformationBar from "./InformationBar";
import { Idata } from "../interfaces/index";

type MainPropsType = {
    data: Idata;
};

const Main = ({ data }: MainPropsType) => {
    return (
        <main className="grow min-w-full flex flex-col items-center bg-gray-300">
            <InformationBar data={data}></InformationBar>
        </main>
    );
};

export default Main;
