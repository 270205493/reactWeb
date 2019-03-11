/**
 * Created by lgw on 2019/3/4.
 */

import React, {useState,useEffect} from 'react';
import {inject, observer} from 'mobx-react';
import { basePage} from '../../core/BasePage';
import { backMainStore } from './BackMainStore';

@basePage({backMainStore})
@inject("backMainStore")
@observer
export class BackMain extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {

    }



    render() {
        const {backMainStore} = this.props;

        return (
            <div>
                后台界面
                {
                    <TestHook />
                }

            </div>
        )
    }

}

const TestHook = () =>{
    const [count,setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return(
        <div>
            <p>you click {count} times</p>
            <button onClick={()=>setCount(count+1)}>click it</button>
        </div>
    )

}