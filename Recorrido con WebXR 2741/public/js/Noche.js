import * as THREE from "./three.module.js";
export default function Arbol ({x,y,z}){

     ///Noche Buena 

var geometrySphere = new THREE.SphereGeometry(2, 32, 32); 
var materialSphere = new THREE.MeshBasicMaterial({ color: 0xfffb00}); 
var sphere = new THREE.Mesh(geometrySphere, materialSphere);
//scene.add(sphere);
sphere.position.set(-20, 2, 0);
sphere.scale.set(.6,.6,.6);


var geometryCone = new THREE.ConeGeometry(2, 5, 32);  
var materialCone = new THREE.MeshBasicMaterial({ color: 0xff0000});  
var cone = new THREE.Mesh(geometryCone, materialCone);
cone.rotation.x = Math.PI / 1; 
//scene.add(cone);
cone.position.set(-20, -.4, 0);
cone.scale.set(.6,.6,.6);

var coneClone = cone.clone();  
coneClone.rotation.x = Math.PI / 360;
//scene.add(coneClone);
coneClone.position.set(-20, 4.5, 0);  
coneClone.scale.set(.6,.6,.6);


var coneClone01 = cone.clone();  
coneClone01.rotation.z = 185 * (Math.PI / 42);
//scene.add(coneClone01);
coneClone01.position.set(-22, 1, 0); 
coneClone01.scale.set(.6,.6,.6);


var coneClone02 = cone.clone();
coneClone02.rotation.z = 185 * (Math.PI / -42);
//scene.add(coneClone02);
coneClone02.position.set(-18, 1, 0); 
coneClone02.scale.set(.6,.6,.6);


var coneClone03 = cone.clone();
coneClone03.rotation.z = 280 * (Math.PI / 200);
//scene.add(coneClone03);
coneClone03.position.set(-18, 3, 0); 
coneClone03.scale.set(.6,.6,.6);

var coneClone04 = cone.clone();
coneClone04.rotation.z = 280 * (Math.PI / -200);
//scene.add(coneClone04);
coneClone04.position.set(-22, 3, 0); 
coneClone04.scale.set(.6,.6,.6);



var geometryCone02 = new THREE.ConeGeometry(2, 7, 5);  
var materialCone02 = new THREE.MeshBasicMaterial({ color: 0x0b5345 });  
var cone02 = new THREE.Mesh(geometryCone02, materialCone02);
cone02.rotation.z = 280 * (Math.PI / 150);
//scene.add(cone02);
cone02.position.set(-19, 4.5, -.1);
cone02.scale.set(.7,.7,.4);


var geometryCone03 = new THREE.ConeGeometry(2, 7, 5);  
var materialCone03 = new THREE.MeshBasicMaterial({ color: 0x0b5345 });  
var cone03 = new THREE.Mesh(geometryCone02, materialCone02);
cone03.rotation.z = 185 * (Math.PI / -57);
//scene.add(cone03);
cone03.position.set(-21,0, -.1);
cone03.scale.set(.7,.7,.4);










    
    return pop;
}