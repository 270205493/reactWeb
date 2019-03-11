import {observable, action} from 'mobx';
import axios from 'axios';

class TsTestStore{

    @observable str:string="字符串";

    constructor(){

    }

    @action init(){
        let o:testObj = {size:10,label:"size:10"};
        this.printLabel(o);
    }

    printLabel(labelObj:testObj) {

        alert(labelObj.label);
    }


}
interface testObj {
    label?:string,
    size:number
}


export const tsTestStore = new TsTestStore();