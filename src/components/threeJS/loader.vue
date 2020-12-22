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
      this.scene.background = new THREE.Color( 0xcce0ff );
      // 创建摄像机
      this.camera = new THREE.PerspectiveCamera(
        70, //视野角度
        container.clientWidth / container.clientHeight, //长宽比
        0.01, //近截面
        500 //远截面
      );
      this.camera.position.set(0, 0, 200);
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
      this.scene.add(new THREE.AmbientLight(0x666666));

      this.loaderModel();
    },
    // 加载模型
    loaderModel() {
      var loader = new THREE.ObjectLoader();
      loader.load("./model_test.json", (obj) => {
        obj.scale.x = obj.scale.y = obj.scale.z = 1;
        this.scene.add(obj);
      });
    },
    animate() {
      requestAnimationFrame(this.animate); //正常情况下是60次/秒
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
  background: #fff;
}
</style>