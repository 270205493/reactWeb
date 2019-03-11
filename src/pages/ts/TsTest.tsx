import * as React from 'react';
import * as ReactDom from 'react-dom';
import { basePage} from '../../core/BasePage';
import {tsTestStore} from './TsTestStore';
import {inject, observer} from "mobx-react";

@basePage({tsTestStore})
@inject("tsTestStore")
@observer
export class TsTest extends React.Component{

    constructor(){
        super(React.Component);
    }

    componentDidMount(){
        const pp:any = this.props;
        const tsTestStore:any = pp.tsTestStore;
        tsTestStore.init();
    }

    render(){
        const pps:any = this.props;
        const store:any = pps.tsTestStore;
        const num1:number = 12;
        const bo:boolean = true;
        const str:string = store.str;
        const arr:number[] = [1,2,3];
        const list:Array<number> = [1,2,3];
        const x:[string,number] = ['李雷',30];
        return <div>测试typescript
            <div>{num1}</div>
            <div>boo:{String(bo)}</div>
            <div>{str}</div>
            <div>{arr[0]}</div>
            <div>{list}</div>
            <div>{x[0]}:年龄-{x[1]}</div>
        </div>
    }

}
