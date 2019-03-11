/**
 * Created by lgw on 2019/3/4.
 */

import {observable, action} from 'mobx';
import axios from 'axios';
import {useState} from "react";

class BackMainStore {
    constructor() {

    }




}



// const AAA = props => {
//
//     const [a, setA ] = useState(0);
//
//     const [a, doSomting] = useAAAA();
//
//     const onClickHandle = () => setA(1);
//
//     return <div onClick={onClickHandle}>{a}</div>
// }
//
// const CCCCC = props => {
//
//     const [a, setA ] = useState(0);
//
//     const [a, doSomting] = useAAAA();
//
//     const onClickHandle = () => setA(1);
//
//     return <div onClick={onClickHandle}>{a}</div>
// }
//
// const useAAAA = () => {
//
//     let c= 0;
//
//     const [a, setA ] = useState(0);
//
//     const doSomting = () => {
//         axios.get('sss').then((data) => {setA(data)})
//     }
//
//     return [a, doSomting];
// }

export const backMainStore = new BackMainStore();