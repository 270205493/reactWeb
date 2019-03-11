/**
 * Created by lgw on 2018/11/22.
 */

import React from 'react';
import {autorun} from 'mobx';
import {inject, observer} from 'mobx-react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

@inject('loginStore')
@inject('appStore')
@observer
class LoginView extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        autorun(() => {
            this.isLogin();
        })
    }

    isLogin = () =>{
        const {appStore,loginStore} = this.props;
        const {isLogin} = loginStore;
        appStore.setIsLogin(isLogin);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {loginStore} = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                loginStore.login(values);
            }
        });

    }


    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>自动登录</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <a href="">注册</a>
                    </FormItem>
                </Form>
            </div>
        )
    }

}

export const LoginViewForm = Form.create()(LoginView);