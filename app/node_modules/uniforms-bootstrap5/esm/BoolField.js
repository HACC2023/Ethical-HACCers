import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField } from 'uniforms';
import wrapField from './wrapField';
function Bool(_a) {
    var { onChange } = _a, props = __rest(_a, ["onChange"]);
    const { disabled, error, inline, inputClassName, inputRef, label, labelBefore, name, readOnly, value, } = props;
    return wrapField(Object.assign(Object.assign({}, props), { label: labelBefore, value: props.value }), React.createElement("div", { className: classnames(inputClassName, 'form-check', {
            'text-danger': error,
            'text-success': !error && props.changed,
            'form-check-inline': inline,
        }) },
        React.createElement("input", { checked: value || false, className: "form-check-input", disabled: disabled, id: props.id, name: name, onChange: () => {
                if (!readOnly) {
                    onChange(!value);
                }
            }, ref: inputRef, type: "checkbox" }),
        React.createElement("label", { htmlFor: props.id, className: "form-check-label" }, label)));
}
export default connectField(Bool, { kind: 'leaf' });
