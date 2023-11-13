"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopSameDomainWindow = exports.findParent = exports.getParents = exports.closest = exports.getTagName = exports.getMapContainer = exports.getScrollbarSize = exports.isElementReadOnly = exports.isHammerheadAttr = exports.isElementFocusable = exports.isShadowRoot = exports.isShadowUIElement = exports.isDomElement = exports.isContentEditableElement = exports.isTextEditableElementAndEditingAllowed = exports.isTextEditableElement = exports.isTextEditableInput = exports.isWindow = exports.isDocument = exports.isHtmlElement = exports.isBodyElement = exports.isMapElement = exports.isSVGElement = exports.isOptionElement = exports.isCheckboxElement = exports.isColorInputElement = exports.isRadioButtonElement = exports.isSelectElement = exports.isLabelElement = exports.isFormElement = exports.isImgElement = exports.isAnchorElement = exports.isTextAreaElement = exports.isFileInput = exports.isButtonElement = exports.isInputElement = exports.isIframeElement = exports.isRenderedNode = exports.isTextNode = exports.isElementNode = exports.getSelectVisibleChildren = exports.getChildVisibleIndex = exports.getSelectParent = exports.isCrossDomainWindows = exports.getIframeByElement = exports.isElementInIframe = exports.isElementInDocument = exports.find = exports.findDocument = exports.getActiveElement = void 0;
exports.isDocumentElement = exports.getDocumentElement = exports.getImgMapName = exports.getNodeText = exports.isNodeEqual = exports.contains = exports.isShadowElement = exports.setElementValue = exports.getElementValue = exports.setTextAreaValue = exports.setInputValue = exports.getTextAreaValue = exports.getInputValue = exports.getChildNodesLength = exports.getChildrenLength = exports.getCommonAncestor = exports.isEditableFormElement = exports.findIframeByWindow = exports.isTopWindow = exports.isIFrameWindowInDOM = exports.remove = exports.getFocusableParent = exports.getElementDescription = exports.isTheSameNode = exports.getElementIndexInParent = exports.isOptionGroupElement = exports.isElementContainsNode = exports.isEditableElement = exports.blocksImplicitSubmission = exports.getTextareaPositionByLineAndOffset = exports.getTextareaLineNumberByPosition = exports.getTextareaIndentInLine = exports.containsElement = exports.getTabIndexAttributeIntValue = exports.getFocusableElements = exports.getParentExceptShadowRoot = void 0;
const hammerhead_1 = __importDefault(require("../deps/hammerhead"));
const arrayUtils = __importStar(require("./array"));
const browserUtils = hammerhead_1.default.utils.browser;
const nativeMethods = hammerhead_1.default.nativeMethods;
// NOTE: We have to retrieve styleUtils.get from hammerhead
// to avoid circular dependencies between domUtils and styleUtils
const getElementStyleProperty = hammerhead_1.default.utils.style.get;
exports.getActiveElement = hammerhead_1.default.utils.dom.getActiveElement;
exports.findDocument = hammerhead_1.default.utils.dom.findDocument;
exports.find = hammerhead_1.default.utils.dom.find;
exports.isElementInDocument = hammerhead_1.default.utils.dom.isElementInDocument;
exports.isElementInIframe = hammerhead_1.default.utils.dom.isElementInIframe;
exports.getIframeByElement = hammerhead_1.default.utils.dom.getIframeByElement;
exports.isCrossDomainWindows = hammerhead_1.default.utils.dom.isCrossDomainWindows;
exports.getSelectParent = hammerhead_1.default.utils.dom.getSelectParent;
exports.getChildVisibleIndex = hammerhead_1.default.utils.dom.getChildVisibleIndex;
exports.getSelectVisibleChildren = hammerhead_1.default.utils.dom.getSelectVisibleChildren;
exports.isElementNode = hammerhead_1.default.utils.dom.isElementNode;
exports.isTextNode = hammerhead_1.default.utils.dom.isTextNode;
exports.isRenderedNode = hammerhead_1.default.utils.dom.isRenderedNode;
exports.isIframeElement = hammerhead_1.default.utils.dom.isIframeElement;
exports.isInputElement = hammerhead_1.default.utils.dom.isInputElement;
exports.isButtonElement = hammerhead_1.default.utils.dom.isButtonElement;
exports.isFileInput = hammerhead_1.default.utils.dom.isFileInput;
exports.isTextAreaElement = hammerhead_1.default.utils.dom.isTextAreaElement;
exports.isAnchorElement = hammerhead_1.default.utils.dom.isAnchorElement;
exports.isImgElement = hammerhead_1.default.utils.dom.isImgElement;
exports.isFormElement = hammerhead_1.default.utils.dom.isFormElement;
exports.isLabelElement = hammerhead_1.default.utils.dom.isLabelElement;
exports.isSelectElement = hammerhead_1.default.utils.dom.isSelectElement;
exports.isRadioButtonElement = hammerhead_1.default.utils.dom.isRadioButtonElement;
exports.isColorInputElement = hammerhead_1.default.utils.dom.isColorInputElement;
exports.isCheckboxElement = hammerhead_1.default.utils.dom.isCheckboxElement;
exports.isOptionElement = hammerhead_1.default.utils.dom.isOptionElement;
exports.isSVGElement = hammerhead_1.default.utils.dom.isSVGElement;
exports.isMapElement = hammerhead_1.default.utils.dom.isMapElement;
exports.isBodyElement = hammerhead_1.default.utils.dom.isBodyElement;
exports.isHtmlElement = hammerhead_1.default.utils.dom.isHtmlElement;
exports.isDocument = hammerhead_1.default.utils.dom.isDocument;
exports.isWindow = hammerhead_1.default.utils.dom.isWindow;
exports.isTextEditableInput = hammerhead_1.default.utils.dom.isTextEditableInput;
exports.isTextEditableElement = hammerhead_1.default.utils.dom.isTextEditableElement;
exports.isTextEditableElementAndEditingAllowed = hammerhead_1.default.utils.dom.isTextEditableElementAndEditingAllowed;
exports.isContentEditableElement = hammerhead_1.default.utils.dom.isContentEditableElement;
exports.isDomElement = hammerhead_1.default.utils.dom.isDomElement;
exports.isShadowUIElement = hammerhead_1.default.utils.dom.isShadowUIElement;
exports.isShadowRoot = hammerhead_1.default.utils.dom.isShadowRoot;
exports.isElementFocusable = hammerhead_1.default.utils.dom.isElementFocusable;
exports.isHammerheadAttr = hammerhead_1.default.utils.dom.isHammerheadAttr;
exports.isElementReadOnly = hammerhead_1.default.utils.dom.isElementReadOnly;
exports.getScrollbarSize = hammerhead_1.default.utils.dom.getScrollbarSize;
exports.getMapContainer = hammerhead_1.default.utils.dom.getMapContainer;
exports.getTagName = hammerhead_1.default.utils.dom.getTagName;
exports.closest = hammerhead_1.default.utils.dom.closest;
exports.getParents = hammerhead_1.default.utils.dom.getParents;
exports.findParent = hammerhead_1.default.utils.dom.findParent;
exports.getTopSameDomainWindow = hammerhead_1.default.utils.dom.getTopSameDomainWindow;
exports.getParentExceptShadowRoot = hammerhead_1.default.utils.dom.getParentExceptShadowRoot;
function canFocus(element, parent, tabIndex) {
    let activeElement = null;
    if (parent.nodeType === Node.DOCUMENT_NODE)
        activeElement = nativeMethods.documentActiveElementGetter.call(parent);
    if (element === activeElement)
        return true;
    if (element.disabled)
        return false;
    if (getElementStyleProperty(element, 'display') === 'none' || getElementStyleProperty(element, 'visibility') === 'hidden')
        return false;
    if ((browserUtils.isIE || browserUtils.isAndroid) && (0, exports.isOptionElement)(element))
        return false;
    if (tabIndex !== null && tabIndex < 0)
        return false;
    return true;
}
function wrapElement(el) {
    return {
        el: el,
        skip: el.shadowRoot && el.tabIndex < 0,
        children: {},
    };
}
function buildFocusableTree(parent, sort) {
    const node = wrapElement(parent);
    parent = parent.shadowRoot || parent;
    if ((0, exports.isIframeElement)(parent))
        parent = nativeMethods.contentDocumentGetter.call(parent);
    if (parent && (parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE || parent.nodeType === Node.DOCUMENT_NODE)) {
        const elements = filterFocusableElements(parent);
        for (const el of elements) {
            const key = !sort || el.tabIndex <= 0 ? -1 : el.tabIndex;
            node.children[key] = node.children[key] || [];
            node.children[key].push(buildFocusableTree(el, sort));
        }
    }
    return node;
}
function filterFocusableElements(parent) {
    // NOTE: We don't take into account the case of embedded contentEditable
    // elements and specify the contentEditable attribute for focusable elements
    const allElements = parent.querySelectorAll('*');
    const invisibleElements = getInvisibleElements(allElements);
    const inputElementsRegExp = /^(input|button|select|textarea)$/;
    const focusableElements = [];
    let element = null;
    let tagName = null;
    let tabIndex = null;
    let needPush = false;
    for (let i = 0; i < allElements.length; i++) {
        element = allElements[i];
        tagName = (0, exports.getTagName)(element);
        tabIndex = getTabIndexAttributeIntValue(element);
        needPush = false;
        if (!canFocus(element, parent, tabIndex))
            continue;
        if (inputElementsRegExp.test(tagName))
            needPush = true;
        else if (element.shadowRoot)
            needPush = true;
        else if ((0, exports.isIframeElement)(element))
            needPush = true;
        else if ((0, exports.isAnchorElement)(element) && element.hasAttribute('href'))
            needPush = element.getAttribute('href') !== '' || !browserUtils.isIE || tabIndex !== null;
        const contentEditableAttr = element.getAttribute('contenteditable');
        if (contentEditableAttr === '' || contentEditableAttr === 'true')
            needPush = true;
        if (tabIndex !== null)
            needPush = true;
        if (needPush)
            focusableElements.push(element);
    }
    //NOTE: remove children of invisible elements
    return arrayUtils.filter(focusableElements, el => !containsElement(invisibleElements, el));
}
function flattenFocusableTree(node) {
    const result = [];
    if (!node.skip && node.el.nodeType !== Node.DOCUMENT_NODE && !(0, exports.isIframeElement)(node.el))
        result.push(node.el);
    for (const prop in node.children) {
        for (const childNode of node.children[prop])
            result.push(...flattenFocusableTree(childNode));
    }
    return result;
}
function getFocusableElements(doc, sort = false) {
    const root = buildFocusableTree(doc, sort);
    return flattenFocusableTree(root);
}
exports.getFocusableElements = getFocusableElements;
function getInvisibleElements(elements) {
    const invisibleElements = [];
    for (let i = 0; i < elements.length; i++) {
        if (getElementStyleProperty(elements[i], 'display') === 'none')
            invisibleElements.push(elements[i]);
    }
    return invisibleElements;
}
function getTabIndexAttributeIntValue(el) {
    let tabIndex = nativeMethods.getAttribute.call(el, 'tabindex');
    if (tabIndex !== null) {
        tabIndex = parseInt(tabIndex, 10);
        tabIndex = isNaN(tabIndex) ? null : tabIndex;
    }
    return tabIndex;
}
exports.getTabIndexAttributeIntValue = getTabIndexAttributeIntValue;
function containsElement(elements, element) {
    if (elements.contains)
        return elements.contains(element);
    return arrayUtils.some(elements, parent => parent.contains(element));
}
exports.containsElement = containsElement;
function getTextareaIndentInLine(textarea, position) {
    const textareaValue = getTextAreaValue(textarea);
    if (!textareaValue)
        return 0;
    const topPart = textareaValue.substring(0, position);
    const linePosition = topPart.lastIndexOf('\n') === -1 ? 0 : topPart.lastIndexOf('\n') + 1;
    return position - linePosition;
}
exports.getTextareaIndentInLine = getTextareaIndentInLine;
function getTextareaLineNumberByPosition(textarea, position) {
    const textareaValue = getTextAreaValue(textarea);
    const lines = textareaValue.split('\n');
    let topPartLength = 0;
    let line = 0;
    for (let i = 0; topPartLength <= position; i++) {
        if (position <= topPartLength + lines[i].length) {
            line = i;
            break;
        }
        topPartLength += lines[i].length + 1;
    }
    return line;
}
exports.getTextareaLineNumberByPosition = getTextareaLineNumberByPosition;
function getTextareaPositionByLineAndOffset(textarea, line, offset) {
    const textareaValue = getTextAreaValue(textarea);
    const lines = textareaValue.split('\n');
    let lineIndex = 0;
    for (let i = 0; i < line; i++)
        lineIndex += lines[i].length + 1;
    return lineIndex + offset;
}
exports.getTextareaPositionByLineAndOffset = getTextareaPositionByLineAndOffset;
// NOTE: the form is also submitted on enter key press if there is only one input of certain
// types (referred to as types that block implicit submission in the HTML5 standard) on the
// form and this input is focused (http://www.w3.org/TR/html5/forms.html#implicit-submission)
function blocksImplicitSubmission(el) {
    let inputTypeRegExp = null;
    if (browserUtils.isSafari)
        inputTypeRegExp = /^(text|password|color|date|time|datetime|datetime-local|email|month|number|search|tel|url|week|image)$/i;
    else if (browserUtils.isFirefox)
        inputTypeRegExp = /^(text|password|date|time|datetime|datetime-local|email|month|number|search|tel|url|week|image)$/i;
    else if (browserUtils.isIE)
        inputTypeRegExp = /^(text|password|color|date|time|datetime|datetime-local|email|file|month|number|search|tel|url|week|image)$/i;
    else
        inputTypeRegExp = /^(text|password|datetime|email|number|search|tel|url|image)$/i;
    return inputTypeRegExp.test(el.type);
}
exports.blocksImplicitSubmission = blocksImplicitSubmission;
function isEditableElement(el, checkEditingAllowed) {
    return checkEditingAllowed ?
        (0, exports.isTextEditableElementAndEditingAllowed)(el) || (0, exports.isContentEditableElement)(el) :
        (0, exports.isTextEditableElement)(el) || (0, exports.isContentEditableElement)(el);
}
exports.isEditableElement = isEditableElement;
function isElementContainsNode(parentElement, childNode) {
    if (isTheSameNode(childNode, parentElement))
        return true;
    const childNodes = nativeMethods.nodeChildNodesGetter.call(parentElement);
    const length = getChildNodesLength(childNodes);
    for (let i = 0; i < length; i++) {
        const el = childNodes[i];
        if (!(0, exports.isShadowUIElement)(el) && isElementContainsNode(el, childNode))
            return true;
    }
    return false;
}
exports.isElementContainsNode = isElementContainsNode;
function isOptionGroupElement(element) {
    return hammerhead_1.default.utils.dom.instanceToString(element) === '[object HTMLOptGroupElement]';
}
exports.isOptionGroupElement = isOptionGroupElement;
function getElementIndexInParent(parent, child) {
    const children = parent.querySelectorAll((0, exports.getTagName)(child));
    return arrayUtils.indexOf(children, child);
}
exports.getElementIndexInParent = getElementIndexInParent;
function isTheSameNode(node1, node2) {
    //NOTE: Mozilla has not isSameNode method
    if (node1 && node2 && node1.isSameNode)
        return node1.isSameNode(node2);
    return node1 === node2;
}
exports.isTheSameNode = isTheSameNode;
function getElementDescription(el) {
    const attributes = {
        id: 'id',
        name: 'name',
        'class': 'className',
    };
    const res = [];
    res.push('<');
    res.push((0, exports.getTagName)(el));
    for (const attr in attributes) {
        if (attributes.hasOwnProperty(attr)) { //eslint-disable-line no-prototype-builtins
            const val = el[attributes[attr]];
            if (val)
                res.push(' ' + attr + '="' + val + '"');
        }
    }
    res.push('>');
    return res.join('');
}
exports.getElementDescription = getElementDescription;
function getFocusableParent(el) {
    const parents = (0, exports.getParents)(el);
    for (let i = 0; i < parents.length; i++) {
        if ((0, exports.isElementFocusable)(parents[i]))
            return parents[i];
    }
    return null;
}
exports.getFocusableParent = getFocusableParent;
function remove(el) {
    if (el && el.parentElement)
        el.parentElement.removeChild(el);
}
exports.remove = remove;
function isIFrameWindowInDOM(win) {
    //NOTE: In MS Edge, if an iframe is removed from DOM, the browser throws an exception when accessing window.top
    //and window.frameElement. Fortunately, setTimeout is set to undefined in this case.
    if (!win.setTimeout)
        return false;
    let frameElement = null;
    try {
        //NOTE: This may raise a cross-domain policy error in some browsers.
        frameElement = win.frameElement;
    }
    catch (e) {
        return !!win.top;
    }
    // NOTE: in Firefox and WebKit, frameElement is null for cross-domain iframes even if they are in the DOM.
    // But these browsers don't execute scripts in removed iframes, so we suppose that the iframe is in the DOM.
    if ((browserUtils.isFirefox || browserUtils.isWebKit) && win.top !== win && !frameElement)
        return true;
    return !!(frameElement && nativeMethods.contentDocumentGetter.call(frameElement));
}
exports.isIFrameWindowInDOM = isIFrameWindowInDOM;
function isTopWindow(win) {
    try {
        //NOTE: MS Edge throws an exception when trying to access window.top from an iframe removed from DOM
        return win.top === win;
    }
    catch (e) {
        return false;
    }
}
exports.isTopWindow = isTopWindow;
function findIframeByWindow(iframeWindow) {
    const iframes = [];
    (0, exports.find)(document, '*', elem => {
        if (elem.tagName === 'IFRAME')
            iframes.push(elem);
        if (elem.shadowRoot)
            (0, exports.find)(elem.shadowRoot, 'iframe', iframe => iframes.push(iframe));
    });
    for (let i = 0; i < iframes.length; i++) {
        if (nativeMethods.contentWindowGetter.call(iframes[i]) === iframeWindow)
            return iframes[i];
    }
    return null;
}
exports.findIframeByWindow = findIframeByWindow;
function isEditableFormElement(element) {
    return (0, exports.isTextEditableElement)(element) || (0, exports.isSelectElement)(element);
}
exports.isEditableFormElement = isEditableFormElement;
function getCommonAncestor(element1, element2) {
    if (isTheSameNode(element1, element2))
        return element1;
    const el1Parents = [element1].concat((0, exports.getParents)(element1));
    let commonAncestor = element2;
    while (commonAncestor) {
        if (arrayUtils.indexOf(el1Parents, commonAncestor) > -1)
            return commonAncestor;
        commonAncestor = nativeMethods.nodeParentNodeGetter.call(commonAncestor);
    }
    return commonAncestor;
}
exports.getCommonAncestor = getCommonAncestor;
function getChildrenLength(children) {
    return nativeMethods.htmlCollectionLengthGetter.call(children);
}
exports.getChildrenLength = getChildrenLength;
function getChildNodesLength(childNodes) {
    return nativeMethods.nodeListLengthGetter.call(childNodes);
}
exports.getChildNodesLength = getChildNodesLength;
function getInputValue(input) {
    return nativeMethods.inputValueGetter.call(input);
}
exports.getInputValue = getInputValue;
function getTextAreaValue(textArea) {
    return nativeMethods.textAreaValueGetter.call(textArea);
}
exports.getTextAreaValue = getTextAreaValue;
function setInputValue(input, value) {
    return nativeMethods.inputValueSetter.call(input, value);
}
exports.setInputValue = setInputValue;
function setTextAreaValue(textArea, value) {
    return nativeMethods.textAreaValueSetter.call(textArea, value);
}
exports.setTextAreaValue = setTextAreaValue;
function getElementValue(element) {
    if ((0, exports.isInputElement)(element))
        return getInputValue(element);
    else if ((0, exports.isTextAreaElement)(element))
        return getTextAreaValue(element);
    /*eslint-disable no-restricted-properties*/
    return element.value;
    /*eslint-enable no-restricted-properties*/
}
exports.getElementValue = getElementValue;
function setElementValue(element, value) {
    if ((0, exports.isInputElement)(element))
        return setInputValue(element, value);
    else if ((0, exports.isTextAreaElement)(element))
        return setTextAreaValue(element, value);
    /*eslint-disable no-restricted-properties*/
    element.value = value;
    /*eslint-enable no-restricted-properties*/
    return value;
}
exports.setElementValue = setElementValue;
function isShadowElement(element) {
    return element && element.getRootNode && (0, exports.findDocument)(element) !== element.getRootNode();
}
exports.isShadowElement = isShadowElement;
function contains(element, target) {
    if (!element || !target)
        return false;
    if (element.contains)
        return element.contains(target);
    return !!(0, exports.findParent)(target, true, node => node === element);
}
exports.contains = contains;
function isNodeEqual(el1, el2) {
    return el1 === el2;
}
exports.isNodeEqual = isNodeEqual;
function getNodeText(el) {
    return nativeMethods.nodeTextContentGetter.call(el);
}
exports.getNodeText = getNodeText;
function getImgMapName(img) {
    return img.useMap.substring(1);
}
exports.getImgMapName = getImgMapName;
function getDocumentElement(win) {
    return win.document.documentElement;
}
exports.getDocumentElement = getDocumentElement;
function isDocumentElement(el) {
    return el === document.documentElement;
}
exports.isDocumentElement = isDocumentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb3JlL3V0aWxzL2RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBNEM7QUFDNUMsb0RBQXNDO0FBRXRDLE1BQU0sWUFBWSxHQUFJLG9CQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUMvQyxNQUFNLGFBQWEsR0FBRyxvQkFBVSxDQUFDLGFBQWEsQ0FBQztBQUUvQywyREFBMkQ7QUFDM0QsaUVBQWlFO0FBQ2pFLE1BQU0sdUJBQXVCLEdBQUcsb0JBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUU5QyxRQUFBLGdCQUFnQixHQUF5QixvQkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFDL0UsUUFBQSxZQUFZLEdBQTZCLG9CQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7QUFDM0UsUUFBQSxJQUFJLEdBQXFDLG9CQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDbkUsUUFBQSxtQkFBbUIsR0FBc0Isb0JBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQ2xGLFFBQUEsaUJBQWlCLEdBQXdCLG9CQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRixRQUFBLGtCQUFrQixHQUF1QixvQkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7QUFDakYsUUFBQSxvQkFBb0IsR0FBcUIsb0JBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0FBQ25GLFFBQUEsZUFBZSxHQUEwQixvQkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzlFLFFBQUEsb0JB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QU8sQ0FBQyxRQUFRO1FBQ2hCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwQyxPQUFPLENBQUMsQ0FBQyxJQUFBLGtCQUFVLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBUkQsNEJBUUM7QUFFRCxTQUFnQixXQUFXLENBQUUsR0FBRyxFQUFFLEdBQUc7SUFDakMsT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDO0FBQ3ZCLENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLFdBQVcsQ0FBRSxFQUFFO0lBQzNCLE9BQU8sYUFBYSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRkQsa0NBRUM7QUFFRCxTQUFnQixhQUFhLENBQUUsR0FBRztJQUM5QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLGtCQUFrQixDQUFFLEdBQUc7SUFDbkMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUN4QyxDQUFDO0FBRkQsZ0RBRUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBRSxFQUFFO0lBQ2pDLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDM0MsQ0FBQztBQUZELDhDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhbW1lcmhlYWQgZnJvbSAnLi4vZGVwcy9oYW1tZXJoZWFkJztcbmltcG9ydCAqIGFzIGFycmF5VXRpbHMgZnJvbSAnLi9hcnJheSc7XG5cbmNvbnN0IGJyb3dzZXJVdGlscyAgPSBoYW1tZXJoZWFkLnV0aWxzLmJyb3dzZXI7XG5jb25zdCBuYXRpdmVNZXRob2RzID0gaGFtbWVyaGVhZC5uYXRpdmVNZXRob2RzO1xuXG4vLyBOT1RFOiBXZSBoYXZlIHRvIHJldHJpZXZlIHN0eWxlVXRpbHMuZ2V0IGZyb20gaGFtbWVyaGVhZFxuLy8gdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGJldHdlZW4gZG9tVXRpbHMgYW5kIHN0eWxlVXRpbHNcbmNvbnN0IGdldEVsZW1lbnRTdHlsZVByb3BlcnR5ID0gaGFtbWVyaGVhZC51dGlscy5zdHlsZS5nZXQ7XG5cbmV4cG9ydCBjb25zdCBnZXRBY3RpdmVFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmdldEFjdGl2ZUVsZW1lbnQ7XG5leHBvcnQgY29uc3QgZmluZERvY3VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5maW5kRG9jdW1lbnQ7XG5leHBvcnQgY29uc3QgZmluZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5maW5kO1xuZXhwb3J0IGNvbnN0IGlzRWxlbWVudEluRG9jdW1lbnQgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNFbGVtZW50SW5Eb2N1bWVudDtcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnRJbklmcmFtZSAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzRWxlbWVudEluSWZyYW1lO1xuZXhwb3J0IGNvbnN0IGdldElmcmFtZUJ5RWxlbWVudCAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uZ2V0SWZyYW1lQnlFbGVtZW50O1xuZXhwb3J0IGNvbnN0IGlzQ3Jvc3NEb21haW5XaW5kb3dzICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNDcm9zc0RvbWFpbldpbmRvd3M7XG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0UGFyZW50ICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5nZXRTZWxlY3RQYXJlbnQ7XG5leHBvcnQgY29uc3QgZ2V0Q2hpbGRWaXNpYmxlSW5kZXggICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5nZXRDaGlsZFZpc2libGVJbmRleDtcbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RWaXNpYmxlQ2hpbGRyZW4gICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmdldFNlbGVjdFZpc2libGVDaGlsZHJlbjtcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnROb2RlICAgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzRWxlbWVudE5vZGU7XG5leHBvcnQgY29uc3QgaXNUZXh0Tm9kZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc1RleHROb2RlO1xuZXhwb3J0IGNvbnN0IGlzUmVuZGVyZWROb2RlICAgICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNSZW5kZXJlZE5vZGU7XG5leHBvcnQgY29uc3QgaXNJZnJhbWVFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0lmcmFtZUVsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNJbnB1dEVsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0lucHV0RWxlbWVudDtcbmV4cG9ydCBjb25zdCBpc0J1dHRvbkVsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBpc0ZpbGVJbnB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzRmlsZUlucHV0O1xuZXhwb3J0IGNvbnN0IGlzVGV4dEFyZWFFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNUZXh0QXJlYUVsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNBbmNob3JFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0FuY2hvckVsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNJbWdFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0ltZ0VsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNGb3JtRWxlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0Zvcm1FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGlzTGFiZWxFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNMYWJlbEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNTZWxlY3RFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc1NlbGVjdEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNSYWRpb0J1dHRvbkVsZW1lbnQgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc1JhZGlvQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBpc0NvbG9ySW5wdXRFbGVtZW50ICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzQ29sb3JJbnB1dEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNDaGVja2JveEVsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0NoZWNrYm94RWxlbWVudDtcbmV4cG9ydCBjb25zdCBpc09wdGlvbkVsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzT3B0aW9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBpc1NWR0VsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzU1ZHRWxlbWVudDtcbmV4cG9ydCBjb25zdCBpc01hcEVsZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzTWFwRWxlbWVudDtcbmV4cG9ydCBjb25zdCBpc0JvZHlFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzQm9keUVsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNIdG1sRWxlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0h0bWxFbGVtZW50O1xuZXhwb3J0IGNvbnN0IGlzRG9jdW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNEb2N1bWVudDtcbmV4cG9ydCBjb25zdCBpc1dpbmRvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzV2luZG93O1xuZXhwb3J0IGNvbnN0IGlzVGV4dEVkaXRhYmxlSW5wdXQgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNUZXh0RWRpdGFibGVJbnB1dDtcbmV4cG9ydCBjb25zdCBpc1RleHRFZGl0YWJsZUVsZW1lbnQgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzVGV4dEVkaXRhYmxlRWxlbWVudDtcbmV4cG9ydCBjb25zdCBpc1RleHRFZGl0YWJsZUVsZW1lbnRBbmRFZGl0aW5nQWxsb3dlZCA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmlzVGV4dEVkaXRhYmxlRWxlbWVudEFuZEVkaXRpbmdBbGxvd2VkO1xuZXhwb3J0IGNvbnN0IGlzQ29udGVudEVkaXRhYmxlRWxlbWVudCAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNDb250ZW50RWRpdGFibGVFbGVtZW50O1xuZXhwb3J0IGNvbnN0IGlzRG9tRWxlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNEb21FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGlzU2hhZG93VUlFbGVtZW50ICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNTaGFkb3dVSUVsZW1lbnQ7XG5leHBvcnQgY29uc3QgaXNTaGFkb3dSb290ICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc1NoYWRvd1Jvb3Q7XG5leHBvcnQgY29uc3QgaXNFbGVtZW50Rm9jdXNhYmxlICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0VsZW1lbnRGb2N1c2FibGU7XG5leHBvcnQgY29uc3QgaXNIYW1tZXJoZWFkQXR0ciAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5pc0hhbW1lcmhlYWRBdHRyO1xuZXhwb3J0IGNvbnN0IGlzRWxlbWVudFJlYWRPbmx5ICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uaXNFbGVtZW50UmVhZE9ubHk7XG5leHBvcnQgY29uc3QgZ2V0U2Nyb2xsYmFyU2l6ZSAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5nZXRTY3JvbGxiYXJTaXplO1xuZXhwb3J0IGNvbnN0IGdldE1hcENvbnRhaW5lciAgICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uZ2V0TWFwQ29udGFpbmVyO1xuZXhwb3J0IGNvbnN0IGdldFRhZ05hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uZ2V0VGFnTmFtZTtcbmV4cG9ydCBjb25zdCBjbG9zZXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmNsb3Nlc3Q7XG5leHBvcnQgY29uc3QgZ2V0UGFyZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5nZXRQYXJlbnRzO1xuZXhwb3J0IGNvbnN0IGZpbmRQYXJlbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gaGFtbWVyaGVhZC51dGlscy5kb20uZmluZFBhcmVudDtcbmV4cG9ydCBjb25zdCBnZXRUb3BTYW1lRG9tYWluV2luZG93ICAgICAgICAgICAgICAgICA9IGhhbW1lcmhlYWQudXRpbHMuZG9tLmdldFRvcFNhbWVEb21haW5XaW5kb3c7XG5leHBvcnQgY29uc3QgZ2V0UGFyZW50RXhjZXB0U2hhZG93Um9vdCAgICAgICAgICAgICAgPSBoYW1tZXJoZWFkLnV0aWxzLmRvbS5nZXRQYXJlbnRFeGNlcHRTaGFkb3dSb290O1xuXG5mdW5jdGlvbiBjYW5Gb2N1cyAoZWxlbWVudCwgcGFyZW50LCB0YWJJbmRleCkge1xuICAgIGxldCBhY3RpdmVFbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IG5hdGl2ZU1ldGhvZHMuZG9jdW1lbnRBY3RpdmVFbGVtZW50R2V0dGVyLmNhbGwocGFyZW50KTtcblxuICAgIGlmIChlbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGlmIChlbGVtZW50LmRpc2FibGVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZ2V0RWxlbWVudFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IGdldEVsZW1lbnRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoKGJyb3dzZXJVdGlscy5pc0lFIHx8IGJyb3dzZXJVdGlscy5pc0FuZHJvaWQpICYmIGlzT3B0aW9uRWxlbWVudChlbGVtZW50KSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHRhYkluZGV4ICE9PSBudWxsICYmIHRhYkluZGV4IDwgMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHdyYXBFbGVtZW50IChlbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVsOiAgICAgICBlbCxcbiAgICAgICAgc2tpcDogICAgIGVsLnNoYWRvd1Jvb3QgJiYgZWwudGFiSW5kZXggPCAwLFxuICAgICAgICBjaGlsZHJlbjoge30sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVUcmVlIChwYXJlbnQsIHNvcnQpIHtcbiAgICBjb25zdCBub2RlID0gd3JhcEVsZW1lbnQocGFyZW50KTtcblxuICAgIHBhcmVudCA9IHBhcmVudC5zaGFkb3dSb290IHx8IHBhcmVudDtcblxuICAgIGlmIChpc0lmcmFtZUVsZW1lbnQocGFyZW50KSlcbiAgICAgICAgcGFyZW50ID0gbmF0aXZlTWV0aG9kcy5jb250ZW50RG9jdW1lbnRHZXR0ZXIuY2FsbChwYXJlbnQpO1xuXG4gICAgaWYgKHBhcmVudCAmJiAocGFyZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHwgcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZmlsdGVyRm9jdXNhYmxlRWxlbWVudHMocGFyZW50KTtcblxuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAhc29ydCB8fCBlbC50YWJJbmRleCA8PSAwID8gLTEgOiBlbC50YWJJbmRleDtcblxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbltrZXldID0gbm9kZS5jaGlsZHJlbltrZXldIHx8IFtdO1xuXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuW2tleV0ucHVzaChidWlsZEZvY3VzYWJsZVRyZWUoZWwsIHNvcnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJGb2N1c2FibGVFbGVtZW50cyAocGFyZW50KSB7XG4gICAgLy8gTk9URTogV2UgZG9uJ3QgdGFrZSBpbnRvIGFjY291bnQgdGhlIGNhc2Ugb2YgZW1iZWRkZWQgY29udGVudEVkaXRhYmxlXG4gICAgLy8gZWxlbWVudHMgYW5kIHNwZWNpZnkgdGhlIGNvbnRlbnRFZGl0YWJsZSBhdHRyaWJ1dGUgZm9yIGZvY3VzYWJsZSBlbGVtZW50c1xuICAgIGNvbnN0IGFsbEVsZW1lbnRzICAgICAgICAgICA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG4gICAgY29uc3QgaW52aXNpYmxlRWxlbWVudHMgICAgID0gZ2V0SW52aXNpYmxlRWxlbWVudHMoYWxsRWxlbWVudHMpO1xuICAgIGNvbnN0IGlucHV0RWxlbWVudHNSZWdFeHAgICA9IC9eKGlucHV0fGJ1dHRvbnxzZWxlY3R8dGV4dGFyZWEpJC87XG4gICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgICAgID0gW107XG5cbiAgICBsZXQgZWxlbWVudCAgPSBudWxsO1xuICAgIGxldCB0YWdOYW1lICA9IG51bGw7XG4gICAgbGV0IHRhYkluZGV4ID0gbnVsbDtcblxuICAgIGxldCBuZWVkUHVzaCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50ICA9IGFsbEVsZW1lbnRzW2ldO1xuICAgICAgICB0YWdOYW1lICA9IGdldFRhZ05hbWUoZWxlbWVudCk7XG4gICAgICAgIHRhYkluZGV4ID0gZ2V0VGFiSW5kZXhBdHRyaWJ1dGVJbnRWYWx1ZShlbGVtZW50KTtcbiAgICAgICAgbmVlZFB1c2ggPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWNhbkZvY3VzKGVsZW1lbnQsIHBhcmVudCwgdGFiSW5kZXgpKVxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgaWYgKGlucHV0RWxlbWVudHNSZWdFeHAudGVzdCh0YWdOYW1lKSlcbiAgICAgICAgICAgIG5lZWRQdXNoID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zaGFkb3dSb290KVxuICAgICAgICAgICAgbmVlZFB1c2ggPSB0cnVlO1xuICAgICAgICBlbHNlIGlmIChpc0lmcmFtZUVsZW1lbnQoZWxlbWVudCkpXG4gICAgICAgICAgICBuZWVkUHVzaCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKGlzQW5jaG9yRWxlbWVudChlbGVtZW50KSAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaHJlZicpKVxuICAgICAgICAgICAgbmVlZFB1c2ggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICE9PSAnJyB8fCAhYnJvd3NlclV0aWxzLmlzSUUgfHwgdGFiSW5kZXggIT09IG51bGw7XG5cbiAgICAgICAgY29uc3QgY29udGVudEVkaXRhYmxlQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcblxuICAgICAgICBpZiAoY29udGVudEVkaXRhYmxlQXR0ciA9PT0gJycgfHwgY29udGVudEVkaXRhYmxlQXR0ciA9PT0gJ3RydWUnKVxuICAgICAgICAgICAgbmVlZFB1c2ggPSB0cnVlO1xuXG4gICAgICAgIGlmICh0YWJJbmRleCAhPT0gbnVsbClcbiAgICAgICAgICAgIG5lZWRQdXNoID0gdHJ1ZTtcblxuICAgICAgICBpZiAobmVlZFB1c2gpXG4gICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vTk9URTogcmVtb3ZlIGNoaWxkcmVuIG9mIGludmlzaWJsZSBlbGVtZW50c1xuICAgIHJldHVybiBhcnJheVV0aWxzLmZpbHRlcihmb2N1c2FibGVFbGVtZW50cywgZWwgPT4gIWNvbnRhaW5zRWxlbWVudChpbnZpc2libGVFbGVtZW50cywgZWwpKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkZvY3VzYWJsZVRyZWUgKG5vZGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIGlmICghbm9kZS5za2lwICYmIG5vZGUuZWwubm9kZVR5cGUgIT09IE5vZGUuRE9DVU1FTlRfTk9ERSAmJiAhaXNJZnJhbWVFbGVtZW50KG5vZGUuZWwpKVxuICAgICAgICByZXN1bHQucHVzaChub2RlLmVsKTtcblxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGROb2RlIG9mIG5vZGUuY2hpbGRyZW5bcHJvcF0pXG4gICAgICAgICAgICByZXN1bHQucHVzaCguLi5mbGF0dGVuRm9jdXNhYmxlVHJlZShjaGlsZE5vZGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2N1c2FibGVFbGVtZW50cyAoZG9jLCBzb3J0ID0gZmFsc2UpIHtcbiAgICBjb25zdCByb290ID0gYnVpbGRGb2N1c2FibGVUcmVlKGRvYywgc29ydCk7XG5cbiAgICByZXR1cm4gZmxhdHRlbkZvY3VzYWJsZVRyZWUocm9vdCk7XG59XG5cbmZ1bmN0aW9uIGdldEludmlzaWJsZUVsZW1lbnRzIChlbGVtZW50cykge1xuICAgIGNvbnN0IGludmlzaWJsZUVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnZXRFbGVtZW50U3R5bGVQcm9wZXJ0eShlbGVtZW50c1tpXSwgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKVxuICAgICAgICAgICAgaW52aXNpYmxlRWxlbWVudHMucHVzaChlbGVtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludmlzaWJsZUVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFiSW5kZXhBdHRyaWJ1dGVJbnRWYWx1ZSAoZWwpIHtcbiAgICBsZXQgdGFiSW5kZXggPSBuYXRpdmVNZXRob2RzLmdldEF0dHJpYnV0ZS5jYWxsKGVsLCAndGFiaW5kZXgnKTtcblxuICAgIGlmICh0YWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICB0YWJJbmRleCA9IHBhcnNlSW50KHRhYkluZGV4LCAxMCk7XG4gICAgICAgIHRhYkluZGV4ID0gaXNOYU4odGFiSW5kZXgpID8gbnVsbCA6IHRhYkluZGV4O1xuICAgIH1cblxuICAgIHJldHVybiB0YWJJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zRWxlbWVudCAoZWxlbWVudHMsIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudHMuY29udGFpbnMpXG4gICAgICAgIHJldHVybiBlbGVtZW50cy5jb250YWlucyhlbGVtZW50KTtcblxuICAgIHJldHVybiBhcnJheVV0aWxzLnNvbWUoZWxlbWVudHMsIHBhcmVudCA9PiBwYXJlbnQuY29udGFpbnMoZWxlbWVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dGFyZWFJbmRlbnRJbkxpbmUgKHRleHRhcmVhLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHRleHRhcmVhVmFsdWUgPSBnZXRUZXh0QXJlYVZhbHVlKHRleHRhcmVhKTtcblxuICAgIGlmICghdGV4dGFyZWFWYWx1ZSlcbiAgICAgICAgcmV0dXJuIDA7XG5cbiAgICBjb25zdCB0b3BQYXJ0ICAgICAgPSB0ZXh0YXJlYVZhbHVlLnN1YnN0cmluZygwLCBwb3NpdGlvbik7XG4gICAgY29uc3QgbGluZVBvc2l0aW9uID0gdG9wUGFydC5sYXN0SW5kZXhPZignXFxuJykgPT09IC0xID8gMCA6IHRvcFBhcnQubGFzdEluZGV4T2YoJ1xcbicpICsgMTtcblxuICAgIHJldHVybiBwb3NpdGlvbiAtIGxpbmVQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRhcmVhTGluZU51bWJlckJ5UG9zaXRpb24gKHRleHRhcmVhLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHRleHRhcmVhVmFsdWUgPSBnZXRUZXh0QXJlYVZhbHVlKHRleHRhcmVhKTtcbiAgICBjb25zdCBsaW5lcyAgICAgICAgID0gdGV4dGFyZWFWYWx1ZS5zcGxpdCgnXFxuJyk7XG4gICAgbGV0IHRvcFBhcnRMZW5ndGggICA9IDA7XG4gICAgbGV0IGxpbmUgICAgICAgICAgICA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgdG9wUGFydExlbmd0aCA8PSBwb3NpdGlvbjsgaSsrKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSB0b3BQYXJ0TGVuZ3RoICsgbGluZXNbaV0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaW5lID0gaTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0b3BQYXJ0TGVuZ3RoICs9IGxpbmVzW2ldLmxlbmd0aCArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0YXJlYVBvc2l0aW9uQnlMaW5lQW5kT2Zmc2V0ICh0ZXh0YXJlYSwgbGluZSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgdGV4dGFyZWFWYWx1ZSA9IGdldFRleHRBcmVhVmFsdWUodGV4dGFyZWEpO1xuICAgIGNvbnN0IGxpbmVzICAgICAgICAgPSB0ZXh0YXJlYVZhbHVlLnNwbGl0KCdcXG4nKTtcbiAgICBsZXQgbGluZUluZGV4ICAgICAgID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZTsgaSsrKVxuICAgICAgICBsaW5lSW5kZXggKz0gbGluZXNbaV0ubGVuZ3RoICsgMTtcblxuICAgIHJldHVybiBsaW5lSW5kZXggKyBvZmZzZXQ7XG59XG5cbi8vIE5PVEU6IHRoZSBmb3JtIGlzIGFsc28gc3VibWl0dGVkIG9uIGVudGVyIGtleSBwcmVzcyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBpbnB1dCBvZiBjZXJ0YWluXG4vLyB0eXBlcyAocmVmZXJyZWQgdG8gYXMgdHlwZXMgdGhhdCBibG9jayBpbXBsaWNpdCBzdWJtaXNzaW9uIGluIHRoZSBIVE1MNSBzdGFuZGFyZCkgb24gdGhlXG4vLyBmb3JtIGFuZCB0aGlzIGlucHV0IGlzIGZvY3VzZWQgKGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L2Zvcm1zLmh0bWwjaW1wbGljaXQtc3VibWlzc2lvbilcbmV4cG9ydCBmdW5jdGlvbiBibG9ja3NJbXBsaWNpdFN1Ym1pc3Npb24gKGVsKSB7XG4gICAgbGV0IGlucHV0VHlwZVJlZ0V4cCA9IG51bGw7XG5cbiAgICBpZiAoYnJvd3NlclV0aWxzLmlzU2FmYXJpKVxuICAgICAgICBpbnB1dFR5cGVSZWdFeHAgPSAvXih0ZXh0fHBhc3N3b3JkfGNvbG9yfGRhdGV8dGltZXxkYXRldGltZXxkYXRldGltZS1sb2NhbHxlbWFpbHxtb250aHxudW1iZXJ8c2VhcmNofHRlbHx1cmx8d2Vla3xpbWFnZSkkL2k7XG4gICAgZWxzZSBpZiAoYnJvd3NlclV0aWxzLmlzRmlyZWZveClcbiAgICAgICAgaW5wdXRUeXBlUmVnRXhwID0gL14odGV4dHxwYXNzd29yZHxkYXRlfHRpbWV8ZGF0ZXRpbWV8ZGF0ZXRpbWUtbG9jYWx8ZW1haWx8bW9udGh8bnVtYmVyfHNlYXJjaHx0ZWx8dXJsfHdlZWt8aW1hZ2UpJC9pO1xuICAgIGVsc2UgaWYgKGJyb3dzZXJVdGlscy5pc0lFKVxuICAgICAgICBpbnB1dFR5cGVSZWdFeHAgPSAvXih0ZXh0fHBhc3N3b3JkfGNvbG9yfGRhdGV8dGltZXxkYXRldGltZXxkYXRldGltZS1sb2NhbHxlbWFpbHxmaWxlfG1vbnRofG51bWJlcnxzZWFyY2h8dGVsfHVybHx3ZWVrfGltYWdlKSQvaTtcbiAgICBlbHNlXG4gICAgICAgIGlucHV0VHlwZVJlZ0V4cCA9IC9eKHRleHR8cGFzc3dvcmR8ZGF0ZXRpbWV8ZW1haWx8bnVtYmVyfHNlYXJjaHx0ZWx8dXJsfGltYWdlKSQvaTtcblxuICAgIHJldHVybiBpbnB1dFR5cGVSZWdFeHAudGVzdChlbC50eXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWRpdGFibGVFbGVtZW50IChlbCwgY2hlY2tFZGl0aW5nQWxsb3dlZCkge1xuICAgIHJldHVybiBjaGVja0VkaXRpbmdBbGxvd2VkID9cbiAgICAgICAgaXNUZXh0RWRpdGFibGVFbGVtZW50QW5kRWRpdGluZ0FsbG93ZWQoZWwpIHx8IGlzQ29udGVudEVkaXRhYmxlRWxlbWVudChlbCkgOlxuICAgICAgICBpc1RleHRFZGl0YWJsZUVsZW1lbnQoZWwpIHx8IGlzQ29udGVudEVkaXRhYmxlRWxlbWVudChlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRDb250YWluc05vZGUgKHBhcmVudEVsZW1lbnQsIGNoaWxkTm9kZSkge1xuICAgIGlmIChpc1RoZVNhbWVOb2RlKGNoaWxkTm9kZSwgcGFyZW50RWxlbWVudCkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5hdGl2ZU1ldGhvZHMubm9kZUNoaWxkTm9kZXNHZXR0ZXIuY2FsbChwYXJlbnRFbGVtZW50KTtcbiAgICBjb25zdCBsZW5ndGggICAgID0gZ2V0Q2hpbGROb2Rlc0xlbmd0aChjaGlsZE5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWwgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgIGlmICghaXNTaGFkb3dVSUVsZW1lbnQoZWwpICYmIGlzRWxlbWVudENvbnRhaW5zTm9kZShlbCwgY2hpbGROb2RlKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT3B0aW9uR3JvdXBFbGVtZW50IChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGhhbW1lcmhlYWQudXRpbHMuZG9tLmluc3RhbmNlVG9TdHJpbmcoZWxlbWVudCkgPT09ICdbb2JqZWN0IEhUTUxPcHRHcm91cEVsZW1lbnRdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJbmRleEluUGFyZW50IChwYXJlbnQsIGNoaWxkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChnZXRUYWdOYW1lKGNoaWxkKSk7XG5cbiAgICByZXR1cm4gYXJyYXlVdGlscy5pbmRleE9mKGNoaWxkcmVuLCBjaGlsZCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGhlU2FtZU5vZGUgKG5vZGUxLCBub2RlMikge1xuICAgIC8vTk9URTogTW96aWxsYSBoYXMgbm90IGlzU2FtZU5vZGUgbWV0aG9kXG4gICAgaWYgKG5vZGUxICYmIG5vZGUyICYmIG5vZGUxLmlzU2FtZU5vZGUpXG4gICAgICAgIHJldHVybiBub2RlMS5pc1NhbWVOb2RlKG5vZGUyKTtcblxuICAgIHJldHVybiBub2RlMSA9PT0gbm9kZTI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50RGVzY3JpcHRpb24gKGVsKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAgICAgaWQ6ICAgICAgJ2lkJyxcbiAgICAgICAgbmFtZTogICAgJ25hbWUnLFxuICAgICAgICAnY2xhc3MnOiAnY2xhc3NOYW1lJyxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzID0gW107XG5cbiAgICByZXMucHVzaCgnPCcpO1xuICAgIHJlcy5wdXNoKGdldFRhZ05hbWUoZWwpKTtcblxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGF0dHIpKSB7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGVsW2F0dHJpYnV0ZXNbYXR0cl1dO1xuXG4gICAgICAgICAgICBpZiAodmFsKVxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKCcgJyArIGF0dHIgKyAnPVwiJyArIHZhbCArICdcIicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzLnB1c2goJz4nKTtcblxuICAgIHJldHVybiByZXMuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2N1c2FibGVQYXJlbnQgKGVsKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IGdldFBhcmVudHMoZWwpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnRGb2N1c2FibGUocGFyZW50c1tpXSkpXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50c1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSAoZWwpIHtcbiAgICBpZiAoZWwgJiYgZWwucGFyZW50RWxlbWVudClcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lGcmFtZVdpbmRvd0luRE9NICh3aW4pIHtcbiAgICAvL05PVEU6IEluIE1TIEVkZ2UsIGlmIGFuIGlmcmFtZSBpcyByZW1vdmVkIGZyb20gRE9NLCB0aGUgYnJvd3NlciB0aHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy50b3BcbiAgICAvL2FuZCB3aW5kb3cuZnJhbWVFbGVtZW50LiBGb3J0dW5hdGVseSwgc2V0VGltZW91dCBpcyBzZXQgdG8gdW5kZWZpbmVkIGluIHRoaXMgY2FzZS5cbiAgICBpZiAoIXdpbi5zZXRUaW1lb3V0KVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgZnJhbWVFbGVtZW50ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICAgIC8vTk9URTogVGhpcyBtYXkgcmFpc2UgYSBjcm9zcy1kb21haW4gcG9saWN5IGVycm9yIGluIHNvbWUgYnJvd3NlcnMuXG4gICAgICAgIGZyYW1lRWxlbWVudCA9IHdpbi5mcmFtZUVsZW1lbnQ7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAhIXdpbi50b3A7XG4gICAgfVxuXG4gICAgLy8gTk9URTogaW4gRmlyZWZveCBhbmQgV2ViS2l0LCBmcmFtZUVsZW1lbnQgaXMgbnVsbCBmb3IgY3Jvc3MtZG9tYWluIGlmcmFtZXMgZXZlbiBpZiB0aGV5IGFyZSBpbiB0aGUgRE9NLlxuICAgIC8vIEJ1dCB0aGVzZSBicm93c2VycyBkb24ndCBleGVjdXRlIHNjcmlwdHMgaW4gcmVtb3ZlZCBpZnJhbWVzLCBzbyB3ZSBzdXBwb3NlIHRoYXQgdGhlIGlmcmFtZSBpcyBpbiB0aGUgRE9NLlxuICAgIGlmICgoYnJvd3NlclV0aWxzLmlzRmlyZWZveCB8fCBicm93c2VyVXRpbHMuaXNXZWJLaXQpICYmIHdpbi50b3AgIT09IHdpbiAmJiAhZnJhbWVFbGVtZW50KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiAhIShmcmFtZUVsZW1lbnQgJiYgbmF0aXZlTWV0aG9kcy5jb250ZW50RG9jdW1lbnRHZXR0ZXIuY2FsbChmcmFtZUVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wV2luZG93ICh3aW4pIHtcbiAgICB0cnkge1xuICAgICAgICAvL05PVEU6IE1TIEVkZ2UgdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aGVuIHRyeWluZyB0byBhY2Nlc3Mgd2luZG93LnRvcCBmcm9tIGFuIGlmcmFtZSByZW1vdmVkIGZyb20gRE9NXG4gICAgICAgIHJldHVybiB3aW4udG9wID09PSB3aW47XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSWZyYW1lQnlXaW5kb3cgKGlmcmFtZVdpbmRvdykge1xuICAgIGNvbnN0IGlmcmFtZXMgPSBbXTtcblxuICAgIGZpbmQoZG9jdW1lbnQsICcqJywgZWxlbSA9PiB7XG4gICAgICAgIGlmIChlbGVtLnRhZ05hbWUgPT09ICdJRlJBTUUnKVxuICAgICAgICAgICAgaWZyYW1lcy5wdXNoKGVsZW0pO1xuXG4gICAgICAgIGlmIChlbGVtLnNoYWRvd1Jvb3QpXG4gICAgICAgICAgICBmaW5kKGVsZW0uc2hhZG93Um9vdCwgJ2lmcmFtZScsIGlmcmFtZSA9PiBpZnJhbWVzLnB1c2goaWZyYW1lKSk7XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5hdGl2ZU1ldGhvZHMuY29udGVudFdpbmRvd0dldHRlci5jYWxsKGlmcmFtZXNbaV0pID09PSBpZnJhbWVXaW5kb3cpXG4gICAgICAgICAgICByZXR1cm4gaWZyYW1lc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWRpdGFibGVGb3JtRWxlbWVudCAoZWxlbWVudCkge1xuICAgIHJldHVybiBpc1RleHRFZGl0YWJsZUVsZW1lbnQoZWxlbWVudCkgfHwgaXNTZWxlY3RFbGVtZW50KGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbW9uQW5jZXN0b3IgKGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAgIGlmIChpc1RoZVNhbWVOb2RlKGVsZW1lbnQxLCBlbGVtZW50MikpXG4gICAgICAgIHJldHVybiBlbGVtZW50MTtcblxuICAgIGNvbnN0IGVsMVBhcmVudHMgICA9IFtlbGVtZW50MV0uY29uY2F0KGdldFBhcmVudHMoZWxlbWVudDEpKTtcbiAgICBsZXQgY29tbW9uQW5jZXN0b3IgPSBlbGVtZW50MjtcblxuICAgIHdoaWxlIChjb21tb25BbmNlc3Rvcikge1xuICAgICAgICBpZiAoYXJyYXlVdGlscy5pbmRleE9mKGVsMVBhcmVudHMsIGNvbW1vbkFuY2VzdG9yKSA+IC0xKVxuICAgICAgICAgICAgcmV0dXJuIGNvbW1vbkFuY2VzdG9yO1xuXG4gICAgICAgIGNvbW1vbkFuY2VzdG9yID0gbmF0aXZlTWV0aG9kcy5ub2RlUGFyZW50Tm9kZUdldHRlci5jYWxsKGNvbW1vbkFuY2VzdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbW9uQW5jZXN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbkxlbmd0aCAoY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gbmF0aXZlTWV0aG9kcy5odG1sQ29sbGVjdGlvbkxlbmd0aEdldHRlci5jYWxsKGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkTm9kZXNMZW5ndGggKGNoaWxkTm9kZXMpIHtcbiAgICByZXR1cm4gbmF0aXZlTWV0aG9kcy5ub2RlTGlzdExlbmd0aEdldHRlci5jYWxsKGNoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSAoaW5wdXQpIHtcbiAgICByZXR1cm4gbmF0aXZlTWV0aG9kcy5pbnB1dFZhbHVlR2V0dGVyLmNhbGwoaW5wdXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dEFyZWFWYWx1ZSAodGV4dEFyZWEpIHtcbiAgICByZXR1cm4gbmF0aXZlTWV0aG9kcy50ZXh0QXJlYVZhbHVlR2V0dGVyLmNhbGwodGV4dEFyZWEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZSAoaW5wdXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5hdGl2ZU1ldGhvZHMuaW5wdXRWYWx1ZVNldHRlci5jYWxsKGlucHV0LCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUZXh0QXJlYVZhbHVlICh0ZXh0QXJlYSwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmF0aXZlTWV0aG9kcy50ZXh0QXJlYVZhbHVlU2V0dGVyLmNhbGwodGV4dEFyZWEsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRWYWx1ZSAoZWxlbWVudCkge1xuICAgIGlmIChpc0lucHV0RWxlbWVudChlbGVtZW50KSlcbiAgICAgICAgcmV0dXJuIGdldElucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgZWxzZSBpZiAoaXNUZXh0QXJlYUVsZW1lbnQoZWxlbWVudCkpXG4gICAgICAgIHJldHVybiBnZXRUZXh0QXJlYVZhbHVlKGVsZW1lbnQpO1xuXG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXMqL1xuICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIC8qZXNsaW50LWVuYWJsZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXMqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFZhbHVlIChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChpc0lucHV0RWxlbWVudChlbGVtZW50KSlcbiAgICAgICAgcmV0dXJuIHNldElucHV0VmFsdWUoZWxlbWVudCwgdmFsdWUpO1xuICAgIGVsc2UgaWYgKGlzVGV4dEFyZWFFbGVtZW50KGVsZW1lbnQpKVxuICAgICAgICByZXR1cm4gc2V0VGV4dEFyZWFWYWx1ZShlbGVtZW50LCB2YWx1ZSk7XG5cbiAgICAvKmVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllcyovXG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIC8qZXNsaW50LWVuYWJsZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXMqL1xuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaGFkb3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC5nZXRSb290Tm9kZSAmJiBmaW5kRG9jdW1lbnQoZWxlbWVudCkgIT09IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zIChlbGVtZW50LCB0YXJnZXQpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIXRhcmdldClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGVsZW1lbnQuY29udGFpbnMpXG4gICAgICAgIHJldHVybiBlbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICByZXR1cm4gISFmaW5kUGFyZW50KHRhcmdldCwgdHJ1ZSwgbm9kZSA9PiBub2RlID09PSBlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUVxdWFsIChlbDEsIGVsMikge1xuICAgIHJldHVybiBlbDEgPT09IGVsMjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVUZXh0IChlbCkge1xuICAgIHJldHVybiBuYXRpdmVNZXRob2RzLm5vZGVUZXh0Q29udGVudEdldHRlci5jYWxsKGVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEltZ01hcE5hbWUgKGltZykge1xuICAgIHJldHVybiBpbWcudXNlTWFwLnN1YnN0cmluZygxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudCAod2luKSB7XG4gICAgcmV0dXJuIHdpbi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudCAoZWwpIHtcbiAgICByZXR1cm4gZWwgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxuIl19