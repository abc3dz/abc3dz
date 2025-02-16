import { GLTFLoader } from 'three/addons/GLTFLoader.js';

export function loadGlb(scene, path, position={x:0,y:0}, size=1) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(path, (gltf) => {
            const model = gltf.scene;
            model.position.set(position.x, position.y, position.z);
            model.scale.set(size,size,size)
            scene.add(model);
            resolve(model);
        }, undefined, (error) => {
            console.error(`Error loading model: ${path}`, error);
            reject(error);
        });
    });
}
