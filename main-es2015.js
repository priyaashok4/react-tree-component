(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: KEYS, LoadingComponent, TREE_ACTIONS, TreeAnimateOpenDirective, TreeComponent, TreeDragDirective, TreeDraggedElement, TreeDropDirective, TreeModel, TreeModule, TreeNode, TreeNodeCheckboxComponent, TreeNodeChildrenComponent, TreeNodeCollectionComponent, TreeNodeComponent, TreeNodeContent, TreeNodeDropSlot, TreeNodeExpanderComponent, TreeNodeWrapperComponent, TreeViewportComponent, TreeVirtualScroll, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_ACTIONS", function() { return TREE_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeAnimateOpenDirective", function() { return TreeAnimateOpenDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDragDirective", function() { return TreeDragDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDraggedElement", function() { return TreeDraggedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDropDirective", function() { return TreeDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return TreeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return TreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeCheckboxComponent", function() { return TreeNodeCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeChildrenComponent", function() { return TreeNodeChildrenComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeCollectionComponent", function() { return TreeNodeCollectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeComponent", function() { return TreeNodeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeContent", function() { return TreeNodeContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeDropSlot", function() { return TreeNodeDropSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeExpanderComponent", function() { return TreeNodeExpanderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeWrapperComponent", function() { return TreeNodeWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewportComponent", function() { return TreeViewportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeVirtualScroll", function() { return TreeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return actionInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TreeMobxAutorunDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../../node_modules/lodash-es/lodash.js");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/mobx-angular/tree-mobx-autorun.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeMobxAutorunDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     */
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.templateBindings = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef);
        if (this.dispose) {
            this.dispose();
        }
        if (this.shouldDetach()) {
            this.view.detach();
        }
        this.autoDetect(this.view);
    }
    /**
     * @return {?}
     */
    shouldDetach() {
        return this.treeMobxAutorun && this.treeMobxAutorun.detach;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    autoDetect(view) {
        this.dispose = Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])((/**
         * @return {?}
         */
        () => view.detectChanges()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dispose) {
            this.dispose();
        }
    }
}
TreeMobxAutorunDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[treeMobxAutorun]' },] }
];
/** @nocollapse */
TreeMobxAutorunDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
TreeMobxAutorunDirective.propDecorators = {
    treeMobxAutorun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/keys.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32,
    CONTEXT_MENU: 32
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/tree-options.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IActionHandler() { }
const ɵ0 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node && node.toggleActivated(), ɵ1 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node && node.toggleActivated(true), ɵ2 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node && node.toggleSelected(), ɵ3 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node.setIsActive(true), ɵ4 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node.setIsActive(false), ɵ5 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node.setIsSelected(true), ɵ6 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node.setIsSelected(false), ɵ7 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node.focus(), ɵ8 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node.hasChildren && node.toggleExpanded(), ɵ9 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node.expand(), ɵ10 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => node.collapse(), ɵ11 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => tree.focusDrillDown(), ɵ12 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => tree.focusDrillUp(), ɵ13 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => tree.focusNextNode(), ɵ14 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @return {?}
 */
(tree, node, $event) => tree.focusPreviousNode(), ɵ15 = /**
 * @param {?} tree
 * @param {?} node
 * @param {?} $event
 * @param {?} __3
 * @return {?}
 */
(tree, node, $event, { from, to }) => {
    // default action assumes from = node, to = {parent, index}
    if ($event.ctrlKey) {
        tree.copyNode(from, to);
    }
    else {
        tree.moveNode(from, to);
    }
};
/** @type {?} */
const TREE_ACTIONS = {
    TOGGLE_ACTIVE: (ɵ0),
    TOGGLE_ACTIVE_MULTI: (ɵ1),
    TOGGLE_SELECTED: (ɵ2),
    ACTIVATE: (ɵ3),
    DEACTIVATE: (ɵ4),
    SELECT: (ɵ5),
    DESELECT: (ɵ6),
    FOCUS: (ɵ7),
    TOGGLE_EXPANDED: (ɵ8),
    EXPAND: (ɵ9),
    COLLAPSE: (ɵ10),
    DRILL_DOWN: (ɵ11),
    DRILL_UP: (ɵ12),
    NEXT_NODE: (ɵ13),
    PREVIOUS_NODE: (ɵ14),
    MOVE_NODE: (ɵ15)
};
/** @type {?} */
const defaultActionMapping = {
    mouse: {
        click: TREE_ACTIONS.TOGGLE_ACTIVE,
        dblClick: null,
        contextMenu: null,
        expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
        checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
        drop: TREE_ACTIONS.MOVE_NODE
    },
    keys: {
        [KEYS.RIGHT]: TREE_ACTIONS.DRILL_DOWN,
        [KEYS.LEFT]: TREE_ACTIONS.DRILL_UP,
        [KEYS.DOWN]: TREE_ACTIONS.NEXT_NODE,
        [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE,
        [KEYS.SPACE]: TREE_ACTIONS.TOGGLE_ACTIVE,
        [KEYS.ENTER]: TREE_ACTIONS.TOGGLE_ACTIVE
    }
};
/**
 * @record
 */
function IActionMapping() { }
if (false) {}
class TreeOptions {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        this.options = options;
        this.actionMapping = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["defaultsDeep"])({}, this.options.actionMapping, defaultActionMapping);
        if (options.rtl) {
            this.actionMapping.keys[KEYS.RIGHT] = (/** @type {?} */ (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(options, ['actionMapping', 'keys', KEYS.RIGHT]))) || TREE_ACTIONS.DRILL_UP;
            this.actionMapping.keys[KEYS.LEFT] = (/** @type {?} */ (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(options, ['actionMapping', 'keys', KEYS.LEFT]))) || TREE_ACTIONS.DRILL_DOWN;
        }
    }
    /**
     * @return {?}
     */
    get hasChildrenField() { return this.options.hasChildrenField || 'hasChildren'; }
    /**
     * @return {?}
     */
    get childrenField() { return this.options.childrenField || 'children'; }
    /**
     * @return {?}
     */
    get displayField() { return this.options.displayField || 'name'; }
    /**
     * @return {?}
     */
    get idField() { return this.options.idField || 'id'; }
    /**
     * @return {?}
     */
    get isExpandedField() { return this.options.isExpandedField || 'isExpanded'; }
    /**
     * @return {?}
     */
    get getChildren() { return this.options.getChildren; }
    /**
     * @return {?}
     */
    get levelPadding() { return this.options.levelPadding || 0; }
    /**
     * @return {?}
     */
    get useVirtualScroll() { return this.options.useVirtualScroll; }
    /**
     * @return {?}
     */
    get animateExpand() { return this.options.animateExpand; }
    /**
     * @return {?}
     */
    get animateSpeed() { return this.options.animateSpeed || 1; }
    /**
     * @return {?}
     */
    get animateAcceleration() { return this.options.animateAcceleration || 1.2; }
    /**
     * @return {?}
     */
    get scrollOnActivate() { return this.options.scrollOnActivate === undefined ? true : this.options.scrollOnActivate; }
    /**
     * @return {?}
     */
    get rtl() { return !!this.options.rtl; }
    /**
     * @return {?}
     */
    get rootId() { return this.options.rootId; }
    /**
     * @return {?}
     */
    get useCheckbox() { return this.options.useCheckbox; }
    /**
     * @return {?}
     */
    get useTriState() { return this.options.useTriState === undefined ? true : this.options.useTriState; }
    /**
     * @return {?}
     */
    get scrollContainer() { return this.options.scrollContainer; }
    /**
     * @return {?}
     */
    get allowDragoverStyling() { return this.options.allowDragoverStyling === undefined ? true : this.options.allowDragoverStyling; }
    /**
     * @param {?} node
     * @return {?}
     */
    getNodeClone(node) {
        if (this.options.getNodeClone) {
            return this.options.getNodeClone(node);
        }
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["omit"])(Object.assign({}, node.data), ['id']);
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?=} $event
     * @return {?}
     */
    allowDrop(element, to, $event) {
        if (this.options.allowDrop instanceof Function) {
            return this.options.allowDrop(element, to, $event);
        }
        else {
            return this.options.allowDrop === undefined ? true : this.options.allowDrop;
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    allowDrag(node) {
        if (this.options.allowDrag instanceof Function) {
            return this.options.allowDrag(node);
        }
        else {
            return this.options.allowDrag;
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    nodeClass(node) {
        return this.options.nodeClass ? this.options.nodeClass(node) : '';
    }
    /**
     * @param {?} node
     * @return {?}
     */
    nodeHeight(node) {
        if (node.data.virtual) {
            return 0;
        }
        /** @type {?} */
        let nodeHeight = this.options.nodeHeight || 22;
        if (typeof nodeHeight === 'function') {
            nodeHeight = nodeHeight(node);
        }
        // account for drop slots:
        return nodeHeight + (node.index === 0 ? 2 : 1) * this.dropSlotHeight;
    }
    /**
     * @return {?}
     */
    get dropSlotHeight() {
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(this.options.dropSlotHeight) ? this.options.dropSlotHeight : 2;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TREE_EVENTS = {
    toggleExpanded: 'toggleExpanded',
    activate: 'activate',
    deactivate: 'deactivate',
    nodeActivate: 'nodeActivate',
    nodeDeactivate: 'nodeDeactivate',
    select: 'select',
    deselect: 'deselect',
    focus: 'focus',
    blur: 'blur',
    initialized: 'initialized',
    updateData: 'updateData',
    moveNode: 'moveNode',
    copyNode: 'copyNode',
    event: 'event',
    loadNodeChildren: 'loadNodeChildren',
    changeFilter: 'changeFilter',
    stateChange: 'stateChange'
};

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class TreeNode {
    /**
     * @param {?} data
     * @param {?} parent
     * @param {?} treeModel
     * @param {?} index
     */
    constructor(data, parent, treeModel, index) {
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this.position = 0;
        this.allowDrop = (/**
         * @param {?} element
         * @param {?=} $event
         * @return {?}
         */
        (element, $event) => {
            return this.options.allowDrop(element, { parent: this, index: 0 }, $event);
        });
        this.allowDragoverStyling = (/**
         * @return {?}
         */
        () => {
            return this.options.allowDragoverStyling;
        });
        if (this.id === undefined || this.id === null) {
            this.id = uuid();
        } // Make sure there's a unique id without overriding existing ids to work with immutable data structures
        this.index = index;
        if (this.getField('children')) {
            this._initChildren();
        }
        this.autoLoadChildren();
    }
    /**
     * @return {?}
     */
    get isHidden() { return this.treeModel.isHidden(this); }
    ;
    /**
     * @return {?}
     */
    get isExpanded() { return this.treeModel.isExpanded(this); }
    ;
    /**
     * @return {?}
     */
    get isActive() { return this.treeModel.isActive(this); }
    ;
    /**
     * @return {?}
     */
    get isFocused() { return this.treeModel.isNodeFocused(this); }
    ;
    /**
     * @return {?}
     */
    get isSelected() {
        if (this.isSelectable()) {
            return this.treeModel.isSelected(this);
        }
        else {
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["some"])(this.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.isSelected));
        }
    }
    ;
    /**
     * @return {?}
     */
    get isAllSelected() {
        if (this.isSelectable()) {
            return this.treeModel.isSelected(this);
        }
        else {
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["every"])(this.children, (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.isAllSelected));
        }
    }
    ;
    /**
     * @return {?}
     */
    get isPartiallySelected() {
        return this.isSelected && !this.isAllSelected;
    }
    /**
     * @return {?}
     */
    get level() {
        return this.parent ? this.parent.level + 1 : 0;
    }
    /**
     * @return {?}
     */
    get path() {
        return this.parent ? [...this.parent.path, this.id] : [];
    }
    /**
     * @return {?}
     */
    get elementRef() {
        throw `Element Ref is no longer supported since introducing virtual scroll\n
      You may use a template to obtain a reference to the element`;
    }
    /**
     * @return {?}
     */
    get originalNode() { return this._originalNode; }
    ;
    // helper get functions:
    /**
     * @return {?}
     */
    get hasChildren() {
        return !!(this.getField('hasChildren') || (this.children && this.children.length > 0));
    }
    /**
     * @return {?}
     */
    get isCollapsed() { return !this.isExpanded; }
    /**
     * @return {?}
     */
    get isLeaf() { return !this.hasChildren; }
    /**
     * @return {?}
     */
    get isRoot() { return this.parent.data.virtual; }
    /**
     * @return {?}
     */
    get realParent() { return this.isRoot ? null : this.parent; }
    // proxy functions:
    /**
     * @return {?}
     */
    get options() { return this.treeModel.options; }
    /**
     * @param {?} event
     * @return {?}
     */
    fireEvent(event) { this.treeModel.fireEvent(event); }
    // field accessors:
    /**
     * @return {?}
     */
    get displayField() {
        return this.getField('display');
    }
    /**
     * @return {?}
     */
    get id() {
        return this.getField('id');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this.setField('id', value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getField(key) {
        return this.data[this.options[`${key}Field`]];
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setField(key, value) {
        this.data[this.options[`${key}Field`]] = value;
    }
    // traversing:
    /**
     * @param {?} steps
     * @param {?=} skipHidden
     * @return {?}
     */
    _findAdjacentSibling(steps, skipHidden = false) {
        /** @type {?} */
        const siblings = this._getParentsChildren(skipHidden);
        /** @type {?} */
        const index = siblings.indexOf(this);
        return siblings.length > index + steps ? siblings[index + steps] : null;
    }
    /**
     * @param {?=} skipHidden
     * @return {?}
     */
    findNextSibling(skipHidden = false) {
        return this._findAdjacentSibling(+1, skipHidden);
    }
    /**
     * @param {?=} skipHidden
     * @return {?}
     */
    findPreviousSibling(skipHidden = false) {
        return this._findAdjacentSibling(-1, skipHidden);
    }
    /**
     * @return {?}
     */
    getVisibleChildren() {
        return this.visibleChildren;
    }
    /**
     * @return {?}
     */
    get visibleChildren() {
        return (this.children || []).filter((/**
         * @param {?} node
         * @return {?}
         */
        (node) => !node.isHidden));
    }
    /**
     * @param {?=} skipHidden
     * @return {?}
     */
    getFirstChild(skipHidden = false) {
        /** @type {?} */
        let children = skipHidden ? this.visibleChildren : this.children;
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["first"])(children || []);
    }
    /**
     * @param {?=} skipHidden
     * @return {?}
     */
    getLastChild(skipHidden = false) {
        /** @type {?} */
        let children = skipHidden ? this.visibleChildren : this.children;
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["last"])(children || []);
    }
    /**
     * @param {?=} goInside
     * @param {?=} skipHidden
     * @return {?}
     */
    findNextNode(goInside = true, skipHidden = false) {
        return goInside && this.isExpanded && this.getFirstChild(skipHidden) ||
            this.findNextSibling(skipHidden) ||
            this.parent && this.parent.findNextNode(false, skipHidden);
    }
    /**
     * @param {?=} skipHidden
     * @return {?}
     */
    findPreviousNode(skipHidden = false) {
        /** @type {?} */
        let previousSibling = this.findPreviousSibling(skipHidden);
        if (!previousSibling) {
            return this.realParent;
        }
        return previousSibling._getLastOpenDescendant(skipHidden);
    }
    /**
     * @param {?=} skipHidden
     * @return {?}
     */
    _getLastOpenDescendant(skipHidden = false) {
        /** @type {?} */
        const lastChild = this.getLastChild(skipHidden);
        return (this.isCollapsed || !lastChild)
            ? this
            : lastChild._getLastOpenDescendant(skipHidden);
    }
    /**
     * @private
     * @param {?=} skipHidden
     * @return {?}
     */
    _getParentsChildren(skipHidden = false) {
        /** @type {?} */
        const children = this.parent &&
            (skipHidden ? this.parent.getVisibleChildren() : this.parent.children);
        return children || [];
    }
    /**
     * @private
     * @param {?=} skipHidden
     * @return {?}
     */
    getIndexInParent(skipHidden = false) {
        return this._getParentsChildren(skipHidden).indexOf(this);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isDescendantOf(node) {
        if (this === node)
            return true;
        else
            return this.parent && this.parent.isDescendantOf(node);
    }
    /**
     * @return {?}
     */
    getNodePadding() {
        return this.options.levelPadding * (this.level - 1) + 'px';
    }
    /**
     * @return {?}
     */
    getClass() {
        return [this.options.nodeClass(this), `tree-node-level-${this.level}`].join(' ');
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDrop($event) {
        this.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this, index: 0, dropOnNode: true }
        });
    }
    /**
     * @return {?}
     */
    allowDrag() {
        return this.options.allowDrag(this);
    }
    // helper methods:
    /**
     * @return {?}
     */
    loadNodeChildren() {
        if (!this.options.getChildren) {
            return Promise.resolve(); // Not getChildren method - for using redux
        }
        return Promise.resolve(this.options.getChildren(this))
            .then((/**
         * @param {?} children
         * @return {?}
         */
        (children) => {
            if (children) {
                this.setField('children', children);
                this._initChildren();
                if (this.options.useTriState && this.treeModel.isSelected(this)) {
                    this.setIsSelected(true);
                }
                this.children.forEach((/**
                 * @param {?} child
                 * @return {?}
                 */
                (child) => {
                    if (child.getField('isExpanded') && child.hasChildren) {
                        child.expand();
                    }
                }));
            }
        })).then((/**
         * @return {?}
         */
        () => {
            this.fireEvent({
                eventName: TREE_EVENTS.loadNodeChildren,
                node: this
            });
        }));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    expand() {
        if (!(/** @type {?} */ (this)).isExpanded) {
            (/** @type {?} */ (this)).toggleExpanded();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    collapse() {
        if ((/** @type {?} */ (this)).isExpanded) {
            (/** @type {?} */ (this)).toggleExpanded();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    doForAll(fn) {
        Promise.resolve(fn(this)).then((/**
         * @return {?}
         */
        () => {
            if (this.children) {
                this.children.forEach((/**
                 * @param {?} child
                 * @return {?}
                 */
                (child) => child.doForAll(fn)));
            }
        }));
    }
    /**
     * @return {?}
     */
    expandAll() {
        this.doForAll((/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.expand()));
    }
    /**
     * @return {?}
     */
    collapseAll() {
        this.doForAll((/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.collapse()));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    ensureVisible() {
        if ((/** @type {?} */ (this)).realParent) {
            (/** @type {?} */ (this)).realParent.expand();
            (/** @type {?} */ (this)).realParent.ensureVisible();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    toggleExpanded() {
        (/** @type {?} */ (this)).setIsExpanded(!(/** @type {?} */ (this)).isExpanded);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setIsExpanded(value) {
        if ((/** @type {?} */ (this)).hasChildren) {
            (/** @type {?} */ (this)).treeModel.setExpandedNode((/** @type {?} */ (this)), value);
        }
        return (/** @type {?} */ (this));
    }
    ;
    /**
     * @return {?}
     */
    autoLoadChildren() {
        this.handler =
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])((/**
             * @return {?}
             */
            () => this.isExpanded), (/**
             * @param {?} isExpanded
             * @return {?}
             */
            (isExpanded) => {
                if (!this.children && this.hasChildren && isExpanded) {
                    this.loadNodeChildren();
                }
            }), { fireImmediately: true });
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.children) {
            this.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            (child) => child.dispose()));
        }
        if (this.handler) {
            this.handler();
        }
        this.parent = null;
        this.children = null;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} multi
     * @return {THIS}
     */
    setIsActive(value, multi = false) {
        (/** @type {?} */ (this)).treeModel.setActiveNode((/** @type {?} */ (this)), value, multi);
        if (value) {
            (/** @type {?} */ (this)).focus((/** @type {?} */ (this)).options.scrollOnActivate);
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    isSelectable() {
        return this.isLeaf || !this.children || !this.options.useTriState;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setIsSelected(value) {
        if ((/** @type {?} */ (this)).isSelectable()) {
            (/** @type {?} */ (this)).treeModel.setSelectedNode((/** @type {?} */ (this)), value);
        }
        else {
            (/** @type {?} */ (this)).visibleChildren.forEach((/**
             * @param {?} child
             * @return {?}
             */
            (child) => child.setIsSelected(value)));
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    toggleSelected() {
        (/** @type {?} */ (this)).setIsSelected(!(/** @type {?} */ (this)).isSelected);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} multi
     * @return {THIS}
     */
    toggleActivated(multi = false) {
        (/** @type {?} */ (this)).setIsActive(!(/** @type {?} */ (this)).isActive, multi);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} multi
     * @return {THIS}
     */
    setActiveAndVisible(multi = false) {
        (/** @type {?} */ (this)).setIsActive(true, multi)
            .ensureVisible();
        setTimeout((/** @type {?} */ (this)).scrollIntoView.bind((/** @type {?} */ (this))));
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    scrollIntoView(force = false) {
        this.treeModel.virtualScroll.scrollIntoView(this, force);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} scroll
     * @return {THIS}
     */
    focus(scroll = true) {
        /** @type {?} */
        let previousNode = (/** @type {?} */ (this)).treeModel.getFocusedNode();
        (/** @type {?} */ (this)).treeModel.setFocusedNode((/** @type {?} */ (this)));
        if (scroll) {
            (/** @type {?} */ (this)).scrollIntoView();
        }
        if (previousNode) {
            (/** @type {?} */ (this)).fireEvent({ eventName: TREE_EVENTS.blur, node: previousNode });
        }
        (/** @type {?} */ (this)).fireEvent({ eventName: TREE_EVENTS.focus, node: (/** @type {?} */ (this)) });
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    blur() {
        /** @type {?} */
        let previousNode = (/** @type {?} */ (this)).treeModel.getFocusedNode();
        (/** @type {?} */ (this)).treeModel.setFocusedNode(null);
        if (previousNode) {
            (/** @type {?} */ (this)).fireEvent({ eventName: TREE_EVENTS.blur, node: (/** @type {?} */ (this)) });
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setIsHidden(value) {
        this.treeModel.setIsHidden(this, value);
    }
    /**
     * @return {?}
     */
    hide() {
        this.setIsHidden(true);
    }
    /**
     * @return {?}
     */
    show() {
        this.setIsHidden(false);
    }
    /**
     * @param {?} actionName
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    mouseAction(actionName, $event, data = null) {
        this.treeModel.setFocus(true);
        /** @type {?} */
        const actionMapping = this.options.actionMapping.mouse;
        /** @type {?} */
        const action = actionMapping[actionName];
        if (action) {
            action(this.treeModel, this, $event, data);
        }
    }
    /**
     * @return {?}
     */
    getSelfHeight() {
        return this.options.nodeHeight(this);
    }
    /**
     * @return {?}
     */
    _initChildren() {
        this.children = this.getField('children')
            .map((/**
         * @param {?} c
         * @param {?} index
         * @return {?}
         */
        (c, index) => new TreeNode(c, this, this.treeModel, index)));
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isHidden", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isExpanded", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isActive", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isFocused", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isSelected", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isAllSelected", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isPartiallySelected", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata("design:type", Array)
], TreeNode.prototype, "children", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata("design:type", Number)
], TreeNode.prototype, "index", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata("design:type", Object)
], TreeNode.prototype, "position", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata("design:type", Number)
], TreeNode.prototype, "height", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "level", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "path", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "visibleChildren", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeNode.prototype, "setIsSelected", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeNode.prototype, "_initChildren", null);
if (false) {}
/**
 * @return {?}
 */
function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class TreeModel {
    constructor() {
        this.options = new TreeOptions();
        this.eventNames = Object.keys(TREE_EVENTS);
        this.expandedNodeIds = {};
        this.selectedLeafNodeIds = {};
        this.activeNodeIds = {};
        this.hiddenNodeIds = {};
        this.focusedNodeId = null;
        this.firstUpdate = true;
        this.subscriptions = [];
    }
    // events
    /**
     * @param {?} event
     * @return {?}
     */
    fireEvent(event) {
        event.treeModel = this;
        this.events[event.eventName].emit(event);
        this.events.event.emit(event);
    }
    /**
     * @param {?} eventName
     * @param {?} fn
     * @return {?}
     */
    subscribe(eventName, fn) {
        /** @type {?} */
        const subscription = this.events[eventName].subscribe(fn);
        this.subscriptions.push(subscription);
    }
    // getters
    /**
     * @return {?}
     */
    getFocusedNode() {
        return this.focusedNode;
    }
    /**
     * @return {?}
     */
    getActiveNode() {
        return this.activeNodes[0];
    }
    /**
     * @return {?}
     */
    getActiveNodes() {
        return this.activeNodes;
    }
    /**
     * @return {?}
     */
    getVisibleRoots() {
        return this.virtualRoot.visibleChildren;
    }
    /**
     * @param {?=} skipHidden
     * @return {?}
     */
    getFirstRoot(skipHidden = false) {
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["first"])(skipHidden ? this.getVisibleRoots() : this.roots);
    }
    /**
     * @param {?=} skipHidden
     * @return {?}
     */
    getLastRoot(skipHidden = false) {
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["last"])(skipHidden ? this.getVisibleRoots() : this.roots);
    }
    /**
     * @return {?}
     */
    get isFocused() {
        return TreeModel.focusedTree === this;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isNodeFocused(node) {
        return this.focusedNode === node;
    }
    /**
     * @return {?}
     */
    isEmptyTree() {
        return this.roots && this.roots.length === 0;
    }
    /**
     * @return {?}
     */
    get focusedNode() {
        return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null;
    }
    /**
     * @return {?}
     */
    get expandedNodes() {
        /** @type {?} */
        const nodes = Object.keys(this.expandedNodeIds)
            .filter((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.expandedNodeIds[id]))
            .map((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.getNodeById(id)));
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["compact"])(nodes);
    }
    /**
     * @return {?}
     */
    get activeNodes() {
        /** @type {?} */
        const nodes = Object.keys(this.activeNodeIds)
            .filter((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.activeNodeIds[id]))
            .map((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.getNodeById(id)));
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["compact"])(nodes);
    }
    /**
     * @return {?}
     */
    get hiddenNodes() {
        /** @type {?} */
        const nodes = Object.keys(this.hiddenNodeIds)
            .filter((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.hiddenNodeIds[id]))
            .map((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.getNodeById(id)));
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["compact"])(nodes);
    }
    /**
     * @return {?}
     */
    get selectedLeafNodes() {
        /** @type {?} */
        const nodes = Object.keys(this.selectedLeafNodeIds)
            .filter((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.selectedLeafNodeIds[id]))
            .map((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.getNodeById(id)));
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["compact"])(nodes);
    }
    // locating nodes
    /**
     * @param {?} path
     * @param {?=} startNode
     * @return {?}
     */
    getNodeByPath(path, startNode = null) {
        if (!path)
            return null;
        startNode = startNode || this.virtualRoot;
        if (path.length === 0)
            return startNode;
        if (!startNode.children)
            return null;
        /** @type {?} */
        const childId = path.shift();
        /** @type {?} */
        const childNode = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["find"])(startNode.children, { id: childId });
        if (!childNode)
            return null;
        return this.getNodeByPath(path, childNode);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getNodeById(id) {
        /** @type {?} */
        const idStr = id.toString();
        return this.getNodeBy((/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.id.toString() === idStr));
    }
    /**
     * @param {?} predicate
     * @param {?=} startNode
     * @return {?}
     */
    getNodeBy(predicate, startNode = null) {
        startNode = startNode || this.virtualRoot;
        if (!startNode.children)
            return null;
        /** @type {?} */
        const found = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["find"])(startNode.children, predicate);
        if (found) { // found in children
            return found;
        }
        else { // look in children's children
            for (let child of startNode.children) {
                /** @type {?} */
                const foundInChildren = this.getNodeBy(predicate, child);
                if (foundInChildren)
                    return foundInChildren;
            }
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isExpanded(node) {
        return this.expandedNodeIds[node.id];
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isHidden(node) {
        return this.hiddenNodeIds[node.id];
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isActive(node) {
        return this.activeNodeIds[node.id];
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isSelected(node) {
        return this.selectedLeafNodeIds[node.id];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dispose();
        this.unsubscribeAll();
    }
    /**
     * @return {?}
     */
    dispose() {
        // Dispose reactions of the replaced nodes
        if (this.virtualRoot) {
            this.virtualRoot.dispose();
        }
    }
    /**
     * @return {?}
     */
    unsubscribeAll() {
        this.subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        subscription => subscription.unsubscribe()));
        this.subscriptions = [];
    }
    // actions
    /**
     * @param {?} __0
     * @return {?}
     */
    setData({ nodes, options = null, events = null }) {
        if (options) {
            this.options = new TreeOptions(options);
        }
        if (events) {
            this.events = events;
        }
        if (nodes) {
            this.nodes = nodes;
        }
        this.update();
    }
    /**
     * @return {?}
     */
    update() {
        // Rebuild tree:
        /** @type {?} */
        let virtualRootConfig = {
            id: this.options.rootId,
            virtual: true,
            [this.options.childrenField]: this.nodes
        };
        this.dispose();
        this.virtualRoot = new TreeNode(virtualRootConfig, null, this, 0);
        this.roots = this.virtualRoot.children;
        // Fire event:
        if (this.firstUpdate) {
            if (this.roots) {
                this.firstUpdate = false;
                this._calculateExpandedNodes();
            }
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.updateData });
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    setFocusedNode(node) {
        this.focusedNodeId = node ? node.id : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setFocus(value) {
        TreeModel.focusedTree = value ? this : null;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    doForAll(fn) {
        this.roots.forEach((/**
         * @param {?} root
         * @return {?}
         */
        (root) => root.doForAll(fn)));
    }
    /**
     * @return {?}
     */
    focusNextNode() {
        /** @type {?} */
        let previousNode = this.getFocusedNode();
        /** @type {?} */
        let nextNode = previousNode ? previousNode.findNextNode(true, true) : this.getFirstRoot(true);
        if (nextNode)
            nextNode.focus();
    }
    /**
     * @return {?}
     */
    focusPreviousNode() {
        /** @type {?} */
        let previousNode = this.getFocusedNode();
        /** @type {?} */
        let nextNode = previousNode ? previousNode.findPreviousNode(true) : this.getLastRoot(true);
        if (nextNode)
            nextNode.focus();
    }
    /**
     * @return {?}
     */
    focusDrillDown() {
        /** @type {?} */
        let previousNode = this.getFocusedNode();
        if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
            previousNode.toggleExpanded();
        }
        else {
            /** @type {?} */
            let nextNode = previousNode ? previousNode.getFirstChild(true) : this.getFirstRoot(true);
            if (nextNode)
                nextNode.focus();
        }
    }
    /**
     * @return {?}
     */
    focusDrillUp() {
        /** @type {?} */
        let previousNode = this.getFocusedNode();
        if (!previousNode)
            return;
        if (previousNode.isExpanded) {
            previousNode.toggleExpanded();
        }
        else {
            /** @type {?} */
            let nextNode = previousNode.realParent;
            if (nextNode)
                nextNode.focus();
        }
    }
    /**
     * @param {?} node
     * @param {?} value
     * @param {?=} multi
     * @return {?}
     */
    setActiveNode(node, value, multi = false) {
        if (multi) {
            this._setActiveNodeMulti(node, value);
        }
        else {
            this._setActiveNodeSingle(node, value);
        }
        if (value) {
            node.focus(this.options.scrollOnActivate);
            this.fireEvent({ eventName: TREE_EVENTS.activate, node });
            this.fireEvent({ eventName: TREE_EVENTS.nodeActivate, node }); // For IE11
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.deactivate, node });
            this.fireEvent({ eventName: TREE_EVENTS.nodeDeactivate, node }); // For IE11
        }
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    setSelectedNode(node, value) {
        this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, { [node.id]: value });
        if (value) {
            node.focus();
            this.fireEvent({ eventName: TREE_EVENTS.select, node });
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.deselect, node });
        }
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    setExpandedNode(node, value) {
        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, { [node.id]: value });
        this.fireEvent({ eventName: TREE_EVENTS.toggleExpanded, node, isExpanded: value });
    }
    /**
     * @return {?}
     */
    expandAll() {
        this.roots.forEach((/**
         * @param {?} root
         * @return {?}
         */
        (root) => root.expandAll()));
    }
    /**
     * @return {?}
     */
    collapseAll() {
        this.roots.forEach((/**
         * @param {?} root
         * @return {?}
         */
        (root) => root.collapseAll()));
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    setIsHidden(node, value) {
        this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, { [node.id]: value });
    }
    /**
     * @param {?} nodeIds
     * @return {?}
     */
    setHiddenNodeIds(nodeIds) {
        this.hiddenNodeIds = nodeIds.reduce((/**
         * @param {?} hiddenNodeIds
         * @param {?} id
         * @return {?}
         */
        (hiddenNodeIds, id) => Object.assign(hiddenNodeIds, {
            [id]: true
        })), {});
    }
    /**
     * @param {?} node
     * @param {?} $event
     * @return {?}
     */
    performKeyAction(node, $event) {
        /** @type {?} */
        const action = this.options.actionMapping.keys[$event.keyCode];
        if (action) {
            $event.preventDefault();
            action(this, node, $event);
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} filter
     * @param {?=} autoShow
     * @return {?}
     */
    filterNodes(filter, autoShow = true) {
        /** @type {?} */
        let filterFn;
        if (!filter) {
            return this.clearFilter();
        }
        // support function and string filter
        if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isString"])(filter)) {
            filterFn = (/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.displayField.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        }
        else if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(filter)) {
            filterFn = filter;
        }
        else {
            console.error('Don\'t know what to do with filter', filter);
            console.error('Should be either a string or function');
            return;
        }
        /** @type {?} */
        const ids = {};
        this.roots.forEach((/**
         * @param {?} node
         * @return {?}
         */
        (node) => this._filterNode(ids, node, filterFn, autoShow)));
        this.hiddenNodeIds = ids;
        this.fireEvent({ eventName: TREE_EVENTS.changeFilter });
    }
    /**
     * @return {?}
     */
    clearFilter() {
        this.hiddenNodeIds = {};
        this.fireEvent({ eventName: TREE_EVENTS.changeFilter });
    }
    /**
     * @param {?} node
     * @param {?} to
     * @return {?}
     */
    moveNode(node, to) {
        /** @type {?} */
        const fromIndex = node.getIndexInParent();
        /** @type {?} */
        const fromParent = node.parent;
        if (!this.canMoveNode(node, to, fromIndex))
            return;
        /** @type {?} */
        const fromChildren = fromParent.getField('children');
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        /** @type {?} */
        const toChildren = to.parent.getField('children');
        /** @type {?} */
        const originalNode = fromChildren.splice(fromIndex, 1)[0];
        // Compensate for index if already removed from parent:
        /** @type {?} */
        let toIndex = (fromParent === to.parent && to.index > fromIndex) ? to.index - 1 : to.index;
        toChildren.splice(toIndex, 0, originalNode);
        fromParent.treeModel.update();
        if (to.parent.treeModel !== fromParent.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({
            eventName: TREE_EVENTS.moveNode,
            node: originalNode,
            to: { parent: to.parent.data, index: toIndex },
            from: { parent: fromParent.data, index: fromIndex }
        });
    }
    /**
     * @param {?} node
     * @param {?} to
     * @return {?}
     */
    copyNode(node, to) {
        /** @type {?} */
        const fromIndex = node.getIndexInParent();
        if (!this.canMoveNode(node, to, fromIndex))
            return;
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        /** @type {?} */
        const toChildren = to.parent.getField('children');
        /** @type {?} */
        const nodeCopy = this.options.getNodeClone(node);
        toChildren.splice(to.index, 0, nodeCopy);
        node.treeModel.update();
        if (to.parent.treeModel !== node.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({ eventName: TREE_EVENTS.copyNode, node: nodeCopy, to: { parent: to.parent.data, index: to.index } });
    }
    /**
     * @return {?}
     */
    getState() {
        return {
            expandedNodeIds: this.expandedNodeIds,
            selectedLeafNodeIds: this.selectedLeafNodeIds,
            activeNodeIds: this.activeNodeIds,
            hiddenNodeIds: this.hiddenNodeIds,
            focusedNodeId: this.focusedNodeId
        };
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        if (!state)
            return;
        Object.assign(this, {
            expandedNodeIds: state.expandedNodeIds || {},
            selectedLeafNodeIds: state.selectedLeafNodeIds || {},
            activeNodeIds: state.activeNodeIds || {},
            hiddenNodeIds: state.hiddenNodeIds || {},
            focusedNodeId: state.focusedNodeId
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    subscribeToState(fn) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])((/**
         * @return {?}
         */
        () => fn(this.getState())));
    }
    /**
     * @param {?} node
     * @param {?} to
     * @param {?=} fromIndex
     * @return {?}
     */
    canMoveNode(node, to, fromIndex = undefined) {
        /** @type {?} */
        const fromNodeIndex = fromIndex || node.getIndexInParent();
        // same node:
        if (node.parent === to.parent && fromIndex === to.index) {
            return false;
        }
        return !to.parent.isDescendantOf(node);
    }
    /**
     * @return {?}
     */
    calculateExpandedNodes() {
        this._calculateExpandedNodes();
    }
    // private methods
    /**
     * @private
     * @param {?} ids
     * @param {?} node
     * @param {?} filterFn
     * @param {?} autoShow
     * @return {?}
     */
    _filterNode(ids, node, filterFn, autoShow) {
        // if node passes function then it's visible
        /** @type {?} */
        let isVisible = filterFn(node);
        if (node.children) {
            // if one of node's children passes filter then this node is also visible
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            (child) => {
                if (this._filterNode(ids, child, filterFn, autoShow)) {
                    isVisible = true;
                }
            }));
        }
        // mark node as hidden
        if (!isVisible) {
            ids[node.id] = true;
        }
        // auto expand parents to make sure the filtered nodes are visible
        if (autoShow && isVisible) {
            node.ensureVisible();
        }
        return isVisible;
    }
    /**
     * @private
     * @param {?=} startNode
     * @return {?}
     */
    _calculateExpandedNodes(startNode = null) {
        startNode = startNode || this.virtualRoot;
        if (startNode.data[this.options.isExpandedField]) {
            this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, { [startNode.id]: true });
        }
        if (startNode.children) {
            startNode.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            (child) => this._calculateExpandedNodes(child)));
        }
    }
    /**
     * @private
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    _setActiveNodeSingle(node, value) {
        // Deactivate all other nodes:
        this.activeNodes
            .filter((/**
         * @param {?} activeNode
         * @return {?}
         */
        (activeNode) => activeNode !== node))
            .forEach((/**
         * @param {?} activeNode
         * @return {?}
         */
        (activeNode) => {
            this.fireEvent({ eventName: TREE_EVENTS.deactivate, node: activeNode });
            this.fireEvent({ eventName: TREE_EVENTS.nodeDeactivate, node: activeNode }); // For IE11
        }));
        if (value) {
            this.activeNodeIds = { [node.id]: true };
        }
        else {
            this.activeNodeIds = {};
        }
    }
    /**
     * @private
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    _setActiveNodeMulti(node, value) {
        this.activeNodeIds = Object.assign({}, this.activeNodeIds, { [node.id]: value });
    }
}
TreeModel.focusedTree = null;
TreeModel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Array)
], TreeModel.prototype, "roots", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "expandedNodeIds", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "selectedLeafNodeIds", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "activeNodeIds", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "hiddenNodeIds", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", Object)
], TreeModel.prototype, "focusedNodeId", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$1("design:type", TreeNode)
], TreeModel.prototype, "virtualRoot", void 0);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "focusedNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "expandedNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "activeNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "hiddenNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$1("design:type", Object),
    __metadata$1("design:paramtypes", [])
], TreeModel.prototype, "selectedLeafNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setData", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "update", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setFocusedNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setFocus", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "doForAll", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "focusNextNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "focusPreviousNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "focusDrillDown", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "focusDrillUp", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setActiveNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setSelectedNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setExpandedNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "expandAll", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "collapseAll", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setIsHidden", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setHiddenNodeIds", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "filterNodes", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "clearFilter", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "moveNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object, Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "copyNode", null);
__decorate$1([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], TreeModel.prototype, "setState", null);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/tree-dragged-element.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeDraggedElement {
    constructor() {
        this._draggedElement = null;
    }
    /**
     * @param {?} draggedElement
     * @return {?}
     */
    set(draggedElement) {
        this._draggedElement = draggedElement;
    }
    /**
     * @return {?}
     */
    get() {
        return this._draggedElement;
    }
    /**
     * @return {?}
     */
    isDragging() {
        return !!this.get();
    }
}
TreeDraggedElement.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ TreeDraggedElement.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TreeDraggedElement_Factory() { return new TreeDraggedElement(); }, token: TreeDraggedElement, providedIn: "root" });
if (false) {}

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** @type {?} */
const Y_OFFSET = 500;
// Extra pixels outside the viewport, in each direction, to render nodes in
/** @type {?} */
const Y_EPSILON = 150;
// Minimum pixel change required to recalculate the rendered nodes
class TreeVirtualScroll {
    /**
     * @param {?} treeModel
     */
    constructor(treeModel) {
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])((/**
             * @return {?}
             */
            () => this.fixScroll()))];
    }
    /**
     * @return {?}
     */
    get y() {
        return this.yBlocks * Y_EPSILON;
    }
    /**
     * @return {?}
     */
    get totalHeight() {
        return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fireEvent(event) {
        this.treeModel.fireEvent(event);
    }
    /**
     * @return {?}
     */
    init() {
        /** @type {?} */
        const fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = [
            ...this._dispose,
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])((/**
             * @return {?}
             */
            () => this.treeModel.roots), fn),
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])((/**
             * @return {?}
             */
            () => this.treeModel.expandedNodeIds), fn),
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])((/**
             * @return {?}
             */
            () => this.treeModel.hiddenNodeIds), fn)
        ];
        this.treeModel.subscribe(TREE_EVENTS.loadNodeChildren, fn);
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.treeModel.options.useVirtualScroll;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setYBlocks(value) {
        this.yBlocks = value;
    }
    /**
     * @return {?}
     */
    recalcPositions() {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    }
    /**
     * @private
     * @param {?} nodes
     * @param {?} startPos
     * @return {?}
     */
    _getPositionAfter(nodes, startPos) {
        /** @type {?} */
        let position = startPos;
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            node.position = position;
            position = this._getPositionAfterNode(node, position);
        }));
        return position;
    }
    /**
     * @private
     * @param {?} node
     * @param {?} startPos
     * @return {?}
     */
    _getPositionAfterNode(node, startPos) {
        /** @type {?} */
        let position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) { // TBD: consider loading component as well
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    }
    /**
     * @return {?}
     */
    clear() {
        this._dispose.forEach((/**
         * @param {?} d
         * @return {?}
         */
        (d) => d()));
    }
    /**
     * @param {?} viewport
     * @return {?}
     */
    setViewport(viewport) {
        Object.assign(this, {
            viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect ? viewport.getBoundingClientRect().height : 0
        });
    }
    /**
     * @param {?} node
     * @param {?} force
     * @param {?=} scrollToMiddle
     * @return {?}
     */
    scrollIntoView(node, force, scrollToMiddle = true) {
        if (node.options.scrollContainer) {
            /** @type {?} */
            const scrollContainer = node.options.scrollContainer;
            /** @type {?} */
            const scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
            /** @type {?} */
            const scrollContainerTop = scrollContainer.getBoundingClientRect().top;
            /** @type {?} */
            const nodeTop = this.viewport.getBoundingClientRect().top + node.position - scrollContainerTop;
            if (force || // force scroll to node
                nodeTop < scrollContainer.scrollTop || // node is above scroll container
                nodeTop + node.getSelfHeight() > scrollContainer.scrollTop + scrollContainerHeight) { // node is below container
                scrollContainer.scrollTop = scrollToMiddle ?
                    nodeTop - scrollContainerHeight / 2 : // scroll to middle
                    nodeTop; // scroll to start
            }
        }
        else {
            if (force || // force scroll to node
                node.position < this.y || // node is above viewport
                node.position + node.getSelfHeight() > this.y + this.viewportHeight) { // node is below viewport
                if (this.viewport) {
                    this.viewport.scrollTop = scrollToMiddle ?
                        node.position - this.viewportHeight / 2 : // scroll to middle
                        node.position; // scroll to start
                    this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
                }
            }
        }
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    getViewportNodes(nodes) {
        if (!nodes)
            return [];
        /** @type {?} */
        const visibleNodes = nodes.filter((/**
         * @param {?} node
         * @return {?}
         */
        (node) => !node.isHidden));
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // When loading children async this method is called before their height and position is calculated.
        // In that case firstIndex === 0 and lastIndex === visibleNodes.length - 1 (e.g. 1000),
        // which means that it loops through every visibleNodes item and push them into viewportNodes array.
        // We can prevent nodes from being pushed to the array and wait for the appropriate calculations to take place
        /** @type {?} */
        const lastVisibleNode = visibleNodes.slice(-1)[0];
        if (!lastVisibleNode.height && lastVisibleNode.position === 0)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        /** @type {?} */
        const firstIndex = binarySearch(visibleNodes, (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            return (node.position + Y_OFFSET > this.y) ||
                (node.position + node.height > this.y);
        }));
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        /** @type {?} */
        const lastIndex = binarySearch(visibleNodes, (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            return node.position - Y_OFFSET > this.y + this.viewportHeight;
        }), firstIndex);
        /** @type {?} */
        const viewportNodes = [];
        for (let i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    }
    /**
     * @return {?}
     */
    fixScroll() {
        /** @type {?} */
        const maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    }
}
TreeVirtualScroll.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
TreeVirtualScroll.ctorParameters = () => [
    { type: TreeModel }
];
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$2("design:type", Object)
], TreeVirtualScroll.prototype, "yBlocks", void 0);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$2("design:type", Object)
], TreeVirtualScroll.prototype, "x", void 0);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
    __metadata$2("design:type", Object)
], TreeVirtualScroll.prototype, "viewportHeight", void 0);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$2("design:type", Object),
    __metadata$2("design:paramtypes", [])
], TreeVirtualScroll.prototype, "y", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
    __metadata$2("design:type", Object),
    __metadata$2("design:paramtypes", [])
], TreeVirtualScroll.prototype, "totalHeight", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object]),
    __metadata$2("design:returntype", void 0)
], TreeVirtualScroll.prototype, "_setYBlocks", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", []),
    __metadata$2("design:returntype", void 0)
], TreeVirtualScroll.prototype, "recalcPositions", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object]),
    __metadata$2("design:returntype", void 0)
], TreeVirtualScroll.prototype, "setViewport", null);
__decorate$2([
    mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object, Object, Object]),
    __metadata$2("design:returntype", void 0)
], TreeVirtualScroll.prototype, "scrollIntoView", null);
if (false) {}
/**
 * @param {?} nodes
 * @param {?} condition
 * @param {?=} firstIndex
 * @return {?}
 */
