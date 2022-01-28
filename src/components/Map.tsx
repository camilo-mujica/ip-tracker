import React, { useContext, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LatLngExpression } from "leaflet";
import { icon } from "leaflet";
import AppContext from "../context/AppContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

function MapPlaceholder() {
    return (
        <p>
            <noscript>You need to enable JavaScript to see this map.</noscript>
        </p>
    );
}

type ChangeViewType = {
    center: LatLngExpression;
    zoom: number;
};

function ChangeView({ center, zoom }: ChangeViewType) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const ICON = icon({
    iconUrl: "/images/icon-location.png",
});

const Map = () => {
    const { data } = useContext(AppContext);
    const { width } = useWindowDimensions();

    const displayMap = useMemo(() => {
        const position: LatLngExpression = [data.lat, data.lon];
        const offsetPosition: LatLngExpression = [data.lat - 0.03, data.lon];

        return width < 768 ? (
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: 400, width: "100%" }}
                className="grow"
                zoomControl={width < 768 && false}
                placeholder={<MapPlaceholder />}
            >
                <ChangeView center={position} zoom={13}></ChangeView>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={offsetPosition} draggable={true} icon={ICON}>
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
        ) : (
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: 400, width: "100%" }}
                className="grow"
                placeholder={<MapPlaceholder />}
                zoomControl={width >= 768 && true}
            >
                <ChangeView center={position} zoom={13}></ChangeView>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} draggable={true} icon={ICON}>
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
        );
    }, [data, width]);

    return <>{displayMap}</>;
};

export default Map;
