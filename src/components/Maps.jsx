import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJ1bDQwNCIsImEiOiJja3cxcThyMGExYmRzMnBub3YzM240d2lhIn0.TEgC8IOSZLd-wGcQuixkbQ";

function Maps() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(106.840342);
  const [lat, setLat] = useState(-6.1771243);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return <div ref={mapContainer} className="map-container" />;
}

export default Maps;
