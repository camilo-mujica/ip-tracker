import React, {
    useState,
    MouseEvent,
    ChangeEvent,
    SetStateAction,
    Dispatch,
} from "react";
import { fetchData } from "../utils/index";
import { Idata } from "../interfaces/index";

type HeaderProps = {
    setIpData: Dispatch<SetStateAction<Idata>>;
};
const Header = ({ setIpData }: HeaderProps) => {
    const [input, setInput] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSearch = (e: MouseEvent) => {
        e.preventDefault();
        if (input.replace(/\s+/g, " ").trim() === "") {
            alert("sfsafasd");
            return;
        }
        fetchData(setIpData, input);
    };

    return (
        <header className="bg-cover bg-[url(/images/pattern-bg.png)] min-w-full flex items-center pt-16 pb-24 flex-col gap-y-8">
            <h1 className="text-white text-4xl font-rubik font-medium">
                IP Address Tracker
            </h1>

            <form className="flex rounded-2xl  overflow-hidden w-1/3 bg-gray-100">
                <input
                    type="text"
                    className="form-input py-3 w-80 bg-gray-100 hover:bg-white focus:bg-white active:bg-white grow text-lg pl-8"
                    placeholder="Search for any IP address or domain"
                    value={input}
                    // onChange={(e) => setInput(e.target.value)}
                    onChange={handleChange}
                />
                <button
                    className="bg-black text-white py-2 px-6 active:bg-gray-800 "
                    onClick={handleSearch}
                >
                    <span>
                        <img src="/images/icon-arrow.svg" alt=">" />
                    </span>
                </button>
            </form>
        </header>
    );
};

export default Header;
