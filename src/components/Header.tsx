import React, { useState, MouseEvent, ChangeEvent, useContext } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import AppContext from "../context/AppContext";

const Header = () => {
    const { handleSearch, handleError } = useContext(AppContext);

    const [input, setInput] = useState("");
    const { width } = useWindowDimensions();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
        let ip = input.trim();
        if (ip.replace(/\s+/g, " ").trim() === "") {
            handleError({ state: true, message: "Empty IP address or Domain" });
            return;
        }
        handleSearch(ip);
    };

    return (
        <header className="bg-cover bg-[url(/images/pattern-bg.png)] min-w-full flex items-center py-8 md:pt-16 md:pb-24 flex-col gap-y-8 h-64 md:h-fit md:min-h-fit">
            <h1 className="text-2xl font-medium text-white md:text-4xl font-rubik">
                IP Address Tracker
            </h1>

            <form className="flex w-5/6 overflow-hidden bg-gray-100 rounded-2xl md:w-1/2 xl:w-1/3">
                <input
                    type="text"
                    className="w-40 py-3 text-lg bg-gray-100 sm:pl-8 form-input sm:w-80 hover:bg-white focus:bg-white active:bg-white grow"
                    placeholder={
                        width > 500
                            ? "Search for any IP address or domain"
                            : "Search"
                    }
                    value={input}
                    onChange={handleChange}
                />
                <button
                    className="px-6 py-2 text-white bg-black active:bg-gray-800 "
                    onClick={handleSubmit}
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
