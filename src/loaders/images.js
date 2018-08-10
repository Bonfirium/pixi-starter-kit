import * as PIXI from 'pixi.js';
import BaseLoader from './_base';

/**
 *  ## USAGE
 * `import Images from './loaders/image';`
 * `import SomeImage from './assets/images/someImage.png';`
 * `new Sprite(Images[SomeImage]);`
 * @type {Object.<String, PIXI.Texture>}
 */
export const Images = {};

export default class ImagesLoader extends BaseLoader {

	constructor() {
		super();
		this.imagesToLoad = [
			require('../assets/images/qwe.png'),
		];
		this.imagesToLoad.forEach((image) => {
			// resource id is a same as path to this image
			PIXI.loader.add(image, image);
		});
	}

	/** @inheritDoc BaseLoader#onLoad */
	onLoad(_, resources) {
		this.imagesToLoad.forEach((image) => {
			Images[image] = resources[image].texture;
		});
	}

}
