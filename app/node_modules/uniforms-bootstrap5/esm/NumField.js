import classnames from 'classnames';
import React from 'react';
import { connectField } from 'uniforms';
import wrapField from './wrapField';
function Num(props) {
    var _a;
    return wrapField(props, React.createElement("input", { className: classnames(props.inputClassName, 'form-control', {
            'is-invalid': props.error,
            'is-valid': !props.error && props.changed,
        }), disabled: props.disabled, id: props.id, max: props.max, min: props.min, name: props.name, onChange: event => {
            const parse = props.decimal ? parseFloat : parseInt;
            const value = parse(event.target.value);
            props.onChange(isNaN(value) ? undefined : value);
        }, placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, step: props.step || (props.decimal ? 0.01 : 1), type: "number", value: (_a = props.value) !== null && _a !== void 0 ? _a : '' }));
}
export default connectField(Num, { kind: 'leaf' });
