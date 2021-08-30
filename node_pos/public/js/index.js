import * as THREE from "/three/build/three.module.js";
// CSS#Renderer 원본 상대 경로
// node_pos\node_modules\three\examples\jsm\renderers\CSS3DRenderer.js
// 원본에 import 문 from 절 'three' 대신
// 경로 입력 from '/three/build/three.module.js';
import {
  CSS3DRenderer,
  CSS3DObject,
} from "/three/examples/jsm/renderers/CSS3DRenderer.js";
import { gsap, Power1 } from "/gsap/gsap-core.js";
import { CSSPlugin } from "/gsap/CSSPlugin.js";
gsap.registerPlugin(CSSPlugin);

let scene,
  scene2,
  camera,
  renderer,
  renderer2,
  objects = [],
  objects2 = [],
  targets = [],
  geometry,
  material,
  nx,
  ny;

// prettier-ignore
const tables = [
  "", "", 1, 1, "", "", 1, 2,
  "", "", 2, 1, "", "", 2, 2,
  "", "", 4, 1, "", "", 4, 2, "", "", 4, 4, "", "", 4, 5,
  "", "", 5, 1, "", "", 5, 2, "", "", 5, 4, "", "", 5, 5,
  "", "", 6, 1, "", "", 6, 2, "", "", 6, 4, "", "", 6, 5,
  "", "", 7, 1, "", "", 7, 2, "", "", 7, 4, "", "", 7, 5
];

init();

function init() {
  scene = new THREE.Scene();
  scene2 = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 500;
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#reveal-effect"),
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector("#webgl").appendChild(renderer.domElement);

  geometry = new THREE.BoxGeometry(12, 12, 3);

  renderer2 = new CSS3DRenderer();
  renderer2.setSize(window.innerWidth, window.innerHeight);
  document.querySelector("#css").appendChild(renderer2.domElement);

  window.addEventListener("load", initScene);
}

function initScene() {
  initLights();
  initObjects();
}

function initLights() {
  scene.add(new THREE.AmbientLight(0x1f2739));
  let light = new THREE.PointLight(0x1f2739);
  light.position.z = 40;
  light.position.y = 600;
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

  for (let i = 0; i < tables.length; i += 4) {
    const table = document.createElement("div");
    table.className = "table";
    table.setAttribute("data-id", i / 4 + 1);
    table.style.backgroundColor = "rgb(55,174,249)";

    const time = document.createElement("div");
    time.className = "time";
    time.textContent = "";
    table.appendChild(time);

    const tableName = document.createElement("div");
    tableName.className = "name";
    tableName.textContent = i / 4 + 1;
    table.appendChild(tableName);

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = "";
    table.appendChild(price);

    const objectCSS = new CSS3DObject(table);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 4500;
    scene2.add(objectCSS);

    objects2.push(objectCSS);

    const object3d = new THREE.Object3D();
    object3d.position.x = tables[i + 2] * 140 - 600;
    object3d.position.y = -(tables[i + 3] * 180) + 550;
    object3d.position.z = -1350;

    targets.push(object3d);
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
    gsap.to(mesh.rotation, 1.5, {
      x: rx,
      y: ry,
      z: rz,
      delay: delay,
    });
    gsap.to(mesh.position, 1.5, {
      z: 80,
      delay: delay + 0.3,
      ease: Power1.easeOut,
    });
    gsap.to(mesh.material, 1.5, {
      opacity: 0,
      delay: delay + 0.3,
    });
  });
  animate();
  setTimeout(() => {
    transform();
  }, 3000);
}

function transform() {
  for (let i = 0; i < objects2.length; i++) {
    const object = objects2[i];
    const target = targets[i];

    gsap.to(object.element.style, 1, {
      opacity: 1,
    });

    gsap.to(object.position, Math.random() * 2 + 2, {
      x: target.position.x,
      y: target.position.y,
      z: target.position.z,
      ease: Power1.easeInOut,
      delay: 1,
    });

    gsap.to(object.rotation, Math.random() * 2 + 2, {
      x: target.rotation.x,
      y: target.rotation.y,
      z: target.rotation.z,
      ease: Power1.easeInOut,
      delay: 1,
    });
  }
  animate();
  gsap.to(document.querySelector(".total_open"), 1, {
    opacity: 1,
    display: "block",
  });
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  renderer2.render(scene2, camera);
}
