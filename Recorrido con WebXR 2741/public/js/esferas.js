import * as THREE from "./three.module.js";
export default function Arbol ({x,y,z}){

// Bota
var materialRed = new THREE.MeshStandardMaterial({ color: 0xff0000});
var materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00});
var materialGold = new THREE.MeshStandardMaterial({ color: 0xffd700});
var materialBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff});

// Crear las esferas de Navidad
var geometry = new THREE.SphereGeometry(2, 16, 16);  

// Esfera roja
var sphereRed = new THREE.Mesh(geometry, materialRed);
sphereRed.position.set(15, 5, 0);
//scene.add(sphereRed);

// Esfera verde
var sphereGreen = new THREE.Mesh(geometry, materialGreen);
sphereGreen.position.set(20, 5, 0);
//scene.add(sphereGreen);

// Esfera dorada
var sphereGold = new THREE.Mesh(geometry, materialGold);
sphereGold.position.set(25, 5, 0);
//scene.add(sphereGold);

// Esfera azul
var sphereBlue = new THREE.Mesh(geometry, materialBlue);
sphereBlue.position.set(30, 5, 0);
//scene.add(sphereBlue);

var sf = new THREE.Group();
sf.add(sphereRed,sphereGreen,sphereGold,sphereBlue);
sf.position.set(0,0,0);

return sf;
}