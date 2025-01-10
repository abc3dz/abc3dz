import * as THREE from 'three';
import { OrbitControls } from 'three/addons/OrbitControls.js';
import { GLTFLoader } from 'three/addons/GLTFLoader.js';
import { GUI } from 'three/addons/lil-gui.module.min.js';
let container, gui;
let camera, scene, renderer;

gui = new GUI();
var parameters = 
{
	'Audio1': 0.1,
	'Audio2': 0.0,
};

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 100 );
	camera.position.set( - 5, 3, 10 );
	camera.lookAt( new THREE.Vector3( 0, 2, 0 ) );
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x111111 );
    //scene.fog = new THREE.FogExp2( 0xaaccff, 0.0007 );
	//scene.fog = new THREE.Fog( 0xe0e0e0, 20, 100 );

	// lights
	const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
	hemiLight.position.set( 0, 20, 0 );
	scene.add( hemiLight );

	const dirLight = new THREE.DirectionalLight( 0xffffff );
	dirLight.position.set( 0, 20, 10 );
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
        model.name = 'ITCHioLink';
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderGamejolt = new GLTFLoader().setPath( 'models/' );
    loaderGamejolt.load( 'GamejoltObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'GamejoltLink';
        model.position.set(-0.5,0,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderIndieDB = new GLTFLoader().setPath( 'models/' );
    loaderIndieDB.load( 'IndieDBObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'IndieDBLink';
        model.position.set(1,0,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderPlaystore = new GLTFLoader().setPath( 'models/' );
    loaderPlaystore.load( 'PlayStoreObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'PlayStoreLink';
        model.position.set(2.5,0,0);
        model.scale.set(.6,.6,.6);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    //Art social
    const loaderSketchfab = new GLTFLoader().setPath( 'models/' );
    loaderSketchfab.load( 'SketchfabObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'SketchfabLink';
        model.position.set(-2,-1.5,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    //Sound social
    const loaderSoundcloud = new GLTFLoader().setPath( 'models/' );
    loaderSoundcloud.load( 'SoundcloudObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'SoundcloudLink';
        model.position.set(-.7,-1.5,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    //Social media
    const loaderGgDrive = new GLTFLoader().setPath( 'models/' );
    loaderGgDrive.load( 'GgDriveObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'GgDriveLink';
        model.position.set(1,-1.5,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderYoutube = new GLTFLoader().setPath( 'models/' );
    loaderYoutube.load( 'YoutubeObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'YoutubeLink';
        model.position.set(2.4,-1.5,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderFb = new GLTFLoader().setPath( 'models/' );
    loaderFb.load( 'FbObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'FbLink';
        model.position.set(-2,-3,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderX = new GLTFLoader().setPath( 'models/' );
    loaderX.load( 'XObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'XLink';
        model.position.set(-.7,-3,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderMastodon = new GLTFLoader().setPath( 'models/' );
    loaderMastodon.load( 'MastodonObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'MastodonLink';
        model.position.set(1,-3,0);
        model.scale.set(.6,.6,.6);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderBluesky = new GLTFLoader().setPath( 'models/' );
    loaderBluesky.load( 'BlueskyObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'BlueskyLink';
        model.position.set(2.4,-3,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderReddit = new GLTFLoader().setPath( 'models/' );
    loaderReddit.load( 'RedditObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'RedditLink';
        model.position.set(-2.2,2,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    const loaderGithub = new GLTFLoader().setPath( 'models/' );
    loaderGithub.load( 'GithubObj.glb', async function ( gltf ) {

        const model = gltf.scene;
        model.name = 'GithubLink';
        model.position.set(1.7,2,0);
        await renderer.compileAsync( model, camera, scene );
        scene.add( model );

    } );
    
    //Link
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        console.log(intersects);
        if (intersects.length > 0) {
            const ClickObj = intersects[0].object;
            switch (ClickObj.parent.name) {
                case "GithubLink":
                    window.open('https://github.com/abczezeze', '_blank');
                    break;
                case "RedditLink":
                    window.open('https://www.reddit.com/user/abczezeze', '_blank');
                    break;
                case "ITCHioLink":
                    window.open('https://abczezeze.itch.io/', '_blank');
                    break;
                case "GamejoltLink":
                    window.open('https://gamejolt.com/@abczezeze', '_blank');
                    break;
                case "IndieDBLink":
                    window.open('https://www.indiedb.com/members/abczezeze', '_blank');
                    break;
                case "PlayStoreLink":
                    window.open('https://play.google.com/store/apps/dev?id=6112214561738871485', '_blank');
                    break;
                case "SketchfabLink":
                    window.open('https://sketchfab.com/ABCzezeze', '_blank');
                    break;
                case "SoundcloudLink":
                    window.open('https://soundcloud.com/abczezeze', '_blank');
                    break;
                case "GgDriveLink":
                    window.open('https://drive.google.com/drive/folders/14KsuX06G2BkIyWZz2Z6XCIeZBiTAaACA', '_blank');
                    break;
                case "YoutubeLink":
                    window.open('https://www.youtube.com/@abczezeze', '_blank');
                    break;
                case "FbLink":
                    window.open('http://fb.me/cherncheu', '_blank');
                    break;
                case "XLink":
                    window.open('https://x.com/abczezeze', '_blank');
                    break;
                case "MastodonLink":
                    window.open('https://mastodon.gamedev.place/@abczezeze', '_blank');
                    break;
                case "BlueskyLink":
                    window.open('https://bsky.app/profile/abczezeze.bsky.social', '_blank');
                    break;
                default:
                    console.log('No action assigned for this object.');
            }
        }
    });

    //render
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild( renderer.domElement );
    
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set( -0.7, 1, 0 );
    //controls.enableRotate = false;
    controls.update();
    //console.log(controls);

    window.addEventListener( 'resize', onWindowResize );

    //sound
    var listener = new THREE.AudioListener();
    var sound = new THREE.Audio( listener );
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load( './sounds/Re&Ha.mp3', function( buffer ) {
            sound.setBuffer( buffer );
            sound.setLoop( true );
            sound.setVolume( 0.1 );
            sound.play();
    });
    var sound2 = new THREE.Audio( listener );
    audioLoader.load( './sounds/FaDdd.mp3', function( buffer ) {
        sound2.setBuffer( buffer );
        sound2.setLoop( true );
        sound2.setVolume( 0.0 );
        sound2.play();
    });
    
    var volumeFolder = gui.title('Sound Volume'); //.addFolder( 'Sound volume' );
    volumeFolder.add( parameters, 'Audio1' ).min( 0.0 ).max( 1.0 ).step( 0.01 ).onChange( function () {
                        sound.setVolume( parameters.Audio1 );
            } );
    volumeFolder.add( parameters, 'Audio2' ).min( 0.0 ).max( 1.0 ).step( 0.01 ).onChange( function () {
                        sound2.setVolume( parameters.Audio2 );
                    } );
}


function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {
    
    renderer.render( scene, camera );
}