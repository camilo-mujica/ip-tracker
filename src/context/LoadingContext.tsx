import React, { createContext, FC, useState } from "react";
import { ILoadingContext } from "../interfaces";
import Loader from "../components/Loader";

const defaultState: ILoadingContext = {
    loading: false,
    handleLoading: (newState: boolean) => {},
};

const LoadingContext = createContext<ILoadingContext>(defaultState);

export const LoadingProvider: FC = ({ children }) => {
    const [loading, setLoading] = useState(defaultState.loading);

    const handleLoading = (newState: boolean) => {
        setLoading(newState);
    };
    const value: ILoadingContext = { loading, handleLoading };
    return (
        <LoadingContext.Provider value={value}>
            {loading && <Loader></Loader>}
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingContext;
