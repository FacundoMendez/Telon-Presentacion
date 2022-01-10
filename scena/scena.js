const canvas = document.querySelector(".webGLed");

const scene = new THREE.Scene();


const geometry = new THREE.BoxGeometry(7,3,1);
const material = new THREE.MeshBasicMaterial({color: "black"});
const mesh = new THREE.Mesh(geometry,material);



scene.add(mesh)

const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1,100);

camera.position.z = 3
camera.position.y = -1


scene.add(camera);


const renderer = new THREE.WebGLRenderer({canvas: canvas, });
renderer.setSize(size.width, size.height);

function effectLed(){
    gsap

    .timeline({
        defaults:{
            duration:4,
            delay:6,
        }
    })

    .to(mesh.position,{
        z: 1.5,
        y: -0.9,
    })


}



effectLed(); 

function animate(){

    renderer.render(scene, camera);

    window.requestAnimationFrame(animate)
}

animate()



renderer.render(scene,camera)