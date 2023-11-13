import React from 'react';
import { connectField } from 'uniforms';
import AutoField from './AutoField';
import ListDelField from './ListDelField';
function ListItem({ children = React.createElement(AutoField, { className: "col-11", label: null, name: "" }), removeIcon, }) {
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-1" },
            React.createElement(ListDelField, { name: "", removeIcon: removeIcon })),
        children));
}
export default connectField(ListItem, {
    initialValue: false,
});
