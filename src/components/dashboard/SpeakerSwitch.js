import React from 'react';

import './styles/Switch.css'

const SpeakerSwitch = ({ isOn, handleToggle }) => {
    return (
        <>
            <span
                style={{ paddingBottom: "10px" }}
            >
                Loa
            </span>
            <input
                // style={{
                //     marginLeft: "auto", marginTop: "auto"
                // }}
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`speaker-switch-new`}
                type="checkbox"
            >
            </input>
            <label
                style={{ background: isOn && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`speaker-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    )
}

export default SpeakerSwitch