import * as THREE from "./three.module.js";
export default function E2({x,y,z}){

//base regalo
var reg = new THREE.BoxGeometry(5,1,4,12,12,12);
var materialR = new THREE.MeshBasicMaterial({color:0x4d1b1b});
var regalo = new THREE.Mesh(reg,materialR);
//scene.add(regalo);

//tapa regalo
var tap = new THREE.BoxGeometry(5.5,0.5,4.5,12,12,12);
var materialR = new THREE.MeshBasicMaterial({color:0x680505});
var tapa = new THREE.Mesh(tap,materialR);
//scene.add(tapa);
tapa.position.set(0,0.5,0);

//liston rect1
var rec1 = new THREE.PlaneGeometry(0.5,0.8);
var materialR = new THREE.MeshBasicMaterial({color: 0xc8a30c, side : THREE.DoubleSide});
var rect1 = new THREE.Mesh(rec1,materialR);
//scene.add(rect1);
rect1.position.set(1,-0.09,2.01);

var rect2 = rect1.clone();
//scene.add(rect2);
rect2.position.set(1,-0.09,-2.01);

var rect3 = rect1.clone();
//scene.add(rect3);
rect3.position.set(2.51,-0.09,-0.5);
rect3.rotation.set(0,1.5708,0);

var rect4 = rect1.clone();
//scene.add(rect4);
rect4.position.set(-2.51,-0.09,-0.5);
rect4.rotation.set(0,1.5708,0);

//liston rect2

var list2 = new THREE.PlaneGeometry(5.5,0.5);
var materialR = new THREE.MeshBasicMaterial({color: 0xc8a30c, side : THREE.DoubleSide});
var l2 = new THREE.Mesh(list2,materialR);
//scene.add(l2);
l2.position.set(0,0.756,-0.5);
l2.rotation.set(1.5708,0,0);

var list21 = new THREE.PlaneGeometry(0.5,4.5);
var materialR = new THREE.MeshBasicMaterial({color: 0xc8a30c, side : THREE.DoubleSide});
var l3 = new THREE.Mesh(list21,materialR);
//scene.add(l3);
l3.position.set(1,0.751,0);
l3.rotation.set(1.5708,0,0);

//liston rect2 abajo
var list2 = new THREE.PlaneGeometry(5,0.5);
var materialR = new THREE.MeshBasicMaterial({color: 0xc8a30c, side : THREE.DoubleSide});
var l4 = new THREE.Mesh(list2,materialR);
//scene.add(l4);
l4.position.set(0,-0.501,-0.5);
l4.rotation.set(1.5708,0,0);

var list3 = new THREE.PlaneGeometry(0.5,4);
var materialR = new THREE.MeshBasicMaterial({color: 0xc8a30c, side : THREE.DoubleSide});
var l5 = new THREE.Mesh(list3,materialR);
//scene.add(l5);
l5.position.set(1,-0.501,0);
l5.rotation.set(1.5708,0,0);


//liston rect3
var rec3 = new THREE.PlaneGeometry(0.5,0.5);
var materialR = new THREE.MeshBasicMaterial({color: 0xc8a30c, side : THREE.DoubleSide});
var rect6 = new THREE.Mesh(rec3,materialR);
//scene.add(rect6);
rect6.position.set(1,0.5,2.251);

var rect22 = rect6.clone();
//scene.add(rect22);
rect22.position.set(1,0.5,-2.251);

var rect32 = rect6.clone();
//scene.add(rect32);
rect32.position.set(2.751,0.5,-0.5);
rect32.rotation.set(0,1.5708,0);

var rect42 = rect6.clone();
//scene.add(rect42);
rect42.position.set(-2.751,0.5,-0.5);
rect42.rotation.set(0,1.5708,0);


var rec4 = new THREE.PlaneGeometry(0.5,0.3);
var materialR = new THREE.MeshBasicMaterial({color: 0xc8a30c, side : THREE.DoubleSide});
var rect5 = new THREE.Mesh(rec4,materialR);
//scene.add(rect5);
rect5.position.set(1,0.249,2.1);
rect5.rotation.set(1.5708,0,0);

var rect51 = rect5.clone();
//scene.add(rect51);
rect51.position.set(2.6,0.249,-0.5);
rect51.rotation.set(1.5708,0,1.5708);

var rect52 = rect5.clone();
//scene.add(rect52);
rect52.position.set(-2.6,0.249,-0.5);
rect52.rotation.set(1.5708,0,1.5708);

var rect53 = rect5.clone();
//scene.add(rect53);
rect53.position.set(1,0.249,-2.1);
rect53.rotation.set(1.5708,0,0);

//moño
var moño1 = new THREE.TorusGeometry(2.5,1,15,15,  );
var material01 = new THREE.MeshBasicMaterial({color: 0xc8a30c});
var Mo1 = new THREE.Mesh(moño1,material01);
//scene.add(Mo1);
Mo1.position.set(.2,1,-0.1);
Mo1.scale.set(0.3,0.3,0.3);
Mo1.rotation.set(1.0472,-3.9270,-2.0944);

var moño2 = new THREE.TorusGeometry(2.5,1,15,15,  );
var material01 = new THREE.MeshBasicMaterial({color: 0xc8a30c});
var Mo2 = new THREE.Mesh(moño1,material01);
//scene.add(Mo2);
Mo2.position.set(1.6,1,-1);
Mo2.scale.set(0.3,0.3,0.3);
Mo2.rotation.set(-1.0472,-3.9270,2.0944);

var moño3 = new THREE.SphereGeometry (.7,16,16);
var material01 = new THREE.MeshBasicMaterial({color:0xc8a30c});
var Mo3 = new THREE.Mesh(moño3,material01);
//scene.add(Mo3);
Mo3.position.set(1,1,-0.5);

var regaloF2 = new THREE.Group();
regaloF2.add(regalo,tapa,rect1,rect2,rect3,rect4,rect6,l2,l3,l4,l5,list2,list3,rect22,rect32,rect42,rect51,rect5,rect52,rect53,Mo1,Mo2,Mo3);
//scene.add(regaloF2);
regaloF2.position.set(0,0,0);

var ESC2 = new THREE.Group();
ESC2.add(regaloF2);
ESC2.position.set(x,y,z);
return ESC2;
}