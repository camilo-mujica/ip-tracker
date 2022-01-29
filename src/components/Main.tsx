import React from "react";
import InformationBar from "./InformationBar";
import { IData } from "../interfaces/index";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Main = () => {
    const Map = dynamic(() => import("./Map"), { ssr: false });
    return (
        <main className="flex flex-col items-center min-w-full bg-gray-300 grow relative">
            <InformationBar></InformationBar>
            <div className="overflow-hidden w-full bg-indigo-200 grow z-10 flex flex-col">
                <Map></Map>
            </div>
        </main>
    );
};
export default Main;
