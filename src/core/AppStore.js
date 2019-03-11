/**
 * Created by lgw on 2018/11/21.
 */
"use strict";

import {observable, action} from 'mobx';
import axios from 'axios';

class AppStore {
    //后台菜单
    @observable isLogin = false;
    constructor() {

    }

    @action setIsLogin=(boo)=>{
        this.isLogin = boo;
    }
}

export const appStore = new AppStore();