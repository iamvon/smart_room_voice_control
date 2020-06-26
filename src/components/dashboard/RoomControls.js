import React, { Suspense, useState } from 'react'
import LampSwitch from './LampSwitch'
import SpeakerSwitch from './SpeakerSwitch'
import TVSwitch from './TVSwitch'
import WeatherSwitch from './WeatherSwitch'
import Record from './Record'
import './styles/RoomControls.css'
import Bedroom from '../Bedroom'
import Box from '../Box'
import CameraControls from '../CameraControls'
import { Canvas } from 'react-three-fiber'
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const RoomControls = () => {
    const [clicked, setClick] = useState(false)
    const [toggleLamp, setToggleLamp] = useState(false)
    const [toggleSpeaker, setToggleSpeaker] = useState(false)
    const [toggleTV, setToggleTV] = useState(false)
    const [toggleWeather, setToggleWeather] = useState(false)

    return (
        <>
            {!clicked && <button onClick={() => setClick(true)}>Load Bedroom</button>}
            <Container fluid>
                <Row style={{ height: '100vh' }}>
                    <Col xs="10">
                        <Canvas camera={{ position: [0, 70, 80] }} shadowMap>
                            <CameraControls />
                            <ambientLight intensity={0.6} />
                            <spotLight intensity={0.2} position={[200, 600, 200]} />
                            <Suspense
                                fallback={<Box />}>
                                {clicked && <Bedroom position={[16, -20, 0]} turnOnLamp={toggleLamp} />}
                            </Suspense>
                        </Canvas>
                    </Col>

                    <Col xs="2">
                        <div style={{ paddingBottom: 10 }}></div>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <LampSwitch
                                isOn={toggleLamp}
                                handleToggle={() => setToggleLamp(!toggleLamp)}
                            />
                        </Card>

                        <div style={{ paddingBottom: 5 }}></div>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <SpeakerSwitch
                                isOn={toggleSpeaker}
                                handleToggle={() => setToggleSpeaker(!toggleSpeaker)}
                            />
                        </Card>

                        <div style={{ paddingBottom: 5 }}></div>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <TVSwitch
                                isOn={toggleTV}
                                handleToggle={() => setToggleTV(!toggleTV)}
                            />
                        </Card>

                        <div style={{ paddingBottom: 5 }}></div>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <WeatherSwitch
                                isOn={toggleWeather}
                                handleToggle={() => setToggleWeather(!toggleWeather)}
                            />
                        </Card>
                        <div style={{ paddingBottom: 100 }}></div>

                        <Record/>
                        {/* <Card>
                            <CardBody>
                                <CardTitle>Điều khiển bằng giọng nói</CardTitle>
                            </CardBody>
                            <CardBody>
                            </CardBody>
                        </Card> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RoomControls