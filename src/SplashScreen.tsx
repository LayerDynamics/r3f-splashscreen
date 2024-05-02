import React, { useRef, useEffect, useState, FC, RefObject } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Text, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ShaderMaterial } from 'three';

// Define TypeScript interfaces for component props
interface SplashScreenProps {
  name: string;
  duration: number;
  backgroundColor: string;
  fontColor: string;
  blobColor: string;
  fontUrl: string;
  distortionScale: number;
  waveSpeed: number;
}

interface AnimatedBlobProps {
  materialRef: RefObject<ShaderMaterial>;
}

// Define the custom shader material using drei's shaderMaterial utility
const WaveShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(),
    distortionScale: 1.0,
    waveSpeed: 1.0,
  },
  // Vertex Shader
  `uniform float time;
  uniform float distortionScale;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 pos = position + (normal * sin(time + position.x * 2.0 * distortionScale) * 0.1);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }`,
  // Fragment Shader
  `uniform vec3 color;
  uniform float time;
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(color * cos(time + vUv.x * 4.0), 1.0);
  }`
);

// Extend drei's shaderMaterial with the custom shader material
extend({ WaveShaderMaterial });

// AnimatedBlob component to handle the animation logic
const AnimatedBlob: FC<AnimatedBlobProps> = ({ materialRef }) => {
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return null;
};

// SplashScreen component that utilizes the props and types defined
const SplashScreen: FC<SplashScreenProps> = ({
  name,
  duration,
  backgroundColor,
  fontColor,
  blobColor,
  fontUrl,
  distortionScale,
  waveSpeed,
}) => {
  const materialRef = useRef<ShaderMaterial>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        backgroundColor,
      }}
    >
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2.6, 528, 128]} />
          <waveShaderMaterial
            ref={materialRef}
            color={blobColor}
            distortionScale={distortionScale}
            waveSpeed={waveSpeed}
          />
          <AnimatedBlob materialRef={materialRef} />
        </mesh>
        <Text
          position={[0, 0, 3]}
          fontSize={0.2}
          color={fontColor}
          textAlign="center"
          font={fontUrl}
        >
          {name}
        </Text>
      </Canvas>
    </div>
  );
};

export default SplashScreen;
