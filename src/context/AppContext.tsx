import { createContext, useState, FC } from "react";
import { IAppContext, IData } from "../interfaces";

const defaultState: IAppContext = {
    data: {
        ip: "127.0.0.1",
        location: "localhost",
        timezone: "none",
        isp: "none",
        lat: 0,
        lon: 0,
    },
    handleData: (data: IData) => {},
};

const AppContext = createContext<IAppContext>(defaultState);

export const AppProvider: FC = ({ children }) => {
    const [data, setData] = useState(defaultState.data);

    const handleData = (data: IData) => {
        setData({
            ip: data.ip,
            location: data.location,
            timezone: data.timezone,
            isp: data.isp,
            lat: data.lat,
            lon: data.lon,
        });
    };

    return (
        <AppContext.Provider value={{ data, handleData }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
