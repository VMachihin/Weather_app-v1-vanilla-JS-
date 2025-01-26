export default class Section {
	constructor(renderer, containerSelector) {
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	}

	renderCards(cards) {
		cards.forEach((item) => {
			const card = this._renderer(item);
			this._container.append(card);
		});
	}
}
