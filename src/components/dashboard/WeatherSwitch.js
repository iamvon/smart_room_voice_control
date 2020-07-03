import React, { useState, useEffect } from 'react';
import useSound from 'use-sound'
import weather from '../../weather/weather.mp3'
import './styles/Switch.css'

const WeatherSwitch = ({ isOn, handleToggle }) => {
    const weatherAPI = "http://127.0.0.1:5000/api/weather"
    const [play, { stop }] = useSound(weather)
    const [playWeather, setPlayWeather] = useState(false)

    useEffect(() => {
        console.log('Is on: ', isOn)
        if (isOn) {
            play()
            setPlayWeather(true)
        } else {
            stop()
            setPlayWeather(false)
        }
    }, [isOn])

    const updateWeatherData = () => {
        fetch(weatherAPI, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(
            responseWeatherAPIData => responseWeatherAPIData.json()
        ).then(
            data => {
                if (data !== null || data !== undefined) {
                    console.log('Update weather data')
                } else {
                    console.log("Fail to load weather data")
                }
                console.log(data)
            }
        )
    } 

    const onChangeWeather = () => {
        handleToggle()
        // updateWeatherData()
    }

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
                onChange={onChangeWeather}
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