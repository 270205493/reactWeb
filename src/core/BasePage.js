
"use strict";

import React from 'react';
import { Provider } from 'mobx-react';
// import {ErrorBoundary} from "@ddxx/butterfly/lib/core/ErrorBoundary";


/**
 * 远程加载基础模块定义实现，
 * 通过AsyncComponent加载和传递配置的参数，参数定义参考conf文件夹下说明文档
 * 传递此模块需要的store
 * 使用方式如下
 *
 * @baseWidget({store1,store2})
 * @inject('store1')
 * @inject('store2')
 * @observer
 * export default class Man extends React.Component {
 *
 * }
 *
 * 注意 baseWidget inject observer 的顺序不能调整
 *
 * @param stores 此模块需要的store，参数定义为  {store:store}
 */
export const basePage = stores => (
    Target => (
        class BaseWidget extends React.Component {

            constructor() {
                super();

                this.targetRef = React.createRef();

                this.loadSwitchIds();
            }


            componentDidMount() {

            }

            componentWillUnmount() {

            }

            /**
             * 加载本模块下需要切换数据源的指标ID数组，通过模块id,
             * 加载完成调用模块的 update 方法
             */
            loadSwitchIds = () => {

            };

            render() {
                const { params } = this.props;
                return (
                    <Provider {...stores}>
                        <Target  ref={ ref => this.target = ref ?  ref.wrappedInstance : ref } params = { params }/>
                    </Provider>
                )
            }
        }
    )
)