import MachineController from "./controllers/machineController.js";

class App {
  constructor() {
    this.machineController = new MachineController();
  }
}

window["app"] = new App();
