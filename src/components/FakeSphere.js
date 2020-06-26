import React from "react"

const FakeSphere = (props) => {
    const { turnOnLamp } = props

    return (

        < mesh
            {...props}
        >
            <sphereBufferGeometry attach="geometry" args={[0.055, 30, 30]} />
            <meshBasicMaterial attach="material" color={turnOnLamp ? 0xFFEAC7 : 0xA39A99} />
        </mesh >
    )
}

export default FakeSphere