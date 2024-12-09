import * as THREE from "./three.module.js";
export default function Muñeco ({x,y,z}){



var m1=new THREE.SphereGeometry(6,10,10);
    var material01=new THREE.MeshBasicMaterial({color:0xffffff,wireframe:false});
    var mesh01=new THREE.Mesh(m1,material01);
  // scene.add(mesh01);
    mesh01.position.set(0,2,0);

    var m2=new THREE.SphereGeometry(4,10,10);
    var material02=new THREE.MeshBasicMaterial({color:0xffffff,wireframe:false});
    var mesh02=new THREE.Mesh(m2,material02);
   //scene.add(mesh02);
    mesh02.position.set(0,9,0);
    
    var m3=new THREE.SphereGeometry(2,10,10);
    var material03=new THREE.MeshBasicMaterial({color:0xffffff,wireframe:false});
    var mesh03=new THREE.Mesh(m3,material03);
  // scene.add(mesh03);
    mesh03.position.set(0,14,0);

    //sombrero

 var s=new THREE.CylinderGeometry(1,1,3,12);
var material04=new THREE.MeshBasicMaterial({color:0x000000 ,wireframe:false});
var mesh04=new THREE.Mesh(s,material04);
//scene.add(mesh04);
mesh04.position.set(0,16,0);

var s1=new THREE.CylinderGeometry(1.1,1.1,1,15);
var material05=new THREE.MeshBasicMaterial({color:0xff0000 ,wireframe:false});
var mesh05=new THREE.Mesh(s1,material05);
//scene.add(mesh05);
mesh05.position.set(0,15.5,0);

var s1=new THREE.CylinderGeometry(3,3,0.3,15);
var material09=new THREE.MeshBasicMaterial({color:0x000000 ,wireframe:false});
var mesh09=new THREE.Mesh(s1,material09);
//scene.add(mesh09);
mesh09.position.set(0,15.5,0);

//ojos

var o1=new THREE.SphereGeometry(0.15,10,10);
    var material06=new THREE.MeshBasicMaterial({color:0x000000,wireframe:false});
    var mesh06=new THREE.Mesh(o1,material06);
  // scene.add(mesh06);
    mesh06.position.set(0.65,14.5,1.75);

    var o1=new THREE.SphereGeometry(0.15,10,10);
    var material08=new THREE.MeshBasicMaterial({color:0x000000,wireframe:false});
    var mesh08=new THREE.Mesh(o1,material08);
  // scene.add(mesh08);
    mesh08.position.set(-0.65,14.5,1.75);
  
//nariz

var n=new THREE.CylinderGeometry(0.05,0.25,2,15);
var material07=new THREE.MeshBasicMaterial({color:0xffae00 ,wireframe:false});
var mesh07=new THREE.Mesh(n,material07);
//scene.add(mesh07);
mesh07.rotation.set(90,0,0);
mesh07.position.set(0,13.9,2.5);

var Mu= new THREE.Group();
    Mu.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09);
    //scene.add(Mu);
    Mu.position.set(0,4,0);

    return Mu;
}