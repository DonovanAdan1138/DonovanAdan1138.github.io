import * as THREE from "./three.module.js";
import {RoundedBoxGeometry}from"./js/RoundedBoxGeometry.js";
export default function E1({x,y,z}){

//cabeza
var cabeza = new THREE.SphereGeometry (2.5,16,16);
var material01 = new THREE.MeshBasicMaterial({color:0xbb7b05});
var CabezaF = new THREE.Mesh(cabeza,material01);
//scene.add(CabezaF);
CabezaF.position.set(0,10,0);

//cuerpo
var cuerpo = new RoundedBoxGeometry(3.5,5.5,2,5,1);
var material01 = new THREE.MeshBasicMaterial({color:0xbb7b05});
var CuerpoF = new THREE.Mesh(cuerpo,material01);
CuerpoF.castShadow=true;
//scene.add(CuerpoF);
CuerpoF.position.set(0,5,0);

//mano1
var mano1 = new RoundedBoxGeometry(2,5,2,5,1);
var material01 = new THREE.MeshBasicMaterial({color:0xcbb7b05});
var Mano1 = new THREE.Mesh(mano1,material01);
Mano1.castShadow=true;
//scene.add(Mano1);
Mano1.position.set(-2,7,0);
Mano1.rotation.set(0,0,1.0472);

//mano2
var mano2 = new RoundedBoxGeometry(2,5,2,5,1);
var material01 = new THREE.MeshBasicMaterial({color:0xbb7b05});
var Mano2 = new THREE.Mesh(mano1,material01);
Mano2.castShadow=true;
//scene.add(Mano2);
Mano2.position.set(2,7,0);
Mano2.rotation.set(0,0,-1.0472);

//pie1
var pie1 = new RoundedBoxGeometry(2,5,2,5,1);
var material01 = new THREE.MeshBasicMaterial({color:0xbb7b05});
var Pie1 = new THREE.Mesh(pie1,material01);
Pie1.castShadow=true;
//scene.add(Pie1);
Pie1.position.set(-1.5,2,0);
Pie1.rotation.set(0,0,2.6180);

//pie2
var pie2 = new RoundedBoxGeometry(2,5,2,5,1);
var material01 = new THREE.MeshBasicMaterial({color:0xbb7b05});
var Pie2 = new THREE.Mesh(pie2,material01);
Pie2.castShadow=true;
//scene.add(Pie2);
Pie2.position.set(1.5,2,0);
Pie2.rotation.set(0,0,-2.6180);

//ojo1
var ojo1 = new THREE.SphereGeometry (.3,16,16);
var material01 = new THREE.MeshBasicMaterial({color:0xffffff});
var Ojo1 = new THREE.Mesh(ojo1,material01);
//scene.add(Ojo1);
Ojo1.position.set(-.9,10,2.5);

//ojo2
var Ojo2 = Ojo1.clone();
Ojo2.castShadow=true;
//scene.add(Ojo2);
Ojo2.position.set (.9,10,2.5);

//Ceja1
var Ceja1 = new THREE.TorusGeometry(1,.1,15,15,1);
var material01 = new THREE.MeshBasicMaterial({color: 0x2191bf});
var C1 = new THREE.Mesh(Ceja1,material01);
//scene.add(C1);
C1.position.set(.7,9.8,2.2);
C1.rotation.set(3.1416,0,-1.57);

var C2= C1.clone();
//scene.add(C2);
C2.position.set(-.7,9.8,2.2);
C2.rotation.set(0,3.1416,0);
C2.rotation.set(0,0,1.57);

//boca

var Boca1 = new RoundedBoxGeometry(.25,.25,1.95,5,1);
var material = new THREE.MeshBasicMaterial({color:0xbf2821});
var B1 = new THREE.Mesh(Boca1,material);
//scene.add(B1);
B1.position.set(-0.01,9.2,2.3);
B1.rotation.set(0,1.57,0);

var Boca2 = new THREE.TorusGeometry(1,.1,15,15,2.5);
var material01 = new THREE.MeshBasicMaterial({color: 0xbf2821});
var B2 = new THREE.Mesh(Boca2,material01);
//scene.add(B2);
B2.position.set(0.0149,9.19,2.35);
B2.rotation.set(3.6652,0,0.2618);

var Boca3 = new THREE.TorusGeometry(.5,.1,15,15,1);
var material01 = new THREE.MeshBasicMaterial({color: 0xbf2821});
var B3 = new THREE.Mesh(Boca3,material01);
//scene.add(B3);
B3.position.set(.449,8.93,2.2);
B3.rotation.set(3.6652,0,-0.7854);

var B4= B3.clone();
//scene.add(B4);
B4.position.set(-.4399,9,2.2);
B4.rotation.set(3.6652,0,2.6180);

//detalles
//botones
var boton = new THREE.SphereGeometry (.45,16,16);
var material01 = new THREE.MeshBasicMaterial({color:0x8d21bf});
var b1 = new THREE.Mesh(boton,material01);
//scene.add(b1);
b1.position.set(0,6.5,1);

var b2= b1.clone();
//scene.add(b2);
b2.position.set(0,5,1);

//lineas
var linea = new THREE.TorusGeometry(.5,.3,15,15,3.1);
var material01 = new THREE.MeshBasicMaterial({color: 0xffffff});
var l1 = new THREE.Mesh(linea,material01);
//scene.add(l1);
l1.position.set(-1,4,1);
l1.rotation.set(3.1416,0,0);
l1.scale.set(.45,.5,.5);

var l2= l1.clone();
//scene.add(l2);
l2.position.set(-.6,3.8,1);
l2.rotation.set(0,0,0);

var l3= l1.clone();
//scene.add(l3);
l3.position.set(-.2,4,1);
l3.rotation.set(3.1416,0,0);

var l4= l1.clone();
//scene.add(l4);
l4.position.set(0.2,3.8,1);
l4.rotation.set(0,0,0);

var l5= l1.clone();
//scene.add(l5);
l5.position.set(0.6,4,1);
l5.rotation.set(3.1416,0,0);

var l6= l1.clone();
//scene.add(l6);
l6.position.set(1,3.8,1);
l6.rotation.set(0,0,0);

//grupo
var lineaF = new THREE.Group();
lineaF.add(l1,l2,l3,l4,l5,l6);
//scene.add(lineaF);

var lineaF2= lineaF.clone();
//scene.add(lineaF2);
lineaF2.position.set(-3,-0.5,.5);
lineaF2.rotation.set(0,0,-0.5236);
lineaF2.scale.set(.5,.5,.5);

var lineaF3= lineaF.clone();
//scene.add(lineaF3);
lineaF3.position.set(3,-0.5,.5); 
lineaF3.rotation.set(0,0,0.5236);
lineaF3.scale.set(.5,.5,.5);

//clone2
var l22= l1.clone();
//scene.add(l22);
l22.position.set(-.6,3.8,1);
l22.rotation.set(0,0,0);

var l23= l1.clone();
//scene.add(l23);
l23.position.set(-.2,4,1);
l23.rotation.set(3.1416,0,0);

var l24= l1.clone();
//scene.add(l24);
l24.position.set(0.2,3.8,1);
l24.rotation.set(0,0,0);

var lineaF4 = new THREE.Group();
lineaF4.add(l22,l23,l24);
//scene.add(lineaF4);

lineaF4.position.set(-6,9.15,0);
lineaF4.rotation.set(0,0,4.1888);
lineaF4.scale.set(.9,.9,.9);

var lineaF5= lineaF4.clone();
//scene.add(lineaF5);
lineaF5.position.set(6,9.45,0);
lineaF5.rotation.set(0,0,-4.1888);
lineaF5.scale.set(.9,.9,.9);


var ESC5 = new THREE.Group();
ESC5.add(CabezaF,CuerpoF,Mano1,Mano2,Pie1,Pie2,Ojo1,Ojo2,C1,C2,B1,B2,B3,B4,b1,b2,lineaF,lineaF2,lineaF3,lineaF4,lineaF5);
ESC5.position.set(x,y,z);
return ESC5;
}