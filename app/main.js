import ItemsController from "./Controllers/ItemsController.js";
import ListsController from "./Controllers/ListsController.js";

class App {
  listsController = new ListsController();
  itemsController = new ItemsController();
}

window["app"] = new App();
