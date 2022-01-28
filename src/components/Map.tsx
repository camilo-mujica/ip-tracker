import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { IData } from "../interfaces/index";
import { LatLngExpression, PointExpression } from "leaflet";
import useWindowDimensions from "../hooks/useWindowDimensions";

type mapProps = {
    data: IData;
};

function MapPlaceholder() {
    return (
        <p>
            <noscript>You need to enable JavaScript to see this map.</noscript>
        </p>
    );
}

const Map = ({ data }: mapProps) => {
    const { width } = useWindowDimensions();

    useEffect(() => {
        console.log(width);
    }, [width]);

    const position: LatLngExpression = [data.lat, data.lon];
    const offsetPosition: LatLngExpression = [data.lat + 0.03, data.lon];
    return (
        <>
            {width >= 768 && (
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ height: 400, width: "100%" }}
                    className="grow"
                    zoomControl={true}
                    placeholder={<MapPlaceholder />}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} draggable={true}>
                        <Popup>
                            <p>
                                <span className="font-bold">IP</span>: {data.ip}
                            </p>
                            <p>
                                <span className="font-bold">LOCATION</span>:{" "}
                                {data.location}
                            </p>
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
            {width < 768 && (
                <MapContainer
                    // center={width < 768 ? offsetPosition : position}
                    center={offsetPosition}
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{ height: 400, width: "100%" }}
                    className="grow"
                    zoomControl={false}
                    placeholder={<MapPlaceholder />}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} draggable={true}>
                        <Popup>
                            <p>
                                <span className="font-bold">IP</span>: {data.ip}
                            </p>
                            <p>
                                <span className="font-bold">LOCATION</span>:{" "}
                                {data.location}
                            </p>
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </>
    );
};

export default Map;
