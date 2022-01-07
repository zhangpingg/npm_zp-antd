import React, { useCallback } from 'react';
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';
import 'antd/dist/antd.css';
export var AntdForm = function () {
    var form = Form.useForm()[0];
    var rules = {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
    };
    // 提交表单
    var submitForm = useCallback(function (data) {
        console.log(data);
    }, []);
    // 重置表单
    var resetForm = useCallback(function () {
        form.resetFields();
    }, [form]);
    /** 限制只能输入一位小数 */
    var limitDecimals = useCallback(function (value) {
        var reg = /^(\-)*(\d+)\.(\d).*$/;
        if (typeof value === 'string') {
            return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
        }
        else if (typeof value === 'number') {
            return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
        }
        else {
            return '';
        }
    }, []);
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u8868\u5355"),
        React.createElement(Form, { name: "basic", form: form, labelCol: { span: 4 }, wrapperCol: { span: 20 }, initialValues: {
                username: '张三',
                remember: true
            }, onFinish: submitForm },
            React.createElement(Form.Item, { label: "\u7528\u6237\u540D", name: "username", rules: rules.username },
                React.createElement(Input, null)),
            React.createElement(Form.Item, { label: "\u5BC6\u7801", name: "password", rules: rules.password },
                React.createElement(Input.Password, null)),
            React.createElement(Form.Item, { label: "\u5BC6\u7801", name: "workNum", rules: rules.password },
                React.createElement(InputNumber, { min: 0.5, step: 0.5, formatter: limitDecimals })),
            React.createElement(Form.Item, { name: "remember", valuePropName: "checked", wrapperCol: { offset: 4, span: 20 } },
                React.createElement(Checkbox, null, "\u8BB0\u4F4F\u5BC6\u7801")),
            React.createElement(Form.Item, { wrapperCol: { offset: 4, span: 20 } },
                React.createElement(Button, { type: "primary", htmlType: "submit" }, "\u63D0\u4EA4"),
                React.createElement(Button, { htmlType: "button", onClick: resetForm }, "\u91CD\u7F6E"))),
        React.createElement("hr", null)));
};
//# sourceMappingURL=form.js.map