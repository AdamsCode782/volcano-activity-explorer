import { useEffect, useState } from "react";
import VOLCANO_FACTS from "../data/volcanofacts";

const VolcanoInfoDrawer = ({ volcano, onClose }) => {
    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        if (!volcano) {
            setLocationData(null);
            return;
        }

        const fetchLocation = async () => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${volcano.lat}&lon=${volcano.lng}&format=json`
                );
                const data = await res.json();
                setLocationData(data);
            } catch {
                setLocationData(null);
            }
        };

        fetchLocation();
    }, [volcano]);

    let cleanedName = null;

    if (volcano) {
        cleanedName = volcano.title
            .replace(/Volcano|Volcán|Mt\.|Mount|Peak|Caldera|Island/gi, "")
            .split(",")[0]
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    const volcanoFacts = cleanedName ? VOLCANO_FACTS[cleanedName] : null;
    const country = locationData?.address?.country || "Unknown location";

    return (
        <div className={`drawer ${volcano ? "open" : ""}`}>
            {volcano && (
                <>
                    <button className="drawer-close" onClick={onClose}>×</button>

                    <h2>{volcano.title}</h2>
                    <p className="drawer-sub">{country}</p>

                    <ul className="drawer-info">
                        <li><strong>Last Activity:</strong> {volcano.date}</li>
                        <li>
                            <strong>Coordinates:</strong>{" "}
                            {volcano.lat.toFixed(3)}, {volcano.lng.toFixed(3)}
                        </li>
                        {volcano.source && (
                            <li>
                                <strong>Source:</strong>{" "}
                                <a href={volcano.source} target="_blank" rel="noreferrer">
                                    Smithsonian Volcano Page →
                                </a>
                            </li>
                        )}
                    </ul>

                    {volcanoFacts && (
                        <div className="drawer-section">
                            <h3 className="drawer-section-title">Volcano Details</h3>

                            <ul className="drawer-info extra">
                                {volcanoFacts.type && (
                                    <li><strong>Type:</strong> {volcanoFacts.type}</li>
                                )}
                                {volcanoFacts.elevation && (
                                    <li><strong>Elevation:</strong> {volcanoFacts.elevation} m</li>
                                )}
                                {volcanoFacts.last_eruption && (
                                    <li><strong>Last Eruption:</strong> {volcanoFacts.last_eruption}</li>
                                )}
                                {volcanoFacts.fun_fact && (
                                    <li><strong>Fun Fact:</strong> {volcanoFacts.fun_fact}</li>
                                )}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default VolcanoInfoDrawer;
