import { createContext, useState, FC } from "react";

import { IAppContext, IError, IData } from "../interfaces";

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
        alert(error.message);
    };

    const handleSearch = async (ip = "") => {
        const response = await fetch("http://ipwhois.app/json/" + ip);
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

    return (
        <AppContext.Provider value={{ data, error, handleSearch, handleError }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
