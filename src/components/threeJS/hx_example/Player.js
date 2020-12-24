import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import "@public/MapControls";

const objectLoader = new THREE.ObjectLoader();
const textureLoader = new THREE.TextureLoader()
// const jsonLoader = {
// 	async load(url, callback) {
// 		const response = await fetch(url);
// 		const json = await response.json()
// 		callback(objectLoader.parse(json))
// 	}
// }
const URL_BASE = '/hx_model/'
export default class Player {
	constructor(width = 1920, height = 1080) {
		this.width = width
		this.height = height
		this.renderer = new THREE.WebGLRenderer({
			antialias: true, //抗锯齿
			alpha: true, //透明度
			logarithmicDepthBuffer: false //对数深度缓存
		}); // 渲染器
		this.renderer.shadowMap.enabled = true; //阴影贴图
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.raycaster = new THREE.Raycaster(); //射线投射器
		this.mouse = new THREE.Vector2(); // 二维向量
		this.scene = new THREE.Scene(); // 创建场景
		this.camera = new THREE.PerspectiveCamera(
			30, //视野角度
			width / height, //长宽比
			1, //近截面
			10000 //远截面
		); // 创建摄像机
	}
	init(dom) {
		this.setSize(this.width, this.height);
		this.scene.background = new THREE.Color(0xcce0ff);
		this.controls = new THREE.MapControls(this.camera, this.renderer.domElement);
		this.attach(dom);
		// this.camera.lookAt(0, 0, 0);
	}
	animate() {
		TWEEN.update()
		this.renderer.render(this.scene, this.camera);
	}
	play() {
		this.renderer.setAnimationLoop(this.animate.bind(this));
	}
	stop() {
		this.animate()
		this.renderer.setAnimationLoop(null);
	}
	setSize(width, height) {
		this.width = width
		this.height = height

		if (this.camera) {
			this.camera.aspect = width / height;
			this.camera.updateProjectionMatrix();
		}

		if (this.renderer) {
			this.renderer.setSize(width, height);
			const context = this.renderer.getContext()
			this.renderer.setViewport(0, 0, context.drawingBufferWidth, context.drawingBufferHeight);
		}

		// if (this.labelRenderer) {
		//   this.labelRenderer.setSize(width, height);
		// }
	}
	attach(dom) {
		dom.appendChild(this.renderer.domElement)
	}
	async loadFiles(urls) {
		const resList = await Promise.all(urls.map(url => this._load(url, url.endsWith('.json') ? objectLoader : textureLoader)))
		return resList.reduce((obj, item, i) => (obj[urls[i]] = item, obj), {})
	}

	_load(filename, loader) {
		return new Promise((resolve) => {
			loader.load(URL_BASE + filename, content => {
				resolve(content)
			})
		})
	}

	findInteract(coord, els) {
    const mouse = this.mouse
    const raycaster = this.raycaster
    mouse.x = coord.x
    mouse.y = coord.y
    raycaster.setFromCamera(mouse, this.camera)

    return raycaster.intersectObjects(els, true)
  }
}