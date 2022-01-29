import { createContext, useState, FC, useEffect } from "react";
import { IAppContext, IError } from "../interfaces";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const defaultState: IAppContext = {
    data: {
        ip: "127.0.0.1",
        location: "localhost",
        timezone: "none",
        isp: "none",
        lat: 0,
        lon: 0,
    },
    error: {
        state: false,
    },
    handleError: (error: IError) => {},
    handleSearch: (ip: string) => {},
};

const AppContext = createContext<IAppContext>(defaultState);

export const AppProvider: FC = ({ children }) => {
    const [data, setData] = useState(defaultState.data);
    const [error, setError] = useState(defaultState.error);

    const handleError = (error: IError) => {
        setError(error);

        // const MySwal = withReactContent(Swal);

        // MySwal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: error.message,
        //     didClose: () => {
        //         setError(defaultState.error);
        //     },
        // });
        console.log(error);
    };

    const handleSearch = async (ip = "") => {
        const response = await fetch("https://ipwhois.app/json/" + ip);
        const data = await response.json();
        if (data.success === false) {
            handleError({
                state: true,
                message: data.message ? data.message : "error",
            });
            return;
        }

        setData({
            ip: data.ip,
            location: `${data.country}, ${data.city}`,
            timezone: data.timezone_gmt,
            isp: data.isp,
            lat: data.latitude,
            lon: data.longitude,
        });
    };

    useEffect(() => {
        // handleSearch();
    });

    return (
        <AppContext.Provider value={{ data, error, handleSearch, handleError }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
