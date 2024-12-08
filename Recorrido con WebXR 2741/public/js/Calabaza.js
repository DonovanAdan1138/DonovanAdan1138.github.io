import * as THREE from "./three.module.js";
export default function Calabaza ({x,y,z}){

//calabaza
var c1=new THREE.SphereGeometry(1,10,10);
    var material07=new THREE.MeshBasicMaterial({color:0xFFBA03,wireframe:false});
    var mesh07=new THREE.Mesh(c1,material07);
   // scene.add(mesh07);
    mesh07.position.set(-14.8,1,0);

    var c2=new THREE.SphereGeometry(1,10,10);
    var material08=new THREE.MeshBasicMaterial({color:0xFFBA03,wireframe:false});
    var mesh08=new THREE.Mesh(c2,material08);
    //scene.add(mesh08);
    mesh08.position.set(-14,1,0.5);

    var c3=new THREE.SphereGeometry(1,10,10);
    var material11=new THREE.MeshBasicMaterial({color:0xFFBA03,wireframe:false});
    var mesh11=new THREE.Mesh(c3,material11);
    //scene.add(mesh11);
    mesh11.position.set(-13.4,1,-0.5);

    var c4=new THREE.SphereGeometry(1,10,10);
    var material12=new THREE.MeshBasicMaterial({color:0xFFBA03,wireframe:false});
    var mesh12=new THREE.Mesh(c4,material12);
    //scene.add(mesh12);
    mesh12.position.set(-13.4,1,0.2);

    var c5=new THREE.SphereGeometry(1,10,10);
    var material13=new THREE.MeshBasicMaterial({color:0xFFBA03,wireframe:false});
    var mesh13=new THREE.Mesh(c5,material13);
    //scene.add(mesh13);
    mesh13.position.set(-14.6,1,-0.8);
    
    var c6=new THREE.SphereGeometry(1,10,10);
    var material14=new THREE.MeshBasicMaterial({color:0xFFBA03,wireframe:false});
    var mesh14=new THREE.Mesh(c6,material14);
    //scene.add(mesh14);
    mesh14.position.set(-13.8,1,-0.9);

    //tallo
    var T=new THREE.SphereGeometry(0.5,10,10);
    var material09=new THREE.MeshBasicMaterial({color:0x03FF0E,wireframe:false});
    var mesh09=new THREE.Mesh(T,material09);
    //scene.add(mesh09);
    mesh09.position.set(-14,1.6,-0.1);

    var Ta=new THREE.CylinderGeometry(0.2,0.02,1.5,12);
    var material10=new THREE.MeshBasicMaterial({color:0x03FF0E ,wireframe:false});
    var mesh10=new THREE.Mesh(Ta,material10);
    //scene.add(mesh10);
    mesh10.position.set(-14,1.8,-0.1);
    mesh10.rotation.set(0,0,25.5);

    var Ca= new THREE.Group();
    Ca.add(mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14);
    //scene.add(Ca);

var Ca = new THREE.Group();
Ca.add(mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14);
//scene.add(Ca);
Ca.position.set(x, y, z);
return Ca;



}