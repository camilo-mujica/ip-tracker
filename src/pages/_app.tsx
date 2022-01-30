import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../context/AppContext";
import { LoadingProvider } from "../context/LoadingContext";
import { ErrorProvider } from "../context/ErrorContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppProvider>
            <LoadingProvider>
                <ErrorProvider>
                    <Component {...pageProps} />
                </ErrorProvider>
            </LoadingProvider>
        </AppProvider>
    );
}

export default MyApp;
