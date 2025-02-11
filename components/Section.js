export default class Section {
  constructor(renderFn, rootSelector) {
    this._renderFn = renderFn;
    this._root = document.querySelector(rootSelector);
  }

  renderCards(cards) {
    cards.forEach((item) => {
      const card = this._renderFn(item);
      this._root.append(card);
    });
  }
}
