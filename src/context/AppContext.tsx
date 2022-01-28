import { createContext, useState, FC } from "react";

import { IAppContext, IError, IData } from "../interfaces";

const defaultState = {
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
};

const AppContext = createContext<IAppContext>(defaultState);

export const AppProvider: FC = ({ children }) => {
    const [data, setData] = useState(defaultState.data);
    const [error, setError] = useState(defaultState.error);

    const handleError = (error: IError) => {
        setError(error);
    };

    const handleData = (data: IData) => {
        setData(data);
    };

    return (
        <AppContext.Provider value={{ data, error, handleData, handleError }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
