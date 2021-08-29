import * as THREE from "/three/build/three.module.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "/three/examples/jsm/renderers/CSS3DRenderer.js";
import { gsap, Power1 } from "/gsap/gsap-core.js";
import { CSSPlugin } from "/gsap/CSSPlugin.js";
gsap.registerPlugin(CSSPlugin);

let scene,
  camera,
  renderer,
  objects = [],
  geometry,
  material,
  nx,
  ny;

init();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 75;
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#reveal-effect"),
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  geometry = new THREE.BoxGeometry(12, 12, 3);
  window.addEventListener("load", initScene);

  animate();
}

function initScene() {
  initLights();
  initObjects();
}
function initLights() {
  scene.add(new THREE.AmbientLight(0x808080));
  let light = new THREE.PointLight(0xffffff);
  light.position.z = 100;
  scene.add(light);
}
function initObjects() {
  nx = Math.round(window.innerWidth / 12) + 1;
  ny = Math.round(window.innerHeight / 12) + 1;
  let mesh, x, y;
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1,
      });
      mesh = new THREE.Mesh(geometry, material);
      x = -window.innerWidth / 2 + i * 12;
      y = -window.innerHeight / 2 + j * 12;
      mesh.position.set(x, y, 0);
      objects.push(mesh);
      scene.add(mesh);
    }
  }
}
document.querySelector(".intro p").addEventListener("click", (e) => {
  gsap.to(document.querySelector(".intro"), 1, {
    opacity: 0,
    display: "none",
    onComplete: startAnim,
  });
});

function startAnim() {
  objects.forEach((mesh) => {
    mesh.rotation.set(0, 0, 0);
    mesh.material.opacity = 1;
    mesh.position.z = 0;
    let delay = THREE.Math.randFloat(1, 2);
    let rx = THREE.Math.randFloatSpread(2 * Math.PI);
    let ry = THREE.Math.randFloatSpread(2 * Math.PI);
    let rz = THREE.Math.randFloatSpread(2 * Math.PI);
    gsap.to(mesh.rotation, 2, {
      x: rx,
      y: ry,
      z: rz,
      delay: delay,
    });
    gsap.to(mesh.position, 2, {
      z: 80,
      delay: delay + 0.5,
      ease: Power1.easeOut,
    });
    gsap.to(mesh.material, 2, {
      opacity: 0,
      delay: delay + 0.5,
    });
  });
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
