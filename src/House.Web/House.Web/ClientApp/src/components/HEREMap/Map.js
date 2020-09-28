import React, { useLayoutEffect, useRef } from 'react';
import 'here-js-api/scripts/mapsjs-core';
import 'here-js-api/scripts/mapsjs-service';
import 'here-js-api/scripts/mapsjs-ui';
import 'here-js-api/scripts/mapsjs-mapevents';
import 'here-js-api/scripts/mapsjs-clustering';

const Map = () => {
    const mapRef = useRef(null);

    useLayoutEffect(() => {
        const position = {
            lat: 42.67105,
            lng: 23.35018
        };

        if (!mapRef.current) {
            return;
        }
        const H = window.H;

        const platform = new H.service.Platform({
            apikey: "qKYB9KwXJH46COwhgJyo44R9sGVg5nQ2v6LF6NDRY9I"
        });

        const defaultLayers = platform.createDefaultLayers();

        const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            center: position,
            zoom: 7,
            pixelRation: window.devicePixelRatio || 1
        });

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

        const ui = H.ui.UI.createDefault(hMap, defaultLayers);

        window.onload = function () {
            var marker = new H.map.Marker(position);
            hMap.addObject(marker);
        }
        return () => {
            hMap.dispose();
        }
    }, [mapRef])

    return (
        <div className="map" ref={mapRef} style={{ height: "500px" }} />
    );
}

export { Map };