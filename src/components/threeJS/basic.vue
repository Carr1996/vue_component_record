<template>
  <div>
    <div id="THREE_container"></div>
  </div>
</template>

<script>
import "three/examples/js/controls/OrbitControls";
import * as THREE from "three";
export default {
  name: "THREEinit",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
    };
  },
  methods: {
    init() {
      let container = document.getElementById("THREE_container");
      //   创建场景
      this.scene = new THREE.Scene();
      // 创建摄像机
      this.camera = new THREE.PerspectiveCamera(
        70, //视野角度
        container.clientWidth / container.clientHeight, //长宽比
        0.01, //近截面
        500 //远截面
      );
      this.camera.position.set(0, 0, 100);
      this.camera.lookAt(0, 0, 0);
			
      // 渲染器
      this.renderer = new THREE.WebGLRenderer({
        antialias: true, //抗锯齿
      });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
			container.appendChild(this.renderer.domElement);
			
			// 控制器
      let controls = new THREE.OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      // controls.maxPolarAngle = Math.PI * 0.5;
      // controls.minDistance = 1000;
      // controls.maxDistance = 5000;

      let geometry = new THREE.BoxGeometry(50, 50, 50);
      let material = new THREE.MeshNormalMaterial();

      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);
      this.drawLine();
    },
    drawLine() {
      let material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      let geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(50, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, 50, 0));
      // geometry.vertices.push(new THREE.Vector3(0, 0, 50));
      let line = new THREE.Line(geometry, material);
      this.scene.add(line);
    },
    animate() {
      requestAnimationFrame(this.animate); //正常情况下是60次/秒
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<style>
#THREE_container {
  width: 100%;
  height: 100%;
}
</style>