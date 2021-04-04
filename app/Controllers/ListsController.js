import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";


//Private
function _draw() {
  let lists = ProxyState.lists;
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("app").innerHTML = template
}

//Public
export default class ListsController {

  constructor() {
    ProxyState.on("lists", _draw);
    ProxyState.on("items", _draw);
    _draw()
    loadState()
  }

  addList() {
    window.event.preventDefault()
    let form = window.event.target
    let createList = {
      title: form['title'].value,
    }
    listsService.addList(createList)
    // @ts-ignore
    form.reset()
  }

  deleteList(id) {
    listsService.deleteList(id)
  }
}


