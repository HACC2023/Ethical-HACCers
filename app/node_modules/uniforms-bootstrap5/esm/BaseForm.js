import classnames from 'classnames';
import omit from 'lodash/omit';
import { BaseForm } from 'uniforms';
function Bootstrap5(parent) {
    class _ extends parent {
        getContextState() {
            return Object.assign(Object.assign({}, super.getContextState()), { grid: this.props.grid });
        }
        getNativeFormProps() {
            const error = this.getContextError();
            const props = super.getNativeFormProps();
            return Object.assign(Object.assign({}, omit(props, ['grid'])), { className: classnames({ error }, props.className) });
        }
    }
    _.Bootstrap5 = Bootstrap5;
    _.displayName = `Bootstrap5${parent.displayName}`;
    return _;
}
export default Bootstrap5(BaseForm);
