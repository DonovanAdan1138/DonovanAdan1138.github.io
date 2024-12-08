import * as THREE from "./three.module.js";
export default function E3({x,y,z}){

//base regalo
var base= new THREE.CylinderGeometry (2,2,3,20);
var material01 = new THREE.MeshBasicMaterial({color: 0xffffff});
var BaseC = new THREE.Mesh(base,material01);
//scene.add(BaseC);
BaseC.position.set(0,2,0);

//tapa regalo
var tapa= new THREE.CylinderGeometry (2.2,2.2,1,20);
var material01 = new THREE.MeshBasicMaterial({color: 0xffffff});
var TapaC = new THREE.Mesh(tapa,material01);
//scene.add(TapaC);
TapaC.position.set(0,4,0);

//detalles rect

var rect1= new THREE.CylinderGeometry (.5,.5,3,20,20, true, -1,2);
var material01 = new THREE.MeshBasicMaterial({color: 0x040240});
var rectF = new THREE.Mesh(rect1,material01);
//scene.add(rectF);
rectF.position.set(0,2,1.5);

var rectA = rectF.clone();
//scene.add(rectA);
rectA.position.set(0,2,-1.5);
rectA.rotation.set(0,3.1416,0);

var rectI = rectF.clone();
//scene.add(rectI);
rectI.position.set(1.5,2,0);
rectI.rotation.set(0,1.5708,0);

var rectD = rectF.clone();
//scene.add(rectD);
rectD.position.set(-1.5,2,0);
rectD.rotation.set(0,-1.5708,0);

//detalles rect 2

var rect2= new THREE.CylinderGeometry (.55,.55,1,20,20, true, -1,2);
var material01 = new THREE.MeshBasicMaterial({color: 0x040240,side : THREE.DoubleSide});
var rectF2 = new THREE.Mesh(rect2,material01);
//scene.add(rectF2);
rectF2.position.set(0,4,1.65);

var rectA2 = rectF2.clone();
//scene.add(rectA2);
rectA2.position.set(0,4,-1.65);
rectA2.rotation.set(0,3.1416,0);

var rectI2 = rectF2.clone();
//scene.add(rectI2);
rectI2.position.set(1.65,4,0);
rectI2.rotation.set(0,1.5708,0);

var rectD2 = rectF2.clone();
//scene.add(rectD2);
rectD2.position.set(-1.65,4,0);
rectD2.rotation.set(0,-1.5708,0);

//detalles tapa
var rect3= new THREE.PlaneGeometry (.35,4.4);
var material01 = new THREE.MeshBasicMaterial({color: 0x040240,side : THREE.DoubleSide});
var rectF3 = new THREE.Mesh(rect3,material01);
//scene.add(rectF3);
rectF3.position.set(0,4.51,0);
rectF3.rotation.set(-1.5708,0,0);

var rectF4 = rectF3.clone();
//scene.add(rectF4);
rectF4.position.set(0,4.51,0);
rectF4.rotation.set(-1.5708,0,1.5708);

var rectF5 = rectF3.clone();
//scene.add(rectF5);
rectF5.position.set(0,3.49,0);
rectF5.rotation.set(-1.5708,0,0);

var rectF6 = rectF4.clone();
//scene.add(rectF6);
rectF6.position.set(0,3.49,0);
rectF6.rotation.set(-1.5708,0,1.5708);

var rectF7 = rectF3.clone();
//scene.add(rectF7);
rectF7.position.set(0,.49,0);
rectF7.rotation.set(-1.5708,0,0);
rectF7.scale.set(1,.9,1);

var rectF8 = rectF4.clone();
//scene.add(rectF8);
rectF8.position.set(0,.49,0);
rectF8.rotation.set(-1.5708,0,1.5708);
rectF8.scale.set(1,.9,1);

//moño
var M1 = new THREE.TorusGeometry(.8,.15,20,20);
var material01 = new THREE.MeshBasicMaterial({color: 0x040240});
var Mo1 = new THREE.Mesh(M1,material01);
//scene.add(Mo1);
Mo1.position.set(-.8,4.5,0);

var Mo2 = Mo1.clone();
//scene.add(Mo2);
Mo2.position.set(.8,4.5,0);

var Mo3 = Mo1.clone();
//scene.add(Mo3);
Mo3.position.set(0,4.5,.8);
Mo3.rotation.set(0,1.5708,0);

var Mo4 = Mo1.clone();
//scene.add(Mo4);
Mo4.position.set(0,4.5,-.8);
Mo4.rotation.set(0,1.5708,0);

var sphere01 = new THREE.SphereGeometry (.4,16,16);
var material01 = new THREE.MeshBasicMaterial({color:0x040240});
var mesh02 = new THREE.Mesh(sphere01,material01);
//scene.add(mesh02);
mesh02.position.set(0,4.7,0);

var ESC3 = new THREE.Group();
ESC3.add(BaseC,TapaC,rectA,rectF,rectD,rectI,rectF2,rectA2,rectD2,rectI2,rectF3,rectF4,rectF5,rectF6,rectF7,rectF8,Mo1,Mo2,Mo3,Mo4,mesh02);
ESC3.position.set(x,y,z);
return ESC3;
}