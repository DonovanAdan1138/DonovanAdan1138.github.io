import * as THREE from "./three.module.js";
export default function Arbol ({x,y,z}){

var pino = new THREE.ConeGeometry(3,5,15);
        var verde = new THREE.MeshBasicMaterial({color:0x32e81a});
        var pinopintado = new THREE.Mesh(pino,verde);
        

        var pino1 = new THREE.ConeGeometry(4,5,15);
        var pinopintado1 = new THREE.Mesh(pino1,verde);
        pinopintado1.position.set(0,-3,0);
        

        var pino2 = new THREE.ConeGeometry(5,5,15);
        var pinopintado2 = new THREE.Mesh(pino2,verde);
        pinopintado2.position.set(0,-5,0);
       

        var palo = new THREE.CylinderGeometry(1,1,8,10,15);
        var cafe = new THREE.MeshBasicMaterial({color:0x853f01});
        var palopintado = new THREE.Mesh(palo,cafe);
        palopintado.position.set(0,-5,0);
        
        var arbol = new THREE.Group();
        arbol.add(pinopintado,pinopintado1,pinopintado2,palopintado)
        arbol.position.set(0,9,0);
        arbol.scale.set(0.5,0.5,0.5);
        
        
        var esfera = new THREE.SphereGeometry(0.5,16,16);
        var rojo = new THREE.MeshBasicMaterial({color:0xc91f19});
        var esferaRoja = new THREE.Mesh(esfera,rojo);
        esferaRoja.position.set(0,5,3.2);
        

        var esfera1 = new THREE.SphereGeometry(0.5,16,16);
        var negro = new THREE.MeshBasicMaterial({color:0x290302});
        var esferaNegra = new THREE.Mesh(esfera1,negro);
        esferaNegra.position.set(1,8,2.3);
       
     
        var esferaNegra1 = new THREE.Mesh(esfera1,negro);
        esferaNegra1.position.set(-1,8,2.3);
        

        var gorro = new THREE.CylinderGeometry(0.5,5,5,10,5);
        var gorroPintado = new THREE.Mesh(gorro,rojo);
        gorroPintado.scale.set(0.5,0.5,0.5);
        gorroPintado.position.set(0,11,0);
        

        var blanco = new THREE.MeshBasicMaterial({color:0xf8e5e5});
        var esferaBlanca = new THREE.Mesh(esfera,blanco);
        esferaBlanca.position.set(0,12.7,0);
       
        
        var adornos = new THREE.Group();
        adornos.add(esferaRoja,esferaNegra,esferaNegra1,gorroPintado,esferaBlanca)
        adornos.scale.set(0.5,0.5,0.5);
        adornos.position.set(0,4.5,0);
        

        var decoracion = new THREE.Group();
        decoracion.add(adornos,arbol);
        decoracion.position.set(0,-7,-10);
        //scene.add(decoracion);

       

        return decoracion;
}