function binarySearch(nodes, condition, firstIndex = 0) {
    /** @type {?} */
    let index = firstIndex;
    /** @type {?} */
    let toIndex = nodes.length - 1;
    while (index !== toIndex) {
        /** @type {?} */
        let midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingComponent {
}
LoadingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'tree-loading-component',
                template: `
    <span *ngIf="!template">loading...</span>
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ $implicit: node }">
    </ng-container>
  `
            }] }
];
LoadingComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree-viewport.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeViewportComponent {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} virtualScroll
     */
    constructor(elementRef, ngZone, virtualScroll) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.virtualScroll = virtualScroll;
        this.setViewport = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["throttle"])((/**
         * @return {?}
         */
        () => {
            this.virtualScroll.setViewport(this.elementRef.nativeElement);
        }), 17);
        this.scrollEventHandler = this.setViewport.bind(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.virtualScroll.init();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setViewport();
            this.virtualScroll.fireEvent({ eventName: TREE_EVENTS.initialized });
        }));
        /** @type {?} */
        let el = this.elementRef.nativeElement;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            el.addEventListener('scroll', this.scrollEventHandler);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.virtualScroll.clear();
        /** @type {?} */
        let el = this.elementRef.nativeElement;
        el.removeEventListener('scroll', this.scrollEventHandler);
    }
    /**
     * @return {?}
     */
    getTotalHeight() {
        return ((this.virtualScroll.isEnabled() &&
            this.virtualScroll.totalHeight + 'px') ||
            'auto');
    }
}
TreeViewportComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-viewport',
                providers: [TreeVirtualScroll],
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div [style.height]="getTotalHeight()">
        <ng-content></ng-content>
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
TreeViewportComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: TreeVirtualScroll }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeComponent {
    /**
     * @param {?} treeModel
     * @param {?} treeDraggedElement
     */
    constructor(treeModel, treeDraggedElement) {
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        treeModel.eventNames.forEach((/**
         * @param {?} name
         * @return {?}
         */
        (name) => this[name] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()));
        treeModel.subscribeToState((/**
         * @param {?} state
         * @return {?}
         */
        (state) => this.stateChange.emit(state)));
    }
    // Will be handled in ngOnChanges
    /**
     * @param {?} nodes
     * @return {?}
     */
    set nodes(nodes) {
    }
    ;
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
    }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set focused(value) {
        this.treeModel.setFocus(value);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    set state(state) {
        this.treeModel.setState(state);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeydown($event) {
        if (!this.treeModel.isFocused)
            return;
        if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["includes"])(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        /** @type {?} */
        const focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMousedown($event) {
        /**
         * @param {?} startElement
         * @param {?} nodeName
         * @return {?}
         */
        function isOutsideClick(startElement, nodeName) {
            return !startElement ? true : startElement.localName === nodeName ? false : isOutsideClick(startElement.parentElement, nodeName);
        }
        if (isOutsideClick($event.target, 'tree-root')) {
            this.treeModel.setFocus(false);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.options || changes.nodes) {
            this.treeModel.setData({
                options: changes.options && changes.options.currentValue,
                nodes: changes.nodes && changes.nodes.currentValue,
                events: Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["pick"])(this, this.treeModel.eventNames)
            });
        }
    }
    /**
     * @return {?}
     */
    sizeChanged() {
        this.viewportComponent.setViewport();
    }
}
TreeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'Tree, tree-root',
                providers: [TreeModel],
                template: `
      <tree-viewport #viewport>
          <div
                  class="angular-tree-component"
                  [class.node-dragging]="treeDraggedElement.isDragging()"
                  [class.angular-tree-component-rtl]="treeModel.options.rtl">
              <tree-node-collection
                      *ngIf="treeModel.roots"
                      [nodes]="treeModel.roots"
                      [treeModel]="treeModel"
                      [templates]="{
            loadingTemplate: loadingTemplate,
            treeNodeTemplate: treeNodeTemplate,
            treeNodeWrapperTemplate: treeNodeWrapperTemplate,
            treeNodeFullTemplate: treeNodeFullTemplate
          }">
              </tree-node-collection>
              <tree-node-drop-slot
                      class="empty-tree-drop-slot"
                      *ngIf="treeModel.isEmptyTree()"
                      [dropIndex]="0"
                      [node]="treeModel.virtualRoot">
              </tree-node-drop-slot>
          </div>
      </tree-viewport>
  `
            }] }
];
/** @nocollapse */
TreeComponent.ctorParameters = () => [
    { type: TreeModel },
    { type: TreeDraggedElement }
];
TreeComponent.propDecorators = {
    loadingTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['loadingTemplate', { static: false },] }],
    treeNodeTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['treeNodeTemplate', { static: false },] }],
    treeNodeWrapperTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['treeNodeWrapperTemplate', { static: false },] }],
    treeNodeFullTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['treeNodeFullTemplate', { static: false },] }],
    viewportComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['viewport', { static: false },] }],
    nodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    focused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toggleExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    deactivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nodeActivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nodeDeactivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    deselect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    updateData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    initialized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    moveNode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    copyNode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    loadNodeChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    changeFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['body: keydown', ['$event'],] }],
    onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['body: mousedown', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree-node.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeNodeComponent {
}
TreeNodeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'TreeNode, tree-node',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div
        *ngIf="!templates.treeNodeFullTemplate"
        [class]="node.getClass()"
        [class.tree-node]="true"
        [class.tree-node-expanded]="node.isExpanded && node.hasChildren"
        [class.tree-node-collapsed]="node.isCollapsed && node.hasChildren"
        [class.tree-node-leaf]="node.isLeaf"
        [class.tree-node-active]="node.isActive"
        [class.tree-node-focused]="node.isFocused"
      >
        <tree-node-drop-slot
          *ngIf="index === 0"
          [dropIndex]="node.index"
          [node]="node.parent"
        ></tree-node-drop-slot>

        <tree-node-wrapper
          [node]="node"
          [index]="index"
          [templates]="templates"
        ></tree-node-wrapper>

        <tree-node-children
          [node]="node"
          [templates]="templates"
        ></tree-node-children>
        <tree-node-drop-slot
          [dropIndex]="node.index + 1"
          [node]="node.parent"
        ></tree-node-drop-slot>
      </div>
      <ng-container
        [ngTemplateOutlet]="templates.treeNodeFullTemplate"
        [ngTemplateOutletContext]="{
          $implicit: node,
          node: node,
          index: index,
          templates: templates
        }"
      >
      </ng-container>
    </ng-container>
  `
            }] }
];
TreeNodeComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree-node-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeNodeContent {
}
TreeNodeContent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-content',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
  <span *ngIf="!template">{{ node.displayField }}</span>
  <ng-container
    [ngTemplateOutlet]="template"
    [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index }">
  </ng-container>`
            }] }
];
TreeNodeContent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree-node-drop-slot.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeNodeDropSlot {
    /**
     * @param {?} $event
     * @return {?}
     */
    onDrop($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    }
    /**
     * @param {?} element
     * @param {?} $event
     * @return {?}
     */
    allowDrop(element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    }
}
TreeNodeDropSlot.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'TreeNodeDropSlot, tree-node-drop-slot',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <div
      class="node-drop-slot"
      (treeDrop)="onDrop($event)"
      [treeAllowDrop]="allowDrop.bind(this)"
      [allowDragoverStyling]="true">
    </div>
  `
            }] }
];
TreeNodeDropSlot.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree-node-expander.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeNodeExpanderComponent {
}
TreeNodeExpanderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-expander',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <span
        *ngIf="node.hasChildren"
        [class.toggle-children-wrapper-expanded]="node.isExpanded"
        [class.toggle-children-wrapper-collapsed]="node.isCollapsed"
        class="toggle-children-wrapper"
        (click)="node.mouseAction('expanderClick', $event)"
      >
        <span class="toggle-children"></span>
      </span>
      <span *ngIf="!node.hasChildren" class="toggle-children-placeholder">
      </span>
    </ng-container>
  `
            }] }
];
TreeNodeExpanderComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree-node-children.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeNodeChildrenComponent {
}
TreeNodeChildrenComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-children',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div
        [class.tree-children]="true"
        [class.tree-children-no-padding]="node.options.levelPadding"
        *treeAnimateOpen="
          node.isExpanded;
          speed: node.options.animateSpeed;
          acceleration: node.options.animateAcceleration;
          enabled: node.options.animateExpand
        "
      >
        <tree-node-collection
          *ngIf="node.children"
          [nodes]="node.children"
          [templates]="templates"
          [treeModel]="node.treeModel"
        >
        </tree-node-collection>
        <tree-loading-component
          [style.padding-left]="node.getNodePadding()"
          class="tree-node-loading"
          *ngIf="!node.children"
          [template]="templates.loadingTemplate"
          [node]="node"
        ></tree-loading-component>
      </div>
    </ng-container>
  `
            }] }
];
TreeNodeChildrenComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/mobx-angular/mobx-proxy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Re-export mobx operators to be able to use inside components with AOT:
/**
 * @param {...?} args
 * @return {?}
 */
function actionInternal(...args) {
    return ((/** @type {?} */ (Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"]))))(...args);
}
/** @type {?} */
const action = (/** @type {?} */ (Object.assign(actionInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["action"])));
/**
 * @param {...?} args
 * @return {?}
 */
function computedInternal(...args) {
    return ((/** @type {?} */ (Object(mobx__WEBPACK_IMPORTED_MODULE_2__["computed"]))))(...args);
}
/** @type {?} */
const computed = (/** @type {?} */ (Object.assign(computedInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["computed"])));
/**
 * @param {...?} args
 * @return {?}
 */
function observableInternal(...args) {
    return ((/** @type {?} */ (Object(mobx__WEBPACK_IMPORTED_MODULE_2__["observable"]))))(...args);
}
/** @type {?} */
const observable = (/** @type {?} */ (Object.assign(observableInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["observable"])));

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class TreeNodeCollectionComponent {
    constructor() {
        this._dispose = [];
    }
    /**
     * @return {?}
     */
    get nodes() {
        return this._nodes;
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    set nodes(nodes) {
        this.setNodes(nodes);
    }
    /**
     * @return {?}
     */
    get marginTop() {
        /** @type {?} */
        const firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
        /** @type {?} */
        const relativePosition = firstNode && firstNode.parent
            ? firstNode.position -
                firstNode.parent.position -
                firstNode.parent.getSelfHeight()
            : 0;
        return `${relativePosition}px`;
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    setNodes(nodes) {
        this._nodes = nodes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.virtualScroll = this.treeModel.virtualScroll;
        this._dispose = [
            // return node indexes so we can compare structurally,
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])((/**
             * @return {?}
             */
            () => {
                return this.virtualScroll
                    .getViewportNodes(this.nodes)
                    .map((/**
                 * @param {?} n
                 * @return {?}
                 */
                n => n.index));
            }), (/**
             * @param {?} nodeIndexes
             * @return {?}
             */
            nodeIndexes => {
                this.viewportNodes = nodeIndexes.map((/**
                 * @param {?} i
                 * @return {?}
                 */
                i => this.nodes[i]));
            }), (/** @type {?} */ ({ compareStructural: true, fireImmediately: true }))),
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])((/**
             * @return {?}
             */
            () => this.nodes), (/**
             * @param {?} nodes
             * @return {?}
             */
            nodes => {
                this.viewportNodes = this.virtualScroll.getViewportNodes(nodes);
            }))
        ];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dispose.forEach((/**
         * @param {?} d
         * @return {?}
         */
        d => d()));
    }
    /**
     * @param {?} index
     * @param {?} node
     * @return {?}
     */
    trackNode(index, node) {
        return node.id;
    }
}
TreeNodeCollectionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-collection',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div [style.margin-top]="marginTop">
        <tree-node
          *ngFor="let node of viewportNodes; let i = index; trackBy: trackNode"
          [node]="node"
          [index]="i"
          [templates]="templates"
        >
        </tree-node>
      </div>
    </ng-container>
  `
            }] }
];
TreeNodeCollectionComponent.propDecorators = {
    nodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
__decorate$3([
    observable,
    __metadata$3("design:type", Object)
], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
__decorate$3([
    observable,
    __metadata$3("design:type", Array)
], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
__decorate$3([
    computed,
    __metadata$3("design:type", String),
    __metadata$3("design:paramtypes", [])
], TreeNodeCollectionComponent.prototype, "marginTop", null);
__decorate$3([
    action,
    __metadata$3("design:type", Function),
    __metadata$3("design:paramtypes", [Object]),
    __metadata$3("design:returntype", void 0)
], TreeNodeCollectionComponent.prototype, "setNodes", null);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree-node-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeNodeWrapperComponent {
    constructor() {
    }
}
TreeNodeWrapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-wrapper',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
      <div *ngIf="!templates.treeNodeWrapperTemplate" class="node-wrapper" [style.padding-left]="node.getNodePadding()">
          <tree-node-checkbox *ngIf="node.options.useCheckbox" [node]="node"></tree-node-checkbox>
          <tree-node-expander [node]="node"></tree-node-expander>
          <div class="node-content-wrapper"
               [class.node-content-wrapper-active]="node.isActive"
               [class.node-content-wrapper-focused]="node.isFocused"
               (click)="node.mouseAction('click', $event)"
               (dblclick)="node.mouseAction('dblClick', $event)"
               (mouseover)="node.mouseAction('mouseOver', $event)"
               (mouseout)="node.mouseAction('mouseOut', $event)"
               (contextmenu)="node.mouseAction('contextMenu', $event)"
               (treeDrop)="node.onDrop($event)"
               (treeDropDragOver)="node.mouseAction('dragOver', $event)"
               (treeDropDragLeave)="node.mouseAction('dragLeave', $event)"
               (treeDropDragEnter)="node.mouseAction('dragEnter', $event)"
               [treeAllowDrop]="node.allowDrop"
               [allowDragoverStyling]="node.allowDragoverStyling()"
               [treeDrag]="node"
               [treeDragEnabled]="node.allowDrag()">

              <tree-node-content [node]="node" [index]="index" [template]="templates.treeNodeTemplate">
              </tree-node-content>
          </div>
      </div>
      <ng-container
              [ngTemplateOutlet]="templates.treeNodeWrapperTemplate"
              [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index, templates: templates }">
      </ng-container>
  `
            }] }
];
/** @nocollapse */
TreeNodeWrapperComponent.ctorParameters = () => [];
TreeNodeWrapperComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree-node-checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeNodeCheckboxComponent {
}
TreeNodeCheckboxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tree-node-checkbox',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <input
        class="tree-node-checkbox"
        type="checkbox"
        (click)="node.mouseAction('checkboxClick', $event)"
        [checked]="node.isSelected"
        [indeterminate]="node.isPartiallySelected"
      />
    </ng-container>
  `
            }] }
];
TreeNodeCheckboxComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tree-drop.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DRAG_OVER_CLASS = 'is-dragging-over';
/** @type {?} */
const DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';
class TreeDropDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} treeDraggedElement
     * @param {?} ngZone
     */
    constructor(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.allowDragoverStyling = true;
        this.onDropCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragOverCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragLeaveCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnterCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._allowDrop = (/**
         * @param {?} element
         * @param {?} $event
         * @return {?}
         */
        (element, $event) => true);
        this.dragOverEventHandler = this.onDragOver.bind(this);
        this.dragEnterEventHandler = this.onDragEnter.bind(this);
        this.dragLeaveEventHandler = this.onDragLeave.bind(this);
    }
    /**
     * @param {?} allowDrop
     * @return {?}
     */
    set treeAllowDrop(allowDrop) {
        if (allowDrop instanceof Function) {
            this._allowDrop = allowDrop;
        }
        else
            this._allowDrop = (/**
             * @param {?} element
             * @param {?} $event
             * @return {?}
             */
            (element, $event) => allowDrop);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    allowDrop($event) {
        return this._allowDrop(this.treeDraggedElement.get(), $event);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let el = this.el.nativeElement;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            el.addEventListener('dragover', this.dragOverEventHandler);
            el.addEventListener('dragenter', this.dragEnterEventHandler);
            el.addEventListener('dragleave', this.dragLeaveEventHandler);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        let el = this.el.nativeElement;
        el.removeEventListener('dragover', this.dragOverEventHandler);
        el.removeEventListener('dragenter', this.dragEnterEventHandler);
        el.removeEventListener('dragleave', this.dragLeaveEventHandler);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDragOver($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.addDisabledClass();
            }
            return;
        }
        this.onDragOverCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        $event.preventDefault();
        if (this.allowDragoverStyling) {
            this.addClass();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDragEnter($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDragEnterCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDragLeave($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.removeDisabledClass();
            }
            return;
        }
        this.onDragLeaveCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDrop($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDropCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
        this.treeDraggedElement.set(null);
    }
    /**
     * @private
     * @return {?}
     */
    addClass() {
        this.renderer.addClass(this.el.nativeElement, DRAG_OVER_CLASS);
    }
    /**
     * @private
     * @return {?}
     */
    removeClass() {
        this.renderer.removeClass(this.el.nativeElement, DRAG_OVER_CLASS);
    }
    /**
     * @private
     * @return {?}
     */
    addDisabledClass() {
        this.renderer.addClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    }
    /**
     * @private
     * @return {?}
     */
    removeDisabledClass() {
        this.renderer.removeClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    }
}
TreeDropDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[treeDrop]'
            },] }
];
/** @nocollapse */
TreeDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: TreeDraggedElement },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
TreeDropDirective.propDecorators = {
    allowDragoverStyling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onDropCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['treeDrop',] }],
    onDragOverCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['treeDropDragOver',] }],
    onDragLeaveCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['treeDropDragLeave',] }],
    onDragEnterCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['treeDropDragEnter',] }],
    treeAllowDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tree-drag.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DRAG_OVER_CLASS$1 = 'is-dragging-over';
class TreeDragDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} treeDraggedElement
     * @param {?} ngZone
     */
    constructor(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.dragEventHandler = this.onDrag.bind(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let el = this.el.nativeElement;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            el.addEventListener('drag', this.dragEventHandler);
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.renderer.setAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        let el = this.el.nativeElement;
        el.removeEventListener('drag', this.dragEventHandler);
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onDragStart(ev) {
        // setting the data is required by firefox
        ev.dataTransfer.setData('text', ev.target.id);
        this.treeDraggedElement.set(this.draggedElement);
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragStart', ev);
        }
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onDrag(ev) {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('drag', ev);
        }
    }
    /**
     * @return {?}
     */
    onDragEnd() {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragEnd');
        }
        this.treeDraggedElement.set(null);
    }
}
TreeDragDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[treeDrag]'
            },] }
];
/** @nocollapse */
TreeDragDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: TreeDraggedElement },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
TreeDragDirective.propDecorators = {
    draggedElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeDrag',] }],
    treeDragEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragstart', ['$event'],] }],
    onDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragend',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tree-animate-open.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EASE_ACCELERATION = 1.005;
class TreeAnimateOpenDirective {
    /**
     * @param {?} renderer
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(renderer, templateRef, viewContainerRef) {
        this.renderer = renderer;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this._show();
            if (this.isEnabled && this._isOpen === false) {
                this._animateOpen();
            }
        }
        else {
            this.isEnabled ? this._animateClose() : this._hide();
        }
        this._isOpen = !!value;
    }
    ;
    /**
     * @private
     * @return {?}
     */
    _show() {
        if (this.innerElement)
            return;
        // create child view
        this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    }
    /**
     * @private
     * @return {?}
     */
    _hide() {
        this.viewContainerRef.clear();
        this.innerElement = null;
    }
    /**
     * @private
     * @return {?}
     */
    _animateOpen() {
        /** @type {?} */
        let delta = this.animateSpeed;
        /** @type {?} */
        let ease = this.animateAcceleration;
        /** @type {?} */
        let maxHeight = 0;
        // set height to 0
        this.renderer.setStyle(this.innerElement, 'max-height', `0`);
        // increase maxHeight until height doesn't change
        setTimeout((/**
         * @return {?}
         */
        () => {
            // Allow inner element to create its content
            /** @type {?} */
            const i = setInterval((/**
             * @return {?}
             */
            () => {
                if (!this._isOpen || !this.innerElement)
                    return clearInterval(i);
                maxHeight += delta;
                /** @type {?} */
                const roundedMaxHeight = Math.round(maxHeight);
                this.renderer.setStyle(this.innerElement, 'max-height', `${roundedMaxHeight}px`);
                /** @type {?} */
                const height = this.innerElement.getBoundingClientRect ? this.innerElement.getBoundingClientRect().height : 0;
                delta *= ease;
                ease *= EASE_ACCELERATION;
                if (height < roundedMaxHeight) {
                    // Make maxHeight auto because animation finished and container might change height later on
                    this.renderer.setStyle(this.innerElement, 'max-height', null);
                    clearInterval(i);
                }
            }), 17);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _animateClose() {
        if (!this.innerElement)
            return;
        /** @type {?} */
        let delta = this.animateSpeed;
        /** @type {?} */
        let ease = this.animateAcceleration;
        /** @type {?} */
        let height = this.innerElement.getBoundingClientRect().height;
        // TBD use renderer
        // slowly decrease maxHeight to 0, starting from current height
        /** @type {?} */
        const i = setInterval((/**
         * @return {?}
         */
        () => {
            if (this._isOpen || !this.innerElement)
                return clearInterval(i);
            height -= delta;
            this.renderer.setStyle(this.innerElement, 'max-height', `${height}px`);
            delta *= ease;
            ease *= EASE_ACCELERATION;
            if (height <= 0) {
                // after animation complete - remove child element
                this.viewContainerRef.clear();
                this.innerElement = null;
                clearInterval(i);
            }
        }), 17);
    }
}
TreeAnimateOpenDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[treeAnimateOpen]'
            },] }
];
/** @nocollapse */
TreeAnimateOpenDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
TreeAnimateOpenDirective.propDecorators = {
    animateSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeAnimateOpenSpeed',] }],
    animateAcceleration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeAnimateOpenAcceleration',] }],
    isEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeAnimateOpenEnabled',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeAnimateOpen',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-tree-component.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeModule {
}
TreeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    TreeComponent,
                    TreeNodeComponent,
                    TreeNodeContent,
                    LoadingComponent,
                    TreeDropDirective,
                    TreeDragDirective,
                    TreeNodeExpanderComponent,
                    TreeNodeChildrenComponent,
                    TreeNodeDropSlot,
                    TreeNodeCollectionComponent,
                    TreeViewportComponent,
                    TreeNodeWrapperComponent,
                    TreeNodeCheckboxComponent,
                    TreeAnimateOpenDirective,
                    TreeMobxAutorunDirective
                ],
                exports: [
                    TreeComponent,
                    TreeNodeComponent,
                    TreeNodeContent,
                    LoadingComponent,
                    TreeDropDirective,
                    TreeDragDirective,
                    TreeNodeExpanderComponent,
                    TreeNodeChildrenComponent,
                    TreeNodeDropSlot,
                    TreeNodeCollectionComponent,
                    TreeViewportComponent,
                    TreeNodeWrapperComponent,
                    TreeNodeCheckboxComponent,
                    TreeAnimateOpenDirective,
                    TreeMobxAutorunDirective
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: circlon-angular-tree-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=circlon-angular-tree-component.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"toolbar mat-primary\">\r\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\" (click)=\"sidenav.toggle()\">\r\n        <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <mat-icon svgIcon=\"tree-logo\" aria-hidden=\"false\" class=\"main-logo\"></mat-icon>\r\n    <span>Angular Tree Component</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <a href=\"https://github.com/CirclonGroup/angular-tree-component\" title=\"GitHub\" target=\"_blank\" class=\"toolbar-link\">\r\n        <mat-icon svgIcon=\"github\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\r\n    </a>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"sidenav\">\r\n        <div class=\"sidenav-menu\">\r\n            <app-nav-item *ngFor=\"let navEntry of nav\"\r\n                          [node]=\"navEntry\" [selectedNodes]=\"currentNodes\"></app-nav-item>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"sidenav-content\" [ngClass]=\"{'sidenav-open': sidenav.opened}\">\r\n        <main role=\"main\" class=\"main-content\">\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<footer>\r\n    <app-footer></app-footer>\r\n</footer>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/examples/basic-usage/basic-usage.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/examples/basic-usage/basic-usage.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Basic usage</h1>\r\n\r\n<h2>Working tree</h2>\r\n\r\n<tree-root [nodes]=\"nodes\"></tree-root>\r\n\r\n<h2>How to implement</h2>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions-demo/actions-demo.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions-demo/actions-demo.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tree-root\r\n  #tree\r\n  [nodes]=\"nodes\"\r\n  [options]=\"options\"\r\n  [focused]=\"true\"\r\n>\r\n</tree-root>\r\n<br>\r\n<b>Custom Keys:</b><br>\r\nenter - show alert<br>\r\n<br>\r\n<b>Custom Mouse Actions:</b><br>\r\nshift+click - select multi<br>\r\ndouble click - expand / collapse<br>\r\nright-click - show alert\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Customize Actions</h1>\r\n\r\n<h2>Demo</h2>\r\n\r\n<div class=\"demo-container\">\r\n    <app-actions-demo></app-actions-demo>\r\n</div>\r\n\r\n<h2>Override key and mouse actions</h2>\r\n\r\n<p>Angular Tree Component comes with a default mapping of mouse events and key events to actions. For example - click on the node activates / deactivates it, click on the expander expands / collapses it, pressing space or enter will toggle the node activation (same as click), etc.</p>\r\n<p>Using the <code>actionMapping</code> option, you can override how the tree reacts to mouse and key events, by providing a custom mapping.</p>\r\n\r\n<code-example>{{ actionMapping }}</code-example>\r\n\r\n\r\n<h2>actionMapping (IActionMapping)</h2>\r\n\r\n<p>The <code>actionMapping</code> attribute needs to implement the <code>IActionMapping</code> interface, which is an object that maps predefined mouse events, and key codes, to callbacks.</p>\r\n\r\n\r\n<h2>The callback (IActionHandler)</h2>\r\n\r\n<p>The callback always receives three parameters: <code>TreeModel</code>, <code>TreeNode</code>, and <code>$event</code>.</p>\r\n\r\n\r\n<h2>TREE_ACTIONS</h2>\r\n\r\n<p>Notice the <code>TREE_ACTIONS</code> object. It holds predefined callbacks that do common actions.</p>\r\n<p>The available attributes are:</p>\r\n\r\n<ul>\r\n    <li><code>TOGGLE_ACTIVE</code></li>\r\n    <li><code>TOGGLE_ACTIVE_MULTI</code></li>\r\n    <li><code>ACTIVATE</code></li>\r\n    <li><code>DEACTIVATE</code></li>\r\n    <li><code>TOGGLE_SELECTED</code></li>\r\n    <li><code>SELECT</code></li>\r\n    <li><code>DESELECT</code></li>\r\n    <li><code>FOCUS</code></li>\r\n    <li><code>TOGGLE_EXPANDED</code></li>\r\n    <li><code>EXPAND</code></li>\r\n    <li><code>COLLAPSE</code></li>\r\n    <li><code>DRILL_DOWN</code></li>\r\n    <li><code>DRILL_UP</code></li>\r\n    <li><code>NEXT_NODE</code></li>\r\n    <li><code>PREVIOUS_NODE</code></li>\r\n    <li><code>MOVE_NODE</code></li>\r\n</ul>\r\n\r\n\r\n<h2>Mouse actions</h2>\r\n\r\n<p>In mouse actions, the <code>TreeNode</code> parameter of the callback is the node that the event was activated on (e.g. clicked on).</p>\r\n<p>The possible attributes for <code>actionMapping.mouse</code> are:</p>\r\n\r\n<ul>\r\n    <li><code>click</code></li>\r\n    <li><code>dblClick</code></li>\r\n    <li><code>expanderClick</code></li>\r\n    <li><code>checkboxClick</code></li>\r\n    <li><code>contextMenu</code> (right click)</li>\r\n    <li><code>dragStart</code></li>\r\n    <li><code>drag</code></li>\r\n    <li><code>dragOver</code></li>\r\n    <li><code>dragEnd</code></li>\r\n    <li><code>dragLeave</code></li>\r\n    <li><code>dragEnter</code></li>\r\n    <li><code>drop</code></li>\r\n</ul>\r\n\r\n<code-example>{{ mouseActions }}</code-example>\r\n\r\n\r\n<h2>Shift+Click (Alt / Ctrl)</h2>\r\n\r\n<p>If you want to perform actions based on modifier keys, use <code>$event.shiftKey</code>, <code>$event.ctrlKey</code> etc., provided on the third callback argument - <code>$event</code>.</p>\r\n\r\n\r\n<h2>Keyboard events</h2>\r\n\r\n<p>In keyboard events, the <code>TreeNode</code> parameter of the callback is the currently focused node. In case no node is focused, this will be <code>null</code>.</p>\r\n<p>The attributes for <code>actionMapping.keys</code> are integers which represent the key code (e.g. 32 for Space)</p>\r\n<p>Angular Tree Component exposes a <code>KEYS</code> constant with predefined common key codes:</p>\r\n\r\n<code-example language=\"json\">{{ keys }}</code-example>\r\n\r\n<p>So you can use those, or pass any keycode you'd like.</p>\r\n<p>For example:</p>\r\n\r\n<code-example>{{ keysExample }}</code-example>\r\n\r\n\r\n<h2>Default mapping</h2>\r\n\r\n<p>Here is the default mapping that ships with Angular Tree Component:</p>\r\n\r\n<code-example>{{ defaultMapping }}</code-example>\r\n\r\n\r\n<h2>Context menu</h2>\r\n\r\n<p>In case you want to open your own context menu, you must first run <code>$event.preventDefault()</code> within the callback.</p>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api-demo/api-demo.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api-demo/api-demo.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tree-root\r\n  #tree\r\n  [nodes]=\"nodes\"\r\n  [options]=\"options\"\r\n  [focused]=\"true\"\r\n>\r\n</tree-root>\r\n<p>API:</p>\r\n<button (click)=\"tree.treeModel.focusNextNode()\">next node</button>\r\n<button (click)=\"tree.treeModel.focusPreviousNode()\">previous node</button>\r\n<button (click)=\"tree.treeModel.focusDrillDown()\">drill down</button>\r\n<button (click)=\"tree.treeModel.focusDrillUp()\">drill up</button>\r\n<button (click)=\"options.allowDrag = true\">allowDrag</button>\r\n<p></p>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().toggleActivated()\">\r\n    {{ tree.treeModel.getFocusedNode()?.isActive ? 'deactivate' : 'activate' }}\r\n</button>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().toggleExpanded()\">\r\n    {{ tree.treeModel.getFocusedNode()?.isExpanded ? 'collapse' : 'expand' }}\r\n</button>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().blur()\">\r\n    blur\r\n</button>\r\n<button\r\n        (click)=\"addNode(tree)\">\r\n    Add Node\r\n</button>\r\n<button\r\n        (click)=\"activateSubSub(tree)\">\r\n    Activate inner node\r\n</button>\r\n<button\r\n        (click)=\"tree.treeModel.expandAll()\">\r\n    Expand All\r\n</button>\r\n<button\r\n        (click)=\"tree.treeModel.collapseAll()\">\r\n    Collapse All\r\n</button>\r\n<button\r\n        (click)=\"activeNodes(tree.treeModel)\">\r\n    getActiveNodes()\r\n</button>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Calling API Methods</h1>\r\n\r\n<h2>Demo</h2>\r\n\r\n<div class=\"demo-container\">\r\n    <app-api-demo></app-api-demo>\r\n</div>\r\n\r\n<code-example>{{ html }}</code-example>\r\n\r\n<p>Or by accessing the <code>treeNode</code> that is passed through <a [routerLink]=\"['/', 'fundamentals', 'events']\">Events</a> or using <a [routerLink]=\"['/', 'fundamentals', 'actions']\">Action Mapping</a>.</p>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/events/events.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/events/events.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Events</h1>\r\n\r\n<h2>Registering events</h2>\r\n\r\n<p>You can react to whatever happened on the tree by registering to events.</p>\r\n<p>If you're looking to override behaviour - see Customize actions section.</p>\r\n<p>Events use Angular's output:</p>\r\n\r\n<code-example>{{ event }}</code-example>\r\n\r\n\r\n<h2>treeModel</h2>\r\n\r\n<p>All events have a <code>treeModel</code> attribute that allows you to access the tree API.</p>\r\n<p>Specific events and other attributes are listed below:</p>\r\n\r\n\r\n<h2>toggleExpanded</h2>\r\n\r\n<p>Triggers when expanding / collapsing a tree node.</p>\r\n\r\n<code-example language=\"json\">{{ toggleExpanded }}</code-example>\r\n\r\n\r\n<h2>activate / nodeActivate</h2>\r\n<p>Triggers when activating a tree node, by clicking on the node, or by using the Enter / Space keys.</p>\r\n<p>nodeActivate is an alias to support older browser versions.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>deactivate / nodeDeactivate</h2>\r\n<p>Triggers when deactivating a tree node, by clicking on the node, or by using the Enter or Space keys.</p>\r\n<p>nodeDeactivate is an alias to support older browser versions.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>focus</h2>\r\n<p>Triggers when focusing on a node, by moving with the arrow keys.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>blur</h2>\r\n<p>Triggers when focusing on a node, by moving with the arrow keys.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n<h2>initialized</h2>\r\n<p>Triggers after tree model was created.</p>\r\n<p>Good for performing actions immediately on init, like expanding / activating certain nodes, etc.</p>\r\n<p>You can access the tree model using a ref, as described in the API section.</p>\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n\r\n\r\n<h2>updateData</h2>\r\nTriggers after tree model was updated, either by changing the inputs of the tree (nodes, options, etc.) or a direct call to <code>update()</code>.\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n\r\n\r\n<h2>moveNode</h2>\r\n<p>This event is fired any time moveNode is called on the tree.</p>\r\n<p>Typically - when drag and dropping a node.</p>\r\n<code-example language=\"json\">{{ move }}</code-example>\r\n\r\n\r\n<h2>copyNode</h2>\r\n<p>This event is fired any time copyNode is called on the tree.</p>\r\n<p>Typically - when drag and dropping a node while ctrl key is pressed.</p>\r\n<code-example language=\"json\">{{ copy }}</code-example>\r\n\r\n\r\n<h2>event</h2>\r\n<p>Catch-all event that is triggered on every other event that is triggered.</p>\r\n<p>Useful for doing the same action for different events by checking the eventName.</p>\r\n<p>The parameters will match whatever event was sent originally.</p>\r\n<code-example language=\"json\">{{ baseEvent }}</code-example>\r\n\r\n\r\n<h2>loadNodeChildren</h2>\r\n<p>Callback after async children were added to the tree. The <code>node</code> returned is the parent node.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>changeFilter</h2>\r\n<p>Fired after filter has changed or cleared</p>\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/focus/focus.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/focus/focus.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Focused</h1>\r\n\r\n<code-example>{{ focus }}</code-example>\r\n\r\n<h2>@Input() focused</h2>\r\n\r\n<p>Whether the tree should be focused. Key navigation only works when the tree is focused.</p>\r\n<p>Default value: <code>false</code>.</p>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/issues/issues.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/issues/issues.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Common Issues</h1>\r\n\r\n<h2>Tree not rendered</h2>\r\n<p>Case: when tree is hidden (for example inside tab or modal), it is not rendered when it becomes visible.</p>\r\n<p>Solution: after it becomes visible (preferably using <code>setTimeout</code>) - call <code>tree.sizeChanged()</code>, which recalculates the rendered nodes according to the actual viewport size.</p>\r\n\r\n<h2>Tree state (expanded / selected nodes) gets lost</h2>\r\n<p>Maybe you are not supplying unique IDs to the nodes.</p>\r\n<p>The tree maintains its state by using IDs, and if you don't supply ones the tree will generate random ones automatically. Which means that if you update the data - the state will be lost.</p>\r\n\r\n<h2>Scroll Into View doesn't work</h2>\r\n<p>See <code>scrollContainer</code> option in <a [routerLink]=\"['/', 'fundamentals', 'options']\">Options</a> for more information.</p>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/nodes/nodes.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/nodes/nodes.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Nodes</h1>\r\n\r\n<p>Inputs to Tree component:</p>\r\n\r\n<code-example>&lt;tree-root [nodes]=nodes [options]=\"options\"&gt;&lt;/tree-root&gt;</code-example>\r\n\r\n<h2>nodes</h2>\r\n\r\n<p>Array of root nodes of the tree.</p>\r\n<p>Each node may contain the following fields:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <th>Property</th>\r\n        <th>Description</th>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>id</td>\r\n        <td>\r\n            Unique ID for the node.<br>\r\n            If one is not supplied it will be created by the tree library.\r\n        </td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>name</td>\r\n        <td>Will be displayed by default in the tree.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>children</td>\r\n        <td>An array of the node's children.<br>\r\n            Each child is an object with the same structure as the parent node.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>hasChildren</td>\r\n        <td>For async data load. Denotes that this node might have children, even when 'children' attr is empty.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>isExpanded</td>\r\n        <td>Determines whether the node starts as expanded by default. Notice that this field is not bindable, meaning that changing it doesn't affect the tree and vice versa.</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example language=\"json\">{{ nodes }}</code-example>\r\n\r\n<h2>Focused</h2>\r\n\r\n<p>Whether the tree should be focused. Key navigation only works when the tree is focused.</p>\r\n<p>Default value: <code>false</code>.</p>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/options/options.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/options/options.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Options</h1>\r\n\r\n<code-example>&lt;tree-root [nodes]=nodes [options]=\"options\"&gt;&lt;/tree-root&gt;</code-example>\r\n\r\n<h2>options</h2>\r\n\r\n<p>Object of type <code>ITreeOptions</code></p>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example>{{ options }}</code-example>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"filter nodes\"/>\r\n<tree-root [options]=\"options\" [(state)]=\"state\" #tree [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>2-way binding to state</h1>\r\n\r\n<p>You can control the tree state using 2-way binding.</p>\r\n<p>The state includes the following:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <td>expandedNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>selectedLeafNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>activeNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>hiddenNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>focusedNodeId</td>\r\n        <td>node ID</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>You can change the state reference and the tree will respond automatically, and also access the tree state at any time, as it is always updated via the 2-way binding.</p>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example>{{ example }}</code-example>\r\n\r\n\r\n<h2>!important note</h2>\r\n<p>You must have an 'id' property on the nodes in order for this to work. Otherwise - the tree will automatically generate internal IDs which change every time you change the nodes array.</p>\r\n\r\n\r\n<h2>Persist state to localstorage</h2>\r\n<p>This example is using the 2 way binding to tree state to auto save & restore from localstorage:</p>\r\n<code-example>{{ localStorage }}</code-example>\r\n\r\n<h3>Demo</h3>\r\n\r\n<div class=\"demo-container\">\r\n    <app-state-binding-demo></app-state-binding-demo>\r\n</div>\r\n\r\n\r\n<h2>Using API</h2>\r\n<p>Alternatively, you can use <code>getState</code>, <code>setState</code> and <code>subscribe</code> on treeModel API. <code>subscribe</code> will callback a function every time state changes.</p>\r\n<code-example>{{ api }}</code-example>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/styling/styling.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/styling/styling.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Styling</h1>\r\n\r\n<p>The tree comes with very basic style.</p>\r\n<p>The following classes are available for customization:</p>\r\n\r\n<ul>\r\n    <li>.angular-tree-component</li>\r\n    <li>.angular-tree-component-rtl</li>\r\n    <li>.tree-node</li>\r\n    <li>.tree-node-wrapper</li>\r\n    <li>.tree-node-expanded</li>\r\n    <li>.tree-node-collapsed</li>\r\n    <li>.tree-node-focused</li>\r\n    <li>.tree-node-active</li>\r\n    <li>.tree-node-level-X</li>\r\n    <li>.tree-node-leaf</li>\r\n    <li>.node-wrapper</li>\r\n    <li>.toggle-children-wrapper</li>\r\n    <li>.toggle-children</li>\r\n    <li>.toggle-children-placeholder</li>\r\n    <li>.node-content-wrapper</li>\r\n    <li>.tree-children</li>\r\n    <li>.tree-node-loading</li>\r\n    <li>.node-drop-slot</li>\r\n    <li>.is-dragging-over</li>\r\n    <li>.is-dragging-over-disabled</li>\r\n</ul>\r\n\r\n<h2>Overriding style</h2>\r\n<p>Surround your tree with a class, and add your custom style to your style.scss file.</p>\r\n<p>Scope all the custom rules under your custom class - and that's it!</p>\r\n\r\n<h2>Example styles</h2>\r\n<p>These styles were provided by the community. They might be outdated.</p>\r\n<p>If you find an error in these styles please suggest an edit - don't open a github issue.</p>\r\n<p>Thanks</p>\r\n\r\n\r\n<h3>Branch lines</h3>\r\n<p>This theme puts explorer like branch lines that connect the parents with their children</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/f50955b-Screen_Shot_2016-11-29_at_12.11.52_PM.png\" alt=\"Branch lines\">\r\n</div>\r\n<code-example>{{ branchLines }}</code-example>\r\n\r\n\r\n<h3>Pull right</h3>\r\n<p>This theme allows placing items in the right side of the tree nodes using <code>pull-right</code> class.</p>\r\n<p>It is based on flexbox, so relevant only to browsers who support it.</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/28d7625-Screen_Shot_2016-11-29_at_12.11.01_PM.png\" alt=\"Pull right\">\r\n</div>\r\n<code-example>{{ pullRight }}</code-example>\r\n\r\n\r\n<h3>ACE Admin theme</h3>\r\n<p><a href=\"http://ace.jeka.by/treeview.html\" target=\"_blank\">ACE Admin theme</a> style.</p>\r\n<p>Credit to Viet Anh Do for sending this theme!</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/0bd50e1-treecss.png\" alt=\"ACE Admin theme\">\r\n</div>\r\n<code-example>{{ ace }}</code-example>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates-demo/templates-demo.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates-demo/templates-demo.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>treeNodeTemplate and loadingTemplate</h3>\r\n<tree-root id=\"tree1\" [focused]=\"true\" [nodes]=\"nodes1\" [options]=\"options1\">\r\n    <ng-template #treeNodeTemplate let-node let-index=\"index\">\r\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n        <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n    </ng-template>\r\n    <ng-template #loadingTemplate let-node>\r\n        <div [class]=\"node.data.className + 'Loading'\">Loading {{ node.data.title }}...</div>\r\n    </ng-template>\r\n</tree-root>\r\n\r\n<h3>treeNodeWrapper</h3>\r\n<tree-root id=\"tree3\" [focused]=\"true\" [nodes]=\"nodes2\" [options]=\"options1\">\r\n    <ng-template #treeNodeWrapperTemplate let-node let-index=\"index\">\r\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n        <input type=\"checkbox\"><span>&rarr;</span>\r\n        <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n    </ng-template>\r\n</tree-root>\r\n<h3>treeNodeFullTemplate</h3>\r\n<tree-root id=\"tree2\" [focused]=\"true\" [nodes]=\"nodes2\">\r\n    <ng-template #treeNodeFullTemplate let-node let-index=\"index\" let-templates=\"templates\">\r\n        <div class=\"tree-node\">\r\n            <input type=\"checkbox\" [checked]=\"node.isActive\" (change)=\"node.toggleActivated(true)\" />\r\n            <tree-node-expander [node]=\"node\"></tree-node-expander>\r\n            <div\r\n                    class=\"node-content-wrapper\"\r\n                    [class.node-content-wrapper-active]=\"node.isActive\"\r\n                    [class.node-content-wrapper-focused]=\"node.isFocused\"\r\n                    (click)=\"node.toggleActivated(true)\">\r\n                <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n                <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n            </div>\r\n            <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\r\n        </div>\r\n    </ng-template>\r\n</tree-root>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Custom Templates</h1>\r\n\r\n<p>You can customize the tree's templates using embedded <code>ng-template</code> tags.</p>\r\n\r\n<h2>Demo</h2>\r\n\r\n<div class=\"demo-container\">\r\n    <app-templates-demo></app-templates-demo>\r\n</div>\r\n\r\n\r\n<h2>#treeNodeTemplate</h2>\r\n\r\n<p>Use #treeNodeTemplate for the content of the node.</p>\r\n<p>You will have access to the following variables:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <th>Variable</th>\r\n        <th>Description</th>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>node</td>\r\n        <td>Node of type TreeNode. Exposes many useful methods, as well as a <code>data</code> attribute with the original node's data.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>index</td>\r\n        <td>The index of the current node in the parent's children.</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>For example:</p>\r\n\r\n<code-example>{{ template }}</code-example>\r\n\r\n\r\n<h2>#treeNodeWrapperTemplate</h2>\r\n\r\n<p>This option is useful in case all you need to further customise the expander location and the node's event listeners.</p>\r\n<p>Start by specifying the following template, and make sure the tree still renders as expected.</p>\r\n<p>Then remove / change whatever you need:</p>\r\n\r\n<code-example>{{ treeNodeWrapper }}</code-example>\r\n\r\n\r\n<h2>#loadingTemplate</h2>\r\n\r\n<p>For asynchronous data loading, use #loadingTemplate to customize the message that appears while loading the children.</p>\r\n<p>For example:</p>\r\n\r\n<code-example>{{ treeLoading }}</code-example>\r\n\r\n<h2>#treeNodeFullTemplate</h2>\r\n\r\n<p>This option is useful in case all other customisation options are not suitable for you.</p>\r\n<p>It allows for full customisation of the node, as it replaces the internal template for the TreeNode component.</p>\r\n<p>Start by specifying the following template, and make sure the tree still renders as expected.</p>\r\n<p>Then remove / change whatever you need:</p>\r\n\r\n<code-example>{{ fullTemplate }}</code-example>\r\n\r\n<div class=\"alert is-important\">\r\n    <p>Do not remove <code>let-templates=\"templates\"</code> and passing <code>[templates]=\"templates\"</code> to <code>tree-node-children</code>. If you do that, the children of your nodes will not receive the custom template you provided.</p>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Getting Started</h1>\r\n\r\n<p>This page will help you get started with angular-tree-component. You'll be up and running in a jiffy! This project is completely free and open to use under the MIT license.</p>\r\n\r\n<h2>Slack Community</h2>\r\n\r\n<p>The best way to get support from the community: <a href=\"https://angular-tree-component.herokuapp.com/\" target=\"_blank\">https://angular-tree-component.herokuapp.com/</a></p>\r\n\r\n<h2>Supported Angular Versions</h2>\r\n\r\n<p>We follow the Angular Versions. Version 10 of the angular-tree-component supports Angular 10, Version 9 of the tree Angular 9.<br>\r\n    Please note that ownership of the tree changed between Version 8 and 9. We will focus all new development on Version 9 and up.</p>\r\n\r\n<h2>Installation</h2>\r\n\r\n<h3>Angular 9 and up</h3>\r\n\r\n<h4>Installing with npm</h4>\r\n\r\n<code-example language=\"sh\">npm install @circlon/angular-tree-component --save</code-example>\r\n\r\n<h4>Installing with yarn</h4>\r\n\r\n<code-example language=\"sh\">yarn add @circlon/angular-tree-component</code-example>\r\n\r\n<h4>Import css</h4>\r\n\r\n<p>Add styles to your <code>styles.scss</code>:</p>\r\n\r\n<code-example language=\"sh\">@import '~@circlon/angular-tree-component/css/angular-tree-component.css';</code-example>\r\n\r\n<h4>Import TreeModule</h4>\r\n\r\n<p>Import the TreeModule into your <code>app.module.ts</code>:</p>\r\n\r\n<code-example language=\"sh\">imports: [TreeModule]</code-example>\r\n\r\n<hr>\r\n\r\n<h3>Angular 8 and down</h3>\r\n\r\n<h4>Installing with npm</h4>\r\n\r\n<code-example language=\"sh\">npm install angular-tree-component --save</code-example>\r\n\r\n<h4>Installing with yarn</h4>\r\n\r\n<code-example language=\"sh\">yarn add angular-tree-component</code-example>\r\n\r\n<h4>Import css</h4>\r\n\r\n<p>Add styles to your <code>styles.scss</code>:</p>\r\n\r\n<code-example language=\"sh\">@import '~angular-tree-component/dist/angular-tree-component.css';</code-example>\r\n\r\n<h4>Import TreeModule</h4>\r\n\r\n<p>Import the TreeModule into your <code>app.module.ts</code>:</p>\r\n\r\n<code-example language=\"sh\">imports: [TreeModule.forRoot()]</code-example>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer-blocks\">\r\n    <div class=\"footer-block\">\r\n        <h3>Help</h3>\r\n        <ul>\r\n            <li><a href=\"https://angular-tree-component.herokuapp.com/\" target=\"_blank\">Slack</a></li>\r\n            <li><a href=\"https://stackoverflow.com/questions/tagged/angular-tree-component\" target=\"_blank\">Stackoverflow</a></li>\r\n            <li><a href=\"https://github.com/CirclonGroup/angular-tree-component/issues\" target=\"_blank\">Report Issues</a></li>\r\n            <li><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/CODE_OF_CONDUCT.md\" target=\"_blank\">Code of Conduct</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<p>Powered by the Community. Code licensed under an <a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/LICENSE\" target=\"_blank\">MIT-style License</a>.</p>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-item/nav-item.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-item/nav-item.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!node.children\">\r\n    <a [routerLink]=\"node.link\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n       class=\"vertical-menu-item\">\r\n        <span>{{node.title}}</span>\r\n    </a>\r\n</div>\r\n\r\n<div *ngIf=\"node.children\">\r\n    <a *ngIf=\"node.link != null\" [routerLink]=\"node.link\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n       (click)=\"headerClicked()\" class=\"vertical-menu-item heading\">\r\n        <span>{{node.title}}</span>\r\n        <mat-icon class=\"rotating-icon\">chevron_right</mat-icon>\r\n    </a>\r\n\r\n    <button *ngIf=\"node.link == null\" type=\"button\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n            (click)=\"headerClicked()\" class=\"vertical-menu-item heading\"\r\n            [attr.aria-pressed]=\"isExpanded\">\r\n        <span>{{node.title}}</span>\r\n        <mat-icon class=\"rotating-icon\">chevron_right</mat-icon>\r\n    </button>\r\n\r\n    <div class=\"heading-children\" [ngClass]=\"classes\">\r\n        <app-nav-item *ngFor=\"let node of nodeChildren\" [level]=\"level + 1\" [isWide]=\"isWide\"\r\n                      [isParentExpanded]=\"isExpanded\"\r\n                      [node]=\"node\" [selectedNodes]=\"selectedNodes\"></app-nav-item>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/getting-started/getting-started.component.ts");
/* harmony import */ var _examples_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/basic-usage/basic-usage.component */ "./src/app/examples/basic-usage/basic-usage.component.ts");
/* harmony import */ var _fundamentals_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fundamentals/nodes/nodes.component */ "./src/app/fundamentals/nodes/nodes.component.ts");
/* harmony import */ var _fundamentals_options_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fundamentals/options/options.component */ "./src/app/fundamentals/options/options.component.ts");
/* harmony import */ var _fundamentals_actions_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fundamentals/actions/actions.component */ "./src/app/fundamentals/actions/actions.component.ts");
/* harmony import */ var _fundamentals_templates_templates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fundamentals/templates/templates.component */ "./src/app/fundamentals/templates/templates.component.ts");
/* harmony import */ var _fundamentals_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fundamentals/events/events.component */ "./src/app/fundamentals/events/events.component.ts");
/* harmony import */ var _fundamentals_state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fundamentals/state-binding/state-binding.component */ "./src/app/fundamentals/state-binding/state-binding.component.ts");
/* harmony import */ var _fundamentals_api_api_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fundamentals/api/api.component */ "./src/app/fundamentals/api/api.component.ts");
/* harmony import */ var _fundamentals_styling_styling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fundamentals/styling/styling.component */ "./src/app/fundamentals/styling/styling.component.ts");
/* harmony import */ var _fundamentals_focus_focus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fundamentals/focus/focus.component */ "./src/app/fundamentals/focus/focus.component.ts");
/* harmony import */ var _fundamentals_issues_issues_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fundamentals/issues/issues.component */ "./src/app/fundamentals/issues/issues.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const routes = [
    {
        path: '',
        component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__["GettingStartedComponent"],
        pathMatch: 'full',
    },
    {
        path: 'examples',
        children: [
            { path: 'basic', component: _examples_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_3__["BasicUsageComponent"] }
        ]
    },
    {
        path: 'fundamentals',
        children: [
            { path: 'nodes', component: _fundamentals_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_4__["NodesComponent"] },
            { path: 'options', component: _fundamentals_options_options_component__WEBPACK_IMPORTED_MODULE_5__["OptionsComponent"] },
            { path: 'actions', component: _fundamentals_actions_actions_component__WEBPACK_IMPORTED_MODULE_6__["ActionsComponent"] },
            { path: 'templates', component: _fundamentals_templates_templates_component__WEBPACK_IMPORTED_MODULE_7__["TemplatesComponent"] },
            { path: 'events', component: _fundamentals_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"] },
            { path: 'state', component: _fundamentals_state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_9__["StateBindingComponent"] },
            { path: 'api', component: _fundamentals_api_api_component__WEBPACK_IMPORTED_MODULE_10__["ApiComponent"] },
            { path: 'styling', component: _fundamentals_styling_styling_component__WEBPACK_IMPORTED_MODULE_11__["StylingComponent"] },
            { path: 'focus', component: _fundamentals_focus_focus_component__WEBPACK_IMPORTED_MODULE_12__["FocusComponent"] },
            { path: 'issues', component: _fundamentals_issues_issues_component__WEBPACK_IMPORTED_MODULE_13__["IssuesComponent"] },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled'
            }),
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n  flex: 1 1 auto;\n}\n\n.toolbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);\n}\n\n.toolbar-link {\n  display: flex;\n  align-items: center;\n  padding: 24px;\n  margin: 0 -16px;\n}\n\n.main-logo {\n  padding: 0 8px;\n}\n\n.sidenav-container {\n  min-height: 100%;\n  height: auto;\n  max-width: 100%;\n  margin: 0;\n  transform: none;\n}\n\n.sidenav-container .sidenav {\n  position: fixed;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  min-width: 260px;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n\n.sidenav-container .sidenav .sidenav-menu :first-child {\n  margin-top: 16px;\n}\n\n.sidenav-container .sidenav .sidenav-menu .menu-item {\n  display: block;\n  max-width: 260px;\n  font-weight: 400;\n  padding-left: 20px;\n}\n\n.sidenav-container .sidenav-content {\n  height: 100%;\n}\n\n.sidenav-container .sidenav-content.sidenav-open {\n  margin-left: 278px;\n}\n\n.sidenav-container .sidenav-content .main-content {\n  min-height: 100vh;\n  padding: 80px 3rem 2rem;\n}\n\nfooter {\n  padding: 48px;\n  font-weight: 300;\n  background-color: #3f51b5;\n  z-index: 0;\n}\n\nfooter .footer-content {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRU07RUFDRSxnQkFBQTtBQUFSOztBQUdNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURSOztBQU1FO0VBQ0UsWUFBQTtBQUpKOztBQU1JO0VBQ0Usa0JBQUE7QUFKTjs7QUFPSTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUFMTjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFQSiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMyk7XHJcbn1cclxuXHJcbi50b29sYmFyLWxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1hcmdpbjogMCAtMTZweDtcclxufVxyXG5cclxuLm1haW4tbG9nbyB7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gIC5zaWRlbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjRweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAyNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsMCwwLDAuMSk7XHJcblxyXG4gICAgLnNpZGVuYXYtbWVudSB7XHJcbiAgICAgIDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgJi5zaWRlbmF2LW9wZW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjc4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBwYWRkaW5nOiA4MHB4IDNyZW0gMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZzogNDhweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgei1pbmRleDogMDtcclxuXHJcbiAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let AppComponent = class AppComponent {
    constructor(iconRegistry, sanitizer, router) {
        this.router = router;
        this.title = 'docs-app';
        this.nav = [
            { title: 'Getting Started', children: null, link: [''] },
            { title: 'Fundamentals', children: [
                    { title: 'Nodes', url: 'fundamentals/nodes', children: null, link: ['fundamentals', 'nodes'] },
                    { title: 'Options', url: 'fundamentals/options', children: null, link: ['fundamentals', 'options'] },
                    { title: 'Customize Actions', url: 'fundamentals/actions', children: null, link: ['fundamentals', 'actions'] },
                    { title: 'Custom Templates', url: 'fundamentals/templates', children: null, link: ['fundamentals', 'templates'] },
                    { title: 'Events', url: 'fundamentals/events', children: null, link: ['fundamentals', 'events'] },
                    { title: '2-way binding to state', url: 'fundamentals/state', children: null, link: ['fundamentals', 'state'] },
                    { title: 'Calling API Methods', url: 'fundamentals/api', children: null, link: ['fundamentals', 'api'] },
                    { title: 'Styling', url: 'fundamentals/styling', children: null, link: ['fundamentals', 'styling'] },
                    { title: 'Focused', url: 'fundamentals/focus', children: null, link: ['fundamentals', 'focus'] },
                    { title: 'Common issues', url: 'fundamentals/issues', children: null, link: ['fundamentals', 'issues'] },
                ]
            },
            { title: 'Examples', children: [
                    { title: 'Basic', url: 'examples/basic', children: null, link: ['examples', 'basic'] },
                ]
            },
        ];
        this.currentNodes = [];
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github-icon.svg'));
        iconRegistry.addSvgIcon('tree-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/tree-logo.svg'));
        // TODO: build this nice
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]))
            .subscribe((event) => {
            let newCurrent = [];
            this.nav.forEach(navNode => {
                if (navNode.link && this.router.isActive(this.router.createUrlTree(navNode.link), false)) {
                    newCurrent.push(Object.assign({}, navNode));
                }
                if (navNode.children) {
                    navNode.children.forEach(childNode => {
                        if (childNode.link && this.router.isActive(this.router.createUrlTree(childNode.link), false)) {
                            newCurrent.push(Object.assign({}, childNode));
                        }
                    });
                }
            });
            if (newCurrent.length >= 2 && newCurrent.find(n => n.title === this.nav[0].title) !== undefined) {
                newCurrent = newCurrent.filter(n => n.title !== this.nav[0].title);
            }
            this.currentNodes = newCurrent;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/getting-started/getting-started.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _custom_elements_custom_elements_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-elements/custom-elements.module */ "./src/app/custom-elements/custom-elements.module.ts");
/* harmony import */ var _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-elements/code/code-example.module */ "./src/app/custom-elements/code/code-example.module.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-tree-component */ "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js");
/* harmony import */ var _fundamentals_fundamentals_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fundamentals/fundamentals.module */ "./src/app/fundamentals/fundamentals.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _custom_elements_custom_elements_module__WEBPACK_IMPORTED_MODULE_11__["CustomElementsModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_12__["CodeExampleModule"],
            _examples_examples_module__WEBPACK_IMPORTED_MODULE_13__["ExamplesModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_14__["TreeModule"],
            _fundamentals_fundamentals_module__WEBPACK_IMPORTED_MODULE_15__["FundamentalsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/custom-elements/code/code-example.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/custom-elements/code/code-example.component.ts ***!
  \****************************************************************/
/*! exports provided: CodeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExampleComponent", function() { return CodeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.component */ "./src/app/custom-elements/code/code.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable component-selector */


/**
 * An embeddable code block that displays nicely formatted code.
 * Example usage:
 *
 * ```
 * <code-example language="ts" linenums="2" class="special" header="Do Stuff">
 * // a code block
 * console.log('do stuff');
 * </code-example>
 * ```
 */
let CodeExampleComponent = class CodeExampleComponent {
    constructor() {
        this._path = '';
        this.isAvoid = false;
    }
    set header(header) {
        this._header = header;
        this.classes = {
            'headed-code': !!this.header,
            'simple-code': !this.header,
        };
    }
    get header() { return this._header; }
    set path(path) {
        this._path = path;
        this.isAvoid = this.path.indexOf('.avoid.') !== -1;
    }
    get path() { return this._path; }
    set hidecopy(hidecopy) {
        // Coerce the boolean value.
        this._hidecopy = hidecopy != null && `${hidecopy}` !== 'false';
    }
    get hidecopy() { return this._hidecopy; }
    set hyphenatedHideCopy(hidecopy) {
        this.hidecopy = hidecopy;
    }
    set capitalizedHideCopy(hidecopy) {
        this.hidecopy = hidecopy;
    }
    ngAfterViewInit() {
        this.aioCode.code = this.content.nativeElement.innerHTML;
    }
};
CodeExampleComponent.propDecorators = {
    language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    linenums: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    region: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hidecopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hyphenatedHideCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hide-copy',] }],
    capitalizedHideCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hideCopy',] }],
    isAvoid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.avoidFile',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content', { static: true },] }],
    aioCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_code_component__WEBPACK_IMPORTED_MODULE_1__["CodeComponent"], { static: true },] }]
};
CodeExampleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'code-example',
        template: `
    <!-- Content projection is used to get the content HTML provided to this component -->
    <div #content style="display: none"><ng-content></ng-content></div>
    <header *ngIf="header">{{header}}</header>
    <aio-code [ngClass]="classes"
              [language]="language"
              [linenums]="linenums"
              [path]="path"
              [region]="region"
              [hideCopy]="hidecopy"
              [header]="header">
    </aio-code>
  `,
    })
], CodeExampleComponent);



