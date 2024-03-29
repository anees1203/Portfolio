import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const InteractiveSphere = ({ color = 'black', numberOfNodes = 100 }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Generate nodes on the sphere's surface
    const nodePositions = Array.from({ length: numberOfNodes }, () => {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 7; // radius of the sphere
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      return [x, y, z];
    });

    // Create nodes
    const nodesGeometry = new THREE.BufferGeometry();
    const nodesMaterial = new THREE.PointsMaterial({ color: color, size: 0.04 });
    const vertices = new Float32Array(nodePositions.flat());
    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
    scene.add(nodes);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      nodes.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [color, numberOfNodes]);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default InteractiveSphere;
