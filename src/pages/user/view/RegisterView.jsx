/**
 * Created by lgw on 2018/11/22.
 */

import React from 'react';
import {inject, observer} from 'mobx-react';

@inject('loginStore')
@observer
export class RegisterView extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }


    render() {

        return (
            <div>
                注册页面
            </div>
        )
    }

}