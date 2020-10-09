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
            lat: 42.857570, 
            lng: 25.015018
        };

        if (!mapRef.current) {
            return;
        }
        const H = window.H;

        const platform = new H.service.Platform({
            apikey: "aWtUZLDYtl28CPUFS3UiBqSPYsMcLefOo5zt3NeUW6c"
        });

        const defaultLayers = platform.createDefaultLayers();

        const hMap = new H.Map(mapRef.current, defaultLayers.raster.normal.map, {
            center: position,
            zoom: 14,
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

    //use only pixels for setting up height and width
    return (
        <div className="map" ref={mapRef} style={{ height: "350px", width:'700px' }} />
    );
}

export { Map };