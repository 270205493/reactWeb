"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const BasePage_1 = require("../../core/BasePage");
const TsTestStore_1 = require("./TsTestStore");
const mobx_react_1 = require("mobx-react");
let TsTest = class TsTest extends React.Component {
    constructor() {
        super(React.Component);
    }
    componentDidMount() {
        const pp = this.props;
        const tsTestStore = pp.tsTestStore;
        tsTestStore.init();
    }
    render() {
        const pps = this.props;
        const store = pps.tsTestStore;
        const num1 = 12;
        const bo = true;
        const str = store.str;
        const arr = [1, 2, 3];
        const list = [1, 2, 3];
        const x = ['李雷', 30];
        return <div>测试typescript
            <div>{num1}</div>
            <div>boo:{String(bo)}</div>
            <div>{str}</div>
            <div>{arr[0]}</div>
            <div>{list}</div>
            <div>{x[0]}:年龄-{x[1]}</div>
        </div>;
    }
};
TsTest = __decorate([
    BasePage_1.basePage({ tsTestStore: TsTestStore_1.tsTestStore }),
    mobx_react_1.inject("tsTestStore"),
    mobx_react_1.observer
], TsTest);
exports.TsTest = TsTest;
