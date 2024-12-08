import * as THREE from "./three.module.js";
export default function plato ({x,y,z}){

//plato
var plato=new THREE.CylinderGeometry(3,2.5,0.3,20);
    var material05=new THREE.MeshBasicMaterial({color:0xffffffff ,wireframe:false});
    var mesh05=new THREE.Mesh(plato,material05);
    //scene.add(mesh05);
    mesh05.position.set(10,0.5,0);

    var Plat1= new THREE.Group();
   Plat1 .add(mesh05);
    //scene.add(Plat1);
Plat1.position.set(x, y, z);
return Plat1;
}