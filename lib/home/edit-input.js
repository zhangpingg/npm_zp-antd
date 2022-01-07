import React, { useState, useCallback } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined } from '@ant-design/icons';
import { IfElseComponent } from '../components/condition-component';
import './style.scss';
export var EditInput = function (props) {
    var _a = props.placeholder, placeholder = _a === void 0 ? '请输入' : _a, _b = props.emptyText, emptyText = _b === void 0 ? '无' : _b, _c = props.power, power = _c === void 0 ? true : _c;
    var _d = useState(false), isEdit = _d[0], setIsEdit = _d[1];
    var _e = useState(props.value), value = _e[0], setValue = _e[1];
    /** 光标离开事件 */
    var onBlur = useCallback(function () {
        if (!value || value === props.value) {
            setValue(props.value);
            return;
        }
        props.onSave(value);
    }, [value, props.value]);
    /** 无权限时 */
    if (!power) {
        return React.createElement("p", null, value);
    }
    return (React.createElement("div", { className: 'EI' },
        React.createElement(IfElseComponent, { checked: isEdit, if: (React.createElement(Input, { autoFocus: true, allowClear: true, placeholder: placeholder, value: value, onChange: function (e) {
                    var _a;
                    setValue((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value);
                }, onBlur: function () {
                    setIsEdit(false);
                    onBlur();
                }, onPressEnter: function () {
                    setIsEdit(false);
                    onBlur();
                } })), else: (React.createElement("div", { className: 'EI-content', onClick: function () { setIsEdit(true); } },
                value || emptyText,
                React.createElement(EditOutlined, { className: 'EI-content-icon' }))) })));
};
//# sourceMappingURL=edit-input.js.map