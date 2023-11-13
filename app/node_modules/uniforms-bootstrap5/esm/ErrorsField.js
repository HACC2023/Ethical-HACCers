import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
function ErrorsField(_a) {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    const { error, schema } = useForm();
    return !error && !children ? null : (React.createElement("div", Object.assign({ className: classnames('card border-danger mb-3 text-danger', className) }, filterDOMProps(props)),
        React.createElement("div", { className: "card-body" },
            children,
            schema.getErrorMessages(error).map((message, index) => (React.createElement("div", { key: index, className: "disabled" }, message))))));
}
export default ErrorsField;
