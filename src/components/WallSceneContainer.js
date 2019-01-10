import React from 'react';
import * as THREE from 'three';
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
        this.rendererWidth = 600;
        this.rendererHeight = 200;
    }
    componentDidMount(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.rendererWidth / this.rendererHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer( { alpha: true } );
        this.renderer.setSize(600, 200);
        this.mount.appendChild(this.renderer.domElement);

        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        let material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );

        this.camera.position.z = 1;
        console.log(this.scene);

        this.rAF = requestAnimationFrame(this.updateAnimation);
    }
    updateAnimation() {
        this.cube.rotateX(0.05);
        this.cube.rotateY(0.05);
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