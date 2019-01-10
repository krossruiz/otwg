import React from 'react';
import * as THREE from 'three';
import { connect } from 'react-redux';

class AnimationWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.updateAnimation = this.updateAnimation.bind(this);
    }
    componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimation);
    }
    updateAnimation() {
        this.rAF = requestAnimationFrame(this.updateAnimation);
    }
    componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
    }
    render() {
        return (
            <ThreeJSWallSceneRenderer/>
        );
    }
}

class ThreeJSWallSceneRenderer extends React.Component {
    constructor(props){
        super(props)
        this.canvasRef = React.createRef();
    }
    componentDidMount(){
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        ctx.save();
        ctx.beginPath();
        ctx.clearRect(0, 0, width, height);
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
    componentDidUpdate(){
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        ctx.save();
        ctx.beginPath();
        ctx.clearRect(0, 0, width, height);
        ctx.fillRect(100,100,100,100);
    }
    render(){
        return(<canvas ref={this.canvasRef}/>)
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