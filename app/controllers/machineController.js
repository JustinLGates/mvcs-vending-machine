import MachineService from "../services/machineService.js";
let machineService = new MachineService();
function _draw() {
  document.getElementById(
    "cash"
  ).innerText = machineService.getCustomerCash().toFixed(2).toString();
}
export default class MachineController {
  constructor() {
    _draw();
  }
  buyCandy(name) {
    machineService.buyCandy(name);
    _draw();
  }
}
