import classnames from 'classnames';
import React from 'react';
import { connectField } from 'uniforms';
import wrapField from './wrapField';
function LongText(props) {
    var _a;
    return wrapField(props, React.createElement("textarea", { className: classnames(props.inputClassName, 'form-control', {
            'is-invalid': props.error,
            'is-valid': !props.error && props.changed,
        }), disabled: props.disabled, id: props.id, name: props.name, onChange: event => props.onChange(event.target.value), placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, rows: props.rows, value: (_a = props.value) !== null && _a !== void 0 ? _a : '' }));
}
export default connectField(LongText, { kind: 'leaf' });
