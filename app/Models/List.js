import { generateId } from '../Utils/GenerateId.js'
import { ProxyState } from '../AppState.js'

export default class List {
  constructor(title, quantity, id = generateId()) {
    this.id = id
    this.title = title
    this.quantity = quantity
  }

  get Template() {
    return `
     <div class="col-3 d-flex mt-5 mb-3">
    <div class="card shadow">
    <div class="card-header card-title text-center text-light bg-success m-0 p-3">
    <i class="fas fa-times text-dark" onclick="app.listsController.deleteList('${this.id}')"></i> 
     <h4>${this.title}</h4>
     </div>
    <div class="card-body">
    <div class="p-1">
    <ul class="a">
    ${this.Items}
    </ul>
    </div>
    </div>
            <form class="d-flex p-2" onsubmit="app.itemsController.addItem('${this.id}')">
            <input type="text" name="description" class="form-control" placeholder="Add Item...."
                   aria-describedby="helpId" minlength="3" maxlength="50">
            <button type="submit" class="btn btn-success ml-2" title='add item'><i
                    class="fas fa-plus"></i></button>
        </form>
    </div>
  </div>
        </div>
    </div>
  </div>
    `
  }
  get Items() {
    let it = ProxyState.items.filter(i => i.listId === this.id)
    let template = ''
    it.forEach(i => template += i.Template)
    return template
  }

}

