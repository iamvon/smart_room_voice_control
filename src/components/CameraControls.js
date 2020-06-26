import React, { useRef } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Make OrbitControls known as <orbitControls />
extend({ OrbitControls })

const CameraControls = () => {
    const {
        camera,
        gl: { domElement },
    } = useThree()
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update())
    return (
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
            enableZoom={true}
            // maxAzimuthAngle={Math.PI / 4}
            // maxPolarAngle={Math.PI}
            // minAzimuthAngle={-Math.PI / 4}
            // minPolarAngle={0}
        />
    )
};

export default CameraControls