/***/ }),

/***/ "./src/app/custom-elements/code/code-example.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/custom-elements/code/code-example.module.ts ***!
  \*************************************************************/
/*! exports provided: CodeExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExampleModule", function() { return CodeExampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _code_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-example.component */ "./src/app/custom-elements/code/code-example.component.ts");
/* harmony import */ var _code_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code.module */ "./src/app/custom-elements/code/code.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let CodeExampleModule = class CodeExampleModule {
    constructor() {
        this.customElementComponent = _code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"];
    }
};
CodeExampleModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]],
        declarations: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]],
        exports: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]],
        entryComponents: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]]
    })
], CodeExampleModule);



/***/ }),

/***/ "./src/app/custom-elements/code/code.component.ts":
/*!********************************************************!*\
  !*** ./src/app/custom-elements/code/code.component.ts ***!
  \********************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pretty-printer.service */ "./src/app/custom-elements/code/pretty-printer.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/copier.service */ "./src/app/shared/copier.service.ts");
/* harmony import */ var _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/logger.service */ "./src/app/shared/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Formatted Code Block
 *
 * Pretty renders a code block, used in the docs and API reference by the code-example and
 * code-tabs embedded components.
 * It includes a "copy" button that will send the content to the clipboard when clicked
 *
 * Example usage:
 *
 * ```
 * <aio-code
 *   [language]="ts"
 *   [linenums]="true"
 *   [path]="router/src/app/app.module.ts"
 *   [region]="animations-module">
 * </aio-code>
 * ```
 *
 *
 * Renders code provided through the `updateCode` method.
 */
