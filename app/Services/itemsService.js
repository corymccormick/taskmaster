import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import { saveState } from "../Utils/LocalStorage.js";

class ItemsService {
  deleteItem(id) {
    ProxyState.items = ProxyState.items.filter(i => i.id != id)
    saveState()
  }


  addItem(newItem) {
    ProxyState.items = [...ProxyState.items, new Item(newItem.description, newItem.listId)]
    saveState()
  }
}

export const itemsService = new ItemsService();
