//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x372942);


//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CylinderGeometry( 2, 2, 5, 7 );
const material = new THREE.MeshBasicMaterial( {color: 0xA9CCE3 } );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
 


camera.position.z = 10;
camera.position.x = 2;
camera.position.y = 1;


function animate(){
    requestAnimationFrame(animate) 
    cylinder.rotation.y -= 0.02;
    cylinder.rotation.z += 0.02;
    cylinder.rotation.x += 0.02
    renderer.render(scene, camera);
    }
    animate();
    