let CodeComponent = class CodeComponent {
    constructor(snackbar, pretty, copier, logger) {
        this.snackbar = snackbar;
        this.pretty = pretty;
        this.copier = copier;
        this.logger = logger;
        this.ariaLabel = '';
        this.codeFormatted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** Code that should be formatted with current inputs and displayed in the view. */
    set code(code) {
        this._code = code;
        if (!this._code || !this._code.trim()) {
            this.showMissingCodeMessage();
        }
        else {
            this.formatDisplayedCode();
        }
    }
    get code() { return this._code; }
    /** Optional header to be displayed above the code. */
    set header(header) {
        this._header = header;
        this.ariaLabel = this.header ? `Copy code snippet from ${this.header}` : '';
    }
    get header() { return this._header; }
    ngOnChanges() {
        // If some inputs have changed and there is code displayed, update the view with the latest
        // formatted code.
        if (this.code) {
            this.formatDisplayedCode();
        }
    }
    formatDisplayedCode() {
        const leftAlignedCode = leftAlign(this.code);
        this.setCodeHtml(leftAlignedCode); // start with unformatted code
        this.codeText = this.getCodeText(); // store the unformatted code as text (for copying)
        this.pretty
            .formatCode(leftAlignedCode, this.language, this.getLinenums())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.codeFormatted.emit()))
            .subscribe(c => this.setCodeHtml(c), () => { });
    }
    /** Sets the message showing that the code could not be found. */
    showMissingCodeMessage() {
        const src = this.path ? this.path + (this.region ? '#' + this.region : '') : '';
        const srcMsg = src ? ` for\n${src}` : '.';
        this.setCodeHtml(`<p class="code-missing">The code sample is missing${srcMsg}</p>`);
    }
    /** Sets the innerHTML of the code container to the provided code string. */
    setCodeHtml(formattedCode) {
        // **Security:** Code example content is provided by docs authors and as such its considered to
        // be safe for innerHTML purposes.
        this.codeContainer.nativeElement.innerHTML = formattedCode;
    }
    /** Gets the textContent of the displayed code element. */
    getCodeText() {
        // `prettify` may remove newlines, e.g. when `linenums` are on. Retrieve the content of the
        // container as text, before prettifying it.
        // We take the textContent because we don't want it to be HTML encoded.
        return this.codeContainer.nativeElement.textContent;
    }
    /** Copies the code snippet to the user's clipboard. */
    doCopy() {
        const code = this.codeText;
        const successfullyCopied = this.copier.copyText(code);
        if (successfullyCopied) {
            this.logger.log('Copied code to clipboard:', code);
            this.snackbar.open('Code Copied', '', { duration: 800 });
        }
        else {
            this.logger.error(new Error(`ERROR copying code to clipboard: "${code}"`));
            this.snackbar.open('Copy failed. Please try again!', '', { duration: 800 });
        }
    }
    /** Gets the calculated value of linenums (boolean/number). */
    getLinenums() {
        const linenums = typeof this.linenums === 'boolean' ? this.linenums :
            this.linenums === 'true' ? true :
                this.linenums === 'false' ? false :
                    typeof this.linenums === 'string' ? parseInt(this.linenums, 10) :
                        this.linenums;
        return (linenums != null) && !isNaN(linenums) && linenums;
    }
};
CodeComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__["PrettyPrinter"] },
    { type: _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__["CopierService"] },
    { type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"] }
];
CodeComponent.propDecorators = {
    hideCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    linenums: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    region: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    codeFormatted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    codeContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['codeContainer', { static: true },] }]
};
CodeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'aio-code',
        template: `
    <pre class="prettyprint lang-{{language}}">
      <button *ngIf="!hideCopy" class="material-icons copy-button no-print"
        title="Copy code snippet"
        [attr.aria-label]="ariaLabel"
        (click)="doCopy()">
        <span aria-hidden="true">content_copy</span>
      </button>
      <code class="animated fadeIn" #codeContainer></code>
    </pre>
    `
    }),
    __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__["PrettyPrinter"],
        _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__["CopierService"],
        _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]])
], CodeComponent);

function leftAlign(text) {
    let indent = Number.MAX_VALUE;
    const lines = text.split('\n');
    lines.forEach(line => {
        const lineIndent = line.search(/\S/);
        if (lineIndent !== -1) {
            indent = Math.min(lineIndent, indent);
        }
    });
    return lines.map(line => line.substr(indent)).join('\n').trim();
}


/***/ }),

/***/ "./src/app/custom-elements/code/code.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/custom-elements/code/code.module.ts ***!
  \*****************************************************/
/*! exports provided: CodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeModule", function() { return CodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code.component */ "./src/app/custom-elements/code/code.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _pretty_printer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pretty-printer.service */ "./src/app/custom-elements/code/pretty-printer.service.ts");
/* harmony import */ var _shared_copier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/copier.service */ "./src/app/shared/copier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CodeModule = class CodeModule {
};
CodeModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]],
        declarations: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        entryComponents: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        exports: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        providers: [_pretty_printer_service__WEBPACK_IMPORTED_MODULE_4__["PrettyPrinter"], _shared_copier_service__WEBPACK_IMPORTED_MODULE_5__["CopierService"]]
    })
], CodeModule);



/***/ }),

/***/ "./src/app/custom-elements/code/pretty-printer.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/custom-elements/code/pretty-printer.service.ts ***!
  \****************************************************************/
/*! exports provided: PrettyPrinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrettyPrinter", function() { return PrettyPrinter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/logger.service */ "./src/app/shared/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Wrapper around the prettify.js library
 */
let PrettyPrinter = class PrettyPrinter {
    constructor(logger) {
        this.logger = logger;
        this.prettyPrintOne = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.getPrettyPrintOne()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    getPrettyPrintOne() {
        const ppo = window['prettyPrintOne'];
        return ppo ? Promise.resolve(ppo) :
            // `prettyPrintOne` is not on `window`, which means `prettify.js` has not been loaded yet.
            // Import it; ad a side-effect it will add `prettyPrintOne` on `window`.
            __webpack_require__.e(/*! import() | assets-js-prettify-js */ "assets-js-prettify-js").then(__webpack_require__.t.bind(null, /*! ../../../assets/js/prettify.js */ "./src/assets/js/prettify.js", 7))
                .then(() => window['prettyPrintOne'], err => {
                const msg = `Cannot get prettify.js from server: ${err.message}`;
                this.logger.error(new Error(msg));
                // return a pretty print fn that always fails.
                return () => { throw new Error(msg); };
            });
    }
    /**
     * Format code snippet as HTML
     * @param {string} code - the code snippet to format; should already be HTML encoded
     * @param {string} [language] - The language of the code to render (could be javascript, html, typescript, etc)
     * @param {string|number} [linenums] - Whether to display line numbers:
     *  - false: don't display
     *  - true: do display
     *  - number: do display but start at the given number
     * @returns Observable<string> - Observable of formatted code
     */
    formatCode(code, language, linenums) {
        return this.prettyPrintOne.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(ppo => {
            try {
                return ppo(code, language, linenums);
            }
            catch (err) {
                const msg = `Could not format code that begins '${code.substr(0, 50)}...'.`;
                console.error(msg, err);
                throw new Error(msg);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    }
};
PrettyPrinter.ctorParameters = () => [
    { type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"] }
];
PrettyPrinter = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_shared_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]])
], PrettyPrinter);



