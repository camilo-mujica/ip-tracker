import { createContext, useState, FC, useEffect } from "react";
import { IAppContext, IError, IErrorContext } from "../interfaces";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const defaultState: IErrorContext = {
    error: {
        state: false,
    },
    handleError: (error: IError) => {},
};

const ErrorContext = createContext<IErrorContext>(defaultState);

export const ErrorProvider: FC = ({ children }) => {
    const [error, setError] = useState(defaultState.error);

    const handleError = (error: IError) => {
        setError(error);

        const MySwal = withReactContent(Swal);

        MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            didClose: () => {
                setError(defaultState.error);
            },
        });
    };

    return (
        <ErrorContext.Provider value={{ error, handleError }}>
            {children}
        </ErrorContext.Provider>
    );
};

export default ErrorContext;
