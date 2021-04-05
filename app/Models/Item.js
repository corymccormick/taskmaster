import { generateId } from '../Utils/GenerateId.js'
export default class Item {
  constructor(description, listId, id = generateId()) {
    this.id = id
    this.description = description
    this.listId = listId
    // checkboxes checked
    this.complete = false

  }

  get Template() {
    return `
    <div class="form-check">
    <li>
    <input class="form-check-input" type="checkbox" value="${this.complete}" id="" checked>
    <label class="form-check-label">
     ${this.description}
     </label>
     <i class="fas fa-times ml-2" onclick="app.itemsController.deleteItem('${this.id}')"></i>
     </div>
    </li>
    `
  }
}

