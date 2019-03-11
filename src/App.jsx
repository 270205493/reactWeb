/**
 * Created by lgw on 2018/11/21.
 */

import React from 'react';
import { Provider } from 'mobx-react';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {BrowserRouter,Route} from 'react-router-dom';
import { Main } from './core/Main';
import {appStore} from './core/AppStore';

export class App extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <Provider appStore={appStore}>
                <LocaleProvider locale={zh_CN}>
                    <BrowserRouter>
                        <Route path="/" component={Main} />
                    </BrowserRouter>
                </LocaleProvider>
            </Provider>
        )
    }

}
