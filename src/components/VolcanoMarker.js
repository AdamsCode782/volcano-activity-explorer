import { Icon } from "@iconify/react";
import volcanoIcon from "@iconify/icons-mdi/terrain";

const VolcanoMarker = ({ lat, lng, onClick }) => {
    return (
        <div
            className="volcano-marker"
            onClick={onClick}
            onTouchStart={onClick}
            style={{
                width: "45px",
                height: "45px",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                pointerEvents: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Icon
                icon={volcanoIcon}
                className="volcano-icon"
                style={{
                    fontSize: "34px",
                    pointerEvents: "none", // ensures icon doesn't block the wrapper's events
                }}
            />
        </div>
    );
};

export default VolcanoMarker;
