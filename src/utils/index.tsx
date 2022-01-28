import { SetStateAction, Dispatch } from "react";
import { IData } from "../interfaces";

export const fetchData = async (
    setIpData: Dispatch<SetStateAction<IData>>,
    ip = ""
) => {
    const response = await fetch("http://ipwhois.app/json/" + ip);
    const data = await response.json();
    if (data.success === false) {
        throw Error(data.message);
    }
    console.log(data.longitude, data.latitude);
    setIpData({
        ip: data.ip,
        location: `${data.country}, ${data.city}`,
        timezone: data.timezone_gmt,
        isp: data.isp,
        lat: data.latitude,
        lon: data.longitude,
    });
};
