<template>
  <div
    id="hx_container"
    @mousemove="mousemove"
    @mousedown="mousedown"
    @mouseup="mouseup"
  ></div>
</template>

<script>
import * as THREE from "three";
import Player from "./Player.js";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  name: "hxinit",
  data() {
    return {};
  },
  mounted() {
    this.initPlayer();
    this.loadModel();
  },
  methods: {
    initPlayer() {
      let container = document.getElementById("hx_container");
      this.player = new Player(container.clientWidth, container.clientHeight);
      window.player = this.player;
      player.init(this.$el);

      const { camera, controls } = player;
      camera.position.fromArray([-54.91268170771308,84.35345529222373,  229.50865604754534])
      camera.rotation.fromArray([-0.3800940504904185, 0.1858580246529288,  0.0736938738096836, "XYZ"])

      controls.maxPolarAngle = Math.PI * 0.5;
      controls.minDistance = 45;
      controls.maxDistance = 800;
      controls.target.fromArray([ -97.66330838707935,  6.42620320022566e-18,  18.372594079404763]);
      controls.update();

      player.renderer.render(player.scene, player.camera);
      player.play();
      this.drawLine();
    },
    async loadModel() {
      const datas = await this.player.loadFiles([
        "HX.json",
        "white-model.json",
        "environment.png",
        "tree.json",
        "tree-layout.json",
        "tree-yellow-texture.png",
        "tree-green-texture.png",
        "flower.json",
        "flower-layout.json",
        "sign-blue.json",
        "sign-blue-layout.json",
        "hydrant.json",
        "hydrant-layout.json",
        "decorations.json",
      ]);
      this.dealBuilding(datas["HX.json"]);
    },
    dealBuilding(building) {
      building.name = "building";
      this.buildingList = building.children.filter(b => b !== building.getObjectByName('GROUND_LIGHT'))
      this.player.scene.add(building);
    },
    drawLine() {
      let material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      let geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(50, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, 50, 0));
      geometry.vertices.push(new THREE.Vector3(0, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, 0, 50));
      let line = new THREE.Line(geometry, material);
      player.scene.add(line);
    },
    mousemove(event) {
      let container = document.getElementById("hx_container");
      const coord = {
        x:event.clientX - container.offsetLeft, y:event.clientY - container.offsetTop
      }
      const mouse = {
        x: (coord.x / this.player.width) * 2 - 1,
        y: -(coord.y / this.player.height) * 2 + 1
      }
      const els = this.player.findInteract(mouse, this.buildingList)
      console.log(els)
    },
    mousedown(event) {
      // 用于判断是否鼠标点击都拖动再放开
      this.mousedownPos = { x: event.clientX, y: event.clientY };
    },
    mouseup(event) {
      if (
        event.clientX !== this.mousedownPos.x ||
        event.clientY !== this.mousedownPos.y
      ) {
        return;
      }
      console.log(player.camera);
      console.log(player.controls);
    },
  },
};
</script>

<style>
#hx_container {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>