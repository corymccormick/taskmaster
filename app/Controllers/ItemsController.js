import { itemsService } from "../Services/ItemsService.js";
import { saveState } from "../Utils/LocalStorage.js";


//Public
export default class ItemsController {

  addItem(listId) {
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);
    let createItem = {
      description: form['description'].value,
      listId: listId,
    }
    itemsService.addItem(createItem)
    // @ts-ignore
    form.reset()
    saveState()

  }

  deleteItem(id) {
    var result = confirm("Delete");
    if (result == true) {
      itemsService.deleteItem(id)
    }
  }
}
