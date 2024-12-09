import * as THREE from "./three.module.js";
export default function E01({x,y,z}){
    // Cemita
    //PLATO 
    var plateGeometry = new THREE.CylinderGeometry(5, 3.5, 0.3, 32);  
    var plateMaterial = new THREE.MeshBasicMaterial({ color: 0xCAC7C7 }); 
    var plateMesh = new THREE.Mesh(plateGeometry, plateMaterial);
    //scene.add(plateMesh);
    plateMesh.position.set(0, -2.3, 0);

    // Pan 
    var topBunGeometry = new THREE.SphereGeometry(4, 32, 32, 0, 35);
    var topBunMaterial = new THREE.MeshBasicMaterial({color: 0xF5D6B1}); 
    var topBunMesh = new THREE.Mesh(topBunGeometry, topBunMaterial);
    topBunMesh.scale.set(1, 0.6, 1);
    topBunMesh.position.set(0, 0,-.5);
    //scene.add(topBunMesh);

    // Ajonjolí 
    var sesameGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    var sesameMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF}); 

    var sesameMesh1 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh1.position.set(0.5, 2.3, 0.5); 
    //scene.add(sesameMesh1);

    var sesameMesh2 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh2.position.set(0.7, 2.3, -0.7);
    //scene.add(sesameMesh2);

    var sesameMesh3 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh3.position.set(-0.8, 2.3, 0.6);
    //scene.add(sesameMesh3);

    var sesameMesh4 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh4.position.set(-0.9, 2.3, -0.9);
    //scene.add(sesameMesh4);

    var sesameMesh5 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh5.position.set(1, 2.3, 1);
    //scene.add(sesameMesh5);

    var sesameMesh6 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh6.position.set(-1.2, 2.3, -0.5);
    //scene.add(sesameMesh6);

    var sesameMesh7 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh7.position.set(1.2, 2.3, 0);
    //scene.add(sesameMesh7);

    var sesameMesh8 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh8.position.set(0, 2.3, -1.1);
    //scene.add(sesameMesh8);

    var sesameMesh9 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh9.position.set(1.5, 2.3, 0.8);
    //scene.add(sesameMesh9);

    var sesameMesh10 = new THREE.Mesh(sesameGeometry, sesameMaterial);
    sesameMesh10.position.set(-0.5, 2.3, 1.3);
    //scene.add(sesameMesh10);

    // Carne 
    var meatGeometry = new THREE.BoxGeometry(5, 1, 6);
    var meatMaterial = new THREE.MeshBasicMaterial({color: 0x8B4513}); 
    var meatMesh = new THREE.Mesh(meatGeometry, meatMaterial);
    meatMesh.position.set(0, -.2, -1);  
    //scene.add(meatMesh);
    var ESC01 = new THREE.Group();
    ESC01.add(plateMesh,topBunMesh,sesameMesh1,sesameMesh2,sesameMesh3,sesameMesh4,sesameMesh5,sesameMesh6,sesameMesh7,sesameMesh8,sesameMesh9,sesameMesh10,meatMesh);
    ESC01.position.set(x,y,z);
    return ESC01;
}