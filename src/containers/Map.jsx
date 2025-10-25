import { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 120.9842; 
  const lat = 14.5995;
  const zoom = 9;

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [lng, lat],
      zoom: zoom,
    });

     // ✅ Wait for the map to fully load before adding data
    map.current.on('load', () => {
      // Add your GeoJSON source (must be in /public/data/)
      map.current.addSource('schools', {
        type: 'geojson',
        data: '/data/schools.geojson', // e.g. public/data/schools.geojson
      });

      // Add a layer to visualize it
      map.current.addLayer({
        id: 'schools-layer',
        type: 'circle', // or 'circle', 'line', etc. depending on your GeoJSON
        source: 'schools',
        paint: {
          "circle-radius": 4,
          "circle-color": "#FFBF00",
          "circle-stroke-width": 0.5,
          "circle-stroke-color": "#fff",
        },
      });


      // ✅ Add click event for popup
      map.current.on("click", "schools-layer", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const props = e.features[0].properties;

        const html = `
          <div class="p-5 bg-white shadow-md rounded-md ">
            <strong>${props.School}</strong><br/>
            <em>${props.Municipali}</em><br/>
            ${props.Province}<br/>
            Enrollees: ${props.Total_Enro}
          </div>
        `;

        new maplibregl.Popup({
          offset: [0, -12],            // raise the popup slightly above the marker
          className: "custom-school-popup",
        })
          .setLngLat(coordinates)
          .setHTML(html)
          .addTo(map.current);
      });


      // ✅ Change cursor to pointer on hover
      map.current.on("mouseenter", "schools-layer", () => {
        map.current.getCanvas().style.cursor = "pointer";
      });

      map.current.on("mouseleave", "schools-layer", () => {
        map.current.getCanvas().style.cursor = "";
      });

    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
  }, []);


  return (
    <div ref={mapContainer} className="map"/>
  ) 
}
