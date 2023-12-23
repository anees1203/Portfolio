import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const InteractiveNetworkSphere = ({ color = '#00fffc' }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Generate random nodes on the sphere's surface
    const nodePositions = Array.from({ length: 100 }, () => {
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

    // Create random connections between nodes
    const connections = Array.from({ length: 50 }, () => [
      Math.floor(Math.random() * nodePositions.length),
      Math.floor(Math.random() * nodePositions.length),
    ]);

    // Create nodes
    const nodesGeometry = new THREE.BufferGeometry();
    const nodesMaterial = new THREE.PointsMaterial({ color: color, size: 0.12 });
    const vertices = new Float32Array(nodePositions.flat());
    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
    scene.add(nodes);

    // Create edges
    const edgesGeometry = new THREE.BufferGeometry();
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeVertices = [];
    connections.forEach(([startIndex, endIndex]) => {
      edgeVertices.push(...nodePositions[startIndex], ...nodePositions[endIndex]);
    });
    edgesGeometry.setFromPoints(new THREE.Float32BufferAttribute(edgeVertices, 3));
    const lineSegments = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    scene.add(lineSegments);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      nodes.rotation.y += 0.005;
      lineSegments.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const xRotation = (y / height - 0.5) * 2;
      const yRotation = (x / width - 0.5) * 2;
      nodes.rotation.x = xRotation;
      nodes.rotation.y = yRotation;
      lineSegments.rotation.x = xRotation;
      lineSegments.rotation.y = yRotation;
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [color]);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default InteractiveNetworkSphere;