/***/ }),

/***/ "./src/app/custom-elements/custom-elements.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-elements/custom-elements.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomElementsModule", function() { return CustomElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-loader */ "./src/app/custom-elements/elements-loader.ts");
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-registry */ "./src/app/custom-elements/element-registry.ts");
/* harmony import */ var _lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-custom-element.component */ "./src/app/custom-elements/lazy-custom-element.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let CustomElementsModule = class CustomElementsModule {
};
CustomElementsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__["LazyCustomElementComponent"]],
        exports: [_lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__["LazyCustomElementComponent"]],
        providers: [
            _elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"],
            { provide: _element_registry__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN"], useValue: _element_registry__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_MODULE_LOAD_CALLBACKS"] },
        ],
    })
], CustomElementsModule);



/***/ }),

/***/ "./src/app/custom-elements/element-registry.ts":
/*!*****************************************************!*\
  !*** ./src/app/custom-elements/element-registry.ts ***!
  \*****************************************************/
/*! exports provided: ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES, ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN, ELEMENT_MODULE_LOAD_CALLBACKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES", function() { return ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN", function() { return ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS", function() { return ELEMENT_MODULE_LOAD_CALLBACKS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

// Modules containing custom elements must be set up as lazy-loaded routes (loadChildren)
// TODO(andrewjs): This is a hack, Angular should have first-class support for preparing a module
// that contains custom elements.
const ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES = [
    {
        selector: 'code-example',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./code/code-example.module */ "./src/app/custom-elements/code/code-example.module.ts")).then(m => m.CodeExampleModule)
    },
    {
        selector: 'code-tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | code-code-tabs-module */ "code-code-tabs-module").then(__webpack_require__.bind(null, /*! ./code/code-tabs.module */ "./src/app/custom-elements/code/code-tabs.module.ts")).then(m => m.CodeTabsModule)
    },
];
/** Injection token to provide the element path modules. */
const ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('aio/elements-map');
/** Map of possible custom element selectors to their lazy-loadable module paths. */
const ELEMENT_MODULE_LOAD_CALLBACKS = new Map();
ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES.forEach(route => {
    ELEMENT_MODULE_LOAD_CALLBACKS.set(route.selector, route.loadChildren);
});


/***/ }),

/***/ "./src/app/custom-elements/elements-loader.ts":
/*!****************************************************!*\
  !*** ./src/app/custom-elements/elements-loader.ts ***!
  \****************************************************/
/*! exports provided: ElementsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsLoader", function() { return ElementsLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-registry */ "./src/app/custom-elements/element-registry.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ "../../node_modules/@angular/elements/fesm2015/elements.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ElementsLoader = class ElementsLoader {
    constructor(moduleRef, elementModulePaths, compiler) {
        this.moduleRef = moduleRef;
        this.compiler = compiler;
        /** Map of custom elements that are in the process of being loaded and registered. */
        this.elementsLoading = new Map();
        this.elementsToLoad = new Map(elementModulePaths);
    }
    /**
     * Queries the provided element for any custom elements that have not yet been registered with
     * the browser. Custom elements that are registered will be removed from the list of unregistered
     * elements so that they will not be queried in subsequent calls.
     */
    loadContainedCustomElements(element) {
        const unregisteredSelectors = Array.from(this.elementsToLoad.keys())
            .filter(s => element.querySelector(s));
        if (!unregisteredSelectors.length) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }
        // Returns observable that completes when all discovered elements have been registered.
        const allRegistered = Promise.all(unregisteredSelectors.map(s => this.loadCustomElement(s)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(allRegistered.then(() => undefined));
    }
    /** Loads and registers the custom element defined on the `WithCustomElement` module factory. */
    loadCustomElement(selector) {
        if (this.elementsLoading.has(selector)) {
            // The custom element is in the process of being loaded and registered.
            return this.elementsLoading.get(selector);
        }
        if (this.elementsToLoad.has(selector)) {
            // Load and register the custom element (for the first time).
            const modulePathLoader = this.elementsToLoad.get(selector);
            const loadedAndRegistered = modulePathLoader()
                .then(elementModuleOrFactory => {
                /**
                 * With View Engine, the NgModule factory is created and provided when loaded.
                 * With Ivy, only the NgModule class is provided loaded and must be compiled.
                 * This uses the same mechanism as the deprecated `SystemJsNgModuleLoader` in
                 * in `packages/core/src/linker/system_js_ng_module_factory_loader.ts`
                 * to pass on the NgModuleFactory, or compile the NgModule and return its NgModuleFactory.
                 */
                if (elementModuleOrFactory instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactory"]) {
                    return elementModuleOrFactory;
                }
                else {
                    return this.compiler.compileModuleAsync(elementModuleOrFactory);
                }
            })
                .then(elementModuleFactory => {
                const elementModuleRef = elementModuleFactory.create(this.moduleRef.injector);
                const injector = elementModuleRef.injector;
                const CustomElementComponent = elementModuleRef.instance.customElementComponent;
                const CustomElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(CustomElementComponent, { injector });
                customElements.define(selector, CustomElement);
                return customElements.whenDefined(selector);
            })
                .then(() => {
                // The custom element has been successfully loaded and registered.
                // Remove from `elementsLoading` and `elementsToLoad`.
                this.elementsLoading.delete(selector);
                this.elementsToLoad.delete(selector);
            })
                .catch(err => {
                // The custom element has failed to load and register.
                // Remove from `elementsLoading`.
                // (Do not remove from `elementsToLoad` in case it was a temporary error.)
                this.elementsLoading.delete(selector);
                return Promise.reject(err);
            });
            this.elementsLoading.set(selector, loadedAndRegistered);
            return loadedAndRegistered;
        }
        // The custom element has already been loaded and registered.
        return Promise.resolve();
    }
};
ElementsLoader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"] },
    { type: Map, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_element_registry__WEBPACK_IMPORTED_MODULE_1__["ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"] }
];
ElementsLoader = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"],
        Map,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]])
], ElementsLoader);



/***/ }),

/***/ "./src/app/custom-elements/lazy-custom-element.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/custom-elements/lazy-custom-element.component.ts ***!
  \******************************************************************/
/*! exports provided: LazyCustomElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyCustomElementComponent", function() { return LazyCustomElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-loader */ "./src/app/custom-elements/elements-loader.ts");
/* harmony import */ var _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/logger.service */ "./src/app/shared/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LazyCustomElementComponent = class LazyCustomElementComponent {
    constructor(elementRef, elementsLoader, logger) {
        this.elementRef = elementRef;
        this.elementsLoader = elementsLoader;
        this.logger = logger;
        this.selector = '';
    }
    ngOnInit() {
        if (!this.selector || /[^\w-]/.test(this.selector)) {
            this.logger.error(new Error(`Invalid selector for 'aio-lazy-ce': ${this.selector}`));
            return;
        }
        this.elementRef.nativeElement.innerHTML = `<${this.selector}></${this.selector}>`;
        this.elementsLoader.loadCustomElement(this.selector);
    }
};
LazyCustomElementComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"] },
    { type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"] }
];
LazyCustomElementComponent.propDecorators = {
    selector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
LazyCustomElementComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'aio-lazy-ce',
        template: '',
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
        _elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"],
        _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]])
], LazyCustomElementComponent);



/***/ }),

/***/ "./src/app/examples/basic-usage/basic-usage.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/examples/basic-usage/basic-usage.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2V4YW1wbGVzL2Jhc2ljLXVzYWdlL2Jhc2ljLXVzYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/examples/basic-usage/basic-usage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/examples/basic-usage/basic-usage.component.ts ***!
  \***************************************************************/
/*! exports provided: BasicUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicUsageComponent", function() { return BasicUsageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let BasicUsageComponent = class BasicUsageComponent {
    constructor() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'root2',
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [
                            { name: 'grandchild2.2.1' }
                        ] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
    }
    ngOnInit() {
    }
};
BasicUsageComponent.ctorParameters = () => [];
BasicUsageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-basic-usage',
        template: __importDefault(__webpack_require__(/*! raw-loader!./basic-usage.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/examples/basic-usage/basic-usage.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./basic-usage.component.scss */ "./src/app/examples/basic-usage/basic-usage.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], BasicUsageComponent);



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-usage/basic-usage.component */ "./src/app/examples/basic-usage/basic-usage.component.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-tree-component */ "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ExamplesModule = class ExamplesModule {
};
ExamplesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_2__["BasicUsageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeModule"]
        ]
    })
], ExamplesModule);



/***/ }),

/***/ "./src/app/fundamentals/actions/actions-demo/actions-demo.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/fundamentals/actions/actions-demo/actions-demo.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9hY3Rpb25zL2FjdGlvbnMtZGVtby9hY3Rpb25zLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/fundamentals/actions/actions-demo/actions-demo.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/fundamentals/actions/actions-demo/actions-demo.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActionsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsDemoComponent", function() { return ActionsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-tree-component */ "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ActionsDemoComponent = class ActionsDemoComponent {
    constructor() {
        this.nodes = [
            {
                name: 'root1',
                children: [
                    {
                        name: 'child1'
                    }, {
                        name: 'child2'
                    }
                ]
            },
            {
                name: 'root2',
                children: [
                    {
                        name: 'child2.1'
                    }, {
                        name: 'child2.2',
                        children: [
                            {
                                id: 1001,
                                name: 'subsub'
                            }
                        ]
                    }
                ]
            }
        ];
        this.actionMapping = {
            mouse: {
                contextMenu: (tree, node, $event) => {
                    $event.preventDefault();
                    alert(`context menu for ${node.data.name}`);
                },
                dblClick: (tree, node, $event) => {
                    if (node.hasChildren) {
                        angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_EXPANDED(tree, node, $event);
                    }
                },
                click: (tree, node, $event) => {
                    $event.shiftKey
                        ? angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(tree, node, $event)
                        : angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_ACTIVE(tree, node, $event);
                },
                mouseOver: (tree, node, $event) => {
                    $event.preventDefault();
                    console.log(`mouseOver ${node.data.name}`);
                },
                mouseOut: (tree, node, $event) => {
                    $event.preventDefault();
                    console.log(`mouseOut ${node.data.name}`);
                }
            },
            keys: {
                [angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["KEYS"].ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
            }
        };
        this.options = {
            actionMapping: this.actionMapping
        };
    }
};
ActionsDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-actions-demo',
        template: __importDefault(__webpack_require__(/*! raw-loader!./actions-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions-demo/actions-demo.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./actions-demo.component.scss */ "./src/app/fundamentals/actions/actions-demo/actions-demo.component.scss")).default]
    })
], ActionsDemoComponent);



/***/ }),

/***/ "./src/app/fundamentals/actions/actions.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/fundamentals/actions/actions.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/fundamentals/actions/actions.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/fundamentals/actions/actions.component.ts ***!
  \***********************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ActionsComponent = class ActionsComponent {
    constructor() {
        this.actionMapping = `
import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

const actionMapping: IActionMapping = {
  mouse: {
    click: TREE_ACTIONS.TOGGLE_SELECTED_MULTI
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(\`This is \${node.data.name\}\`)
  }
}
`;
        this.mouseActions = `
import { TREE_ACTIONS, IActionMapping } from 'angular-tree-component';

actionMapping: IActionMapping = {
  mouse: {
    dblClick: (tree, node, $event) => // Open a modal with node content,
    click: TREE_ACTIONS.TOGGLE_SELECTED_MULTI,
  }
}
`;
        this.keys = `
KEYS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32
}
`;
        this.keysExample = `
import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

actionMapping:IActionMapping = {
  keys: {
    127: (tree, node, $event) => // do something to delete the node,
    [KEYS.ENTER]: TREE_ACTIONS.EXPAND
  }
}
`;
        this.defaultMapping = `
const defaultActionMapping: IActionMapping = {
  mouse: {
    click: TREE_ACTIONS.TOGGLE_ACTIVE,
    dblClick: null,
    contextMenu: null,
    expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
    checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
    drop: TREE_ACTIONS.MOVE_NODE
  },
  keys: {
    [KEYS.RIGHT]: TREE_ACTIONS.DRILL_DOWN,
    [KEYS.LEFT]: TREE_ACTIONS.DRILL_UP,
    [KEYS.DOWN]: TREE_ACTIONS.NEXT_NODE,
    [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE,
    [KEYS.SPACE]: TREE_ACTIONS.TOGGLE_ACTIVE,
    [KEYS.ENTER]: TREE_ACTIONS.TOGGLE_ACTIVE
  }
};
`;
    }
};
ActionsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-actions',
        template: __importDefault(__webpack_require__(/*! raw-loader!./actions.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./actions.component.scss */ "./src/app/fundamentals/actions/actions.component.scss")).default]
    })
], ActionsComponent);



/***/ }),

/***/ "./src/app/fundamentals/api/api-demo/api-demo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fundamentals/api/api-demo/api-demo.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9hcGkvYXBpLWRlbW8vYXBpLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/fundamentals/api/api-demo/api-demo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/fundamentals/api/api-demo/api-demo.component.ts ***!
  \*****************************************************************/
/*! exports provided: ApiDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDemoComponent", function() { return ApiDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ApiDemoComponent = class ApiDemoComponent {
    constructor() {
        this.options = {};
        this.nodes = [
            {
                name: 'root1',
                children: [
                    {
                        name: 'child1'
                    }, {
                        name: 'child2'
                    }
                ]
            },
            {
                name: 'root2',
                children: [
                    {
                        name: 'child2.1'
                    }, {
                        name: 'child2.2',
                        children: [
                            {
                                id: 1001,
                                name: 'subsub'
                            }
                        ]
                    }
                ]
            }
        ];
    }
    addNode(tree) {
        this.nodes[0].children.push({
            name: 'a new child'
        });
        tree.treeModel.update();
    }
    activateSubSub(tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    }
    activeNodes(treeModel) {
        console.log(treeModel.activeNodes);
    }
};
ApiDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-api-demo',
        template: __importDefault(__webpack_require__(/*! raw-loader!./api-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api-demo/api-demo.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./api-demo.component.scss */ "./src/app/fundamentals/api/api-demo/api-demo.component.scss")).default]
    })
], ApiDemoComponent);



/***/ }),

/***/ "./src/app/fundamentals/api/api.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/fundamentals/api/api.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9hcGkvYXBpLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/fundamentals/api/api.component.ts":
/*!***************************************************!*\
  !*** ./src/app/fundamentals/api/api.component.ts ***!
  \***************************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ApiComponent = class ApiComponent {
    constructor() {
        this.html = `
<tree-root #tree [nodes]="nodes"></tree-root>

<button (click)="tree.treeModel.focusNextNode()">next node</button>
<button (click)="tree.treeModel.focusPreviousNode()">previous node</button>
<button (click)="tree.treeModel.focusDrillDown()">drill down</button>
<button (click)="tree.treeModel.focusDrillUp()">drill up</button>
`;
    }
};
ApiComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-api',
        template: __importDefault(__webpack_require__(/*! raw-loader!./api.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./api.component.scss */ "./src/app/fundamentals/api/api.component.scss")).default]
    })
], ApiComponent);



/***/ }),

/***/ "./src/app/fundamentals/events/events.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/fundamentals/events/events.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/fundamentals/events/events.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/fundamentals/events/events.component.ts ***!
  \*********************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let EventsComponent = class EventsComponent {
    constructor() {
        this.event = `
<tree-root [nodes]="nodes"
    (toggleExpanded)="onEvent($event)"
    (activate)="onEvent($event)"
    (focus)="onEvent($event)"
    (blur)="onEvent($event)">
</tree-root>

onEvent = ($event) => console.log($event);
`;
        this.toggleExpanded = `
{
  eventName: string;
  node: ITreeNode;
  isActive: boolean;
}
`;
        this.basicEvent = `
{
  eventName: string;
  node: ITreeNode;
}
`;
        this.eventName = `
{
  eventName: string;
}
`;
        this.move = `
{
  eventName: string;
  node: ITreeNode; // The node that was moved
  to: {
    parent: ITreeNode; // The parent node that contains the moved node
    index: number; // Index in the parent where the node was moved
  }
}
`;
        this.copy = `
{
  eventName: string;
  node: ITreeNode; // The node that was copied
  to: {
    parent: ITreeNode; // The parent node that contains the copied node
    index: number; // Index in the parent where the node was copied
  }
}
`;
        this.baseEvent = `
{
  eventName: string;
  ...rest: corresponding to the original event
}`;
        // TODO: add stateChange
    }
};
EventsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-events',
        template: __importDefault(__webpack_require__(/*! raw-loader!./events.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/events/events.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./events.component.scss */ "./src/app/fundamentals/events/events.component.scss")).default]
    })
], EventsComponent);



/***/ }),

/***/ "./src/app/fundamentals/focus/focus.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/fundamentals/focus/focus.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9mb2N1cy9mb2N1cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/fundamentals/focus/focus.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/fundamentals/focus/focus.component.ts ***!
  \*******************************************************/
/*! exports provided: FocusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusComponent", function() { return FocusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FocusComponent = class FocusComponent {
    constructor() {
        this.focus = `<tree-root [nodes]="nodes" [focused]="true" [options]="options"></tree-root>`;
    }
};
FocusComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-focus',
        template: __importDefault(__webpack_require__(/*! raw-loader!./focus.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/focus/focus.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./focus.component.scss */ "./src/app/fundamentals/focus/focus.component.scss")).default]
    })
], FocusComponent);



/***/ }),

/***/ "./src/app/fundamentals/fundamentals.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/fundamentals/fundamentals.module.ts ***!
  \*****************************************************/
/*! exports provided: FundamentalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundamentalsModule", function() { return FundamentalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes/nodes.component */ "./src/app/fundamentals/nodes/nodes.component.ts");
/* harmony import */ var _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-elements/code/code-example.module */ "./src/app/custom-elements/code/code-example.module.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/options.component */ "./src/app/fundamentals/options/options.component.ts");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/actions.component */ "./src/app/fundamentals/actions/actions.component.ts");
/* harmony import */ var _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/templates.component */ "./src/app/fundamentals/templates/templates.component.ts");
/* harmony import */ var _actions_actions_demo_actions_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/actions-demo/actions-demo.component */ "./src/app/fundamentals/actions/actions-demo/actions-demo.component.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-tree-component */ "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js");
/* harmony import */ var _templates_templates_demo_templates_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/templates-demo/templates-demo.component */ "./src/app/fundamentals/templates/templates-demo/templates-demo.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/events.component */ "./src/app/fundamentals/events/events.component.ts");
/* harmony import */ var _state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state-binding/state-binding.component */ "./src/app/fundamentals/state-binding/state-binding.component.ts");
/* harmony import */ var _state_binding_state_binding_demo_state_binding_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state-binding/state-binding-demo/state-binding-demo.component */ "./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.ts");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/api.component */ "./src/app/fundamentals/api/api.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_api_demo_api_demo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api/api-demo/api-demo.component */ "./src/app/fundamentals/api/api-demo/api-demo.component.ts");
/* harmony import */ var _styling_styling_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styling/styling.component */ "./src/app/fundamentals/styling/styling.component.ts");
/* harmony import */ var _focus_focus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./focus/focus.component */ "./src/app/fundamentals/focus/focus.component.ts");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/fundamentals/issues/issues.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















let FundamentalsModule = class FundamentalsModule {
};
FundamentalsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_2__["NodesComponent"],
            _options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"],
            _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__["ActionsComponent"],
            _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__["TemplatesComponent"],
            _actions_actions_demo_actions_demo_component__WEBPACK_IMPORTED_MODULE_7__["ActionsDemoComponent"],
            _templates_templates_demo_templates_demo_component__WEBPACK_IMPORTED_MODULE_9__["TemplatesDemoComponent"],
            _events_events_component__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"],
            _state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_11__["StateBindingComponent"],
            _state_binding_state_binding_demo_state_binding_demo_component__WEBPACK_IMPORTED_MODULE_12__["StateBindingDemoComponent"],
            _api_api_component__WEBPACK_IMPORTED_MODULE_13__["ApiComponent"],
            _api_api_demo_api_demo_component__WEBPACK_IMPORTED_MODULE_15__["ApiDemoComponent"],
            _styling_styling_component__WEBPACK_IMPORTED_MODULE_16__["StylingComponent"],
            _focus_focus_component__WEBPACK_IMPORTED_MODULE_17__["FocusComponent"],
            _issues_issues_component__WEBPACK_IMPORTED_MODULE_18__["IssuesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_3__["CodeExampleModule"],
            angular_tree_component__WEBPACK_IMPORTED_MODULE_8__["TreeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]
        ]
    })
], FundamentalsModule);



/***/ }),

/***/ "./src/app/fundamentals/issues/issues.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/fundamentals/issues/issues.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9pc3N1ZXMvaXNzdWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/fundamentals/issues/issues.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/fundamentals/issues/issues.component.ts ***!
  \*********************************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let IssuesComponent = class IssuesComponent {
};
IssuesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-issues',
        template: __importDefault(__webpack_require__(/*! raw-loader!./issues.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/issues/issues.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./issues.component.scss */ "./src/app/fundamentals/issues/issues.component.scss")).default]
    })
], IssuesComponent);



/***/ }),

/***/ "./src/app/fundamentals/nodes/nodes.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/fundamentals/nodes/nodes.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9ub2Rlcy9ub2Rlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/fundamentals/nodes/nodes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/fundamentals/nodes/nodes.component.ts ***!
  \*******************************************************/
/*! exports provided: NodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesComponent", function() { return NodesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NodesComponent = class NodesComponent {
    constructor() {
        this.nodes = `[
  {
    id: 1,
    name: 'root1',
    children: [
      { id: 2, name: 'child1' },
      { id: 3, name: 'child2' }
    ]
  }
]`;
    }
    ngOnInit() {
    }
};
NodesComponent.ctorParameters = () => [];
NodesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nodes',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nodes.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/nodes/nodes.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nodes.component.scss */ "./src/app/fundamentals/nodes/nodes.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], NodesComponent);



/***/ }),

/***/ "./src/app/fundamentals/options/options.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/fundamentals/options/options.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/fundamentals/options/options.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/fundamentals/options/options.component.ts ***!
  \***********************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let OptionsComponent = class OptionsComponent {
    constructor() {
        this.options = `
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from '@circlon/angular-tree-component';

class MyComponent {
  ...
  options: ITreeOptions = {
    displayField: 'nodeName',
    isExpandedField: 'expanded',
    idField: 'uuid',
    hasChildrenField: 'nodes',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        }
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
    useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollContainer: document.documentElement // HTML
  }
}
`;
    }
    ngOnInit() {
    }
};
OptionsComponent.ctorParameters = () => [];
OptionsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-options',
        template: __importDefault(__webpack_require__(/*! raw-loader!./options.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/options/options.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./options.component.scss */ "./src/app/fundamentals/options/options.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], OptionsComponent);



/***/ }),

