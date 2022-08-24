//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xA9CCE3 );
;

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  



//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CapsuleGeometry( 2, 3,  3, 9 );
const material = new THREE.MeshBasicMaterial( {color: 0xF1948A} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );


camera.position.z = 10;
camera.position.x = 2;
camera.position.y = 1;


function animate(){
    requestAnimationFrame(animate) 
    capsule.rotation.y -= 0.03;
    capsule.rotation.z += 0.01;
    renderer.render(scene, camera);
    }
    animate();
    