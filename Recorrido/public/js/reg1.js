import * as THREE from "./three.module.js";
export default function E1({x,y,z}){

//base regalo
var reg = new THREE.BoxGeometry(5,5,5,12,12,12);
var materialR = new THREE.MeshBasicMaterial({color:0xfd775a});
var regalo = new THREE.Mesh(reg,materialR);
//scene.add(regalo);

//tapa regalo
var tap = new THREE.BoxGeometry(5.5,1,5.5,12,12,12);
var materialR = new THREE.MeshBasicMaterial({color:0xfda45a});
var tapa = new THREE.Mesh(tap,materialR);
//scene.add(tapa);
tapa.position.set(0,3,0);

//liston rec
var rec1 = new THREE.PlaneGeometry(1,5);
var materialR = new THREE.MeshBasicMaterial({color: 0x5a73fd, side : THREE.DoubleSide});
var rect1 = new THREE.Mesh(rec1,materialR);
//scene.add(rect1);
rect1.position.set(0,0,2.6);


var rec2 = new THREE.PlaneGeometry(1,1);
var materialR = new THREE.MeshBasicMaterial({color: 0x5a73fd, side : THREE.DoubleSide});
var rect2 = new THREE.Mesh(rec2,materialR);
//scene.add(rect2);
rect2.position.set(0,3,2.8);

var rec3 = new THREE.PlaneGeometry(5.55,1);
var materialR = new THREE.MeshBasicMaterial({color: 0x5a73fd, side : THREE.DoubleSide});
var rect3 = new THREE.Mesh(rec3,materialR);
//scene.add(rect3);
rect3.position.set(0,3.51,0);
rect3.rotation.set(1.57,0,0);
var rect4 = rect3.clone();
//scene.add(rect4); 
rect4.rotation.set(1.57,0,1.57);

var l1 = new THREE.Group();
l1.add(rect1,rect2);
//scene.add(l1);

var l2 = l1.clone();
//scene.add(l2);
l2.position.set(0.04,0,0);
l2.rotation.set(0,-1.57,0);

var l3 = l1.clone();
//scene.add(l3);
l3.position.set(0,0,0.04);
l3.rotation.set(0,3.14,0);

var l4 = l1.clone();
//scene.add(l4);
l4.position.set(-0.04,0,0);
l4.rotation.set(0,1.57,0);

//liston circ
var cir1 = new THREE.RingGeometry(1,2,20);
var materialR = new THREE.MeshBasicMaterial({color: 0x5a73fd, side : THREE.DoubleSide});
var mo1 = new THREE.Mesh(cir1,materialR);
//scene.add(mo1);
mo1.position.set(0,3.5,0);


var mo2 = mo1.clone();
//scene.add(mo2);
mo2.rotation.set(0,1.5,0);

var regaloF = new THREE.Group();
regaloF.add(rect1,rect2,rect3,rect4,mo1,mo2,tapa,regalo,l1,l2,l3,l4);
//scene.add(regaloF);
regaloF.position.set(0,5,0);

var ESC1 = new THREE.Group();
ESC1.add(regaloF);
ESC1.position.set(x,y,z);
return ESC1;
}