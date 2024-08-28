import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const Projects = () => {
    return (
        <>
            <Canvas flat  camera={{ fov: 25 }}>
                <OrbitControls enablePan={false} enableZoom={false} OrbitControls={false} dampingFactor={false}  />
                <ambientLight />
                <Cyl />
                <EffectComposer>
                    <Bloom
                        mipmapBlur
                        intensity={12.0} // The bloom intensity.
                        luminanceThreshold={0.35} // luminance threshold. Raise this value to mask out darker elements in the scene.
                        luminanceSmoothing={0.2} // smoothness of the luminance threshold. Range is [0, 1]
                    />
                    <ToneMapping adaptive />
                </EffectComposer>
            </Canvas>
        </>
    );
};

export default Projects;
