/**
 * Created by lgw on 2018/11/22.
 */

import {observable, action} from 'mobx';
import axios from 'axios';

class LoginStore {
    //默认登陆页面
    @observable loginPage = true;
    //注册页面
    @observable registerPage = false;
    //修改密码页面
    @observable forgetPage = false;
    //后台菜单
    @observable isLogin = false;
    constructor() {

    }

    @action login=({name,password})=>{
        const url = `/examination/user/login`;
        axios.post(url,{
            loginName: name,
            passWd: password
        }).then(response=>{
            const result = response.data;
            if(result && result.indexOf('登录成功')!=-1){
                this.isLogin = true;
            }
        })
    }

    @action gotoPage(param){
        this.loginPage = false;
        this.registerPage = false;
        this.forgetPage = false;
        if(param == "login"){
            this.loginPage = true;
        }else if(param == "register"){
            this.registerPage = true;
        }else if(param == "forget"){
            this.forgetPage = true;
        }
    }
}

export const loginStore = new LoginStore();