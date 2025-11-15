const VolcanoHeader = () => {
    return (
        <header className="header seismic-header">
            <div className="header-row">
                <svg
                    className="volcano-svg"
                    width="34"
                    height="34"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8 56 L32 8 L56 56 Z" fill="#5a4638" />
                    <path d="M26 22 L32 10 L38 22 Z" fill="#d8d8d8" />
                    <circle className="lava" cx="32" cy="23" r="6" fill="#ff4500" />
                    <circle className="smoke smoke-1" cx="32" cy="6" r="4" fill="#cccccc" />
                    <circle className="smoke smoke-2" cx="28" cy="2" r="3" fill="#e6e6e6" />
                    <circle className="smoke smoke-3" cx="36" cy="0" r="2.5" fill="#f0f0f0" />
                </svg>

                <span className="header-text">Global Volcano Activity Map</span>
            </div>
        </header>
    );
};

export default VolcanoHeader;
