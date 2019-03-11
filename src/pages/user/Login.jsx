/**
 * Created by lgw on 2018/11/22.
 */

import React from 'react';
import {inject, observer} from 'mobx-react';
import { basePage } from '../../core/BasePage';
import { loginStore } from './LoginStore';
import {LoginViewForm} from './view/LoginView';
import {RegisterView} from './view/RegisterView';
import {ForgetView} from  './view/ForgetView';
import './Login.scss';

@basePage({loginStore})
@inject('loginStore')
@observer
export class Login extends React.Component {

    componentDidMount(){

    }

    render() {
        const { loginStore } = this.props;
        const { loginPage, registerPage, forgetPage} = loginStore;
        return (
            <div className='login_container'>
                {
                    loginPage?<LoginViewForm/>:null
                }
                {
                    registerPage?<RegisterView/>:null
                }
                {
                    forgetPage?<ForgetView/>:null
                }
            </div>

    )
    }

    constructor() {
        super();
    }


    componentDidMount() {

    }

}