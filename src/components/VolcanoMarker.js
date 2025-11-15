import { Icon } from "@iconify/react";
import volcanoIcon from "@iconify/icons-mdi/terrain";

const VolcanoMarker = ({ onClick }) => {
    const handleTap = (e) => {
        e.stopPropagation();        // <-- prevents map onClick from firing
        onClick();
    };

    return (
        <div
            className="volcano-marker"
            onClick={handleTap}
            onTouchStart={handleTap}
        >
            <Icon icon={volcanoIcon} className="volcano-icon" />
        </div>
    );
};

export default VolcanoMarker;
