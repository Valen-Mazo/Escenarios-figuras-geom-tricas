//escenario
const scene = new THREE.Scene();

scene.fog = new THREE.Fog(0xFFFFFF, 1, 6);

var loader = new THREE.TextureLoader();
loader.load('../imagen/background.jpg', function(texture){
    scene.background = texture;
});

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  //75 es la profundidad
//far-lejos    near- cerca


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 3, 3, 3 ); //lo del parentesis es el alto,ancho, profundidad
const material = new THREE.MeshBasicMaterial( { color: 0xe30052} ); //el mesh es para los amteriales-->para que se vean
const cube = new THREE.Mesh( geometry, material );
const fog = new THREE.Fog(  0x000000, 3, 300);

scene.add( cube );





camera.position.z = 5;





//animacion
function animate(){
requestAnimationFrame(animate) //request- llama el espacio completo del frame--->
//llama a si misma la función del animación, para poder funcionar
cube.rotation.y += 0.01;
cube.rotation.z += 0.01;
renderer.render(scene, camera);
}
animate();


