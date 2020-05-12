import MachineService from "../services/machineService.js";
let machineService = new MachineService();

export default class MachineController {
  constructor() {}
  buyCandy(name) {
    machineService.buyCandy(name);
  }
}
