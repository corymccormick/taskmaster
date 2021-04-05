import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Item from "../Models/Item.js";


export function saveState() {
  localStorage.setItem('listcard', JSON.stringify({
    lists: ProxyState.lists,
    items: ProxyState.items
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('listcard'))


  if (data) {
    if (data.hasOwnProperty('lists')) {
      ProxyState.lists = data.lists.map(list => new List(list.title, list.color, list.addItem, list.id));
    }
    if (data.hasOwnProperty('items')) {
      ProxyState.items = data.items.map(item => new Item(item.description, item.listId, item.id));
    }
  }
}
