import * as PIXI from 'pixi.js';
import { Images } from './loaders/images';
import QweImg from './assets/images/qwe.png';
import loadResources from './loaders';

// noinspection JSValidateTypes
/** @type {PIXI.WebGLRenderer | PIXI.CanvasRenderer} */
const renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.view);

const stage = new PIXI.Container();

const animate = () => {
	requestAnimationFrame(animate);
	renderer.render(stage);
};

(async () => {
	await loadResources();
	const QweObj = new PIXI.Sprite(Images[QweImg]);
	QweObj.x = window.innerWidth / 2;
	QweObj.y = window.innerHeight / 2;
	QweObj.anchor.set(0.5);
	QweObj.width = window.innerWidth;
	QweObj.height = window.innerHeight;
	stage.addChild(QweObj);
	animate();
})();
