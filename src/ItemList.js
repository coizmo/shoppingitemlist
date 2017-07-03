export default class ItemList {
    static readJson() {
        let shopItems = require('../data/shopitems.json');
        return shopItems;
    }

    static printIfContainKeyword(targetDocumentID, keyword) {
        let itemList = ItemList.readJson();
        if (itemList != null) {
            let containsItems = itemList.items.filter(item => item.description.indexOf(keyword) !== -1);
            ItemList.printList(targetDocumentID, containsItems);
        }
    }

    static printIfExpensively(targetDocumentID, price) {
        let itemList = ItemList.readJson();
        if (itemList != null) {
            let reasonablyItems = itemList.items.filter(item => item.price > price);
            ItemList.printList(targetDocumentID, reasonablyItems);
        }
    }

    static printAll(targetDocumentID) {
        let itemList = ItemList.readJson();
        if (itemList != null) {
            ItemList.printList(targetDocumentID, itemList.items);
        }
    }

    static printList(targetDocumentID, items) {
        let str = '';
        str += '<table>';
        items.forEach(shopitem => {
            str += '<tr>';
            str += '<td>' + shopitem.name + '</td>';
            str += '<td>' + shopitem.description + '</td>';
            str += '<td>' + shopitem.price + '</td>';
            str += '</tr>';
        })
        str += '</table>';

        let targetDocument = document.getElementById(targetDocumentID);
        targetDocument.innerHTML=str;
    }
}
