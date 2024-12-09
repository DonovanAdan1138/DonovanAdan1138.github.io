import * as THREE from "./three.module.js";
import {RoundedBoxGeometry}from"./js/RoundedBoxGeometry.js";
export default function E4({x,y,z}){

//base regalo
var reg = new THREE.BoxGeometry(5,8,5,12,12,12);
var materialR = new THREE.MeshBasicMaterial({color:0xfc7dff});
var regalo = new THREE.Mesh(reg,materialR);
//scene.add(regalo);
regalo.position.set(0,5,0);

//tapa regalo
var tap = new THREE.BoxGeometry(5.5,1,5.5,12,12,12);
var materialR = new THREE.MeshBasicMaterial({color:0xbe37c1});
var tapa = new THREE.Mesh(tap,materialR);
//scene.add(tapa);
tapa.position.set(0,9,0);

//decoracion
var punto = new THREE.CircleGeometry(.4,25);
var material01 = new THREE.MeshBasicMaterial({color: 0x9022cf, side : THREE.DoubleSide});
var C1 = new THREE.Mesh(punto,material01);
//scene.add(C1);
C1.position.set(0,5,2.51);

var C2 = C1.clone();
//scene.add(C2);
C2.position.set(1,1.7,2.51);

var C3 = C1.clone();
//scene.add(C3);
C3.position.set(-1,3,2.51);
C3.scale.set(1.5,1.5,1);

var C4 = C3.clone();
//scene.add(C4);
C4.position.set(1.6,7.5,2.51);
C4.scale.set(1.5,1.5,1);

var C5 = C1.clone();
//scene.add(C5);
C5.position.set(-1.5,6,2.51);
C5.scale.set(1.5,1.5,1);

var C6 = C1.clone();
//scene.add(C6);
C6.position.set(1.5,4.5,2.51);
C6.scale.set(2,2,1);

var C7 = C1.clone();
//scene.add(C7);
C7.position.set(-1,8,2.51);
C7.scale.set(.8,.8,.5);

var C8 = C1.clone();
//scene.add(C8);
C8.position.set(-1.5,1.5,2.51);
C8.scale.set(.8,.8,.5);

var C9 = C1.clone();
//scene.add(C9);
C9.position.set(0.2,6.8,2.51);
C9.scale.set(.6,.6,.5);

var C10 = C1.clone();
//scene.add(C10);
C10.position.set(-1.5,4.5,2.51);
C10.scale.set(.6,.6,.5);

var C11 = C1.clone();
//scene.add(C11);
C11.position.set(1.5,3,2.51);
C11.scale.set(.6,.6,.5);

//grupo1

var decF = new THREE.Group();
decF.add(C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11);
//scene.add(decF);


//clone atras

var decA = decF.clone();
//scene.add(decA);
decA.position.set(0,0,-5.011);

//clone Der

var decD = decF.clone();
//scene.add(decD);
decD.position.set(.0,0,0);
decD.rotation.set(0,1.57,0);

//clone Izq

var decI = decF.clone();
//scene.add(decI);
decI.position.set(.0,0,0);
decI.rotation.set(0,-1.57,0);

//moño
var Moño = new THREE.TorusGeometry(1,.2,15,15,1);
var material01 = new THREE.MeshBasicMaterial({color: 0x9c5a9e});
var M1 = new THREE.Mesh(Moño,material01);
//scene.add(M1);
M1.position.set(1,9.5,0);

var M12= M1.clone();
//scene.add(M12);
M12.position.set(-1,9.5,0);
M12.rotation.set(0,3.1416,0);

var L1 = new RoundedBoxGeometry(.5,.5,3,5,1);
var material = new THREE.MeshBasicMaterial({color:0x9c5a9e});
var l1 = new THREE.Mesh(L1,material);
//scene.add(l1);
l1.position.set(1.2,10,0);
l1.rotation.set(1.5708,-0.5236,0);

var l2= l1.clone();
//scene.add(l2);
l2.position.set(-1.2,10,0);
l2.rotation.set(1.5708,0.5236,0);

var Moño2 = new THREE.TorusGeometry(1,.2,15,15,1.5);
var material01 = new THREE.MeshBasicMaterial({color: 0x9c5a9e});
var M2 = new THREE.Mesh(Moño2,material01);
//scene.add(M2);
M2.position.set(.86,11,0);

var M22= M2.clone();
//scene.add(M22);
M22.position.set(-.86,11,0);
M22.rotation.set(0,3.1416,0);


var L2 = new RoundedBoxGeometry(.5,.5,5,5,1);
var material = new THREE.MeshBasicMaterial({color:0x9c5a9e});
var l3 = new THREE.Mesh(L2,material);
//scene.add(l3);
l3.position.set(0,10,0);
l3.rotation.set(1.5708,-0.5236,0);

var l4= l3.clone();
//scene.add(l4);
l4.position.set(0,10,0);
l4.rotation.set(1.5708,0.5236,0);

var Moño3 = new THREE.TorusGeometry(1,.2,15,15,3);
var material01 = new THREE.MeshBasicMaterial({color: 0x9c5a9e});
var M3 = new THREE.Mesh(Moño3,material01);
//scene.add(M3);
M3.position.set(0,11.8,0);

var moñoF = new THREE.Group();
moñoF.add(M1,M12,M2,M22,M3,l1,l2,l3,l4);
//scene.add(moñoF);
moñoF.position.set(0,0,0);

var moñoF2= moñoF.clone();
//scene.add(moñoF2);
moñoF2.rotation.set(0,1.5708,0);

var ESC4 = new THREE.Group();
//ESC4.add(regalo,tapa,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11,decF,decA,decD,decI,M1,M12,l1,l2,M2,M22,l3,l4,M3,moñoF,moñoF2);
ESC4.position.set(0,0,0);
return ESC4;
}