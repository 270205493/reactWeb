"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
class TsTestStore {
    constructor() {
        this.str = "字符串";
    }
    init() {
        let o = { size: 10, label: "size:10" };
        this.printLabel(o);
    }
    printLabel(labelObj) {
        alert(labelObj.label);
    }
}
__decorate([
    mobx_1.observable
], TsTestStore.prototype, "str", void 0);
__decorate([
    mobx_1.action
], TsTestStore.prototype, "init", null);
exports.tsTestStore = new TsTestStore();
