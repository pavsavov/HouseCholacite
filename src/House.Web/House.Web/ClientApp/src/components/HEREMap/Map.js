import React, { useLayoutEffect, useRef } from 'react';
import { hereApiKey, position } from '../../common/constants';
import 'here-js-api/scripts/mapsjs-core';
import 'here-js-api/scripts/mapsjs-service';
import 'here-js-api/scripts/mapsjs-ui';
import 'here-js-api/scripts/mapsjs-mapevents';
import 'here-js-api/scripts/mapsjs-clustering';

const Map = () => {
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    //should be part of a configuration file or a const

    if (!mapRef.current) {
      return;
    }
    const H = window.H;

    const platform = new H.service.Platform({
      apikey: hereApiKey,
    });

    const defaultLayers = platform.createDefaultLayers({
      lg: 'bg',
    });

    const hMap = new H.Map(mapRef.current, defaultLayers.raster.normal.map, {
      center: position,
      zoom: 14,
      pixelRation: window.devicePixelRatio || 1,
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    window.onload = function () {
      var marker = new H.map.Marker(position);
      hMap.addObject(marker);
    };
    return () => {
      hMap.dispose();
    };
  }, [mapRef]);

  //here api works only with pixels for setting up height and width
  return (
    <div
      className='map'
      ref={mapRef}
      style={{ height: '350px', width: '700px', display: 'flex' }}
    />
  );
};

export { Map };
