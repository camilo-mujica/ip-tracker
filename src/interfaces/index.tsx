import { SetStateAction } from "react";

export interface IData {
    ip: string;
    location: string;
    timezone: string;
    isp: string;
    lat: number;
    lon: number;
}

export interface IError {
    state: boolean;
    message?: string;
}

export interface IAppContext {
    data: IData;
    handleData: (data: IData) => void;
}

export interface ILoadingContext {
    loading: boolean;
    handleLoading: (newState: boolean) => void;
}

export interface IErrorContext {
    error: IError;
    handleError: (error: IError) => void;
}
