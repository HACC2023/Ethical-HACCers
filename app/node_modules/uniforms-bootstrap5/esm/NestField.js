import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import AutoField from './AutoField';
function Nest(_a) {
    var { children, className, error, errorMessage, fields, itemProps, label, showInlineError } = _a, props = __rest(_a, ["children", "className", "error", "errorMessage", "fields", "itemProps", "label", "showInlineError"]);
    return (React.createElement("div", Object.assign({ className: classnames(className, { 'has-error': error }) }, filterDOMProps(props)),
        label && React.createElement("label", null, label),
        !!(error && showInlineError) && (React.createElement("span", { className: "text-danger" }, errorMessage)),
        children ||
            fields.map(field => (React.createElement(AutoField, Object.assign({ key: field, name: field }, itemProps))))));
}
export default connectField(Nest);
