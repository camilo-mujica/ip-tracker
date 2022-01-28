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
    error: IError;
    handleSearch: (ip: string) => void;
    handleError: (error: IError) => void;
}
