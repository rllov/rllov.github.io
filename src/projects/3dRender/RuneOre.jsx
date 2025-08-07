import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function RuniteOre() {
  const mountRef = useRef();

  useEffect(() => {
    const container = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // OSRS sky-like

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 2, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true; // Enable shadows
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: softer shadows
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true; // Enable shadow casting

    // Configure shadow camera (shadow area & quality)
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 20;
    directionalLight.shadow.camera.left = -5;
    directionalLight.shadow.camera.right = 5;
    directionalLight.shadow.camera.top = 5;
    directionalLight.shadow.camera.bottom = -5;

    scene.add(directionalLight);

    // Helper (optional, remove if you don't want to see light frustum)
    const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
    scene.add(helper);

    // Ground plane to receive shadows
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1; // Adjust based on your model's position
    ground.receiveShadow = true;
    scene.add(ground);

    // Load Model
    const loader = new GLTFLoader();
    loader.load("/models/runite_ore.gltf", (gltf) => {
      const model = gltf.scene;

      // Scale first
      model.scale.set(0.02, 0.02, 0.02);

      // Compute bounding box and center pivot
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      // Replace materials with lit standard material and nearest filter for pixel look
      model.traverse((child) => {
        if (child.isMesh) {
          const oldMat = child.material;
          child.material = new THREE.MeshStandardMaterial({
            map: oldMat.map,
            color: 0xffffff,
            metalness: 0,
            roughness: 1,
          });
          child.material.map.magFilter = THREE.NearestFilter;
          child.material.map.minFilter = THREE.NearestFilter;

          // Enable shadow casting and receiving
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(model);

      // Auto-focus camera on model
      const size = box.getSize(new THREE.Vector3()).length();
      const fitDist = size / (2 * Math.tan((camera.fov * Math.PI) / 360));
      camera.position.set(0, size * 0.5, fitDist * 1.2);

      // Controls target is model center (now at 0,0,0)
      controls.target.set(0, 0, 0);
      controls.update();
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
}
