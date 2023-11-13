"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uniforms_1 = require("uniforms");
function HiddenField(_a) {
    var _b;
    var { value } = _a, rawProps = tslib_1.__rest(_a, ["value"]);
    const props = uniforms_1.useField(rawProps.name, rawProps, { initialValue: false })[0];
    react_1.useEffect(() => {
        if (value !== undefined && value !== props.value) {
            props.onChange(value);
        }
    });
    return props.noDOM ? null : (react_1.default.createElement("input", Object.assign({ disabled: props.disabled, name: props.name, readOnly: props.readOnly, ref: props.inputRef, type: "hidden", value: (_b = value !== null && value !== void 0 ? value : props.value) !== null && _b !== void 0 ? _b : '' }, uniforms_1.filterDOMProps(props))));
}
exports.default = HiddenField;
