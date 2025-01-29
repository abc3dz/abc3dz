import * as THREE from 'three';
import { OrbitControls } from 'three/addons/OrbitControls.js';
import { GLTFLoader } from 'three/addons/GLTFLoader.js';
import { GUI } from 'three/addons/lil-gui.module.min.js';
import Stats from 'three/addons/stats.module.js';
let container, gui, camera, scene, renderer, stats, controls;
/*let lastUpdate = Date.now();
const gridSize = 3;
const totalFrames = 9;
let currentFrame = 0;
let frameDuration = 700;
let textureStuff, animatedMesh;
let dirY = [-4,-3,-2,-1,0,1,2,3,4];*/
let dirLight;
//game stuff
let gameMesh, tek1Mesh, tek2Mesh, tek3Mesh, tek4Mesh, tek5Mesh;
let MomGame, RandGeo, YingLeak, Lgg, ClickNaja, GeometricBowling
//Check
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let lastHovered = null;

gui = new GUI();
var parameters = 
{
	'Audio1': 0.1,
	'Audio2': 0.0,
    'X': 0.0,
    'Y': 0.0,
    'Z': 0.0
};

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 100 );
	camera.position.set(0, 0, 28);
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x111111 );

	// lights
	const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
	hemiLight.position.set( 0, 0, 0 );
	scene.add( hemiLight );

	dirLight = new THREE.DirectionalLight( 0xffffff );
	dirLight.position.set( 0, 0, 1 );
	scene.add( dirLight );		

	// model
    const loaderABCzezeze = new GLTFLoader().setPath( 'models/' );
    loaderABCzezeze.load( 'Abczezeze.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(0,2,0);
        model.scale.set(1.7,1.7,1.7);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    //Game social
    const loaderITCH = new GLTFLoader().setPath( 'models/' );
    loaderITCH.load( 'ITCHioObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(-2,0,0);
        model.scale.set(.8,.8,.8);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderGamejolt = new GLTFLoader().setPath( 'models/' );
    loaderGamejolt.load( 'GamejoltObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(-0.5,0,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderIndieDB = new GLTFLoader().setPath( 'models/' );
    loaderIndieDB.load( 'IndieDBObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(1,0,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderPlaystore = new GLTFLoader().setPath( 'models/' );
    loaderPlaystore.load( 'PlayStoreObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(2.5,0,0);
        model.scale.set(.6,.6,.6);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    //Art social
    const loaderSketchfab = new GLTFLoader().setPath( 'models/' );
    loaderSketchfab.load( 'SketchfabObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(-2,-1.5,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    //Sound social
    const loaderSoundcloud = new GLTFLoader().setPath( 'models/' );
    loaderSoundcloud.load( 'SoundcloudObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(-.7,-1.5,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    //Social media
    const loaderGgDrive = new GLTFLoader().setPath( 'models/' );
    loaderGgDrive.load( 'GgDriveObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(1,-1.5,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderYoutube = new GLTFLoader().setPath( 'models/' );
    loaderYoutube.load( 'YoutubeObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(2.4,-1.5,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderFb = new GLTFLoader().setPath( 'models/' );
    loaderFb.load( 'FbObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(-2,-3,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderX = new GLTFLoader().setPath( 'models/' );
    loaderX.load( 'XObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(-.7,-3,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderMastodon = new GLTFLoader().setPath( 'models/' );
    loaderMastodon.load( 'MastodonObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(1,-3,0);
        model.scale.set(.6,.6,.6);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderBluesky = new GLTFLoader().setPath( 'models/' );
    loaderBluesky.load( 'BlueskyObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(2.4,-3,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderReddit = new GLTFLoader().setPath( 'models/' );
    loaderReddit.load( 'RedditObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(-2.2,2,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderGithub = new GLTFLoader().setPath( 'models/' );
    loaderGithub.load( 'GithubObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(1.7,2,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderDeviantart = new GLTFLoader().setPath( 'models/' );
    loaderDeviantart.load( 'DeviantartObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(0+-1,0+-4.8,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderTumblr = new GLTFLoader().setPath( 'models/' );
    loaderTumblr.load( 'TumblrObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(0,0+-4.8,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    const loaderVimeo = new GLTFLoader().setPath( 'models/' );
    loaderVimeo.load( 'VimeoObj.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(0+1.3,0+-4.8,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );
    } );
    
    //render
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild( renderer.domElement );
    
    controls = new OrbitControls( camera, renderer.domElement );
    //console.log(controls);
    //controls.autoRotate = true;
    controls.update();

    //stats = new Stats();
    //container.appendChild( stats.dom );

    window.addEventListener( 'resize', onWindowResize );

    //sound
    var listener = new THREE.AudioListener();
    var sound = new THREE.Audio( listener );
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load('./sounds/Re&Ha.mp3', function( buffer ) {
            sound.setBuffer( buffer );
            sound.setLoop( true );
            sound.setVolume( 0.1 );
            sound.play();
    });
    var sound2 = new THREE.Audio( listener );
    audioLoader.load('./sounds/FaDdd.mp3', function( buffer ) {
        sound2.setBuffer( buffer );
        sound2.setLoop( true );
        sound2.setVolume( 0.0 );
        sound2.play();
    });
    
    //gui
    var volumeFolder = gui.title('Sound Volume');
    volumeFolder.add( parameters, 'Audio1' ).min( 0.0 ).max( 1.0 ).step( 0.01 ).onChange( function () {
                        sound.setVolume( parameters.Audio1 );
    } );
    volumeFolder.add( parameters, 'Audio2' ).min( 0.0 ).max( 1.0 ).step( 0.01 ).onChange( function () {
                        sound2.setVolume( parameters.Audio2 );
    } );
    var positionLight = gui.addFolder('Light Position');
    positionLight.add( parameters, 'X' ).min( -1.0 ).max( 1.0 ).step( 0.01 ).onChange( function () {
        dirLight.position.x = parameters.X;
    } );
    positionLight.add( parameters, 'Y' ).min( -1.0 ).max( 1.0 ).step( 0.01 ).onChange( function () {
        dirLight.position.y = parameters.Y;
    } );
    positionLight.add( parameters, 'Z' ).min( -1.0 ).max( 1.0 ).step( 0.01 ).onChange( function () {
        dirLight.position.z = parameters.Z;
    } );

    //game stuff
    // textureStuff = new THREE.TextureLoader().load('./img/stuff-min.png', (tex) => {
    //     tex.wrapS = THREE.RepeatWrapping;
    //     tex.wrapT = THREE.RepeatWrapping;
      
    //     tex.repeat.set(1 / gridSize, 1 / gridSize); 

    //     const geometry = new THREE.PlaneGeometry(4, 3);
    //     const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide , map: tex });
    //     animatedMesh = new THREE.Mesh(geometry, material);
    //     animatedMesh.position.set(0,-8,-4);
    //     scene.add(animatedMesh);
    // })
    gameStuff('./img/Tek1-min.png',3,1.7,"Tek1",-5,2).then((mesh) => {
        tek1Mesh = mesh;
        scene.add(tek1Mesh);
    });
    gameStuff('./img/Tek2-min.png',3,1.7,'Tek2',-5,0).then((mesh) => {
        tek2Mesh = mesh;
        scene.add(tek2Mesh);
    });
    gameStuff('./img/Tek3-min.png',3,1.7,'Tek3',-5,-2).then((mesh) => {
        tek3Mesh = mesh
        scene.add(tek3Mesh);
    });
    gameStuff('./img/Tek5-min.png',3,1.7,'Tek5',-5,-4).then((mesh) => {
        tek5Mesh = mesh;
        scene.add(tek5Mesh);
    });
    gameStuff('./img/Tek4-min.png',1.3,1.7,'Tek4',-2,-7).then((mesh) => {
        tek4Mesh = mesh;
        scene.add(tek4Mesh);
    });
    gameStuff('./img/RandGeo-min.png',1.3,1.7,'RandGeo',0.3,-7).then((mesh) => {
        RandGeo = mesh;
        scene.add(RandGeo);
    });
    gameStuff('./img/MomGame-min.png',2,1.7,'MomGame',2.7,-7).then((mesh) => {
        MomGame = mesh;
        scene.add(MomGame);
    });
    gameStuff('./img/Lgg-min.png',3,1.7,'Lgg',5,-4).then((mesh) => {
        Lgg = mesh;
        scene.add(Lgg);
    });
    gameStuff('./img/ClickNaja-min.png',3,1.7,'ClickNaja',5,-2).then((mesh) => {
        ClickNaja = mesh;
        scene.add(ClickNaja);
    });
    gameStuff('./img/GeometricBowling-min.png',3,1.7,'GeometricBowling',5,0).then((mesh) => {
        GeometricBowling = mesh;
        scene.add(GeometricBowling);
    });
    gameStuff('./img/Yingleak-min.png',3,1.7,'Yingleak',5,2).then((mesh) => {
        YingLeak = mesh;
        scene.add(YingLeak);
    });

    //Thai art
    const loaderKrajangYai = new GLTFLoader().setPath( 'models/' );
    loaderKrajangYai.load( 'LaiThai_KrajangYai.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(0,-11,-16);
        await renderer.compileAsync( model, camera, scene );
        model.traverse((child) => {
            if (child.isMesh) {
                const material = child.material;
    
                if (material) {
                    material.transparent = true;
                    material.opacity = 0.5;
                }
            }
        });
        scene.add( model );
    } );
    const loaderKrajangLek = new GLTFLoader().setPath( 'models/' );
    loaderKrajangLek.load( 'LaiThai_KrajangLek.glb', async function ( gltf ) {
        const model = gltf.scene;
        model.position.set(0,-7,-8);
        await renderer.compileAsync( model, camera, scene );
        model.traverse((child) => {
            if (child.isMesh) {
                const material = child.material;
    
                if (material) {
                    material.transparent = true;
                    material.opacity = 0.5;
                }
            }
        });
        scene.add( model );
    } );

    //Link
    

    window.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        
        if (intersects.length > 0) {
            const ClickObj = intersects[0].object;
            console.log(ClickObj);
            switch (ClickObj.name) {
                case "ObjGithub":
                    window.open('https://github.com/abczezeze', '_blank');
                    break;
                case "ObjReddit":
                    window.open('https://www.reddit.com/user/abczezeze', '_blank');
                    break;
                case "ObjITCH":
                    window.open('https://abczezeze.itch.io/', '_blank');
                    break;
                case "ObjGamejolt":
                    window.open('https://gamejolt.com/@abczezeze', '_blank');
                    break;
                case "ObjIndieDB":
                    window.open('https://www.indiedb.com/members/abczezeze', '_blank');
                    break;
                case "ObjPlayStore":
                    window.open('https://play.google.com/store/apps/dev?id=6112214561738871485', '_blank');
                    break;
                case "ObjSketchfab":
                    window.open('https://sketchfab.com/ABCzezeze', '_blank');
                    break;
                case "ObjSoundcloud":
                    window.open('https://soundcloud.com/abczezeze', '_blank');
                    break;
                case "ObjGgDrive":
                    window.open('https://drive.google.com/drive/folders/14KsuX06G2BkIyWZz2Z6XCIeZBiTAaACA', '_blank');
                    break;
                case "ObjYoutube":
                    window.open('https://www.youtube.com/@abczezeze', '_blank');
                    break;
                case "Fb":
                    window.open('http://fb.me/cherncheu', '_blank');
                    break;
                case "ObjX":
                    window.open('https://x.com/abczezeze', '_blank');
                    break;
                case "ObjMastodon":
                    window.open('https://mastodon.gamedev.place/@abczezeze', '_blank');
                    break;
                case "ObjBluesky":
                    window.open('https://bsky.app/profile/abczezeze.bsky.social', '_blank');
                    break;
                case "ObjDeviantart":
                    window.open('https://www.deviantart.com/abc3dz', '_blank');
                    break;
                case "ObjTumblr":
                    window.open('https://www.tumblr.com/abczezeze', '_blank');
                    break;
                case "ObjVimeo":
                    window.open('https://vimeo.com/user84261275', '_blank');
                    break;
                case "Tek1":
                    window.open('https://www.kongregate.com/games/ABC3Dz/tek-game', '_blank');
                    break;
                case "Tek2":
                    window.open('https://abczezeze.itch.io/tekkk', '_blank');
                    break;
                case "Tek3":
                    window.open('https://play.google.com/store/apps/details?id=com.abczezeze.tek', '_blank');
                    break;
                case "Tek5":
                    window.open('https://abczezeze.github.io/TekGame/', '_blank');
                    break;
                case "Tek4":
                    window.open('https://gamejolt.com/games/tekkk/874075', '_blank');
                    break;
                case "RandGeo":
                    window.open('https://abczezeze.github.io/RandGeo3D/', '_blank');
                    break;
                case "MomGame":
                    window.open('https://flowlab.io/game/play/895886', '_blank');
                    break;
                case "Lgg":
                    window.open('https://www.indiedb.com/games/lgg', '_blank');
                    break;
                case "ClickNaja":
                    window.open('https://github.com/abczezeze/ClickNaja', '_blank');
                    break;
                case "GeometricBowling":
                    window.open('https://github.com/abczezeze/GeometricBowling', '_blank');
                    break;
                case "Yingleak":
                    window.open('https://abczezeze.github.io/YingLak/', '_blank');
                    break;
                default:
                    console.log('No action assigned for this object.');
                }
            }
    });

    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true); 
    
        if (intersects.length > 0) {
            const hoverObj = intersects[0].object;
    
            if (lastHovered && lastHovered !== hoverObj) {
                lastHovered.material.color.set(0xffffff); // คืนค่าสีเดิม
            }
    
            if (hoverObj.material && hoverObj.material.color) {
                hoverObj.material.color.set(Math.random()*0xffffff); // เปลี่ยนเป็นสีตอน Hover
                lastHovered = hoverObj;
            }
        } else {
            if (lastHovered) {
                lastHovered.material.color.set(0xffffff);
                lastHovered = null;
            }
        }
    });
}

// function updateTextureFrame() {
//     const xIndex = currentFrame % gridSize; // ตำแหน่งคอลัมน์
//     const yIndex = Math.floor(currentFrame / gridSize); // ตำแหน่งแถว

//     textureStuff.offset.set(xIndex / gridSize, 1 - (yIndex + 1) / gridSize); // ตั้งค่า offset
//     currentFrame = (currentFrame + 1) % totalFrames; // หมุนเวียนเฟรม
// }
function gameStuff(texture, sizeX, sizeY, name, posX, posY){
    return new Promise((resolve) => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(texture, function(tex) {
            const geometry = new THREE.BoxGeometry(sizeX, sizeY);
            const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: tex });
            gameMesh = new THREE.Mesh(geometry, material);
            gameMesh.position.set(posX, posY, 0);
            gameMesh.name = name;
            resolve(gameMesh);
        });
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    //requestAnimationFrame(animate);
    
    // if(animatedMesh){
    //     animatedMesh.position.x += .001;
    //     if(animatedMesh.position.x>5){
    //     animatedMesh.position.x = -5;
    //     animatedMesh.position.y = dirY[Math.floor(Math.random()*dirY.length)];
    //     }
    // }
    // const nowTime = Date.now();
    // if (nowTime - lastUpdate > frameDuration) {
    //   updateTextureFrame();
    //   lastUpdate = nowTime;
    // }

    if(tek1Mesh)tek1Mesh.rotation.y += 0.04;
    if(tek2Mesh)tek2Mesh.rotation.y += 0.031;
    if(tek3Mesh)tek3Mesh.rotation.y += 0.022;
    if(tek4Mesh)tek4Mesh.rotation.y += 0.053;

    if(tek5Mesh)tek5Mesh.rotation.y += 0.034;
    if(RandGeo)RandGeo.rotation.y += 0.042;
    if(MomGame)MomGame.rotation.y += 0.039;

    if(Lgg)Lgg.rotation.y += 0.033;
    if(ClickNaja)ClickNaja.rotation.y += 0.044;
    if(GeometricBowling)GeometricBowling.rotation.y += 0.055;
    if(YingLeak)YingLeak.rotation.y += 0.037;

    controls.update();
    renderer.render( scene, camera );
    //stats.update();
}