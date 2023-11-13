import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
import gridClassName from './gridClassName';
function SubmitField(_a) {
    var { className, disabled, inputClassName, inputRef, readOnly, value, wrapClassName } = _a, props = __rest(_a, ["className", "disabled", "inputClassName", "inputRef", "readOnly", "value", "wrapClassName"]);
    const { error, state: anyState } = useForm();
    const state = anyState;
    const hasWrap = !!(state.grid || wrapClassName);
    const blockInput = (React.createElement("input", Object.assign({ className: inputClassName, disabled: disabled === undefined ? !!(error || state.disabled) : disabled, readOnly: readOnly, ref: inputRef, type: "submit" }, (value ? { value } : {}))));
    return (React.createElement("div", Object.assign({ className: classnames(className, {
            'is-invalid': error,
            row: state.grid,
        }) }, filterDOMProps(props)),
        hasWrap && (React.createElement("span", { className: classnames('col-form-label', gridClassName(state.grid, 'label')) }, "\u00A0")),
        hasWrap && (React.createElement("div", { className: classnames(wrapClassName, gridClassName(state.grid, 'input')) }, blockInput)),
        !hasWrap && blockInput));
}
SubmitField.defaultProps = { inputClassName: 'btn btn-primary' };
export default SubmitField;
