import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import music from '../../music/All_of_Me_John_Legend.mp3'
import './styles/Switch.css'

const SpeakerSwitch = ({ isOn, handleToggle }) => {
    const [play, { stop }] = useSound(music)
    const [playMusic, setPlayMusic] = useState(false)

    useEffect(() => {
        console.log('Is on: ', isOn)
        if (isOn) {
            play()
            setPlayMusic(true)
        } else {
            stop()
            setPlayMusic(false)
        }
    }, [isOn])

    return (
        <>
            <span
                style={{ paddingBottom: "10px" }}
            >
                Nghe nhạc
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