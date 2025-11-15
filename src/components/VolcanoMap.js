import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import VolcanoMarker from "./VolcanoMarker";
import VolcanoInfoDrawer from "./VolcanoInfoDrawer";
import darkMapStyle from "../mapStyles/darkMap";

const VOLCANO_CATEGORY_ID = "volcanoes";

const VolcanoMap = ({ eventData, center, zoom }) => {
    const [selectedVolcano, setSelectedVolcano] = useState(null);

    const markers = eventData.map((ev, index) => {
        const category = ev.categories?.[0]?.id;
        if (category !== VOLCANO_CATEGORY_ID) return null;

        const sourceGeometry = ev.geometry || ev.geometries || [];
        const geometry = [...sourceGeometry]
            .reverse()
            .find(
                (g) =>
                    g &&
                    g.type === "Point" &&
                    Array.isArray(g.coordinates) &&
                    g.coordinates.length === 2
            );

        if (!geometry) return null;

        const [lng, lat] = geometry.coordinates;

        return (
            <VolcanoMarker
                key={index}
                lat={lat}
                lng={lng}
                onClick={() =>
                    setSelectedVolcano({
                        id: ev.id,
                        title: ev.title,
                        lat,
                        lng,
                        date: geometry.date,
                        source: ev.sources?.[0]?.url || null,
                    })
                }
            />
        );
    });

    // Swipe-to-close drawer (your original behavior)
    useEffect(() => {
        let startX = 0;

        const onStart = (e) => {
            startX = e.touches[0].clientX;
        };

        const onEnd = (e) => {
            const endX = e.changedTouches[0].clientX;
            if (selectedVolcano && endX - startX > 60) {
                setSelectedVolcano(null);
            }
        };

        window.addEventListener("touchstart", onStart);
        window.addEventListener("touchend", onEnd);

        return () => {
            window.removeEventListener("touchstart", onStart);
            window.removeEventListener("touchend", onEnd);
        };
    }, [selectedVolcano]);

    const closeDrawer = () => setSelectedVolcano(null);

    return (
        <div className="map">

            {/* Overlay behind drawer (only shown when open) */}
            {selectedVolcano && (
                <div
                    className="drawer-backdrop"
                    onClick={closeDrawer}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0, 0, 0, 0.35)",
                        backdropFilter: "blur(2px)",
                        zIndex: 2500,
                    }}
                />
            )}

            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={{
                    styles: darkMapStyle,
                    disableDefaultUI: true,
                    zoomControl: true,
                    gestureHandling: "greedy", // allow single-finger pan, fewer weird touch issues
                }}
            >
                {markers}
            </GoogleMapReact>

            <VolcanoInfoDrawer
                volcano={selectedVolcano}
                onClose={closeDrawer}
            />
        </div>
    );
};

VolcanoMap.defaultProps = {
    center: { lat: 20, lng: 0 },
    zoom: 2,
};

export default VolcanoMap;
