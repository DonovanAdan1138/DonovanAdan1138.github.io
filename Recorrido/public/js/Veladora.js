import * as THREE from "./three.module.js";
export default function Veladora ({x,y,z}){

//veladoraApagadas
//cera
var cera=new THREE.CylinderGeometry(1,0.4,2,12);
var material03=new THREE.MeshBasicMaterial({color:0xffffffff ,wireframe:false});
var mesh03=new THREE.Mesh(cera,material03);
//scene.add(mesh03);
mesh03.position.set(0,1,10);
//mecha
var M=new THREE.CylinderGeometry(0.02,0.02,1,12);
var material03=new THREE.MeshBasicMaterial({color:0xB9B9B9 ,wireframe:false});
var mesh02=new THREE.Mesh(M,material03);
//scene.add(mesh02);
mesh02.position.set(0,2,10);

var vel1 = new THREE.Group();
vel1.add(mesh02,mesh03);
//scene.add(vel1);
vel1.position.set(x, y, z);
return vel1;



}