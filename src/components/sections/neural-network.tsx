
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, useTexture } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const WIDTH = 3.55;
const HEIGHT = 3.68;

function point(x: number, y: number, z = 0.12) {
  return new THREE.Vector3(
    (x / 617 - 0.5) * WIDTH,
    (0.5 - y / 640) * HEIGHT,
    z
  );
}

const neuralPaths = [
  [point(58, 73), point(98, 188), point(285, 68)],
  [point(17, 224), point(98, 188), point(72, 322)],
  [point(98, 188), point(285, 286), point(390, 390)],
  [point(98, 188), point(285, 68)],
  [point(98, 188), point(190, 250), point(285, 286)],
];

function Signal({
  path,
  offset,
  speed,
}: {
  path: THREE.Vector3[];
  offset: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();

  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(path),
    [path]
  );

  useFrame((state) => {
    if (!ref.current || reducedMotion) return;

    const t = (state.clock.elapsedTime * speed + offset) % 1;
    ref.current.position.copy(curve.getPointAt(t));

    const pulse =
      0.85 +
      Math.sin(state.clock.elapsedTime * 6 + offset * 8) * 0.15;

    ref.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.035, 16, 16]} />
      <meshBasicMaterial color="#FF3542" />
    </mesh>
  );
}

function NeuralEmblem() {
  const texture = useTexture("/brand/kriva-emblem.png");

  const group = useRef<THREE.Group>(null);
  const glow = useRef<THREE.PointLight>(null);

  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  const targetScale = useRef(1);
  const scaleVector = useMemo(() => new THREE.Vector3(1, 1, 1), []);

  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((state, delta) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    targetScale.current = hovered ? 1.055 : 1;

    scaleVector.setScalar(targetScale.current);

    group.current.scale.lerp(
      scaleVector,
      1 - Math.exp(-4 * delta)
    );

    if (!reducedMotion) {
      const targetY =
        state.pointer.x * (hovered ? 0.19 : 0.09) +
        Math.sin(time * 0.25) * 0.018;

      const targetX = -state.pointer.y * (hovered ? 0.14 : 0.07);

      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        targetY,
        3,
        delta
      );

      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        targetX,
        3,
        delta
      );
    }

    if (glow.current) {
      glow.current.intensity = THREE.MathUtils.damp(
        glow.current.intensity,
        hovered ? 3.8 : 1.3,
        4,
        delta
      );

      glow.current.distance = hovered ? 3.2 : 2.2;
    }
  });

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = "default";
  };

  return (
    <group ref={group}>
      {/* Background neural energy */}
      <mesh position={[0, 0, -0.2]}>
        <circleGeometry args={[1.65, 64]} />
        <meshBasicMaterial
          color="#D92327"
          transparent
          opacity={hovered ? 0.075 : 0.035}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Original KRIVA emblem */}
      <mesh
        position={[0, 0, 0]}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={handlePointerOut}
      >
        <planeGeometry args={[WIDTH, HEIGHT]} />

        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.03}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Neural pathways */}
      {neuralPaths.map((path, index) => (
        <Line
          key={index}
          points={path}
          color="#FF2634"
          lineWidth={hovered ? 1.8 : 1}
          transparent
          opacity={hovered ? 0.95 : 0.65}
        />
      ))}

      {/* Moving neural signals */}
      <Signal path={neuralPaths[0]} offset={0.1} speed={0.12} />
      <Signal path={neuralPaths[1]} offset={0.55} speed={0.1} />
      <Signal path={neuralPaths[2]} offset={0.25} speed={0.14} />
      <Signal path={neuralPaths[3]} offset={0.8} speed={0.09} />
      <Signal path={neuralPaths[4]} offset={0.4} speed={0.11} />

      {/* Central neural glow */}
      <pointLight
        ref={glow}
        position={point(98, 188, 0.35).toArray()}
        color="#E31D2A"
        intensity={1.3}
        distance={2.2}
      />
    </group>
  );
}

export default function NeuralNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.5} />

      <NeuralEmblem />
    </Canvas>
  );
}