/***/ "./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9zdGF0ZS1iaW5kaW5nL3N0YXRlLWJpbmRpbmctZGVtby9zdGF0ZS1iaW5kaW5nLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StateBindingDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateBindingDemoComponent", function() { return StateBindingDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let StateBindingDemoComponent = class StateBindingDemoComponent {
    constructor() {
        this.options = {
            getChildren: () => new Promise((resolve) => {
                setTimeout(() => resolve([
                    { id: 5, name: 'child2.1', children: [] },
                    { id: 6, name: 'child2.2', children: [
                            { id: 7, name: 'grandchild2.2.1' }
                        ] }
                ]), 2000);
            })
        };
        this.nodes = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { id: 2, name: 'child1' },
                    { id: 3, name: 'child2' }
                ]
            },
            {
                id: 4,
                name: 'root2',
                hasChildren: true
            }
        ];
    }
    get state() {
        return localStorage.treeState && JSON.parse(localStorage.treeState);
    }
    set state(state) {
        localStorage.treeState = JSON.stringify(state);
    }
};
StateBindingDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-state-binding-demo',
        template: __importDefault(__webpack_require__(/*! raw-loader!./state-binding-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./state-binding-demo.component.scss */ "./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.scss")).default]
    })
], StateBindingDemoComponent);



/***/ }),

/***/ "./src/app/fundamentals/state-binding/state-binding.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/fundamentals/state-binding/state-binding.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9zdGF0ZS1iaW5kaW5nL3N0YXRlLWJpbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/fundamentals/state-binding/state-binding.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/fundamentals/state-binding/state-binding.component.ts ***!
  \***********************************************************************/
/*! exports provided: StateBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateBindingComponent", function() { return StateBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let StateBindingComponent = class StateBindingComponent {
    constructor() {
        this.example = `
import \{ Component \} from \'@angular/core\';
import \{ ITreeState \} from \'angular-tree-component\';

@Component(\{
  selector: \'app-saverestore\',
  template: \`
    <tree-root [(state)]="state" [nodes]="nodes"></tree-root>
    <button (click)="collapseAll()">collapse all</button>
    <button (click)="hideFolders()">hide folders</button>
  \`,
  styles: []
\})
export class MyComponent \{
  state: ITreeState;
  nodes = [
    { id: 1, isFolder: true, name: 'folder1', children: [
      { id: 2, name: 'file1', isFolder: false },
      { id: 3, name: 'file2', isFolder: false }
    ] },
    { id: 4, isFolder: false, name: 'flatfile1' },
    { id: 5, isFolder: false, name: 'flatfile2' }
  ];

  collapseAll() {
    this.state = {
      ...this.state,
      expandedNodeIds: {}
    };
  }

  hideFolders() {
    const hiddenNodeIds = {};

    this.nodes.forEach((node) => {
      if (node.isFolder) {
        hiddenNodeIds[node.id] = true;
      }
    });

    this.state = {
      ...this.state,
      hiddenNodeIds
    };
  }
}
`;
        this.localStorage = `
<tree-root
  [(state)]="state"
  [nodes]="nodes">
</tree-root>

class MyComponent {
  get state() {
    return localStorage.treeState && JSON.parse(localStorage.treeState);
  }
  set state(state) {
    localStorage.treeState = JSON.stringify(state);
  }
}
`;
        this.api = `
<tree-root
  #tree
  (initialize)="onInit(tree)"
  [nodes]="nodes">
</tree-root>

class MyComponent {
  onInit(tree) {
    if (localStorage.treeState) {
      tree.treeModel.setState(JSON.parse(localStorage.treeState);
    }
    tree.treeModel.subscribe((state) => {
      localStorage.treeState = JSON.stringify(state);
    });
  }
}
`;
    }
};
StateBindingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-state-binding',
        template: __importDefault(__webpack_require__(/*! raw-loader!./state-binding.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./state-binding.component.scss */ "./src/app/fundamentals/state-binding/state-binding.component.scss")).default]
    })
], StateBindingComponent);



/***/ }),

/***/ "./src/app/fundamentals/styling/styling.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/fundamentals/styling/styling.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9zdHlsaW5nL3N0eWxpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/fundamentals/styling/styling.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/fundamentals/styling/styling.component.ts ***!
  \***********************************************************/
/*! exports provided: StylingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingComponent", function() { return StylingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let StylingComponent = class StylingComponent {
    constructor() {
        this.branchLines = `
.node-content-wrapper, .tree-children {
  position: relative;
}

.node-content-wrapper::before, .tree-children::after {
  content: "";
  position: absolute;
}

.node-content-wrapper::before {
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  height: 28px;
  top: -17px;
  width: 20px;
  left: -28px;
}

.tree-node-level-1 > tree-node-wrapper > .node-wrapper > .node-content-wrapper::before {
  display: none;
}

.tree-node-leaf > .node-wrapper > .node-content-wrapper::before {
  width: 25px;
}

.tree-children::after {
  border-left: 1px solid lightgrey;
  height: 100%;
  top: -15px;
  left: -15px;
}

tree-node:last-child > .tree-node > .tree-children::after {
  border-left: none;
}

.toggle-children {
  z-index: 1;
}
`;
        this.pullRight = `
.tree {
  width: 300px;
}

.node-content-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.node-content-wrapper {
  flex-grow: 1;
  position: relative;
}

.pull-right {
  position: absolute;
  right: 10px;
}
`;
        this.ace = `
div.tree div.tree-children::before,
div.tree::before {
    content: "";
    position: absolute;
    border-left: 1px dotted #23527c;
    height: 100%;
    top: -14px;
    left: 12px
}

div.tree {
    padding-left: 0;
    margin-left: -5px
}

div.tree div.tree-children {
    position: relative;
    padding-left: 0;
    margin-left: 16px
}

div.tree div.tree-children::before {
    left: 5px
}

div.tree tree-node>div>.node-wrapper {
    margin-left: 24px
}

div.tree tree-node>div>.node-wrapper>.node-content-wrapper {
    margin-left: 4px
}

div.tree tree-node>div.tree-node-leaf>.node-wrapper {
    margin-left: 0
}

div.tree tree-node>div::before {
    content: "";
    position: absolute;
    border-bottom: 1px dotted #23527c;
    width: 7px;
    margin-top: 12px;
    left: 7px
}

div.tree tree-node>div .toggle-children-wrapper {
    width: 13px;
    height: 13px;
    border: 1px solid #23527c;
    position: absolute;
    left: 15px;
    margin-top: 5px;
    margin-left: 0;
    display: inline-block;
    background-color: #fff;
    z-index: 1
}

div.tree tree-node>div .toggle-children-wrapper::before {
    content: "";
    display: inline-block;
    width: 7px;
    border-top: 1px solid #23527c;
    position: absolute;
    top: 5px;
    left: 2px
}

div.tree tree-node>div .toggle-children-wrapper.toggle-children-wrapper-collapsed::after {
    content: "";
    display: inline-block;
    height: 7px;
    border-left: 1px solid #23527c;
    position: absolute;
    top: 2px;
    left: 5px
}

div.tree tree-node>div .toggle-children-wrapper .toggle-children {
    display: none
}

div.tree tree-node>div .node-content-wrapper {
    margin-left: 4px
}

div.tree>tree-node>div::before {
    left: 14px
}

div.tree>tree-node>div>.node-wrapper>tree-node-expander>.toggle-children-wrapper {
    left: 22px
}
`;
    }
};
StylingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-styling',
        template: __importDefault(__webpack_require__(/*! raw-loader!./styling.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/styling/styling.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./styling.component.scss */ "./src/app/fundamentals/styling/styling.component.scss")).default]
    })
], StylingComponent);



/***/ }),

/***/ "./src/app/fundamentals/templates/templates-demo/templates-demo.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/fundamentals/templates/templates-demo/templates-demo.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".root1Class {\n  color: blue;\n}\n\n.root2Class {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvZnVuZGFtZW50YWxzL3RlbXBsYXRlcy90ZW1wbGF0ZXMtZGVtby90ZW1wbGF0ZXMtZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy90ZW1wbGF0ZXMvdGVtcGxhdGVzLWRlbW8vdGVtcGxhdGVzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdDFDbGFzcyB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5yb290MkNsYXNzIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/fundamentals/templates/templates-demo/templates-demo.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/fundamentals/templates/templates-demo/templates-demo.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TemplatesDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesDemoComponent", function() { return TemplatesDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TemplatesDemoComponent = class TemplatesDemoComponent {
    constructor() {
        this.nodes1 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class',
                hasChildren: true
            }
        ];
        this.nodes2 = [
            {
                title: 'root1',
                className: 'root1Class'
            },
            {
                title: 'root2',
                className: 'root2Class',
                children: [
                    { title: 'child1', className: 'child1Class' }
                ]
            }
        ];
        this.options1 = {
            getChildren: () => new Promise((resolve, reject) => { })
        };
        this.options0 = {
            displayField: 'title',
            nodeClass: (node) => `${node.data.title}Class`
        };
    }
};
TemplatesDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-templates-demo',
        template: __importDefault(__webpack_require__(/*! raw-loader!./templates-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates-demo/templates-demo.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./templates-demo.component.scss */ "./src/app/fundamentals/templates/templates-demo/templates-demo.component.scss")).default]
    })
], TemplatesDemoComponent);



/***/ }),

/***/ "./src/app/fundamentals/templates/templates.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/fundamentals/templates/templates.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy90ZW1wbGF0ZXMvdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/fundamentals/templates/templates.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/fundamentals/templates/templates.component.ts ***!
  \***************************************************************/
/*! exports provided: TemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function() { return TemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TemplatesComponent = class TemplatesComponent {
    constructor() {
        this.template = `
<tree-root [nodes]="nodes">
  <ng-template #treeNodeTemplate let-node let-index="index">
    <span>{{ node.data.name }}</span>
    <button (click)="go($event)">Custom Action</button>
  </ng-template>
</tree-root>
`;
        this.treeNodeWrapper = `
<tree-root [nodes]="nodes">
  <ng-template #treeNodeWrapperTemplate let-node let-index="index">
    <div class="node-wrapper" [style.padding-left]="node.getNodePadding()">
      <tree-node-expander [node]="node"></tree-node-expander>
      <div class="node-content-wrapper"
        [class.node-content-wrapper-active]="node.isActive"
        [class.node-content-wrapper-focused]="node.isFocused"
        (click)="node.mouseAction('click', $event)"
        (dblclick)="node.mouseAction('dblClick', $event)"
        (contextmenu)="node.mouseAction('contextMenu', $event)"
        (treeDrop)="node.onDrop($event)"
        [treeAllowDrop]="node.allowDrop"
        [treeDrag]="node"
        [treeDragEnabled]="node.allowDrag()">

        <tree-node-content [node]="node" [index]="index"></tree-node-content>
      </div>
    </div>
  </ng-template>
</tree-root>
`;
        this.treeLoading = `
<tree-root [nodes]="nodes">
  <template #loadingTemplate>Loading, please hold....</template>
</tree-root>
`;
        this.fullTemplate = `
<ng-template #treeNodeFullTemplate
          let-node
          let-index="index"
          let-templates="templates">
  <div
    [class]="node.getClass()"
    [class.tree-node]="true"
    [class.tree-node-expanded]="node.isExpanded && node.hasChildren"
    [class.tree-node-collapsed]="node.isCollapsed && node.hasChildren"
    [class.tree-node-leaf]="node.isLeaf"
    [class.tree-node-active]="node.isActive"
    [class.tree-node-focused]="node.isFocused">

    <tree-node-drop-slot
                         *ngIf="index === 0"
                         [dropIndex]="node.index"
                         [node]="node.parent">
    </tree-node-drop-slot>

    <tree-node-wrapper [node]="node" [index]="index" [templates]="templates">
    </tree-node-wrapper>

    <tree-node-children [node]="node" [templates]="templates">
    </tree-node-children>
    <tree-node-drop-slot [dropIndex]="node.index + 1" [node]="node.parent">
    </tree-node-drop-slot>
  </div>
</ng-template>
`;
    }
};
TemplatesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-templates',
        template: __importDefault(__webpack_require__(/*! raw-loader!./templates.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./templates.component.scss */ "./src/app/fundamentals/templates/templates.component.scss")).default]
    })
], TemplatesComponent);



/***/ }),

