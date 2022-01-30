import { useContext, RefObject } from "react";
import ErrorContext from "../context/ErrorContext";
import LoadingContext from "../context/LoadingContext";
import AppContext from "../context/AppContext";

type optionsType = {};

async function fetchWithTimeout(resource: string, options: any = {}) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal,
    });
    clearTimeout(id);
    return response;
}

export const useIPData = () => {
    const { handleData } = useContext(AppContext);
    const { handleError } = useContext(ErrorContext);
    const { handleLoading } = useContext(LoadingContext);

    const fetchIPData = async (ip = "", recaptchaRef?: RefObject<any>) => {
        handleLoading(true);
        try {
            if (recaptchaRef) {
                const token = await recaptchaRef.current.executeAsync();

                const tokenValidation = await fetch("/api/tokenValidation", {
                    method: "POST",
                    body: JSON.stringify({ token: token }),
                });

                const isHuman = await tokenValidation.json();

                if (isHuman.success === false) {
                    throw Error(
                        isHuman.message
                            ? isHuman.message
                            : "Human verification failed "
                    );
                }
            }

            const response = await (
                await fetchWithTimeout("https://ipwhois.app/json/" + ip)
            ).json();

            if (response.success === false) {
                throw new Error(response.message ? response.message : "Error");
            }

            const data = {
                ip: response.ip,
                location: `${response.country}, ${response.city}`,
                timezone: response.timezone_gmt,
                isp: response.isp,
                lat: response.latitude,
                lon: response.longitude,
            };

            handleData(data);
        } catch (error: any) {
            handleError({
                state: true,
                message:
                    error && error.message
                        ? error.message
                        : "There has been a problem",
            });
        } finally {
            recaptchaRef && recaptchaRef.current.reset();
            handleLoading(false);
        }
    };

    return fetchIPData;
};
