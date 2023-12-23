import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface InteractiveSphereProps {
  color?: string;
}

const InteractiveSphere: React.FC<InteractiveSphereProps> = ({ color = '#00fffc' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Use the dimensions of the mountRef element
    const { clientWidth: width, clientHeight: height } = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Ensure the background is transparent
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement); // Append to the mountRef element

    // Create a sphere
    const sphereGeometry = new THREE.SphereGeometry(5, 20, 20);
    const sphereMaterial = new THREE.PointsMaterial({ color: color, size: 0.1 });
    const sphere = new THREE.Points(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Set camera position
    camera.position.y = -2; // Adjust this value to move the sphere up
    camera.position.z = 12;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.0009; // Slow continuous rotation
      renderer.render(scene, camera);
    };
    animate();

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const xRotation = (y / height - 0.5) * 2;
      const yRotation = (x / width - 0.5) * 2;
      sphere.rotation.x = xRotation;
      sphere.rotation.y = yRotation;
    };

    // Add mousemove event listener
    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [color]);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100vh' }}>
      {/* The Three.js canvas will be appended here */}
    </div>
  );
};

export default InteractiveSphere;
