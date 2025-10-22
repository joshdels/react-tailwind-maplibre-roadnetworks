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

      map.current.on('load', () => {
        map.current.addSource('my-verctor-source', {
          type: 'vector',
          tiles: [
             'https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'
          ],
          minzoom: 6,
          maxzoom: 14,
        });
        
      })

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
  }, []);


  return (
    <div ref={mapContainer} className="map"/>
  ) 
}
