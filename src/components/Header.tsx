import React, {
    useState,
    ChangeEvent,
    useContext,
    useRef,
    RefObject,
    FormEvent,
    useEffect,
} from "react";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import ReCAPTCHA from "react-google-recaptcha";
import ErrorContext from "../context/ErrorContext";
import { useIPData } from "../hooks/useIPData";

const Header = () => {
    const { handleError } = useContext(ErrorContext);
    const fetchIPData = useIPData();
    const [input, setInput] = useState("");
    const { width } = useWindowDimensions();
    const recaptchaRef: RefObject<any> = useRef(null);

    const siteKey: string = "6LemRkMeAAAAAHbXgyRHfh81_wRknJEw0wfdg-xT";

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        let ip = input.trim();
        if (ip.replace(/\s+/g, " ").trim() === "") {
            handleError({ state: true, message: "Empty IP address or Domain" });
            return;
        }

        fetchIPData(ip);
    };

    useEffect(() => {
        fetchIPData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className="bg-cover bg-[url(/images/pattern-bg.png)] gap-y-3 min-w-full flex items-center py-4 md:py-8 md:pt-16 md:pb-24 flex-col md:gap-y-8 h-48 md:h-fit md:min-h-fit">
            <h1 className="text-xl font-medium text-white md:text-4xl font-rubik">
                <Link href="/">IP Address Tracker</Link>
            </h1>

            <form
                className="flex w-5/6 overflow-hidden bg-gray-100 rounded-2xl md:w-1/2 xl:w-1/3"
                onSubmit={handleSubmit}
            >
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
                    type="submit"
                    className="px-6 py-2 text-white bg-black active:bg-gray-800 "
                >
                    <span>
                        {
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src="/images/icon-arrow.svg" alt=">" />
                        }
                    </span>
                </button>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={siteKey}
                ></ReCAPTCHA>
            </form>
        </header>
    );
};

export default Header;
