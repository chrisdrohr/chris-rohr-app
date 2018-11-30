import React from 'react';
import * as THREE from 'three';
var mouseX = 0;
var mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let scene;
let camera;
let renderer;
class Three extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      z: props.width === 'xs' ? 20000 : 25000
      // prevZ: 2000,
    };
  }
  componentDidMount() {
    const state = this.state;
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    document.addEventListener('touchstart', this.onDocumentTouchStart, false);
    document.addEventListener('touchmove', this.onDocumentTouchMove, false);
    window.addEventListener('resize', this.onWindowResize, false);
    //ADD SCENE
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x112);
    // scene.fog = new THREE.FogExp2(0x404040, 0.001);
    //ADD CAMERA
    camera = new THREE.PerspectiveCamera(40, width / height, 1, 100000);
    camera.position.z = state.z;
    //ADD RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    this.mount.appendChild(renderer.domElement);
    //ADD LIGHT
    const light = new THREE.AmbientLight(0x404040, 0.001);
    // scene.add(light);

    for (var i = 0; i < 500; i++) {
      let geometry = new THREE.SphereBufferGeometry(3, 10, 10);
      const material = new THREE.MeshPhongMaterial({
        color: 0xeeeeee,
        emissive: 0xeeeeee,
        shininess: 0
      });
      // material.color.setHSL(1.0, 0.3, 0.7);
      const star = new THREE.Mesh(geometry, material);
      star.position.x = (0.5 - Math.random()) * window.innerWidth * 14;
      star.position.y = (0.5 - Math.random()) * window.innerHeight * 14;
      // star.position.z = (0.5 - Math.random()) * window.innerWidth * 14;
      star.position.z = Math.random() * window.innerHeight * 15;
      star.scale.x = star.scale.y = star.scale.z = Math.random() * 6 + 5;
      scene.add(star);
    }
    this.start();
  }
  componentDidUpdate(prevProps, prevState) {
    // const props = this.props;

    //UPDATE CAMERA ON VISIBILITY CHANGE
    // if (props.page.profile && props.page.profile !== prevProps.page.profile) {
    //   this.setState({
    //     z: 2000,
    //     // prevZ: prevState.z,
    //   });
    // }
    // if (props.page.resume && props.page.resume !== prevProps.page.resume) {
    //   this.setState({
    //     z: 6000,
    //     // prevZ: prevState.z,
    //   });
    // }
    // if (
    //   props.page.portfolio &&
    //   props.page.portfolio !== prevProps.page.portfolio
    // ) {
    //   this.setState({
    //     z: 10000,
    //     // prevZ: prevState.z,
    //   });
    // }
    // if (props.page.music && props.page.music !== prevProps.page.music) {
    //   this.setState({
    //     z: 15000,
    //     // prevZ: prevState.z,
    //   });
    // }
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(renderer.domElement);
  }
  onDocumentMouseMove(event) {
    camera.position.x +=
      (event.clientX - windowHalfX - camera.position.x) * 0.05;
    camera.position.y +=
      (-(event.clientY - windowHalfY) - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }
  onDocumentTouchMove(event) {
    if (event.touches.length == 1) {
      event.preventDefault();
      mouseX = event.touches[0].pageX - windowHalfX;
      mouseY = event.touches[0].pageY - windowHalfY;
    }
  }
  onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    // const zIsGreater =
    // if (camera.position.z !== this.state.z) {
    //   console.log(camera.position.z > this.state.z - 1000, camera.position.z < this.state.z - 1000)
    //   if (camera.position.z > this.state.z - 1000 && camera.position.z < this.state.z - 1000) {
    //     console.log('10')
    //     camera.position.z += 10;
    //   } else {
    //     console.log('100')

    //     camera.position.z += 100;
    //   }
    // }
  //   if (this.props.width === 'xs') {
  // camera.rotation.x += 0.001;
  //   camera.rotation.y += 0.001;
  //   }
  
  
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    renderer.render(scene, camera);
  };
  render() {
    // console.log(this.state.z);
    return (
      <div
        style={{
          zIndex: -1,
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default Three;