/***/ "./src/app/getting-started/getting-started.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/getting-started/getting-started.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.ts ***!
  \**************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let GettingStartedComponent = class GettingStartedComponent {
    constructor() { }
    ngOnInit() {
    }
};
GettingStartedComponent.ctorParameters = () => [];
GettingStartedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-getting-started',
        template: __importDefault(__webpack_require__(/*! raw-loader!./getting-started.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./getting-started.component.scss */ "./src/app/getting-started/getting-started.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], GettingStartedComponent);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 40px;\n}\n:host > * {\n  color: #fff;\n}\n.footer-blocks {\n  display: flex;\n  justify-content: center;\n  text-align: left;\n  margin: 0 0 40px;\n}\n.footer-block {\n  margin: 0 24px;\n  vertical-align: top;\n}\na {\n  color: #fff;\n}\nh3 {\n  color: #fff;\n  text-transform: uppercase;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style-type: none;\n  padding: 4px 0;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUFGO0FBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6InByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxuXHJcbiAgPioge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLWJsb2NrcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItYmxvY2sge1xyXG4gIG1hcmdpbjogMCAyNHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxudWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-item/nav-item.component */ "./src/app/layout/nav-item/nav-item.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__["NavItemComponent"]],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
            _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__["NavItemComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/nav-item/nav-item.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/nav-item/nav-item.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/************************************\n             Media queries\n To use these, put this snippet in the appropriate selector:\n     @include bp(tiny) {\n         background-color: purple;\n     }\n     Replace \"tiny\" with \"medium\" or \"big\" as necessary.\n*************************************/\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  margin: 0;\n  color: #444444;\n  font-size: 14px;\n  font-size: 1.4rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #333333;\n}\nh1 {\n  font-size: 24px;\n  font-size: 2.4rem;\n  font-weight: 500;\n  display: inline-block;\n  margin: 8px 0px;\n}\n@media screen and (max-width: 600px) {\n  h1 {\n    margin-top: 0;\n  }\n}\nh2 {\n  font-size: 22px;\n  font-size: 2.2rem;\n  font-weight: 500;\n  margin: 32px 0px 24px;\n  clear: both;\n}\nh3 {\n  font-size: 20px;\n  font-size: 2rem;\n  font-weight: 400;\n  margin: 24px 0px 12px;\n  clear: both;\n}\nh4 {\n  font-size: 18px;\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 8px 0px;\n  clear: both;\n}\nh5 {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  margin: 8px 0px;\n  clear: both;\n}\nh6 {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: #6E6E6E;\n  margin: 8px 0px;\n  clear: both;\n}\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  font-size: inherit;\n}\n@media screen and (max-width: 600px) {\n  h2,\nh3,\nh4,\nh5,\nh6 {\n    margin: 8px 0;\n  }\n}\n.mat-tab-body-wrapper h2 {\n  margin-top: 0;\n}\np,\nol,\nul,\nol,\nli,\ninput,\na {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n  font-weight: 400;\n  color: #444444;\n}\np > em,\nol > em,\nul > em,\nol > em,\nli > em,\ninput > em,\na > em {\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n}\np {\n  margin: 14px 0 0;\n}\np + ul {\n  margin-top: 4px;\n}\nol li,\nol p {\n  margin: 4px 0;\n}\nol ol {\n  list-style-type: lower-alpha;\n}\nol ol ol {\n  list-style-type: lower-roman;\n}\nli {\n  padding-bottom: 8px;\n}\nli p {\n  margin: 0;\n}\na {\n  text-decoration: none;\n}\n.app-toolbar a {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: #FFFFFF;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  text-transform: uppercase;\n}\nstrong {\n  font-weight: 500;\n}\ntable {\n  border-collapse: collapse;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 12px 0 32px;\n}\ntable tbody th {\n  max-width: 100px;\n  padding: 13px 32px;\n  text-align: left;\n}\ntd {\n  font-weight: 400;\n  padding: 8px 30px;\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n}\ntd > p:first-child,\ntd ul:first-child {\n  margin-top: 0;\n}\ntd > p:last-child,\ntd ul:last-child {\n  margin-bottom: 0;\n}\nth {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  padding: 13px 32px;\n  text-align: left;\n}\ncode {\n  font-family: \"Droid Sans Mono\", monospace;\n  font-size: 90%;\n  color: #444444;\n}\n.sidenav-content a {\n  color: #1976D2;\n}\n.sidenav-content a:hover {\n  color: #6E6E6E;\n}\n:host {\n  display: block;\n}\n.vertical-menu-item {\n  box-sizing: border-box;\n  color: #444444;\n  cursor: pointer;\n  flex: 1;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  max-width: 260px;\n  overflow-wrap: break-word;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  text-decoration: none;\n  text-align: left;\n  word-wrap: break-word;\n}\n.vertical-menu-item:hover {\n  background-color: #DBDBDB;\n  color: #1E88E5;\n  text-shadow: 0 0 5px #ffffff;\n}\n.vertical-menu-item:focus {\n  outline: #1E88E5 auto 2px;\n}\n.vertical-menu-item .node-title {\n  flex: 1;\n}\n.vertical-menu-item .mat-icon {\n  margin: 4px;\n}\n.vertical-menu-item.selected {\n  color: #1E88E5;\n}\nbutton.vertical-menu-item {\n  border: none;\n  background-color: transparent;\n  margin-right: 0;\n  width: 100%;\n}\n.heading-children.expanded {\n  visibility: visible;\n  opacity: 1;\n  max-height: 4000px;\n  transition: visibility 500ms, opacity 500ms, max-height 500ms;\n  transition-timing-function: ease-in-out;\n}\n.heading-children.collapsed {\n  visibility: hidden;\n  opacity: 0;\n  max-height: 1px;\n  transition: visibility 275ms, opacity 275ms, max-height 280ms;\n  transition-timing-function: ease-out;\n}\n.level-1 {\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  padding-left: 14px;\n  transition: background-color 0.2s;\n}\n.level-2 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  padding-left: 12px;\n  text-transform: none;\n}\n.level-3 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 14px;\n  padding-left: 10px;\n}\n.level-4 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 14px;\n  padding-left: 8px;\n}\n.level-1.expanded .mat-icon, .level-2.expanded .mat-icon {\n  transform: rotate(90deg);\n  transition: transform 150ms;\n  transition-timing-function: ease-in-out;\n}\n.level-1:not(.expanded) .mat-icon, .level-2:not(.expanded) .mat-icon {\n  transform: rotate(0deg);\n  transition: transform 150ms;\n  transition-timing-function: ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RvY3MtYXBwL3NyYy9zdHlsZXMvX21peGlucy5zY3NzIiwicHJvamVjdHMvZG9jcy1hcHAvc3JjL3N0eWxlcy9fdHlwb2dyYXBoeS5zY3NzIiwicHJvamVjdHMvZG9jcy1hcHAvc3JjL2FwcC9sYXlvdXQvbmF2LWl0ZW0vbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvc3R5bGVzL19jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxQ0FBQTtBQ0FBO0VBQ0UsZ0JBQUE7QUNTRjtBRE5BO0VBQ0UsOEdFSlU7RUZLVixTQUFBO0VBQ0EsY0VnQlM7RUhpQlQsZUFBQTtFQUNBLGlCQUFBO0VDaENBLG1DQUFBO0VBQ0Esa0NBQUE7QUNVRjtBRFBBO0VBQ0UsY0VVUztBREFYO0FEUEE7RUR1QkUsZUFBQTtFQUNBLGlCQUFBO0VDdEJBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDV0Y7QURURTtFQU5GO0lBT0ksYUFBQTtFQ1lGO0FBQ0Y7QURUQTtFRFlFLGVBQUE7RUFDQSxpQkFBQTtFQ1hBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDYUY7QURWQTtFREtFLGVBQUE7RUFDQSxlQUFBO0VDSkEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNjRjtBRFhBO0VERkUsZUFBQTtFQUNBLGlCQUFBO0VDR0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2VGO0FEWkE7RURURSxlQUFBO0VBQ0EsaUJBQUE7RUNVQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDZ0JGO0FEYkE7RURoQkUsZUFBQTtFQUNBLGlCQUFBO0VDaUJBLGdCQUFBO0VBQ0EsY0VyQ1c7RUZzQ1gsZUFBQTtFQUNBLFdBQUE7QUNpQkY7QURURTs7Ozs7RUFDRSxrQkFBQTtBQ2dCSjtBRGJFO0VBVEY7Ozs7O0lBVUksYUFBQTtFQ29CRjtBQUNGO0FEakJBO0VBQ0UsYUFBQTtBQ29CRjtBRGpCQTs7Ozs7OztFRDFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFTQSxpQkFBQTtFQUNBLG1CQUFBO0VBTkEscUJBQUE7RUFDQSx1QkFBQTtFQzhDQSxnQkFBQTtFQUNBLGNFdEVTO0FENkZYO0FEdEJFOzs7Ozs7O0VEakRBLHFCQUFBO0VBQ0EsdUJBQUE7QUVnRkY7QUQzQkE7RUFDRSxnQkFBQTtBQzhCRjtBRDNCQTtFQUNFLGVBQUE7QUM4QkY7QUQxQkU7O0VBRUUsYUFBQTtBQzZCSjtBRHpCQTtFQUNFLDRCQUFBO0FDNEJGO0FEMUJFO0VBQ0UsNEJBQUE7QUM0Qko7QUR4QkE7RUFDRSxtQkFBQTtBQzJCRjtBRHpCRTtFQUNFLFNBQUE7QUMyQko7QUR2QkE7RUFDRSxxQkFBQTtBQzBCRjtBRHZCQTtFRDlGRSxlQUFBO0VBQ0EsaUJBQUE7RUMrRkEsZ0JBQUE7RUFDQSxjRXpITTtFRjBITiw4R0V6SVU7RUYwSVYseUJBQUE7QUMyQkY7QUR4QkE7RUFDRSxnQkFBQTtBQzJCRjtBRHhCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDMkJGO0FEeEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDMkJGO0FEeEJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFRHBIQSxxQkFBQTtFQUNBLHVCQUFBO0FFZ0pGO0FEeEJJOztFQUNFLGFBQUE7QUMyQk47QUR6Qkk7O0VBQ0UsZ0JBQUE7QUM0Qk47QUR2QkE7RUR2SUUsZUFBQTtFQUNBLGlCQUFBO0VDd0lBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQzJCRjtBRHhCQTtFQUNFLHlDRXJMVTtFRnNMVixjQUFBO0VBQ0EsY0VsS1M7QUQ2TFg7QUR4QkE7RUFDRSxjRWpMSztBRDRNUDtBRDFCRTtFQUNFLGNFektTO0FEcU1iO0FBdk5BO0VBQ0UsY0FBQTtBQTBORjtBQXZOQTtFQUNFLHNCQUFBO0VBQ0EsY0NhUztFRFpULGVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQTBORjtBQXhORTtFQUNFLHlCQ05RO0VET1IsY0NiUztFRGNULDRCQUFBO0FBME5KO0FBdk5FO0VBQ0UseUJBQUE7QUF5Tko7QUF0TkU7RUFDRSxPQUFBO0FBd05KO0FBcE5FO0VBQ0UsV0FBQTtBQXNOSjtBQWxOQTtFQUNFLGNDaENXO0FEcVBiO0FBbE5BO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFxTkY7QUFsTkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBRUEsdUNBQUE7QUFxTkY7QUFsTkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkRBQUE7RUFFQSxvQ0FBQTtBQXFORjtBQWxOQTtFQUNFLDhHQ3pFVTtFRDBFVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBcU5GO0FBbE5BO0VBQ0UsY0M1RFc7RUQ2RFgsOEdDbEZVO0VEbUZWLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFxTkY7QUFsTkE7RUFDRSxjQ3JFVztFRHNFWCw4R0MzRlU7RUQ0RlYsZUFBQTtFQUNBLGtCQUFBO0FBcU5GO0FBbE5BO0VBQ0UsY0M1RVc7RUQ2RVgsOEdDbEdVO0VEbUdWLGVBQUE7RUFDQSxpQkFBQTtBQXFORjtBQWxOQTtFRm5DRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7QUU2UEY7QUF4TkE7RUZ2Q0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0FFdVFGIiwiZmlsZSI6InByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvbGF5b3V0L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgTWVkaWEgcXVlcmllc1xyXG4gVG8gdXNlIHRoZXNlLCBwdXQgdGhpcyBzbmlwcGV0IGluIHRoZSBhcHByb3ByaWF0ZSBzZWxlY3RvcjpcclxuICAgICBAaW5jbHVkZSBicCh0aW55KSB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICAgICB9XHJcbiAgICAgUmVwbGFjZSBcInRpbnlcIiB3aXRoIFwibWVkaXVtXCIgb3IgXCJiaWdcIiBhcyBuZWNlc3NhcnkuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWl4aW4gYnAoJHBvaW50KSB7XHJcblxyXG4gICRicC14c21hbGw6IFwiKG1pbi13aWR0aDogMzIwcHgpXCI7XHJcbiAgJGJwLXRlZW55OiBcIihtaW4td2lkdGg6IDQ4MHB4KVwiO1xyXG4gICRicC10aW55OiBcIihtaW4td2lkdGg6IDYwMHB4KVwiO1xyXG4gICRicC1zbWFsbDogXCIobWluLXdpZHRoOiA2NTBweClcIjtcclxuICAkYnAtbWVkaXVtOiBcIihtaW4td2lkdGg6IDgwMHB4KVwiO1xyXG4gICRicC1iaWc6IFwiKG1pbi13aWR0aDogMTAwMHB4KVwiO1xyXG5cclxuICBAaWYgJHBvaW50ID09IGJpZyB7XHJcbiAgICBAbWVkaWEgI3skYnAtYmlnfSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZWRpdW0ge1xyXG4gICAgQG1lZGlhICN7JGJwLW1lZGl1bX0geyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gc21hbGwge1xyXG4gICAgQG1lZGlhICN7JGJwLXNtYWxsfSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gdGlueSB7XHJcbiAgICBAbWVkaWEgI3skYnAtdGlueX0gIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHRlZW55IHtcclxuICAgIEBtZWRpYSAjeyRicC10ZWVueX0gIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHhzbWFsbCB7XHJcbiAgICBAbWVkaWEgI3skYnAteHNtYWxsfSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUkVNIEZvbnQgQWRqdXN0bWVudHNcclxuQG1peGluIGZvbnQtc2l6ZSgkc2l6ZVZhbHVlKSB7XHJcbiAgZm9udC1zaXplOiAoJHNpemVWYWx1ZSkgKyBweDtcclxuICBmb250LXNpemU6ICgkc2l6ZVZhbHVlIC8gMTApICsgcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gbGV0dGVyLXNwYWNpbmcoJHNwYWNpbmdWYWx1ZSkge1xyXG4gIGxldHRlci1zcGFjaW5nOiAoJHNwYWNpbmdWYWx1ZSkgKyBweDtcclxuICBsZXR0ZXItc3BhY2luZzogKCRzcGFjaW5nVmFsdWUgLyAxMCkgKyByZW07XHJcbn1cclxuXHJcbkBtaXhpbiBsaW5lLWhlaWdodCgkaGVpZ2h0VmFsdWUpIHtcclxuICBsaW5lLWhlaWdodDogKCRoZWlnaHRWYWx1ZSkgKyBweDtcclxuICBsaW5lLWhlaWdodDogKCRoZWlnaHRWYWx1ZSAvIDEwKSArIHJlbTtcclxufVxyXG5cclxuLy8gUExBQ0VIT0xERVJcclxuLy8gTk9URTogVmVuZG9yLXByZWZpeGVkIHNlbGVjdG9ycyBtdXN0IGJlIG9uIHNlcGFyYXRlIGJsb2NrcywgYmVjYXVzZSBvbmUgaW52YWxpZC91bmtub3duXHJcbi8vICAgICAgIHNlbGVjdG9yIHdpbGwgaW52YWxpZGF0ZSB0aGUgd2hvbGUgYmxvY2suXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7IEBjb250ZW50OyB9ICAvLyBJRVxyXG4gICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgeyBAY29udGVudDsgfSAgLy8gRWRnZVxyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBAY29udGVudDsgfSAgLy8gUVEgQnJvd3NlclxyXG4gICY6OnBsYWNlaG9sZGVyICAgICAgICAgICAgICAgeyBAY29udGVudDsgfSAgLy8gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpXHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGNvZGVibG9jaygkYmdjb2xvcikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvOyAvLyB3YXMgMjRcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICRsaWdodGdyYXk7XHJcbn1cclxuXHJcbi8vIElORk8gQ0FSRCBTS0VMRVRPTlxyXG5AbWl4aW4gY2FyZCgkaGVpZ2h0LCAkd2lkdGgpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCRibGFjaywgMC4yNCksIDAgMCAycHggcmdiYSgkYmxhY2ssIDAuMTIpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggOHB4IHJnYmEoJGJsYWNrLCAwLjI0KSwgMCAwIDhweCByZ2JhKCRibGFjaywgMC4xMik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsImh0bWwge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogJGRhcmtncmF5O1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCk7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgY29sb3I6ICRkZWVwZ3JheTtcclxufVxyXG5cclxuaDEge1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgyNCk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA4cHggMHB4O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMjIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAzMnB4IDBweCAyNHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgQGluY2x1ZGUgZm9udC1zaXplKDIwKTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMjRweCAwcHggMTJweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuaDQge1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiA4cHggMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgQGluY2x1ZGUgZm9udC1zaXplKDE2KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAkbWVkaXVtZ3JheTtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtdGFiLWJvZHktd3JhcHBlciBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxucCxcclxub2wsXHJcbnVsLFxyXG5vbCxcclxubGksXHJcbmlucHV0LFxyXG5hIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTQpO1xyXG4gIEBpbmNsdWRlIGxpbmUtaGVpZ2h0KDI0KTtcclxuICBAaW5jbHVkZSBsZXR0ZXItc3BhY2luZygwLjMpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICRkYXJrZ3JheTtcclxuICAmID4gZW0ge1xyXG4gICAgQGluY2x1ZGUgbGV0dGVyLXNwYWNpbmcoMC4zKTtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMTRweCAwIDA7XHJcbn1cclxuXHJcbnAgKyB1bCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG5vbCB7XHJcbiAgbGksXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gIH1cclxufVxyXG5cclxub2wgb2wge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XHJcblxyXG4gIG9sIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XHJcbiAgfVxyXG59XHJcblxyXG5saSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hcHAtdG9vbGJhciBhIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBtYXJnaW46IDEycHggMCAzMnB4O1xyXG59XHJcblxyXG50YWJsZSB0Ym9keSB0aCB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOiAxM3B4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgQGluY2x1ZGUgbGV0dGVyLXNwYWNpbmcoMC4zKTtcclxuXHJcbiAgPiBwLFxyXG4gIHVsIHtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnRoIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMTNweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmNvZGUge1xyXG4gIGZvbnQtZmFtaWx5OiAkY29kZS1mb250O1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIGNvbG9yOiAkZGFya2dyYXk7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6ICRibHVlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRtZWRpdW1ncmF5O1xyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgTWVkaWEgcXVlcmllc1xuIFRvIHVzZSB0aGVzZSwgcHV0IHRoaXMgc25pcHBldCBpbiB0aGUgYXBwcm9wcmlhdGUgc2VsZWN0b3I6XG4gICAgIEBpbmNsdWRlIGJwKHRpbnkpIHtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICAgfVxuICAgICBSZXBsYWNlIFwidGlueVwiIHdpdGggXCJtZWRpdW1cIiBvciBcImJpZ1wiIGFzIG5lY2Vzc2FyeS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDhweCAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMzJweCAwcHggMjRweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMjRweCAwcHggMTJweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDhweCAwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBtYXJnaW46IDhweCAwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5oMiBhLFxuaDMgYSxcbmg0IGEsXG5oNSBhLFxuaDYgYSB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbn1cblxuLm1hdC10YWItYm9keS13cmFwcGVyIGgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxucCxcbm9sLFxudWwsXG5vbCxcbmxpLFxuaW5wdXQsXG5hIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxucCA+IGVtLFxub2wgPiBlbSxcbnVsID4gZW0sXG5vbCA+IGVtLFxubGkgPiBlbSxcbmlucHV0ID4gZW0sXG5hID4gZW0ge1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAxNHB4IDAgMDtcbn1cblxucCArIHVsIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG5vbCBsaSxcbm9sIHAge1xuICBtYXJnaW46IDRweCAwO1xufVxuXG5vbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XG59XG5vbCBvbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XG59XG5cbmxpIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbmxpIHAge1xuICBtYXJnaW46IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hcHAtdG9vbGJhciBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgbWFyZ2luOiAxMnB4IDAgMzJweDtcbn1cblxudGFibGUgdGJvZHkgdGgge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxM3B4IDMycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG59XG50ZCA+IHA6Zmlyc3QtY2hpbGQsXG50ZCB1bDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG50ZCA+IHA6bGFzdC1jaGlsZCxcbnRkIHVsOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEzcHggMzJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRyb2lkIFNhbnMgTW9ub1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzQ0NDQ0NDtcbn1cblxuLnNpZGVuYXYtY29udGVudCBhIHtcbiAgY29sb3I6ICMxOTc2RDI7XG59XG4uc2lkZW5hdi1jb250ZW50IGE6aG92ZXIge1xuICBjb2xvcjogIzZFNkU2RTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZlcnRpY2FsLW1lbnUtaXRlbSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDI2MHB4O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi52ZXJ0aWNhbC1tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEQkRCO1xuICBjb2xvcjogIzFFODhFNTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZmZmZjtcbn1cbi52ZXJ0aWNhbC1tZW51LWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiAjMUU4OEU1IGF1dG8gMnB4O1xufVxuLnZlcnRpY2FsLW1lbnUtaXRlbSAubm9kZS10aXRsZSB7XG4gIGZsZXg6IDE7XG59XG4udmVydGljYWwtbWVudS1pdGVtIC5tYXQtaWNvbiB7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4udmVydGljYWwtbWVudS1pdGVtLnNlbGVjdGVkIHtcbiAgY29sb3I6ICMxRTg4RTU7XG59XG5cbmJ1dHRvbi52ZXJ0aWNhbC1tZW51LWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGluZy1jaGlsZHJlbi5leHBhbmRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIG1heC1oZWlnaHQ6IDQwMDBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1MDBtcywgb3BhY2l0eSA1MDBtcywgbWF4LWhlaWdodCA1MDBtcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLmhlYWRpbmctY2hpbGRyZW4uY29sbGFwc2VkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBtYXgtaGVpZ2h0OiAxcHg7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMjc1bXMsIG9wYWNpdHkgMjc1bXMsIG1heC1oZWlnaHQgMjgwbXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5sZXZlbC0xIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmxldmVsLTIge1xuICBjb2xvcjogIzZFNkU2RTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubGV2ZWwtMyB7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmxldmVsLTQge1xuICBjb2xvcjogIzZFNkU2RTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmxldmVsLTEuZXhwYW5kZWQgLm1hdC1pY29uLCAubGV2ZWwtMi5leHBhbmRlZCAubWF0LWljb24ge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLmxldmVsLTE6bm90KC5leHBhbmRlZCkgLm1hdC1pY29uLCAubGV2ZWwtMjpub3QoLmV4cGFuZGVkKSAubWF0LWljb24ge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59IiwiLy8gVFlQT0dSQVBIWVxyXG4kbWFpbi1mb250OiBcIlJvYm90b1wiLFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLFwiTHVjaWRhIEdyYW5kZVwiLHNhbnMtc2VyaWY7XHJcbiRjb2RlLWZvbnQ6IFwiRHJvaWQgU2FucyBNb25vXCIsIG1vbm9zcGFjZTtcclxuXHJcbi8vIFotTEFZRVJcclxuJGxheWVyLTE6IDE7XHJcbiRsYXllci0yOiAyO1xyXG4kbGF5ZXItMzogMztcclxuJGxheWVyLTQ6IDQ7XHJcbiRsYXllci01OiA1O1xyXG5cclxuLy8gQ09MT1IgUEFMRVRURVxyXG4kYmx1ZTogIzE5NzZEMjtcclxuJGFjY2VudGJsdWU6ICMxRTg4RTU7XHJcbiRicmlnaHRyZWQ6ICNERDAwMzE7XHJcbiRkYXJrcmVkOiAjQzMwMDJGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRvZmZ3aGl0ZTogI0ZBRkFGQTtcclxuJGJhY2tncm91bmRncmF5OiAjRjFGMUYxO1xyXG4kbGlnaHRncmF5OiAjREJEQkRCO1xyXG4kbGlnaHRib3hncmF5OiAjRUJFQkVCO1xyXG4kbWlzdDogI0VDRUZGMTtcclxuJG1lZGl1bWdyYXk6ICM2RTZFNkU7XHJcbiRkYXJrZ3JheTogIzQ0NDQ0NDtcclxuJGRlZXBncmF5OiAjMzMzMzMzO1xyXG4kYmxhY2s6ICMwQTEwMTQ7XHJcbiRvcmFuZ2U6ICNGRjk4MDA7XHJcbiRkYXJrb3JhbmdlOiAjOTQwO1xyXG4kYW50aS1wYXR0ZXJuOiAkYnJpZ2h0cmVkO1xyXG5cclxuLy8gQVBJICYgQ09ERSBDT0xPUlNcclxuJGFtYmVyLTcwMDogI0ZGQTAwMDtcclxuJGJsdWUtNDAwOiAjNDJBNUY1O1xyXG4kYmx1ZS01MDA6ICMyMTk2RjM7XHJcbiRibHVlLTYwMDogIzFFODhFNTtcclxuJGJsdWUtODAwOiAjMTU2NUMwO1xyXG4kYmx1ZS05MDA6ICMwRDQ3QTE7XHJcbiRibHVlLWdyZXktNTA6ICNFQ0VGRjE7XHJcbiRibHVlLWdyZXktMTAwOiAjQ0ZEOERDO1xyXG4kYmx1ZS1ncmV5LTIwMDogI0IwQkVDNTtcclxuJGJsdWUtZ3JleS0zMDA6ICM5MEE0QUU7XHJcbiRibHVlLWdyZXktNDAwOiAjNzg5MDlDO1xyXG4kYmx1ZS1ncmV5LTUwMDogIzYwN0Q4QjtcclxuJGJsdWUtZ3JleS02MDA6ICM1NDZFN0E7XHJcbiRibHVlLWdyZXktNzAwOiAjNDU1QTY0O1xyXG4kYmx1ZS1ncmV5LTgwMDogIzM3NDc0RjtcclxuJGJsdWUtZ3JleS05MDA6ICMyNjMyMzg7XHJcbiRjb2RlZ3JlZW46ICMxN2ZmMGI7XHJcbiRncmVlbi01MDA6ICM0Q0FGNTA7XHJcbiRncmVlbi04MDA6ICMyRTdEMzI7XHJcbiRsaWdodC1ncmVlbi02MDA6ICM3Q0IzNDI7XHJcbiRwaW5rLTYwMDogI0Q4MUI2MDtcclxuJHB1cnBsZS02MDA6ICM4RTI0QUE7XHJcbiR0ZWFsLTUwMDogIzAwOTY4ODtcclxuJGxpZ2h0Z3JleTogI0Y1RjZGNztcclxuXHJcbi8vIFNUQVRFIENPTE9SU1xyXG4kZm9jdXMtb3V0bGluZS1vbmRhcms6IHJnYmEoJHdoaXRlLCAwLjgpO1xyXG4kZm9jdXMtb3V0bGluZS1vbmxpZ2h0OiAkYWNjZW50Ymx1ZTtcclxuXHJcbi8vIEdSQURJRU5UU1xyXG4kYmx1ZWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCRibHVlLTkwMCwkYmx1ZS00MDApO1xyXG4kcmVkZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsJGRhcmtyZWQsJGJyaWdodHJlZCk7XHJcblxyXG4vLyBBUEkgTEFCRUwgQ09MT1IgQU5EIFNZTUJPTFMgTUFQXHJcbiRhcGktc3ltYm9sczogKFxyXG4gICAgICAgIGFsbDogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlXHJcbiAgICAgICAgKSxcclxuICAgICAgICBjbGFzczogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtNTAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBjb25zdDogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0snLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG1lZGl1bWdyYXlcclxuICAgICAgICApLFxyXG4gICAgICAgIGRlY29yYXRvcjogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0AnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtODAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkaXJlY3RpdmU6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwaW5rLTYwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZW51bTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0UnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFtYmVyLTcwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZnVuY3Rpb246IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdGJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbi01MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIGludGVyZmFjZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0knLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRlYWwtNTAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBsZXQ6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdLJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtZWRpdW1ncmF5XHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZ21vZHVsZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ00nLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhcmtvcmFuZ2VcclxuICAgICAgICApLFxyXG4gICAgICAgIHBhY2thZ2U6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdQaycsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHVycGxlLTYwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgcGlwZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1AnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtZ3JleS02MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIHR5cGUtYWxpYXM6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdUJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1ncmVlbi02MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIHZhcjogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0snLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG1lZGl1bWdyYXlcclxuICAgICAgICApLFxyXG4pO1xyXG5cclxuLy8gT1RIRVJcclxuJHNtYWxsLWJyZWFrcG9pbnQtd2lkdGg6IDg0MHB4O1xyXG4kcGhvbmUtYnJlYWtwb2ludDogNDgwcHg7XHJcbiR0YWJsZXQtYnJlYWtwb2ludDogODAwcHg7XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/layout/nav-item/nav-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/nav-item/nav-item.component.ts ***!
  \*******************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavItemComponent = class NavItemComponent {
    constructor() {
        this.isWide = false;
        this.level = 1;
        this.isParentExpanded = true;
        this.isExpanded = false;
        this.isSelected = false;
    }
    ngOnChanges() {
        this.nodeChildren = this.node && this.node.children ? this.node.children.filter(n => !n.hidden) : [];
        if (this.selectedNodes) {
            const ix = this.selectedNodes.find(node => node.title === this.node.title);
            this.isSelected = ix !== undefined; // this node is the selected node or its ancestor
            // TODO: build this nice
            /*
            this.isExpanded = this.isParentExpanded &&
              (this.isSelected || // expand if selected or ...
                // preserve expanded state when display is wide; collapse in mobile.
                (this.isWide && this.isExpanded));
            */
        }
        else {
            this.isSelected = false;
        }
        this.setClasses();
    }
    setClasses() {
        this.classes = {
            ['level-' + this.level]: true,
            collapsed: !this.isExpanded,
            expanded: this.isExpanded,
            selected: this.isSelected
        };
    }
    headerClicked() {
        this.isExpanded = !this.isExpanded;
        this.setClasses();
    }
};
NavItemComponent.propDecorators = {
    isWide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isParentExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
NavItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-item',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-item/nav-item.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/layout/nav-item/nav-item.component.scss")).default]
    })
], NavItemComponent);



/***/ }),

/***/ "./src/app/shared/copier.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/copier.service.ts ***!
  \******************************************/
/*! exports provided: CopierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopierService", function() { return CopierService; });
/**
 * This class is based on the code in the following projects:
 *
 * - https://github.com/zenorocha/select
 * - https://github.com/zenorocha/clipboard.js/
 *
 * Both released under MIT license - © Zeno Rocha
 *
 * It is also influenced by the Angular CDK `PendingCopy` class:
 * https://github.com/angular/components/blob/master/src/cdk/clipboard/pending-copy.ts
 */
class CopierService {
    /**
     * Copy the contents of a `<textarea>` element to the clipboard.
     *
     * NOTE: For this method to work, the elements must be already inserted into the DOM.
     *
     * @param textArea The area containing the text to be copied to the clipboard.
     * @return Whether the copy operation was successful.
     */
    copyTextArea(textArea) {
        const currentFocus = document.activeElement;
        try {
            textArea.select();
            textArea.setSelectionRange(0, textArea.value.length);
            return document.execCommand('copy');
        }
        catch (_a) {
            return false;
        }
        finally {
            // Calling `.select()` on the `<textarea>` element may have also focused it.
            // Change the focus back to the previously focused element.
            currentFocus === null || currentFocus === void 0 ? void 0 : currentFocus.focus();
        }
    }
    /**
     * Create a temporary, hidden `<textarea>` element and set its value to the specified text.
     *
     * @param text The text to be inserted into the textarea.
     * @return The temporary `<textarea>` element containing the specified text.
     */
    createTextArea(text) {
        const docElem = document.documentElement;
        const isRTL = docElem.getAttribute('dir') === 'rtl';
        // Create a temporary element to hold the contents to copy.
        const textArea = document.createElement('textarea');
        const style = textArea.style;
        // Prevent zooming on iOS.
        style.fontSize = '12pt';
        // Reset box model.
        style.border = '0';
        style.padding = '0';
        style.margin = '0';
        // Make the element invisible and move it out of screen horizontally.
        style.opacity = '0';
        style.position = 'fixed';
        style.top = '0';
        style[isRTL ? 'right' : 'left'] = '-999em';
        textArea.setAttribute('aria-hidden', 'true');
        textArea.setAttribute('readonly', '');
        textArea.value = text;
        return textArea;
    }
    /**
     * Copy the specified text to the clipboard.
     *
     * @param text The text to be copied to the clipboard.
     * @return Whether the copy operation was successful.
     */
    copyText(text) {
        // Create a `<textarea>` element with the specified text.
        const textArea = this.createTextArea(text);
        // Insert it into the DOM.
        document.body.appendChild(textArea);
        // Copy its contents to the clipboard.
        const success = this.copyTextArea(textArea);
        // Remove it from the DOM, so it can be garbage-collected.
        if (textArea.parentNode) {
            // We cannot use ChildNode.remove() because of IE11.
            textArea.parentNode.removeChild(textArea);
        }
        return success;
    }
}


/***/ }),

/***/ "./src/app/shared/logger.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/logger.service.ts ***!
  \******************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let Logger = class Logger {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    log(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            console.log(value, ...rest);
        }
    }
    error(error) {
        this.errorHandler.handleError(error);
    }
    warn(value, ...rest) {
        console.warn(value, ...rest);
    }
};
Logger.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] }
];
Logger = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]])
], Logger);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tengelhardt\source\repos\angular-tree-component\projects\docs-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map