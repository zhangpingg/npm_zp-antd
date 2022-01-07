export var IfElseComponent = function (props) {
    if (props.checked) {
        return props.if;
    }
    return props.else;
};
export var ConditionComponent = function (props) {
    if (!props.isShow) {
        return null;
    }
    return props.children;
};
export var SwitchComponent = function (props) {
    if (!Array.isArray(props.children)) {
        return null;
    }
    if (props.children.length <= props.index) {
        return null;
    }
    return props.children[props.index];
};
//# sourceMappingURL=condition-component.js.map