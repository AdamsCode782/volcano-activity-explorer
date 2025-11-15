import { Icon } from "@iconify/react";
import volcanoIcon from "@iconify/icons-mdi/terrain";

const VolcanoMarker = ({ lat, lng, volcanoData, onClick }) => {
    return (
        <div
            onClick={onClick}
            onTouchStart={onClick}
            lat={lat}
            lng={lng}
            volcanoData={volcanoData}
            style={{
                width: "45px",
                height: "45px",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                cursor: "pointer",
                pointerEvents: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Icon
                icon={volcanoIcon}
                style={{
                    fontSize: "34px",
                    color: "#ff4500",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
};

export default VolcanoMarker;
