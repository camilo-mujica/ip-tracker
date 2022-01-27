import { SetStateAction, Dispatch } from "react";
import { Idata } from "../interfaces";

export const fetchData = async (
    setIpData: Dispatch<SetStateAction<Idata>>,
    ip = ""
) => {
    const response = await fetch("http://ipwhois.app/json/" + ip);
    const data = await response.json();
    if (data.success === false) {
        throw Error(data.message);
    }
    setIpData({
        ip: data.ip,
        location: `${data.country}, ${data.city}`,
        timezone: data.timezone_gmt,
        isp: data.isp,
    });
};
