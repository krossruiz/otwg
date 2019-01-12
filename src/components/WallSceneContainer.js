import React from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import { connect } from 'react-redux';

class AnimationWrapper extends React.Component {
    render() {
        return (
            <ThreeJSWallSceneRenderer/>
        );
    }
}

let x = 0;
let dx = 10;

class ThreeJSWallSceneRenderer extends React.Component {
    constructor(props){
        super(props)
        this.canvasRef = React.createRef();
        this.updateAnimation = this.updateAnimation.bind(this);
        this.rendererWidth = window.innerWidth * 1;
        this.rendererHeight = window.innerHeight *.4;
    }
    componentDidMount(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.rendererWidth / this.rendererHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer( { alpha: true } );
        this.renderer.setSize(this.rendererWidth, this.rendererHeight);
        this.mount.appendChild(this.renderer.domElement);

        let light = new THREE.PointLight("0xff0000", 5, 100);
        light.position.z = 10;
        this.scene.add( light );

        let loader = new GLTFLoader();

        loader.load(
            '../models/wall/wall.glb',
            ( gltf ) => {
                // called when the resource is loaded
                console.log(gltf);
                this.wall = gltf.scene.children[0];
                this.animationMixer = new THREE.AnimationMixer(this.wall);
                this.animationClips = gltf.animations;
                let SkateboardCirclingClip = THREE.AnimationClip.findByName(this.animationClips, 'skateboard_circling');
                let SkateboardCirclingAction = this.animationMixer.clipAction(SkateboardCirclingClip);
                SkateboardCirclingAction.play();
                console.log(this.wall);
                this.scene.add(this.wall);
            },
            ( xhr ) => {
                // called while loading is progressing
                console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
            },
            ( error ) => {
                // called when loading has errors
                console.error( 'An error happened', error );
            },
        );

        this.camera.position.z = 4;
        console.log(this.scene);

        this.rAF = requestAnimationFrame(this.updateAnimation);
    }
    updateAnimation() {
        if(this.wall){
            this.animationMixer.update(0.01);
            this.wall.rotateY(0.005);
        }
        this.renderer.render( this.scene, this.camera );
        this.rAF = requestAnimationFrame(this.updateAnimation);
    }
    render(){
        return(
            <div
                style={{ width: this.rendererWidth, height: this.rendererHeight }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

class WallSceneContainer extends React.Component {
    render(){
        return (
            <div>
                <AnimationWrapper></AnimationWrapper>
            </div>
        );
    }
}

export default connect()(WallSceneContainer);