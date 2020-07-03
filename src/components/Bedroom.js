import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { useLoader } from 'react-three-fiber'
import bedroomModel from './models/bedroom-v3.glb'
import vtvGif from './models/wlop.jpg'
import FakeSphere from './FakeSphere'

function Bedroom(props) {
    // const bedroom = useLoader(GLTFLoader, bedroomModel)
    // console.log(bedroom.scene)
    // bedroom.scene.castShadow = true

    const lampColor = "#945512"
    const lampColorTurnOn = "#f7ac5c"
    const wall_color = "#FFCC99"
    const dem_color = "#ffd2ba"
    const goi_1_color = "#b58969"
    const goi_2_color = "#cd853f"
    const tvColor ="#add8e6"

    const { turnOnLamp, turnOnTV } = props

    const { nodes } = useLoader(GLTFLoader, bedroomModel)
    // const vtv = useLoader(TextureLoader, "http://jaanga.github.io/moon/heightmaps/WAC_GLD100_E000N1800_004P-1024x512.png")
    // if (vtv) {
    //     vtv.wrapS = vtv.wrapT = THREE.RepeatWrapping;
    //     vtv.repeat.set(1500, 1500);
    //     vtv.anisotropy = 16;
    // }
    // console.log(vtv)
    console.log(turnOnTV)
    console.log(nodes.mat_tv)

    // console.log(nodes)
    return (
        // <primitive
        //     {...props}
        //     object={bedroom.scene}
        //     scale={[25, 25, 25]}
        // />
        <>
            <group {...props} dispose={null} scale={[25, 25, 25]}>
                {/* <mesh>
                    <meshBasicMaterial
                        position={[0, 0, 0]}
                        attach="material"
                        map={vtv} />
                </mesh> */}

                {/* Desk */}
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.chan_ban.material}
                    geometry={nodes.chan_ban.geometry}
                    position={nodes.chan_ban.position}
                    rotation={nodes.chan_ban.rotation}
                    scale={nodes.chan_ban.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.mat_ban.material}
                    geometry={nodes.mat_ban.geometry}
                    position={nodes.mat_ban.position}
                    rotation={nodes.mat_ban.rotation}
                    scale={nodes.mat_ban.scale} />

                {/* PC */}
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.khung_man_hinh.material}
                    geometry={nodes.khung_man_hinh.geometry}
                    position={nodes.khung_man_hinh.position}
                    rotation={nodes.khung_man_hinh.rotation}
                    scale={nodes.khung_man_hinh.scale} />
                <mesh
                    material={nodes.man_hinh.material}
                    geometry={nodes.man_hinh.geometry}
                    position={nodes.man_hinh.position}
                    rotation={nodes.man_hinh.rotation}
                    scale={nodes.man_hinh.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.case.material}
                    geometry={nodes.case.geometry}
                    position={nodes.case.position}
                    rotation={nodes.case.rotation}
                    scale={nodes.case.scale} />
                <mesh
                    material={nodes.mat_case.material}
                    geometry={nodes.mat_case.geometry}
                    position={nodes.mat_case.position}
                    rotation={nodes.mat_case.rotation}
                    scale={nodes.mat_case.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.ban_phim.material}
                    geometry={nodes.ban_phim.geometry}
                    position={nodes.ban_phim.position}
                    rotation={nodes.ban_phim.rotation}
                    scale={nodes.ban_phim.scale} />
                <mesh
                    material={nodes.mat_ban_phim.material}
                    geometry={nodes.mat_ban_phim.geometry}
                    position={nodes.mat_ban_phim.position}
                    rotation={nodes.mat_ban_phim.rotation}
                    scale={nodes.mat_ban_phim.scale} />

                {/* Bed */}
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.dem.material}
                    geometry={nodes.dem.geometry}
                    position={nodes.dem.position}
                    rotation={nodes.dem.rotation}
                    scale={nodes.dem.scale}
                    material-color={dem_color} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.giuong.material}
                    geometry={nodes.giuong.geometry}
                    position={nodes.giuong.position}
                    rotation={nodes.giuong.rotation}
                    scale={nodes.giuong.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.goi_1.material}
                    geometry={nodes.goi_1.geometry}
                    position={nodes.goi_1.position}
                    rotation={nodes.goi_1.rotation}
                    material-color={goi_1_color}
                    scale={nodes.goi_1.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.goi_2.material}
                    geometry={nodes.goi_2.geometry}
                    position={nodes.goi_2.position}
                    rotation={nodes.goi_2.rotation}
                    material-color={goi_2_color}
                    scale={nodes.goi_2.scale} />

                {/* Room */}
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.san_nha.material}
                    geometry={nodes.san_nha.geometry}
                    position={nodes.san_nha.position}
                    rotation={nodes.san_nha.rotation}
                    scale={nodes.san_nha.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.tuong_nha.children[0].material}
                    geometry={nodes.tuong_nha.children[0].geometry}
                    position={nodes.tuong_nha.position}
                    rotation={nodes.tuong_nha.rotation}
                    material-color={wall_color}
                    scale={nodes.tuong_nha.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.tuong_nha.children[1].material}
                    geometry={nodes.tuong_nha.children[1].geometry}
                    position={nodes.tuong_nha.position}
                    rotation={nodes.tuong_nha.rotation}
                    material-color={wall_color}
                    scale={nodes.tuong_nha.scale} />

                {/* TV */}
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.ke_tv.material}
                    geometry={nodes.ke_tv.geometry}
                    position={nodes.ke_tv.position}
                    rotation={nodes.ke_tv.rotation}
                    scale={nodes.ke_tv.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.loa_dung_1.material}
                    geometry={nodes.loa_dung_1.geometry}
                    position={nodes.loa_dung_1.position}
                    rotation={nodes.loa_dung_1.rotation}
                    scale={nodes.loa_dung_1.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.loa_dung_2.material}
                    geometry={nodes.loa_dung_2.geometry}
                    position={nodes.loa_dung_2.position}
                    rotation={nodes.loa_dung_2.rotation}
                    scale={nodes.loa_dung_2.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.loa_nam.material}
                    geometry={nodes.loa_nam.geometry}
                    position={nodes.loa_nam.position}
                    rotation={nodes.loa_nam.rotation}
                    scale={nodes.loa_nam.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.khung_tv.material}
                    geometry={nodes.khung_tv.geometry}
                    position={nodes.khung_tv.position}
                    rotation={nodes.khung_tv.rotation}
                    scale={nodes.khung_tv.scale} />

                <mesh
                    // material={turnOnTV ? "" : nodes.mat_tv.material}
                    geometry={nodes.mat_tv.geometry}
                    position={nodes.mat_tv.position}
                    rotation={nodes.mat_tv.rotation}
                    scale={nodes.mat_tv.scale} 
                    material-color={turnOnTV ? tvColor : "#000000"}/>
                    
                {/* Lamp */}
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.ke_den.material}
                    geometry={nodes.ke_den.geometry}
                    position={nodes.ke_den.position}
                    rotation={nodes.ke_den.rotation}
                    scale={nodes.ke_den.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.chan_den.material}
                    geometry={nodes.chan_den.geometry}
                    position={nodes.chan_den.position}
                    rotation={nodes.chan_den.rotation}
                    scale={nodes.chan_den.scale} />
                <mesh
                    castShadow
                    receiveShadow
                    material={nodes.den.material}
                    geometry={nodes.den.geometry}
                    position={nodes.den.position}
                    rotation={nodes.den.rotation}
                    scale={nodes.den.scale}
                    material-color={turnOnLamp ? lampColorTurnOn : lampColor} >
                    {/* <pointLight
                    castShadow
                    penumbra={1}
                    position={[nodes.den.position.x, nodes.den.position.y, nodes.den.position.z + 1]}
                    intensity={0.3}
                    roughness={0.1}
                    metalness={1}
                /> */}
                    {/* <spotLight
                    castShadow
                    position={[nodes.den.position.x, nodes.den.position.y, nodes.den.position.z + 1]}
                    intensity={0.25}
                    penumbra={1}
                /> */}
                </mesh>

                {/* Windows */}
                {/* <mesh
                // material={nodes.cua_so.material}
                geometry={nodes.cua_so.geometry}
                position={nodes.cua_so.position}
                rotation={nodes.cua_so.rotation}
                scale={nodes.cua_so.scale}
                material-color={"white"}
                roughness={0.1}
                metalness={1} /> */}
                <mesh
                    material={nodes.khung_cua_so.material}
                    geometry={nodes.khung_cua_so.geometry}
                    position={nodes.khung_cua_so.position}
                    rotation={nodes.khung_cua_so.rotation}
                    scale={nodes.khung_cua_so.scale} />

                <FakeSphere
                    castShadow
                    receiveShadow
                    position={[nodes.den.position.x, nodes.den.position.y + 0.3, nodes.den.position.z]}
                    turnOnLamp={turnOnLamp}
                />
                <pointLight
                    castShadow
                    intensity={turnOnLamp ? 0.65 : 0}
                    position={[nodes.den.position.x, nodes.den.position.y + 0.26, nodes.den.position.z]}
                    color={0xffcc77}
                />
                {/* <pointLight
                    intensity={turnOnLamp ? 0.25 : 0}
                    position={[nodes.den.position.x, nodes.den.position.y + 0.3, nodes.den.position.z]}
                    color={0xffcc77}
                /> */}
            </group>
        </>
    )
}

export default Bedroom
