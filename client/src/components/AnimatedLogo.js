import React from "react";
import '../styles/animatedLogoStyles.scss'

const AnimatedLogo = ({ languages, activeLanguage, setActiveLanguage }) => (
    <div className="logo-wrap">
        <div className="logo">
            <div className="object"></div>
            <div className="conveyor-belt">
                <div className="segment"></div>
                <div className="segment"></div>
                <div className="segment"></div>
                <div className="segment"></div>
            </div>
            <div className="black-box"></div>
        </div>
    </div>
);

export default AnimatedLogo;