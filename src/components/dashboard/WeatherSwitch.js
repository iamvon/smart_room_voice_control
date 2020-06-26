import React from 'react';

import './styles/Switch.css'

const WeatherSwitch = ({ isOn, handleToggle }) => {
    return (
        <>
            <span
                style={{ paddingBottom: "10px" }}
            >
                Dự báo thời tiết
            </span>
            <input
                // style={{
                //     marginLeft: "auto", marginTop: "auto"
                // }}
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`weather-switch-new`}
                type="checkbox"
            >
            </input>
            <label
                style={{ background: isOn && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`weather-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    )
}

export default WeatherSwitch