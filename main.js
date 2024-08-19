import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var textureLoader = new THREE.TextureLoader();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let decalImage = textureLoader.load('./brat.png');
console.log(decalImage);
const material = new THREE.MeshBasicMaterial( { map: decalImage } );
const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// let cubeMaterials = new THREE.MeshFaceMaterial( material );

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );