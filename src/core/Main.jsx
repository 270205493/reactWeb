/**
 * Created by lgw on 2018/11/21.
 */

import React from 'react';
import {inject, observer} from 'mobx-react';
import { Login } from '../pages/user/Login';
import { BackMain } from '../pages/backMain/BackMain';
import { TsTest }from '../pages/ts/TsTest';

@inject('appStore')
@observer
export class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {appStore} = this.props;
        const {isLogin} = appStore;
        return (
            <div>
                {
                    !isLogin?<Login />:<TsTest/>
                }
            </div>
        )
    }


    componentDidMount() {

    }

}