export default class ItemList {
    static readJson() {
        let shopItems = require('../data/shopitems.json');
        return shopItems;
    }
}
