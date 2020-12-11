(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js":
    /*!***************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js ***!
      \***************************************************************************************************************************************/

    /*! exports provided: KEYS, LoadingComponent, TREE_ACTIONS, TreeAnimateOpenDirective, TreeComponent, TreeDragDirective, TreeDraggedElement, TreeDropDirective, TreeModel, TreeModule, TreeNode, TreeNodeCheckboxComponent, TreeNodeChildrenComponent, TreeNodeCollectionComponent, TreeNodeComponent, TreeNodeContent, TreeNodeDropSlot, TreeNodeExpanderComponent, TreeNodeWrapperComponent, TreeViewportComponent, TreeVirtualScroll, ɵa, ɵb, ɵc, ɵd, ɵe */

    /***/
    function distAngularTreeComponentFesm2015CirclonAngularTreeComponentJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _keys;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEYS", function () {
        return KEYS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TREE_ACTIONS", function () {
        return TREE_ACTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeAnimateOpenDirective", function () {
        return TreeAnimateOpenDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeComponent", function () {
        return TreeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDragDirective", function () {
        return TreeDragDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDraggedElement", function () {
        return TreeDraggedElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDropDirective", function () {
        return TreeDropDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeModel", function () {
        return TreeModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeModule", function () {
        return TreeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNode", function () {
        return TreeNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNodeCheckboxComponent", function () {
        return TreeNodeCheckboxComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNodeChildrenComponent", function () {
        return TreeNodeChildrenComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNodeCollectionComponent", function () {
        return TreeNodeCollectionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNodeComponent", function () {
        return TreeNodeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNodeContent", function () {
        return TreeNodeContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNodeDropSlot", function () {
        return TreeNodeDropSlot;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNodeExpanderComponent", function () {
        return TreeNodeExpanderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNodeWrapperComponent", function () {
        return TreeNodeWrapperComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeViewportComponent", function () {
        return TreeViewportComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeVirtualScroll", function () {
        return TreeVirtualScroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return actionInternal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return action;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return computed;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return observable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return TreeMobxAutorunDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! mobx */
      "../../node_modules/mobx/lib/mobx.module.js");
      /* harmony import */


      var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash-es */
      "../../node_modules/lodash-es/lodash.js");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/mobx-angular/tree-mobx-autorun.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeMobxAutorunDirective = /*#__PURE__*/function () {
        /**
         * @param {?} templateRef
         * @param {?} viewContainer
         */
        function TreeMobxAutorunDirective(templateRef, viewContainer) {
          _classCallCheck(this, TreeMobxAutorunDirective);

          this.templateRef = templateRef;
          this.viewContainer = viewContainer;
          this.templateBindings = {};
        }
        /**
         * @return {?}
         */


        _createClass(TreeMobxAutorunDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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

        }, {
          key: "shouldDetach",
          value: function shouldDetach() {
            return this.treeMobxAutorun && this.treeMobxAutorun.detach;
          }
          /**
           * @param {?} view
           * @return {?}
           */

        }, {
          key: "autoDetect",
          value: function autoDetect(view) {
            this.dispose = Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])(
            /**
            * @return {?}
            */
            function () {
              return view.detectChanges();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.dispose) {
              this.dispose();
            }
          }
        }]);

        return TreeMobxAutorunDirective;
      }();

      TreeMobxAutorunDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[treeMobxAutorun]'
        }]
      }];
      /** @nocollapse */

      TreeMobxAutorunDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };

      TreeMobxAutorunDirective.propDecorators = {
        treeMobxAutorun: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/constants/keys.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var KEYS = {
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

      function IActionHandler() {}

      var ɵ0 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ0(tree, node, $event) {
        return node && node.toggleActivated();
      },
          ɵ1 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ1(tree, node, $event) {
        return node && node.toggleActivated(true);
      },
          ɵ2 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ2(tree, node, $event) {
        return node && node.toggleSelected();
      },
          ɵ3 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ3(tree, node, $event) {
        return node.setIsActive(true);
      },
          ɵ4 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ4(tree, node, $event) {
        return node.setIsActive(false);
      },
          ɵ5 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ5(tree, node, $event) {
        return node.setIsSelected(true);
      },
          ɵ6 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ6(tree, node, $event) {
        return node.setIsSelected(false);
      },
          ɵ7 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ7(tree, node, $event) {
        return node.focus();
      },
          ɵ8 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ8(tree, node, $event) {
        return node.hasChildren && node.toggleExpanded();
      },
          ɵ9 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ9(tree, node, $event) {
        return node.expand();
      },
          ɵ10 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ10(tree, node, $event) {
        return node.collapse();
      },
          ɵ11 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ11(tree, node, $event) {
        return tree.focusDrillDown();
      },
          ɵ12 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ12(tree, node, $event) {
        return tree.focusDrillUp();
      },
          ɵ13 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ13(tree, node, $event) {
        return tree.focusNextNode();
      },
          ɵ14 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @return {?}
      */
      function ɵ14(tree, node, $event) {
        return tree.focusPreviousNode();
      },
          ɵ15 =
      /**
      * @param {?} tree
      * @param {?} node
      * @param {?} $event
      * @param {?} __3
      * @return {?}
      */
      function ɵ15(tree, node, $event, _ref) {
        var from = _ref.from,
            to = _ref.to;

        // default action assumes from = node, to = {parent, index}
        if ($event.ctrlKey) {
          tree.copyNode(from, to);
        } else {
          tree.moveNode(from, to);
        }
      };
      /** @type {?} */


      var TREE_ACTIONS = {
        TOGGLE_ACTIVE: ɵ0,
        TOGGLE_ACTIVE_MULTI: ɵ1,
        TOGGLE_SELECTED: ɵ2,
        ACTIVATE: ɵ3,
        DEACTIVATE: ɵ4,
        SELECT: ɵ5,
        DESELECT: ɵ6,
        FOCUS: ɵ7,
        TOGGLE_EXPANDED: ɵ8,
        EXPAND: ɵ9,
        COLLAPSE: ɵ10,
        DRILL_DOWN: ɵ11,
        DRILL_UP: ɵ12,
        NEXT_NODE: ɵ13,
        PREVIOUS_NODE: ɵ14,
        MOVE_NODE: ɵ15
      };
      /** @type {?} */

      var defaultActionMapping = {
        mouse: {
          click: TREE_ACTIONS.TOGGLE_ACTIVE,
          dblClick: null,
          contextMenu: null,
          expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
          checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
          drop: TREE_ACTIONS.MOVE_NODE
        },
        keys: (_keys = {}, _defineProperty(_keys, KEYS.RIGHT, TREE_ACTIONS.DRILL_DOWN), _defineProperty(_keys, KEYS.LEFT, TREE_ACTIONS.DRILL_UP), _defineProperty(_keys, KEYS.DOWN, TREE_ACTIONS.NEXT_NODE), _defineProperty(_keys, KEYS.UP, TREE_ACTIONS.PREVIOUS_NODE), _defineProperty(_keys, KEYS.SPACE, TREE_ACTIONS.TOGGLE_ACTIVE), _defineProperty(_keys, KEYS.ENTER, TREE_ACTIONS.TOGGLE_ACTIVE), _keys)
      };
      /**
       * @record
       */

      function IActionMapping() {}

      if (false) {}

      var TreeOptions = /*#__PURE__*/function () {
        /**
         * @param {?=} options
         */
        function TreeOptions() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, TreeOptions);

          this.options = options;
          this.actionMapping = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["defaultsDeep"])({}, this.options.actionMapping, defaultActionMapping);

          if (options.rtl) {
            this.actionMapping.keys[KEYS.RIGHT] =
            /** @type {?} */
            Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(options, ['actionMapping', 'keys', KEYS.RIGHT]) || TREE_ACTIONS.DRILL_UP;
            this.actionMapping.keys[KEYS.LEFT] =
            /** @type {?} */
            Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["get"])(options, ['actionMapping', 'keys', KEYS.LEFT]) || TREE_ACTIONS.DRILL_DOWN;
          }
        }
        /**
         * @return {?}
         */


        _createClass(TreeOptions, [{
          key: "getNodeClone",

          /**
           * @param {?} node
           * @return {?}
           */
          value: function getNodeClone(node) {
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

        }, {
          key: "allowDrop",
          value: function allowDrop(element, to, $event) {
            if (this.options.allowDrop instanceof Function) {
              return this.options.allowDrop(element, to, $event);
            } else {
              return this.options.allowDrop === undefined ? true : this.options.allowDrop;
            }
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "allowDrag",
          value: function allowDrag(node) {
            if (this.options.allowDrag instanceof Function) {
              return this.options.allowDrag(node);
            } else {
              return this.options.allowDrag;
            }
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "nodeClass",
          value: function nodeClass(node) {
            return this.options.nodeClass ? this.options.nodeClass(node) : '';
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "nodeHeight",
          value: function nodeHeight(node) {
            if (node.data.virtual) {
              return 0;
            }
            /** @type {?} */


            var nodeHeight = this.options.nodeHeight || 22;

            if (typeof nodeHeight === 'function') {
              nodeHeight = nodeHeight(node);
            } // account for drop slots:


            return nodeHeight + (node.index === 0 ? 2 : 1) * this.dropSlotHeight;
          }
          /**
           * @return {?}
           */

        }, {
          key: "hasChildrenField",
          get: function get() {
            return this.options.hasChildrenField || 'hasChildren';
          }
          /**
           * @return {?}
           */

        }, {
          key: "childrenField",
          get: function get() {
            return this.options.childrenField || 'children';
          }
          /**
           * @return {?}
           */

        }, {
          key: "displayField",
          get: function get() {
            return this.options.displayField || 'name';
          }
          /**
           * @return {?}
           */

        }, {
          key: "idField",
          get: function get() {
            return this.options.idField || 'id';
          }
          /**
           * @return {?}
           */

        }, {
          key: "isExpandedField",
          get: function get() {
            return this.options.isExpandedField || 'isExpanded';
          }
          /**
           * @return {?}
           */

        }, {
          key: "getChildren",
          get: function get() {
            return this.options.getChildren;
          }
          /**
           * @return {?}
           */

        }, {
          key: "levelPadding",
          get: function get() {
            return this.options.levelPadding || 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "useVirtualScroll",
          get: function get() {
            return this.options.useVirtualScroll;
          }
          /**
           * @return {?}
           */

        }, {
          key: "animateExpand",
          get: function get() {
            return this.options.animateExpand;
          }
          /**
           * @return {?}
           */

        }, {
          key: "animateSpeed",
          get: function get() {
            return this.options.animateSpeed || 1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "animateAcceleration",
          get: function get() {
            return this.options.animateAcceleration || 1.2;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollOnActivate",
          get: function get() {
            return this.options.scrollOnActivate === undefined ? true : this.options.scrollOnActivate;
          }
          /**
           * @return {?}
           */

        }, {
          key: "rtl",
          get: function get() {
            return !!this.options.rtl;
          }
          /**
           * @return {?}
           */

        }, {
          key: "rootId",
          get: function get() {
            return this.options.rootId;
          }
          /**
           * @return {?}
           */

        }, {
          key: "useCheckbox",
          get: function get() {
            return this.options.useCheckbox;
          }
          /**
           * @return {?}
           */

        }, {
          key: "useTriState",
          get: function get() {
            return this.options.useTriState === undefined ? true : this.options.useTriState;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollContainer",
          get: function get() {
            return this.options.scrollContainer;
          }
          /**
           * @return {?}
           */

        }, {
          key: "allowDragoverStyling",
          get: function get() {
            return this.options.allowDragoverStyling === undefined ? true : this.options.allowDragoverStyling;
          }
        }, {
          key: "dropSlotHeight",
          get: function get() {
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(this.options.dropSlotHeight) ? this.options.dropSlotHeight : 2;
          }
        }]);

        return TreeOptions;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/constants/events.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var TREE_EVENTS = {
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

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TreeNode = /*#__PURE__*/function () {
        /**
         * @param {?} data
         * @param {?} parent
         * @param {?} treeModel
         * @param {?} index
         */
        function TreeNode(data, parent, treeModel, index) {
          var _this = this;

          _classCallCheck(this, TreeNode);

          this.data = data;
          this.parent = parent;
          this.treeModel = treeModel;
          this.position = 0;

          this.allowDrop =
          /**
          * @param {?} element
          * @param {?=} $event
          * @return {?}
          */
          function (element, $event) {
            return _this.options.allowDrop(element, {
              parent: _this,
              index: 0
            }, $event);
          };

          this.allowDragoverStyling =
          /**
          * @return {?}
          */
          function () {
            return _this.options.allowDragoverStyling;
          };

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


        _createClass(TreeNode, [{
          key: "fireEvent",

          /**
           * @param {?} event
           * @return {?}
           */
          value: function fireEvent(event) {
            this.treeModel.fireEvent(event);
          } // field accessors:

          /**
           * @return {?}
           */

        }, {
          key: "getField",

          /**
           * @param {?} key
           * @return {?}
           */
          value: function getField(key) {
            return this.data[this.options["".concat(key, "Field")]];
          }
          /**
           * @param {?} key
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setField",
          value: function setField(key, value) {
            this.data[this.options["".concat(key, "Field")]] = value;
          } // traversing:

          /**
           * @param {?} steps
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "_findAdjacentSibling",
          value: function _findAdjacentSibling(steps) {
            var skipHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            /** @type {?} */
            var siblings = this._getParentsChildren(skipHidden);
            /** @type {?} */


            var index = siblings.indexOf(this);
            return siblings.length > index + steps ? siblings[index + steps] : null;
          }
          /**
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "findNextSibling",
          value: function findNextSibling() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return this._findAdjacentSibling(+1, skipHidden);
          }
          /**
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "findPreviousSibling",
          value: function findPreviousSibling() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return this._findAdjacentSibling(-1, skipHidden);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getVisibleChildren",
          value: function getVisibleChildren() {
            return this.visibleChildren;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFirstChild",

          /**
           * @param {?=} skipHidden
           * @return {?}
           */
          value: function getFirstChild() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            /** @type {?} */
            var children = skipHidden ? this.visibleChildren : this.children;
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["first"])(children || []);
          }
          /**
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "getLastChild",
          value: function getLastChild() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            /** @type {?} */
            var children = skipHidden ? this.visibleChildren : this.children;
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["last"])(children || []);
          }
          /**
           * @param {?=} goInside
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "findNextNode",
          value: function findNextNode() {
            var goInside = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var skipHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return goInside && this.isExpanded && this.getFirstChild(skipHidden) || this.findNextSibling(skipHidden) || this.parent && this.parent.findNextNode(false, skipHidden);
          }
          /**
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "findPreviousNode",
          value: function findPreviousNode() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            /** @type {?} */
            var previousSibling = this.findPreviousSibling(skipHidden);

            if (!previousSibling) {
              return this.realParent;
            }

            return previousSibling._getLastOpenDescendant(skipHidden);
          }
          /**
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "_getLastOpenDescendant",
          value: function _getLastOpenDescendant() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            /** @type {?} */
            var lastChild = this.getLastChild(skipHidden);
            return this.isCollapsed || !lastChild ? this : lastChild._getLastOpenDescendant(skipHidden);
          }
          /**
           * @private
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "_getParentsChildren",
          value: function _getParentsChildren() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            /** @type {?} */
            var children = this.parent && (skipHidden ? this.parent.getVisibleChildren() : this.parent.children);
            return children || [];
          }
          /**
           * @private
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "getIndexInParent",
          value: function getIndexInParent() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return this._getParentsChildren(skipHidden).indexOf(this);
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "isDescendantOf",
          value: function isDescendantOf(node) {
            if (this === node) return true;else return this.parent && this.parent.isDescendantOf(node);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getNodePadding",
          value: function getNodePadding() {
            return this.options.levelPadding * (this.level - 1) + 'px';
          }
          /**
           * @return {?}
           */

        }, {
          key: "getClass",
          value: function getClass() {
            return [this.options.nodeClass(this), "tree-node-level-".concat(this.level)].join(' ');
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onDrop",
          value: function onDrop($event) {
            this.mouseAction('drop', $event.event, {
              from: $event.element,
              to: {
                parent: this,
                index: 0,
                dropOnNode: true
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "allowDrag",
          value: function allowDrag() {
            return this.options.allowDrag(this);
          } // helper methods:

          /**
           * @return {?}
           */

        }, {
          key: "loadNodeChildren",
          value: function loadNodeChildren() {
            var _this2 = this;

            if (!this.options.getChildren) {
              return Promise.resolve(); // Not getChildren method - for using redux
            }

            return Promise.resolve(this.options.getChildren(this)).then(
            /**
            * @param {?} children
            * @return {?}
            */
            function (children) {
              if (children) {
                _this2.setField('children', children);

                _this2._initChildren();

                if (_this2.options.useTriState && _this2.treeModel.isSelected(_this2)) {
                  _this2.setIsSelected(true);
                }

                _this2.children.forEach(
                /**
                * @param {?} child
                * @return {?}
                */
                function (child) {
                  if (child.getField('isExpanded') && child.hasChildren) {
                    child.expand();
                  }
                });
              }
            }).then(
            /**
            * @return {?}
            */
            function () {
              _this2.fireEvent({
                eventName: TREE_EVENTS.loadNodeChildren,
                node: _this2
              });
            });
          }
          /**
           * @template THIS
           * @this {THIS}
           * @return {THIS}
           */

        }, {
          key: "expand",
          value: function expand() {
            if (!
            /** @type {?} */
            this.isExpanded) {
              /** @type {?} */
              this.toggleExpanded();
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @template THIS
           * @this {THIS}
           * @return {THIS}
           */

        }, {
          key: "collapse",
          value: function collapse() {
            if (
            /** @type {?} */
            this.isExpanded) {
              /** @type {?} */
              this.toggleExpanded();
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "doForAll",
          value: function doForAll(fn) {
            var _this3 = this;

            Promise.resolve(fn(this)).then(
            /**
            * @return {?}
            */
            function () {
              if (_this3.children) {
                _this3.children.forEach(
                /**
                * @param {?} child
                * @return {?}
                */
                function (child) {
                  return child.doForAll(fn);
                });
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "expandAll",
          value: function expandAll() {
            this.doForAll(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return node.expand();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "collapseAll",
          value: function collapseAll() {
            this.doForAll(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return node.collapse();
            });
          }
          /**
           * @template THIS
           * @this {THIS}
           * @return {THIS}
           */

        }, {
          key: "ensureVisible",
          value: function ensureVisible() {
            if (
            /** @type {?} */
            this.realParent) {
              /** @type {?} */
              this.realParent.expand();

              /** @type {?} */
              this.realParent.ensureVisible();
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @template THIS
           * @this {THIS}
           * @return {THIS}
           */

        }, {
          key: "toggleExpanded",
          value: function toggleExpanded() {
            /** @type {?} */
            this.setIsExpanded(!
            /** @type {?} */
            this.isExpanded);
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @template THIS
           * @this {THIS}
           * @param {?} value
           * @return {THIS}
           */

        }, {
          key: "setIsExpanded",
          value: function setIsExpanded(value) {
            if (
            /** @type {?} */
            this.hasChildren) {
              /** @type {?} */
              this.treeModel.setExpandedNode(
              /** @type {?} */
              this, value);
            }

            return (
              /** @type {?} */
              this
            );
          }
        }, {
          key: "autoLoadChildren",

          /**
           * @return {?}
           */
          value: function autoLoadChildren() {
            var _this4 = this;

            this.handler = Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(
            /**
            * @return {?}
            */
            function () {
              return _this4.isExpanded;
            },
            /**
            * @param {?} isExpanded
            * @return {?}
            */
            function (isExpanded) {
              if (!_this4.children && _this4.hasChildren && isExpanded) {
                _this4.loadNodeChildren();
              }
            }, {
              fireImmediately: true
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.children) {
              this.children.forEach(
              /**
              * @param {?} child
              * @return {?}
              */
              function (child) {
                return child.dispose();
              });
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

        }, {
          key: "setIsActive",
          value: function setIsActive(value) {
            var multi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            /** @type {?} */
            this.treeModel.setActiveNode(
            /** @type {?} */
            this, value, multi);

            if (value) {
              /** @type {?} */
              this.focus(
              /** @type {?} */
              this.options.scrollOnActivate);
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @return {?}
           */

        }, {
          key: "isSelectable",
          value: function isSelectable() {
            return this.isLeaf || !this.children || !this.options.useTriState;
          }
          /**
           * @template THIS
           * @this {THIS}
           * @param {?} value
           * @return {THIS}
           */

        }, {
          key: "setIsSelected",
          value: function setIsSelected(value) {
            if (
            /** @type {?} */
            this.isSelectable()) {
              /** @type {?} */
              this.treeModel.setSelectedNode(
              /** @type {?} */
              this, value);
            } else {
              /** @type {?} */
              this.visibleChildren.forEach(
              /**
              * @param {?} child
              * @return {?}
              */
              function (child) {
                return child.setIsSelected(value);
              });
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @template THIS
           * @this {THIS}
           * @return {THIS}
           */

        }, {
          key: "toggleSelected",
          value: function toggleSelected() {
            /** @type {?} */
            this.setIsSelected(!
            /** @type {?} */
            this.isSelected);
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @template THIS
           * @this {THIS}
           * @param {?=} multi
           * @return {THIS}
           */

        }, {
          key: "toggleActivated",
          value: function toggleActivated() {
            var multi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            /** @type {?} */
            this.setIsActive(!
            /** @type {?} */
            this.isActive, multi);
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @template THIS
           * @this {THIS}
           * @param {?=} multi
           * @return {THIS}
           */

        }, {
          key: "setActiveAndVisible",
          value: function setActiveAndVisible() {
            var multi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            /** @type {?} */
            this.setIsActive(true, multi).ensureVisible();
            setTimeout(
            /** @type {?} */
            this.scrollIntoView.bind(
            /** @type {?} */
            this));
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @param {?=} force
           * @return {?}
           */

        }, {
          key: "scrollIntoView",
          value: function scrollIntoView() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.treeModel.virtualScroll.scrollIntoView(this, force);
          }
          /**
           * @template THIS
           * @this {THIS}
           * @param {?=} scroll
           * @return {THIS}
           */

        }, {
          key: "focus",
          value: function focus() {
            var scroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            /** @type {?} */
            var previousNode =
            /** @type {?} */
            this.treeModel.getFocusedNode();

            /** @type {?} */
            this.treeModel.setFocusedNode(
            /** @type {?} */
            this);

            if (scroll) {
              /** @type {?} */
              this.scrollIntoView();
            }

            if (previousNode) {
              /** @type {?} */
              this.fireEvent({
                eventName: TREE_EVENTS.blur,
                node: previousNode
              });
            }

            /** @type {?} */
            this.fireEvent({
              eventName: TREE_EVENTS.focus,
              node:
              /** @type {?} */
              this
            });
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @template THIS
           * @this {THIS}
           * @return {THIS}
           */

        }, {
          key: "blur",
          value: function blur() {
            /** @type {?} */
            var previousNode =
            /** @type {?} */
            this.treeModel.getFocusedNode();

            /** @type {?} */
            this.treeModel.setFocusedNode(null);

            if (previousNode) {
              /** @type {?} */
              this.fireEvent({
                eventName: TREE_EVENTS.blur,
                node:
                /** @type {?} */
                this
              });
            }

            return (
              /** @type {?} */
              this
            );
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setIsHidden",
          value: function setIsHidden(value) {
            this.treeModel.setIsHidden(this, value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            this.setIsHidden(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            this.setIsHidden(false);
          }
          /**
           * @param {?} actionName
           * @param {?} $event
           * @param {?=} data
           * @return {?}
           */

        }, {
          key: "mouseAction",
          value: function mouseAction(actionName, $event) {
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            this.treeModel.setFocus(true);
            /** @type {?} */

            var actionMapping = this.options.actionMapping.mouse;
            /** @type {?} */

            var action = actionMapping[actionName];

            if (action) {
              action(this.treeModel, this, $event, data);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getSelfHeight",
          value: function getSelfHeight() {
            return this.options.nodeHeight(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "_initChildren",
          value: function _initChildren() {
            var _this5 = this;

            this.children = this.getField('children').map(
            /**
            * @param {?} c
            * @param {?} index
            * @return {?}
            */
            function (c, index) {
              return new TreeNode(c, _this5, _this5.treeModel, index);
            });
          }
        }, {
          key: "isHidden",
          get: function get() {
            return this.treeModel.isHidden(this);
          }
        }, {
          key: "isExpanded",

          /**
           * @return {?}
           */
          get: function get() {
            return this.treeModel.isExpanded(this);
          }
        }, {
          key: "isActive",

          /**
           * @return {?}
           */
          get: function get() {
            return this.treeModel.isActive(this);
          }
        }, {
          key: "isFocused",

          /**
           * @return {?}
           */
          get: function get() {
            return this.treeModel.isNodeFocused(this);
          }
        }, {
          key: "isSelected",

          /**
           * @return {?}
           */
          get: function get() {
            if (this.isSelectable()) {
              return this.treeModel.isSelected(this);
            } else {
              return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["some"])(this.children,
              /**
              * @param {?} node
              * @return {?}
              */
              function (node) {
                return node.isSelected;
              });
            }
          }
        }, {
          key: "isAllSelected",

          /**
           * @return {?}
           */
          get: function get() {
            if (this.isSelectable()) {
              return this.treeModel.isSelected(this);
            } else {
              return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["every"])(this.children,
              /**
              * @param {?} node
              * @return {?}
              */
              function (node) {
                return node.isAllSelected;
              });
            }
          }
        }, {
          key: "isPartiallySelected",

          /**
           * @return {?}
           */
          get: function get() {
            return this.isSelected && !this.isAllSelected;
          }
          /**
           * @return {?}
           */

        }, {
          key: "level",
          get: function get() {
            return this.parent ? this.parent.level + 1 : 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "path",
          get: function get() {
            return this.parent ? [].concat(_toConsumableArray(this.parent.path), [this.id]) : [];
          }
          /**
           * @return {?}
           */

        }, {
          key: "elementRef",
          get: function get() {
            throw "Element Ref is no longer supported since introducing virtual scroll\n\n      You may use a template to obtain a reference to the element";
          }
          /**
           * @return {?}
           */

        }, {
          key: "originalNode",
          get: function get() {
            return this._originalNode;
          }
        }, {
          key: "hasChildren",
          // helper get functions:

          /**
           * @return {?}
           */
          get: function get() {
            return !!(this.getField('hasChildren') || this.children && this.children.length > 0);
          }
          /**
           * @return {?}
           */

        }, {
          key: "isCollapsed",
          get: function get() {
            return !this.isExpanded;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isLeaf",
          get: function get() {
            return !this.hasChildren;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isRoot",
          get: function get() {
            return this.parent.data.virtual;
          }
          /**
           * @return {?}
           */

        }, {
          key: "realParent",
          get: function get() {
            return this.isRoot ? null : this.parent;
          } // proxy functions:

          /**
           * @return {?}
           */

        }, {
          key: "options",
          get: function get() {
            return this.treeModel.options;
          }
        }, {
          key: "displayField",
          get: function get() {
            return this.getField('display');
          }
          /**
           * @return {?}
           */

        }, {
          key: "id",
          get: function get() {
            return this.getField('id');
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.setField('id', value);
          }
        }, {
          key: "visibleChildren",
          get: function get() {
            return (this.children || []).filter(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return !node.isHidden;
            });
          }
        }]);

        return TreeNode;
      }();

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Object), __metadata("design:paramtypes", [])], TreeNode.prototype, "isHidden", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Object), __metadata("design:paramtypes", [])], TreeNode.prototype, "isExpanded", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Object), __metadata("design:paramtypes", [])], TreeNode.prototype, "isActive", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Object), __metadata("design:paramtypes", [])], TreeNode.prototype, "isFocused", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Object), __metadata("design:paramtypes", [])], TreeNode.prototype, "isSelected", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Object), __metadata("design:paramtypes", [])], TreeNode.prototype, "isAllSelected", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Object), __metadata("design:paramtypes", [])], TreeNode.prototype, "isPartiallySelected", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata("design:type", Array)], TreeNode.prototype, "children", void 0);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata("design:type", Number)], TreeNode.prototype, "index", void 0);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata("design:type", Object)], TreeNode.prototype, "position", void 0);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata("design:type", Number)], TreeNode.prototype, "height", void 0);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Number), __metadata("design:paramtypes", [])], TreeNode.prototype, "level", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Array), __metadata("design:paramtypes", [])], TreeNode.prototype, "path", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata("design:type", Object), __metadata("design:paramtypes", [])], TreeNode.prototype, "visibleChildren", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], TreeNode.prototype, "setIsSelected", null);

      __decorate([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], TreeNode.prototype, "_initChildren", null);

      if (false) {}
      /**
       * @return {?}
       */


      function uuid() {
        return Math.floor(Math.random() * 10000000000000);
      }

      var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TreeModel = /*#__PURE__*/function () {
        function TreeModel() {
          _classCallCheck(this, TreeModel);

          this.options = new TreeOptions();
          this.eventNames = Object.keys(TREE_EVENTS);
          this.expandedNodeIds = {};
          this.selectedLeafNodeIds = {};
          this.activeNodeIds = {};
          this.hiddenNodeIds = {};
          this.focusedNodeId = null;
          this.firstUpdate = true;
          this.subscriptions = [];
        } // events

        /**
         * @param {?} event
         * @return {?}
         */


        _createClass(TreeModel, [{
          key: "fireEvent",
          value: function fireEvent(event) {
            event.treeModel = this;
            this.events[event.eventName].emit(event);
            this.events.event.emit(event);
          }
          /**
           * @param {?} eventName
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "subscribe",
          value: function subscribe(eventName, fn) {
            /** @type {?} */
            var subscription = this.events[eventName].subscribe(fn);
            this.subscriptions.push(subscription);
          } // getters

          /**
           * @return {?}
           */

        }, {
          key: "getFocusedNode",
          value: function getFocusedNode() {
            return this.focusedNode;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getActiveNode",
          value: function getActiveNode() {
            return this.activeNodes[0];
          }
          /**
           * @return {?}
           */

        }, {
          key: "getActiveNodes",
          value: function getActiveNodes() {
            return this.activeNodes;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getVisibleRoots",
          value: function getVisibleRoots() {
            return this.virtualRoot.visibleChildren;
          }
          /**
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "getFirstRoot",
          value: function getFirstRoot() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["first"])(skipHidden ? this.getVisibleRoots() : this.roots);
          }
          /**
           * @param {?=} skipHidden
           * @return {?}
           */

        }, {
          key: "getLastRoot",
          value: function getLastRoot() {
            var skipHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["last"])(skipHidden ? this.getVisibleRoots() : this.roots);
          }
          /**
           * @return {?}
           */

        }, {
          key: "isNodeFocused",

          /**
           * @param {?} node
           * @return {?}
           */
          value: function isNodeFocused(node) {
            return this.focusedNode === node;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isEmptyTree",
          value: function isEmptyTree() {
            return this.roots && this.roots.length === 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getNodeByPath",
          // locating nodes

          /**
           * @param {?} path
           * @param {?=} startNode
           * @return {?}
           */
          value: function getNodeByPath(path) {
            var startNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (!path) return null;
            startNode = startNode || this.virtualRoot;
            if (path.length === 0) return startNode;
            if (!startNode.children) return null;
            /** @type {?} */

            var childId = path.shift();
            /** @type {?} */

            var childNode = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["find"])(startNode.children, {
              id: childId
            });
            if (!childNode) return null;
            return this.getNodeByPath(path, childNode);
          }
          /**
           * @param {?} id
           * @return {?}
           */

        }, {
          key: "getNodeById",
          value: function getNodeById(id) {
            /** @type {?} */
            var idStr = id.toString();
            return this.getNodeBy(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return node.id.toString() === idStr;
            });
          }
          /**
           * @param {?} predicate
           * @param {?=} startNode
           * @return {?}
           */

        }, {
          key: "getNodeBy",
          value: function getNodeBy(predicate) {
            var startNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            startNode = startNode || this.virtualRoot;
            if (!startNode.children) return null;
            /** @type {?} */

            var found = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["find"])(startNode.children, predicate);

            if (found) {
              // found in children
              return found;
            } else {
              // look in children's children
              var _iterator = _createForOfIteratorHelper(startNode.children),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var child = _step.value;

                  /** @type {?} */
                  var foundInChildren = this.getNodeBy(predicate, child);
                  if (foundInChildren) return foundInChildren;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "isExpanded",
          value: function isExpanded(node) {
            return this.expandedNodeIds[node.id];
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "isHidden",
          value: function isHidden(node) {
            return this.hiddenNodeIds[node.id];
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "isActive",
          value: function isActive(node) {
            return this.activeNodeIds[node.id];
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "isSelected",
          value: function isSelected(node) {
            return this.selectedLeafNodeIds[node.id];
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dispose();
            this.unsubscribeAll();
          }
          /**
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            // Dispose reactions of the replaced nodes
            if (this.virtualRoot) {
              this.virtualRoot.dispose();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "unsubscribeAll",
          value: function unsubscribeAll() {
            this.subscriptions.forEach(
            /**
            * @param {?} subscription
            * @return {?}
            */
            function (subscription) {
              return subscription.unsubscribe();
            });
            this.subscriptions = [];
          } // actions

          /**
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "setData",
          value: function setData(_ref2) {
            var nodes = _ref2.nodes,
                _ref2$options = _ref2.options,
                options = _ref2$options === void 0 ? null : _ref2$options,
                _ref2$events = _ref2.events,
                events = _ref2$events === void 0 ? null : _ref2$events;

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

        }, {
          key: "update",
          value: function update() {
            // Rebuild tree:

            /** @type {?} */
            var virtualRootConfig = _defineProperty({
              id: this.options.rootId,
              virtual: true
            }, this.options.childrenField, this.nodes);

            this.dispose();
            this.virtualRoot = new TreeNode(virtualRootConfig, null, this, 0);
            this.roots = this.virtualRoot.children; // Fire event:

            if (this.firstUpdate) {
              if (this.roots) {
                this.firstUpdate = false;

                this._calculateExpandedNodes();
              }
            } else {
              this.fireEvent({
                eventName: TREE_EVENTS.updateData
              });
            }
          }
          /**
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "setFocusedNode",
          value: function setFocusedNode(node) {
            this.focusedNodeId = node ? node.id : null;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setFocus",
          value: function setFocus(value) {
            TreeModel.focusedTree = value ? this : null;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "doForAll",
          value: function doForAll(fn) {
            this.roots.forEach(
            /**
            * @param {?} root
            * @return {?}
            */
            function (root) {
              return root.doForAll(fn);
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "focusNextNode",
          value: function focusNextNode() {
            /** @type {?} */
            var previousNode = this.getFocusedNode();
            /** @type {?} */

            var nextNode = previousNode ? previousNode.findNextNode(true, true) : this.getFirstRoot(true);
            if (nextNode) nextNode.focus();
          }
          /**
           * @return {?}
           */

        }, {
          key: "focusPreviousNode",
          value: function focusPreviousNode() {
            /** @type {?} */
            var previousNode = this.getFocusedNode();
            /** @type {?} */

            var nextNode = previousNode ? previousNode.findPreviousNode(true) : this.getLastRoot(true);
            if (nextNode) nextNode.focus();
          }
          /**
           * @return {?}
           */

        }, {
          key: "focusDrillDown",
          value: function focusDrillDown() {
            /** @type {?} */
            var previousNode = this.getFocusedNode();

            if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
              previousNode.toggleExpanded();
            } else {
              /** @type {?} */
              var nextNode = previousNode ? previousNode.getFirstChild(true) : this.getFirstRoot(true);
              if (nextNode) nextNode.focus();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "focusDrillUp",
          value: function focusDrillUp() {
            /** @type {?} */
            var previousNode = this.getFocusedNode();
            if (!previousNode) return;

            if (previousNode.isExpanded) {
              previousNode.toggleExpanded();
            } else {
              /** @type {?} */
              var nextNode = previousNode.realParent;
              if (nextNode) nextNode.focus();
            }
          }
          /**
           * @param {?} node
           * @param {?} value
           * @param {?=} multi
           * @return {?}
           */

        }, {
          key: "setActiveNode",
          value: function setActiveNode(node, value) {
            var multi = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (multi) {
              this._setActiveNodeMulti(node, value);
            } else {
              this._setActiveNodeSingle(node, value);
            }

            if (value) {
              node.focus(this.options.scrollOnActivate);
              this.fireEvent({
                eventName: TREE_EVENTS.activate,
                node: node
              });
              this.fireEvent({
                eventName: TREE_EVENTS.nodeActivate,
                node: node
              }); // For IE11
            } else {
              this.fireEvent({
                eventName: TREE_EVENTS.deactivate,
                node: node
              });
              this.fireEvent({
                eventName: TREE_EVENTS.nodeDeactivate,
                node: node
              }); // For IE11
            }
          }
          /**
           * @param {?} node
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setSelectedNode",
          value: function setSelectedNode(node, value) {
            this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, _defineProperty({}, node.id, value));

            if (value) {
              node.focus();
              this.fireEvent({
                eventName: TREE_EVENTS.select,
                node: node
              });
            } else {
              this.fireEvent({
                eventName: TREE_EVENTS.deselect,
                node: node
              });
            }
          }
          /**
           * @param {?} node
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setExpandedNode",
          value: function setExpandedNode(node, value) {
            this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, _defineProperty({}, node.id, value));
            this.fireEvent({
              eventName: TREE_EVENTS.toggleExpanded,
              node: node,
              isExpanded: value
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "expandAll",
          value: function expandAll() {
            this.roots.forEach(
            /**
            * @param {?} root
            * @return {?}
            */
            function (root) {
              return root.expandAll();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "collapseAll",
          value: function collapseAll() {
            this.roots.forEach(
            /**
            * @param {?} root
            * @return {?}
            */
            function (root) {
              return root.collapseAll();
            });
          }
          /**
           * @param {?} node
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setIsHidden",
          value: function setIsHidden(node, value) {
            this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, _defineProperty({}, node.id, value));
          }
          /**
           * @param {?} nodeIds
           * @return {?}
           */

        }, {
          key: "setHiddenNodeIds",
          value: function setHiddenNodeIds(nodeIds) {
            this.hiddenNodeIds = nodeIds.reduce(
            /**
            * @param {?} hiddenNodeIds
            * @param {?} id
            * @return {?}
            */
            function (hiddenNodeIds, id) {
              return Object.assign(hiddenNodeIds, _defineProperty({}, id, true));
            }, {});
          }
          /**
           * @param {?} node
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "performKeyAction",
          value: function performKeyAction(node, $event) {
            /** @type {?} */
            var action = this.options.actionMapping.keys[$event.keyCode];

            if (action) {
              $event.preventDefault();
              action(this, node, $event);
              return true;
            } else {
              return false;
            }
          }
          /**
           * @param {?} filter
           * @param {?=} autoShow
           * @return {?}
           */

        }, {
          key: "filterNodes",
          value: function filterNodes(filter) {
            var _this6 = this;

            var autoShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            /** @type {?} */
            var filterFn;

            if (!filter) {
              return this.clearFilter();
            } // support function and string filter


            if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isString"])(filter)) {
              filterFn =
              /**
              * @param {?} node
              * @return {?}
              */
              function filterFn(node) {
                return node.displayField.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
              };
            } else if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(filter)) {
              filterFn = filter;
            } else {
              console.error('Don\'t know what to do with filter', filter);
              console.error('Should be either a string or function');
              return;
            }
            /** @type {?} */


            var ids = {};
            this.roots.forEach(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return _this6._filterNode(ids, node, filterFn, autoShow);
            });
            this.hiddenNodeIds = ids;
            this.fireEvent({
              eventName: TREE_EVENTS.changeFilter
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.hiddenNodeIds = {};
            this.fireEvent({
              eventName: TREE_EVENTS.changeFilter
            });
          }
          /**
           * @param {?} node
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "moveNode",
          value: function moveNode(node, to) {
            /** @type {?} */
            var fromIndex = node.getIndexInParent();
            /** @type {?} */

            var fromParent = node.parent;
            if (!this.canMoveNode(node, to, fromIndex)) return;
            /** @type {?} */

            var fromChildren = fromParent.getField('children'); // If node doesn't have children - create children array

            if (!to.parent.getField('children')) {
              to.parent.setField('children', []);
            }
            /** @type {?} */


            var toChildren = to.parent.getField('children');
            /** @type {?} */

            var originalNode = fromChildren.splice(fromIndex, 1)[0]; // Compensate for index if already removed from parent:

            /** @type {?} */

            var toIndex = fromParent === to.parent && to.index > fromIndex ? to.index - 1 : to.index;
            toChildren.splice(toIndex, 0, originalNode);
            fromParent.treeModel.update();

            if (to.parent.treeModel !== fromParent.treeModel) {
              to.parent.treeModel.update();
            }

            this.fireEvent({
              eventName: TREE_EVENTS.moveNode,
              node: originalNode,
              to: {
                parent: to.parent.data,
                index: toIndex
              },
              from: {
                parent: fromParent.data,
                index: fromIndex
              }
            });
          }
          /**
           * @param {?} node
           * @param {?} to
           * @return {?}
           */

        }, {
          key: "copyNode",
          value: function copyNode(node, to) {
            /** @type {?} */
            var fromIndex = node.getIndexInParent();
            if (!this.canMoveNode(node, to, fromIndex)) return; // If node doesn't have children - create children array

            if (!to.parent.getField('children')) {
              to.parent.setField('children', []);
            }
            /** @type {?} */


            var toChildren = to.parent.getField('children');
            /** @type {?} */

            var nodeCopy = this.options.getNodeClone(node);
            toChildren.splice(to.index, 0, nodeCopy);
            node.treeModel.update();

            if (to.parent.treeModel !== node.treeModel) {
              to.parent.treeModel.update();
            }

            this.fireEvent({
              eventName: TREE_EVENTS.copyNode,
              node: nodeCopy,
              to: {
                parent: to.parent.data,
                index: to.index
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "getState",
          value: function getState() {
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

        }, {
          key: "setState",
          value: function setState(state) {
            if (!state) return;
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

        }, {
          key: "subscribeToState",
          value: function subscribeToState(fn) {
            var _this7 = this;

            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])(
            /**
            * @return {?}
            */
            function () {
              return fn(_this7.getState());
            });
          }
          /**
           * @param {?} node
           * @param {?} to
           * @param {?=} fromIndex
           * @return {?}
           */

        }, {
          key: "canMoveNode",
          value: function canMoveNode(node, to) {
            var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            /** @type {?} */
            var fromNodeIndex = fromIndex || node.getIndexInParent(); // same node:

            if (node.parent === to.parent && fromIndex === to.index) {
              return false;
            }

            return !to.parent.isDescendantOf(node);
          }
          /**
           * @return {?}
           */

        }, {
          key: "calculateExpandedNodes",
          value: function calculateExpandedNodes() {
            this._calculateExpandedNodes();
          } // private methods

          /**
           * @private
           * @param {?} ids
           * @param {?} node
           * @param {?} filterFn
           * @param {?} autoShow
           * @return {?}
           */

        }, {
          key: "_filterNode",
          value: function _filterNode(ids, node, filterFn, autoShow) {
            var _this8 = this;

            // if node passes function then it's visible

            /** @type {?} */
            var isVisible = filterFn(node);

            if (node.children) {
              // if one of node's children passes filter then this node is also visible
              node.children.forEach(
              /**
              * @param {?} child
              * @return {?}
              */
              function (child) {
                if (_this8._filterNode(ids, child, filterFn, autoShow)) {
                  isVisible = true;
                }
              });
            } // mark node as hidden


            if (!isVisible) {
              ids[node.id] = true;
            } // auto expand parents to make sure the filtered nodes are visible


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

        }, {
          key: "_calculateExpandedNodes",
          value: function _calculateExpandedNodes() {
            var _this9 = this;

            var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            startNode = startNode || this.virtualRoot;

            if (startNode.data[this.options.isExpandedField]) {
              this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, _defineProperty({}, startNode.id, true));
            }

            if (startNode.children) {
              startNode.children.forEach(
              /**
              * @param {?} child
              * @return {?}
              */
              function (child) {
                return _this9._calculateExpandedNodes(child);
              });
            }
          }
          /**
           * @private
           * @param {?} node
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_setActiveNodeSingle",
          value: function _setActiveNodeSingle(node, value) {
            var _this10 = this;

            // Deactivate all other nodes:
            this.activeNodes.filter(
            /**
            * @param {?} activeNode
            * @return {?}
            */
            function (activeNode) {
              return activeNode !== node;
            }).forEach(
            /**
            * @param {?} activeNode
            * @return {?}
            */
            function (activeNode) {
              _this10.fireEvent({
                eventName: TREE_EVENTS.deactivate,
                node: activeNode
              });

              _this10.fireEvent({
                eventName: TREE_EVENTS.nodeDeactivate,
                node: activeNode
              }); // For IE11

            });

            if (value) {
              this.activeNodeIds = _defineProperty({}, node.id, true);
            } else {
              this.activeNodeIds = {};
            }
          }
          /**
           * @private
           * @param {?} node
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_setActiveNodeMulti",
          value: function _setActiveNodeMulti(node, value) {
            this.activeNodeIds = Object.assign({}, this.activeNodeIds, _defineProperty({}, node.id, value));
          }
        }, {
          key: "isFocused",
          get: function get() {
            return TreeModel.focusedTree === this;
          }
        }, {
          key: "focusedNode",
          get: function get() {
            return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null;
          }
          /**
           * @return {?}
           */

        }, {
          key: "expandedNodes",
          get: function get() {
            var _this11 = this;

            /** @type {?} */
            var nodes = Object.keys(this.expandedNodeIds).filter(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this11.expandedNodeIds[id];
            }).map(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this11.getNodeById(id);
            });
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["compact"])(nodes);
          }
          /**
           * @return {?}
           */

        }, {
          key: "activeNodes",
          get: function get() {
            var _this12 = this;

            /** @type {?} */
            var nodes = Object.keys(this.activeNodeIds).filter(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this12.activeNodeIds[id];
            }).map(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this12.getNodeById(id);
            });
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["compact"])(nodes);
          }
          /**
           * @return {?}
           */

        }, {
          key: "hiddenNodes",
          get: function get() {
            var _this13 = this;

            /** @type {?} */
            var nodes = Object.keys(this.hiddenNodeIds).filter(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this13.hiddenNodeIds[id];
            }).map(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this13.getNodeById(id);
            });
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["compact"])(nodes);
          }
          /**
           * @return {?}
           */

        }, {
          key: "selectedLeafNodes",
          get: function get() {
            var _this14 = this;

            /** @type {?} */
            var nodes = Object.keys(this.selectedLeafNodeIds).filter(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this14.selectedLeafNodeIds[id];
            }).map(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return _this14.getNodeById(id);
            });
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["compact"])(nodes);
          }
        }]);

        return TreeModel;
      }();

      TreeModel.focusedTree = null;
      TreeModel.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$1("design:type", Array)], TreeModel.prototype, "roots", void 0);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$1("design:type", Object)], TreeModel.prototype, "expandedNodeIds", void 0);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$1("design:type", Object)], TreeModel.prototype, "selectedLeafNodeIds", void 0);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$1("design:type", Object)], TreeModel.prototype, "activeNodeIds", void 0);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$1("design:type", Object)], TreeModel.prototype, "hiddenNodeIds", void 0);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$1("design:type", Object)], TreeModel.prototype, "focusedNodeId", void 0);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$1("design:type", TreeNode)], TreeModel.prototype, "virtualRoot", void 0);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata$1("design:type", Object), __metadata$1("design:paramtypes", [])], TreeModel.prototype, "focusedNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata$1("design:type", Object), __metadata$1("design:paramtypes", [])], TreeModel.prototype, "expandedNodes", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata$1("design:type", Object), __metadata$1("design:paramtypes", [])], TreeModel.prototype, "activeNodes", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata$1("design:type", Object), __metadata$1("design:paramtypes", [])], TreeModel.prototype, "hiddenNodes", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata$1("design:type", Object), __metadata$1("design:paramtypes", [])], TreeModel.prototype, "selectedLeafNodes", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setData", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", []), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "update", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setFocusedNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setFocus", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "doForAll", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", []), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "focusNextNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", []), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "focusPreviousNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", []), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "focusDrillDown", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", []), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "focusDrillUp", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object, Object, Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setActiveNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object, Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setSelectedNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object, Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setExpandedNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", []), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "expandAll", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", []), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "collapseAll", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object, Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setIsHidden", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setHiddenNodeIds", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object, Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "filterNodes", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", []), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "clearFilter", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object, Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "moveNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object, Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "copyNode", null);

      __decorate$1([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$1("design:type", Function), __metadata$1("design:paramtypes", [Object]), __metadata$1("design:returntype", void 0)], TreeModel.prototype, "setState", null);

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/models/tree-dragged-element.model.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeDraggedElement = /*#__PURE__*/function () {
        function TreeDraggedElement() {
          _classCallCheck(this, TreeDraggedElement);

          this._draggedElement = null;
        }
        /**
         * @param {?} draggedElement
         * @return {?}
         */


        _createClass(TreeDraggedElement, [{
          key: "set",
          value: function set(draggedElement) {
            this._draggedElement = draggedElement;
          }
          /**
           * @return {?}
           */

        }, {
          key: "get",
          value: function get() {
            return this._draggedElement;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return !!this.get();
          }
        }]);

        return TreeDraggedElement;
      }();

      TreeDraggedElement.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }];
      /** @nocollapse */

      TreeDraggedElement.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function TreeDraggedElement_Factory() {
          return new TreeDraggedElement();
        },
        token: TreeDraggedElement,
        providedIn: "root"
      });

      if (false) {}

      var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /** @type {?} */


      var Y_OFFSET = 500; // Extra pixels outside the viewport, in each direction, to render nodes in

      /** @type {?} */

      var Y_EPSILON = 150; // Minimum pixel change required to recalculate the rendered nodes

      var TreeVirtualScroll = /*#__PURE__*/function () {
        /**
         * @param {?} treeModel
         */
        function TreeVirtualScroll(treeModel) {
          var _this15 = this;

          _classCallCheck(this, TreeVirtualScroll);

          this.treeModel = treeModel;
          this.yBlocks = 0;
          this.x = 0;
          this.viewportHeight = null;
          this.viewport = null;
          treeModel.virtualScroll = this;
          this._dispose = [Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])(
          /**
          * @return {?}
          */
          function () {
            return _this15.fixScroll();
          })];
        }
        /**
         * @return {?}
         */


        _createClass(TreeVirtualScroll, [{
          key: "fireEvent",

          /**
           * @param {?} event
           * @return {?}
           */
          value: function fireEvent(event) {
            this.treeModel.fireEvent(event);
          }
          /**
           * @return {?}
           */

        }, {
          key: "init",
          value: function init() {
            var _this16 = this;

            /** @type {?} */
            var fn = this.recalcPositions.bind(this);
            fn();
            this._dispose = [].concat(_toConsumableArray(this._dispose), [Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(
            /**
            * @return {?}
            */
            function () {
              return _this16.treeModel.roots;
            }, fn), Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(
            /**
            * @return {?}
            */
            function () {
              return _this16.treeModel.expandedNodeIds;
            }, fn), Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(
            /**
            * @return {?}
            */
            function () {
              return _this16.treeModel.hiddenNodeIds;
            }, fn)]);
            this.treeModel.subscribe(TREE_EVENTS.loadNodeChildren, fn);
          }
          /**
           * @return {?}
           */

        }, {
          key: "isEnabled",
          value: function isEnabled() {
            return this.treeModel.options.useVirtualScroll;
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_setYBlocks",
          value: function _setYBlocks(value) {
            this.yBlocks = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "recalcPositions",
          value: function recalcPositions() {
            this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
          }
          /**
           * @private
           * @param {?} nodes
           * @param {?} startPos
           * @return {?}
           */

        }, {
          key: "_getPositionAfter",
          value: function _getPositionAfter(nodes, startPos) {
            var _this17 = this;

            /** @type {?} */
            var position = startPos;
            nodes.forEach(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              node.position = position;
              position = _this17._getPositionAfterNode(node, position);
            });
            return position;
          }
          /**
           * @private
           * @param {?} node
           * @param {?} startPos
           * @return {?}
           */

        }, {
          key: "_getPositionAfterNode",
          value: function _getPositionAfterNode(node, startPos) {
            /** @type {?} */
            var position = node.getSelfHeight() + startPos;

            if (node.children && node.isExpanded) {
              // TBD: consider loading component as well
              position = this._getPositionAfter(node.visibleChildren, position);
            }

            node.height = position - startPos;
            return position;
          }
          /**
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear() {
            this._dispose.forEach(
            /**
            * @param {?} d
            * @return {?}
            */
            function (d) {
              return d();
            });
          }
          /**
           * @param {?} viewport
           * @return {?}
           */

        }, {
          key: "setViewport",
          value: function setViewport(viewport) {
            Object.assign(this, {
              viewport: viewport,
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

        }, {
          key: "scrollIntoView",
          value: function scrollIntoView(node, force) {
            var scrollToMiddle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (node.options.scrollContainer) {
              /** @type {?} */
              var scrollContainer = node.options.scrollContainer;
              /** @type {?} */

              var scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
              /** @type {?} */

              var scrollContainerTop = scrollContainer.getBoundingClientRect().top;
              /** @type {?} */

              var nodeTop = this.viewport.getBoundingClientRect().top + node.position - scrollContainerTop;

              if (force || // force scroll to node
              nodeTop < scrollContainer.scrollTop || // node is above scroll container
              nodeTop + node.getSelfHeight() > scrollContainer.scrollTop + scrollContainerHeight) {
                // node is below container
                scrollContainer.scrollTop = scrollToMiddle ? nodeTop - scrollContainerHeight / 2 : // scroll to middle
                nodeTop; // scroll to start
              }
            } else {
              if (force || // force scroll to node
              node.position < this.y || // node is above viewport
              node.position + node.getSelfHeight() > this.y + this.viewportHeight) {
                // node is below viewport
                if (this.viewport) {
                  this.viewport.scrollTop = scrollToMiddle ? node.position - this.viewportHeight / 2 : // scroll to middle
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

        }, {
          key: "getViewportNodes",
          value: function getViewportNodes(nodes) {
            var _this18 = this;

            if (!nodes) return [];
            /** @type {?} */

            var visibleNodes = nodes.filter(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return !node.isHidden;
            });
            if (!this.isEnabled()) return visibleNodes;
            if (!this.viewportHeight || !visibleNodes.length) return []; // When loading children async this method is called before their height and position is calculated.
            // In that case firstIndex === 0 and lastIndex === visibleNodes.length - 1 (e.g. 1000),
            // which means that it loops through every visibleNodes item and push them into viewportNodes array.
            // We can prevent nodes from being pushed to the array and wait for the appropriate calculations to take place

            /** @type {?} */

            var lastVisibleNode = visibleNodes.slice(-1)[0];
            if (!lastVisibleNode.height && lastVisibleNode.position === 0) return []; // Search for first node in the viewport using binary search
            // Look for first node that starts after the beginning of the viewport (with buffer)
            // Or that ends after the beginning of the viewport

            /** @type {?} */

            var firstIndex = binarySearch(visibleNodes,
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return node.position + Y_OFFSET > _this18.y || node.position + node.height > _this18.y;
            }); // Search for last node in the viewport using binary search
            // Look for first node that starts after the end of the viewport (with buffer)

            /** @type {?} */

            var lastIndex = binarySearch(visibleNodes,
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              return node.position - Y_OFFSET > _this18.y + _this18.viewportHeight;
            }, firstIndex);
            /** @type {?} */

            var viewportNodes = [];

            for (var i = firstIndex; i <= lastIndex; i++) {
              viewportNodes.push(visibleNodes[i]);
            }

            return viewportNodes;
          }
          /**
           * @return {?}
           */

        }, {
          key: "fixScroll",
          value: function fixScroll() {
            /** @type {?} */
            var maxY = Math.max(0, this.totalHeight - this.viewportHeight);
            if (this.y < 0) this._setYBlocks(0);
            if (this.y > maxY) this._setYBlocks(maxY / Y_EPSILON);
          }
        }, {
          key: "y",
          get: function get() {
            return this.yBlocks * Y_EPSILON;
          }
          /**
           * @return {?}
           */

        }, {
          key: "totalHeight",
          get: function get() {
            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
          }
        }]);

        return TreeVirtualScroll;
      }();

      TreeVirtualScroll.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];
      /** @nocollapse */

      TreeVirtualScroll.ctorParameters = function () {
        return [{
          type: TreeModel
        }];
      };

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$2("design:type", Object)], TreeVirtualScroll.prototype, "yBlocks", void 0);

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$2("design:type", Object)], TreeVirtualScroll.prototype, "x", void 0);

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["observable"], __metadata$2("design:type", Object)], TreeVirtualScroll.prototype, "viewportHeight", void 0);

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata$2("design:type", Object), __metadata$2("design:paramtypes", [])], TreeVirtualScroll.prototype, "y", null);

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["computed"], __metadata$2("design:type", Object), __metadata$2("design:paramtypes", [])], TreeVirtualScroll.prototype, "totalHeight", null);

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$2("design:type", Function), __metadata$2("design:paramtypes", [Object]), __metadata$2("design:returntype", void 0)], TreeVirtualScroll.prototype, "_setYBlocks", null);

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$2("design:type", Function), __metadata$2("design:paramtypes", []), __metadata$2("design:returntype", void 0)], TreeVirtualScroll.prototype, "recalcPositions", null);

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$2("design:type", Function), __metadata$2("design:paramtypes", [Object]), __metadata$2("design:returntype", void 0)], TreeVirtualScroll.prototype, "setViewport", null);

      __decorate$2([mobx__WEBPACK_IMPORTED_MODULE_2__["action"], __metadata$2("design:type", Function), __metadata$2("design:paramtypes", [Object, Object, Object]), __metadata$2("design:returntype", void 0)], TreeVirtualScroll.prototype, "scrollIntoView", null);

      if (false) {}
      /**
       * @param {?} nodes
       * @param {?} condition
       * @param {?=} firstIndex
       * @return {?}
       */


      function binarySearch(nodes, condition) {
        var firstIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        /** @type {?} */
        var index = firstIndex;
        /** @type {?} */

        var toIndex = nodes.length - 1;

        while (index !== toIndex) {
          /** @type {?} */
          var midIndex = Math.floor((index + toIndex) / 2);

          if (condition(nodes[midIndex])) {
            toIndex = midIndex;
          } else {
            if (index === midIndex) index = toIndex;else index = midIndex;
          }
        }

        return index;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/loading.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var LoadingComponent = function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      };

      LoadingComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          selector: 'tree-loading-component',
          template: "\n    <span *ngIf=\"!template\">loading...</span>\n    <ng-container\n      [ngTemplateOutlet]=\"template\"\n      [ngTemplateOutletContext]=\"{ $implicit: node }\">\n    </ng-container>\n  "
        }]
      }];
      LoadingComponent.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree-viewport.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeViewportComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} ngZone
         * @param {?} virtualScroll
         */
        function TreeViewportComponent(elementRef, ngZone, virtualScroll) {
          var _this19 = this;

          _classCallCheck(this, TreeViewportComponent);

          this.elementRef = elementRef;
          this.ngZone = ngZone;
          this.virtualScroll = virtualScroll;
          this.setViewport = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["throttle"])(
          /**
          * @return {?}
          */
          function () {
            _this19.virtualScroll.setViewport(_this19.elementRef.nativeElement);
          }, 17);
          this.scrollEventHandler = this.setViewport.bind(this);
        }
        /**
         * @return {?}
         */


        _createClass(TreeViewportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.virtualScroll.init();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this20 = this;

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this20.setViewport();

              _this20.virtualScroll.fireEvent({
                eventName: TREE_EVENTS.initialized
              });
            });
            /** @type {?} */

            var el = this.elementRef.nativeElement;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              el.addEventListener('scroll', _this20.scrollEventHandler);
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.virtualScroll.clear();
            /** @type {?} */

            var el = this.elementRef.nativeElement;
            el.removeEventListener('scroll', this.scrollEventHandler);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getTotalHeight",
          value: function getTotalHeight() {
            return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
          }
        }]);

        return TreeViewportComponent;
      }();

      TreeViewportComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tree-viewport',
          providers: [TreeVirtualScroll],
          template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
        }]
      }];
      /** @nocollapse */

      TreeViewportComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: TreeVirtualScroll
        }];
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeComponent = /*#__PURE__*/function () {
        /**
         * @param {?} treeModel
         * @param {?} treeDraggedElement
         */
        function TreeComponent(treeModel, treeDraggedElement) {
          var _this21 = this;

          _classCallCheck(this, TreeComponent);

          this.treeModel = treeModel;
          this.treeDraggedElement = treeDraggedElement;
          treeModel.eventNames.forEach(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            return _this21[name] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          });
          treeModel.subscribeToState(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return _this21.stateChange.emit(state);
          });
        } // Will be handled in ngOnChanges

        /**
         * @param {?} nodes
         * @return {?}
         */


        _createClass(TreeComponent, [{
          key: "onKeydown",

          /**
           * @param {?} $event
           * @return {?}
           */
          value: function onKeydown($event) {
            if (!this.treeModel.isFocused) return;
            if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["includes"])(['input', 'textarea'], document.activeElement.tagName.toLowerCase())) return;
            /** @type {?} */

            var focusedNode = this.treeModel.getFocusedNode();
            this.treeModel.performKeyAction(focusedNode, $event);
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onMousedown",
          value: function onMousedown($event) {
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

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
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

        }, {
          key: "sizeChanged",
          value: function sizeChanged() {
            this.viewportComponent.setViewport();
          }
        }, {
          key: "nodes",
          set: function set(nodes) {}
        }, {
          key: "options",

          /**
           * @param {?} options
           * @return {?}
           */
          set: function set(options) {}
        }, {
          key: "focused",

          /**
           * @param {?} value
           * @return {?}
           */
          set: function set(value) {
            this.treeModel.setFocus(value);
          }
          /**
           * @param {?} state
           * @return {?}
           */

        }, {
          key: "state",
          set: function set(state) {
            this.treeModel.setState(state);
          }
        }]);

        return TreeComponent;
      }();

      TreeComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'Tree, tree-root',
          providers: [TreeModel],
          template: "\n      <tree-viewport #viewport>\n          <div\n                  class=\"angular-tree-component\"\n                  [class.node-dragging]=\"treeDraggedElement.isDragging()\"\n                  [class.angular-tree-component-rtl]=\"treeModel.options.rtl\">\n              <tree-node-collection\n                      *ngIf=\"treeModel.roots\"\n                      [nodes]=\"treeModel.roots\"\n                      [treeModel]=\"treeModel\"\n                      [templates]=\"{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }\">\n              </tree-node-collection>\n              <tree-node-drop-slot\n                      class=\"empty-tree-drop-slot\"\n                      *ngIf=\"treeModel.isEmptyTree()\"\n                      [dropIndex]=\"0\"\n                      [node]=\"treeModel.virtualRoot\">\n              </tree-node-drop-slot>\n          </div>\n      </tree-viewport>\n  "
        }]
      }];
      /** @nocollapse */

      TreeComponent.ctorParameters = function () {
        return [{
          type: TreeModel
        }, {
          type: TreeDraggedElement
        }];
      };

      TreeComponent.propDecorators = {
        loadingTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['loadingTemplate', {
            "static": false
          }]
        }],
        treeNodeTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['treeNodeTemplate', {
            "static": false
          }]
        }],
        treeNodeWrapperTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['treeNodeWrapperTemplate', {
            "static": false
          }]
        }],
        treeNodeFullTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['treeNodeFullTemplate', {
            "static": false
          }]
        }],
        viewportComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['viewport', {
            "static": false
          }]
        }],
        nodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleExpanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deactivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nodeActivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nodeDeactivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        focus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        blur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        updateData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        initialized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        moveNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        copyNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        loadNodeChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        changeFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        stateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['body: keydown', ['$event']]
        }],
        onMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['body: mousedown', ['$event']]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree-node.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeNodeComponent = function TreeNodeComponent() {
        _classCallCheck(this, TreeNodeComponent);
      };

      TreeNodeComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'TreeNode, tree-node',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <div\n        *ngIf=\"!templates.treeNodeFullTemplate\"\n        [class]=\"node.getClass()\"\n        [class.tree-node]=\"true\"\n        [class.tree-node-expanded]=\"node.isExpanded && node.hasChildren\"\n        [class.tree-node-collapsed]=\"node.isCollapsed && node.hasChildren\"\n        [class.tree-node-leaf]=\"node.isLeaf\"\n        [class.tree-node-active]=\"node.isActive\"\n        [class.tree-node-focused]=\"node.isFocused\"\n      >\n        <tree-node-drop-slot\n          *ngIf=\"index === 0\"\n          [dropIndex]=\"node.index\"\n          [node]=\"node.parent\"\n        ></tree-node-drop-slot>\n\n        <tree-node-wrapper\n          [node]=\"node\"\n          [index]=\"index\"\n          [templates]=\"templates\"\n        ></tree-node-wrapper>\n\n        <tree-node-children\n          [node]=\"node\"\n          [templates]=\"templates\"\n        ></tree-node-children>\n        <tree-node-drop-slot\n          [dropIndex]=\"node.index + 1\"\n          [node]=\"node.parent\"\n        ></tree-node-drop-slot>\n      </div>\n      <ng-container\n        [ngTemplateOutlet]=\"templates.treeNodeFullTemplate\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: node,\n          node: node,\n          index: index,\n          templates: templates\n        }\"\n      >\n      </ng-container>\n    </ng-container>\n  "
        }]
      }];
      TreeNodeComponent.propDecorators = {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree-node-content.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeNodeContent = function TreeNodeContent() {
        _classCallCheck(this, TreeNodeContent);
      };

      TreeNodeContent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tree-node-content',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n  <span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </ng-container>"
        }]
      }];
      TreeNodeContent.propDecorators = {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree-node-drop-slot.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeNodeDropSlot = /*#__PURE__*/function () {
        function TreeNodeDropSlot() {
          _classCallCheck(this, TreeNodeDropSlot);
        }

        _createClass(TreeNodeDropSlot, [{
          key: "onDrop",

          /**
           * @param {?} $event
           * @return {?}
           */
          value: function onDrop($event) {
            this.node.mouseAction('drop', $event.event, {
              from: $event.element,
              to: {
                parent: this.node,
                index: this.dropIndex
              }
            });
          }
          /**
           * @param {?} element
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "allowDrop",
          value: function allowDrop(element, $event) {
            return this.node.options.allowDrop(element, {
              parent: this.node,
              index: this.dropIndex
            }, $event);
          }
        }]);

        return TreeNodeDropSlot;
      }();

      TreeNodeDropSlot.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'TreeNodeDropSlot, tree-node-drop-slot',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n    <div\n      class=\"node-drop-slot\"\n      (treeDrop)=\"onDrop($event)\"\n      [treeAllowDrop]=\"allowDrop.bind(this)\"\n      [allowDragoverStyling]=\"true\">\n    </div>\n  "
        }]
      }];
      TreeNodeDropSlot.propDecorators = {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree-node-expander.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeNodeExpanderComponent = function TreeNodeExpanderComponent() {
        _classCallCheck(this, TreeNodeExpanderComponent);
      };

      TreeNodeExpanderComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tree-node-expander',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <span\n        *ngIf=\"node.hasChildren\"\n        [class.toggle-children-wrapper-expanded]=\"node.isExpanded\"\n        [class.toggle-children-wrapper-collapsed]=\"node.isCollapsed\"\n        class=\"toggle-children-wrapper\"\n        (click)=\"node.mouseAction('expanderClick', $event)\"\n      >\n        <span class=\"toggle-children\"></span>\n      </span>\n      <span *ngIf=\"!node.hasChildren\" class=\"toggle-children-placeholder\">\n      </span>\n    </ng-container>\n  "
        }]
      }];
      TreeNodeExpanderComponent.propDecorators = {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree-node-children.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeNodeChildrenComponent = function TreeNodeChildrenComponent() {
        _classCallCheck(this, TreeNodeChildrenComponent);
      };

      TreeNodeChildrenComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tree-node-children',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <div\n        [class.tree-children]=\"true\"\n        [class.tree-children-no-padding]=\"node.options.levelPadding\"\n        *treeAnimateOpen=\"\n          node.isExpanded;\n          speed: node.options.animateSpeed;\n          acceleration: node.options.animateAcceleration;\n          enabled: node.options.animateExpand\n        \"\n      >\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\"\n        >\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
        }]
      }];
      TreeNodeChildrenComponent.propDecorators = {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
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


      function actionInternal() {
        return (
          /** @type {?} */
          Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"]).apply(void 0, arguments)
        );
      }
      /** @type {?} */


      var action =
      /** @type {?} */
      Object.assign(actionInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["action"]);
      /**
       * @param {...?} args
       * @return {?}
       */

      function computedInternal() {
        return (
          /** @type {?} */
          Object(mobx__WEBPACK_IMPORTED_MODULE_2__["computed"]).apply(void 0, arguments)
        );
      }
      /** @type {?} */


      var computed =
      /** @type {?} */
      Object.assign(computedInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["computed"]);
      /**
       * @param {...?} args
       * @return {?}
       */

      function observableInternal() {
        return (
          /** @type {?} */
          Object(mobx__WEBPACK_IMPORTED_MODULE_2__["observable"]).apply(void 0, arguments)
        );
      }
      /** @type {?} */


      var observable =
      /** @type {?} */
      Object.assign(observableInternal, mobx__WEBPACK_IMPORTED_MODULE_2__["observable"]);

      var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata$3 = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TreeNodeCollectionComponent = /*#__PURE__*/function () {
        function TreeNodeCollectionComponent() {
          _classCallCheck(this, TreeNodeCollectionComponent);

          this._dispose = [];
        }
        /**
         * @return {?}
         */


        _createClass(TreeNodeCollectionComponent, [{
          key: "setNodes",

          /**
           * @param {?} nodes
           * @return {?}
           */
          value: function setNodes(nodes) {
            this._nodes = nodes;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.virtualScroll = this.treeModel.virtualScroll;
            this._dispose = [// return node indexes so we can compare structurally,
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(
            /**
            * @return {?}
            */
            function () {
              return _this22.virtualScroll.getViewportNodes(_this22.nodes).map(
              /**
              * @param {?} n
              * @return {?}
              */
              function (n) {
                return n.index;
              });
            },
            /**
            * @param {?} nodeIndexes
            * @return {?}
            */
            function (nodeIndexes) {
              _this22.viewportNodes = nodeIndexes.map(
              /**
              * @param {?} i
              * @return {?}
              */
              function (i) {
                return _this22.nodes[i];
              });
            },
            /** @type {?} */
            {
              compareStructural: true,
              fireImmediately: true
            }), Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(
            /**
            * @return {?}
            */
            function () {
              return _this22.nodes;
            },
            /**
            * @param {?} nodes
            * @return {?}
            */
            function (nodes) {
              _this22.viewportNodes = _this22.virtualScroll.getViewportNodes(nodes);
            })];
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._dispose.forEach(
            /**
            * @param {?} d
            * @return {?}
            */
            function (d) {
              return d();
            });
          }
          /**
           * @param {?} index
           * @param {?} node
           * @return {?}
           */

        }, {
          key: "trackNode",
          value: function trackNode(index, node) {
            return node.id;
          }
        }, {
          key: "nodes",
          get: function get() {
            return this._nodes;
          }
          /**
           * @param {?} nodes
           * @return {?}
           */
          ,
          set: function set(nodes) {
            this.setNodes(nodes);
          }
          /**
           * @return {?}
           */

        }, {
          key: "marginTop",
          get: function get() {
            /** @type {?} */
            var firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
            /** @type {?} */

            var relativePosition = firstNode && firstNode.parent ? firstNode.position - firstNode.parent.position - firstNode.parent.getSelfHeight() : 0;
            return "".concat(relativePosition, "px");
          }
        }]);

        return TreeNodeCollectionComponent;
      }();

      TreeNodeCollectionComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tree-node-collection',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <div [style.margin-top]=\"marginTop\">\n        <tree-node\n          *ngFor=\"let node of viewportNodes; let i = index; trackBy: trackNode\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\"\n        >\n        </tree-node>\n      </div>\n    </ng-container>\n  "
        }]
      }];
      TreeNodeCollectionComponent.propDecorators = {
        nodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        treeModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      __decorate$3([observable, __metadata$3("design:type", Object)], TreeNodeCollectionComponent.prototype, "_nodes", void 0);

      __decorate$3([observable, __metadata$3("design:type", Array)], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);

      __decorate$3([computed, __metadata$3("design:type", String), __metadata$3("design:paramtypes", [])], TreeNodeCollectionComponent.prototype, "marginTop", null);

      __decorate$3([action, __metadata$3("design:type", Function), __metadata$3("design:paramtypes", [Object]), __metadata$3("design:returntype", void 0)], TreeNodeCollectionComponent.prototype, "setNodes", null);

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree-node-wrapper.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeNodeWrapperComponent = function TreeNodeWrapperComponent() {
        _classCallCheck(this, TreeNodeWrapperComponent);
      };

      TreeNodeWrapperComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tree-node-wrapper',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n      <div *ngIf=\"!templates.treeNodeWrapperTemplate\" class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n          <tree-node-checkbox *ngIf=\"node.options.useCheckbox\" [node]=\"node\"></tree-node-checkbox>\n          <tree-node-expander [node]=\"node\"></tree-node-expander>\n          <div class=\"node-content-wrapper\"\n               [class.node-content-wrapper-active]=\"node.isActive\"\n               [class.node-content-wrapper-focused]=\"node.isFocused\"\n               (click)=\"node.mouseAction('click', $event)\"\n               (dblclick)=\"node.mouseAction('dblClick', $event)\"\n               (mouseover)=\"node.mouseAction('mouseOver', $event)\"\n               (mouseout)=\"node.mouseAction('mouseOut', $event)\"\n               (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n               (treeDrop)=\"node.onDrop($event)\"\n               (treeDropDragOver)=\"node.mouseAction('dragOver', $event)\"\n               (treeDropDragLeave)=\"node.mouseAction('dragLeave', $event)\"\n               (treeDropDragEnter)=\"node.mouseAction('dragEnter', $event)\"\n               [treeAllowDrop]=\"node.allowDrop\"\n               [allowDragoverStyling]=\"node.allowDragoverStyling()\"\n               [treeDrag]=\"node\"\n               [treeDragEnabled]=\"node.allowDrag()\">\n\n              <tree-node-content [node]=\"node\" [index]=\"index\" [template]=\"templates.treeNodeTemplate\">\n              </tree-node-content>\n          </div>\n      </div>\n      <ng-container\n              [ngTemplateOutlet]=\"templates.treeNodeWrapperTemplate\"\n              [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index, templates: templates }\">\n      </ng-container>\n  "
        }]
      }];
      /** @nocollapse */

      TreeNodeWrapperComponent.ctorParameters = function () {
        return [];
      };

      TreeNodeWrapperComponent.propDecorators = {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/tree-node-checkbox.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeNodeCheckboxComponent = function TreeNodeCheckboxComponent() {
        _classCallCheck(this, TreeNodeCheckboxComponent);
      };

      TreeNodeCheckboxComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tree-node-checkbox',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <input\n        class=\"tree-node-checkbox\"\n        type=\"checkbox\"\n        (click)=\"node.mouseAction('checkboxClick', $event)\"\n        [checked]=\"node.isSelected\"\n        [indeterminate]=\"node.isPartiallySelected\"\n      />\n    </ng-container>\n  "
        }]
      }];
      TreeNodeCheckboxComponent.propDecorators = {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/directives/tree-drop.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DRAG_OVER_CLASS = 'is-dragging-over';
      /** @type {?} */

      var DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';

      var TreeDropDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} renderer
         * @param {?} treeDraggedElement
         * @param {?} ngZone
         */
        function TreeDropDirective(el, renderer, treeDraggedElement, ngZone) {
          _classCallCheck(this, TreeDropDirective);

          this.el = el;
          this.renderer = renderer;
          this.treeDraggedElement = treeDraggedElement;
          this.ngZone = ngZone;
          this.allowDragoverStyling = true;
          this.onDropCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onDragOverCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onDragLeaveCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onDragEnterCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          this._allowDrop =
          /**
          * @param {?} element
          * @param {?} $event
          * @return {?}
          */
          function (element, $event) {
            return true;
          };

          this.dragOverEventHandler = this.onDragOver.bind(this);
          this.dragEnterEventHandler = this.onDragEnter.bind(this);
          this.dragLeaveEventHandler = this.onDragLeave.bind(this);
        }
        /**
         * @param {?} allowDrop
         * @return {?}
         */


        _createClass(TreeDropDirective, [{
          key: "allowDrop",

          /**
           * @param {?} $event
           * @return {?}
           */
          value: function allowDrop($event) {
            return this._allowDrop(this.treeDraggedElement.get(), $event);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this23 = this;

            /** @type {?} */
            var el = this.el.nativeElement;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              el.addEventListener('dragover', _this23.dragOverEventHandler);
              el.addEventListener('dragenter', _this23.dragEnterEventHandler);
              el.addEventListener('dragleave', _this23.dragLeaveEventHandler);
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /** @type {?} */
            var el = this.el.nativeElement;
            el.removeEventListener('dragover', this.dragOverEventHandler);
            el.removeEventListener('dragenter', this.dragEnterEventHandler);
            el.removeEventListener('dragleave', this.dragLeaveEventHandler);
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onDragOver",
          value: function onDragOver($event) {
            if (!this.allowDrop($event)) {
              if (this.allowDragoverStyling) {
                return this.addDisabledClass();
              }

              return;
            }

            this.onDragOverCallback.emit({
              event: $event,
              element: this.treeDraggedElement.get()
            });
            $event.preventDefault();

            if (this.allowDragoverStyling) {
              this.addClass();
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onDragEnter",
          value: function onDragEnter($event) {
            if (!this.allowDrop($event)) return;
            $event.preventDefault();
            this.onDragEnterCallback.emit({
              event: $event,
              element: this.treeDraggedElement.get()
            });
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onDragLeave",
          value: function onDragLeave($event) {
            if (!this.allowDrop($event)) {
              if (this.allowDragoverStyling) {
                return this.removeDisabledClass();
              }

              return;
            }

            this.onDragLeaveCallback.emit({
              event: $event,
              element: this.treeDraggedElement.get()
            });

            if (this.allowDragoverStyling) {
              this.removeClass();
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onDrop",
          value: function onDrop($event) {
            if (!this.allowDrop($event)) return;
            $event.preventDefault();
            this.onDropCallback.emit({
              event: $event,
              element: this.treeDraggedElement.get()
            });

            if (this.allowDragoverStyling) {
              this.removeClass();
            }

            this.treeDraggedElement.set(null);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "addClass",
          value: function addClass() {
            this.renderer.addClass(this.el.nativeElement, DRAG_OVER_CLASS);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "removeClass",
          value: function removeClass() {
            this.renderer.removeClass(this.el.nativeElement, DRAG_OVER_CLASS);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "addDisabledClass",
          value: function addDisabledClass() {
            this.renderer.addClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "removeDisabledClass",
          value: function removeDisabledClass() {
            this.renderer.removeClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
          }
        }, {
          key: "treeAllowDrop",
          set: function set(allowDrop) {
            if (allowDrop instanceof Function) {
              this._allowDrop = allowDrop;
            } else this._allowDrop =
            /**
            * @param {?} element
            * @param {?} $event
            * @return {?}
            */
            function (element, $event) {
              return allowDrop;
            };
          }
        }]);

        return TreeDropDirective;
      }();

      TreeDropDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[treeDrop]'
        }]
      }];
      /** @nocollapse */

      TreeDropDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: TreeDraggedElement
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      TreeDropDirective.propDecorators = {
        allowDragoverStyling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onDropCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['treeDrop']
        }],
        onDragOverCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['treeDropDragOver']
        }],
        onDragLeaveCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['treeDropDragLeave']
        }],
        onDragEnterCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['treeDropDragEnter']
        }],
        treeAllowDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/directives/tree-drag.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DRAG_OVER_CLASS$1 = 'is-dragging-over';

      var TreeDragDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} renderer
         * @param {?} treeDraggedElement
         * @param {?} ngZone
         */
        function TreeDragDirective(el, renderer, treeDraggedElement, ngZone) {
          _classCallCheck(this, TreeDragDirective);

          this.el = el;
          this.renderer = renderer;
          this.treeDraggedElement = treeDraggedElement;
          this.ngZone = ngZone;
          this.dragEventHandler = this.onDrag.bind(this);
        }
        /**
         * @return {?}
         */


        _createClass(TreeDragDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this24 = this;

            /** @type {?} */
            var el = this.el.nativeElement;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              el.addEventListener('drag', _this24.dragEventHandler);
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.renderer.setAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /** @type {?} */
            var el = this.el.nativeElement;
            el.removeEventListener('drag', this.dragEventHandler);
          }
          /**
           * @param {?} ev
           * @return {?}
           */

        }, {
          key: "onDragStart",
          value: function onDragStart(ev) {
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

        }, {
          key: "onDrag",
          value: function onDrag(ev) {
            if (this.draggedElement.mouseAction) {
              this.draggedElement.mouseAction('drag', ev);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onDragEnd",
          value: function onDragEnd() {
            if (this.draggedElement.mouseAction) {
              this.draggedElement.mouseAction('dragEnd');
            }

            this.treeDraggedElement.set(null);
          }
        }]);

        return TreeDragDirective;
      }();

      TreeDragDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[treeDrag]'
        }]
      }];
      /** @nocollapse */

      TreeDragDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: TreeDraggedElement
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      TreeDragDirective.propDecorators = {
        draggedElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['treeDrag']
        }],
        treeDragEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragstart', ['$event']]
        }],
        onDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragend']
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/directives/tree-animate-open.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var EASE_ACCELERATION = 1.005;

      var TreeAnimateOpenDirective = /*#__PURE__*/function () {
        /**
         * @param {?} renderer
         * @param {?} templateRef
         * @param {?} viewContainerRef
         */
        function TreeAnimateOpenDirective(renderer, templateRef, viewContainerRef) {
          _classCallCheck(this, TreeAnimateOpenDirective);

          this.renderer = renderer;
          this.templateRef = templateRef;
          this.viewContainerRef = viewContainerRef;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(TreeAnimateOpenDirective, [{
          key: "_show",

          /**
           * @private
           * @return {?}
           */
          value: function _show() {
            if (this.innerElement) return; // create child view

            this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_hide",
          value: function _hide() {
            this.viewContainerRef.clear();
            this.innerElement = null;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_animateOpen",
          value: function _animateOpen() {
            var _this25 = this;

            /** @type {?} */
            var delta = this.animateSpeed;
            /** @type {?} */

            var ease = this.animateAcceleration;
            /** @type {?} */

            var maxHeight = 0; // set height to 0

            this.renderer.setStyle(this.innerElement, 'max-height', "0"); // increase maxHeight until height doesn't change

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              // Allow inner element to create its content

              /** @type {?} */
              var i = setInterval(
              /**
              * @return {?}
              */
              function () {
                if (!_this25._isOpen || !_this25.innerElement) return clearInterval(i);
                maxHeight += delta;
                /** @type {?} */

                var roundedMaxHeight = Math.round(maxHeight);

                _this25.renderer.setStyle(_this25.innerElement, 'max-height', "".concat(roundedMaxHeight, "px"));
                /** @type {?} */


                var height = _this25.innerElement.getBoundingClientRect ? _this25.innerElement.getBoundingClientRect().height : 0;
                delta *= ease;
                ease *= EASE_ACCELERATION;

                if (height < roundedMaxHeight) {
                  // Make maxHeight auto because animation finished and container might change height later on
                  _this25.renderer.setStyle(_this25.innerElement, 'max-height', null);

                  clearInterval(i);
                }
              }, 17);
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_animateClose",
          value: function _animateClose() {
            var _this26 = this;

            if (!this.innerElement) return;
            /** @type {?} */

            var delta = this.animateSpeed;
            /** @type {?} */

            var ease = this.animateAcceleration;
            /** @type {?} */

            var height = this.innerElement.getBoundingClientRect().height; // TBD use renderer
            // slowly decrease maxHeight to 0, starting from current height

            /** @type {?} */

            var i = setInterval(
            /**
            * @return {?}
            */
            function () {
              if (_this26._isOpen || !_this26.innerElement) return clearInterval(i);
              height -= delta;

              _this26.renderer.setStyle(_this26.innerElement, 'max-height', "".concat(height, "px"));

              delta *= ease;
              ease *= EASE_ACCELERATION;

              if (height <= 0) {
                // after animation complete - remove child element
                _this26.viewContainerRef.clear();

                _this26.innerElement = null;
                clearInterval(i);
              }
            }, 17);
          }
        }, {
          key: "isOpen",
          set: function set(value) {
            if (value) {
              this._show();

              if (this.isEnabled && this._isOpen === false) {
                this._animateOpen();
              }
            } else {
              this.isEnabled ? this._animateClose() : this._hide();
            }

            this._isOpen = !!value;
          }
        }]);

        return TreeAnimateOpenDirective;
      }();

      TreeAnimateOpenDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[treeAnimateOpen]'
        }]
      }];
      /** @nocollapse */

      TreeAnimateOpenDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };

      TreeAnimateOpenDirective.propDecorators = {
        animateSpeed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['treeAnimateOpenSpeed']
        }],
        animateAcceleration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['treeAnimateOpenAcceleration']
        }],
        isEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['treeAnimateOpenEnabled']
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['treeAnimateOpen']
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/angular-tree-component.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TreeModule = function TreeModule() {
        _classCallCheck(this, TreeModule);
      };

      TreeModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [TreeComponent, TreeNodeComponent, TreeNodeContent, LoadingComponent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent, TreeNodeWrapperComponent, TreeNodeCheckboxComponent, TreeAnimateOpenDirective, TreeMobxAutorunDirective],
          exports: [TreeComponent, TreeNodeComponent, TreeNodeContent, LoadingComponent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent, TreeNodeWrapperComponent, TreeNodeCheckboxComponent, TreeAnimateOpenDirective, TreeMobxAutorunDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: []
        }]
      }];
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

      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-toolbar class=\"toolbar mat-primary\">\r\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\" (click)=\"sidenav.toggle()\">\r\n        <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <mat-icon svgIcon=\"tree-logo\" aria-hidden=\"false\" class=\"main-logo\"></mat-icon>\r\n    <span>Angular Tree Component</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <a href=\"https://github.com/CirclonGroup/angular-tree-component\" title=\"GitHub\" target=\"_blank\" class=\"toolbar-link\">\r\n        <mat-icon svgIcon=\"github\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\r\n    </a>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"sidenav\">\r\n        <div class=\"sidenav-menu\">\r\n            <app-nav-item *ngFor=\"let navEntry of nav\"\r\n                          [node]=\"navEntry\" [selectedNodes]=\"currentNodes\"></app-nav-item>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"sidenav-content\" [ngClass]=\"{'sidenav-open': sidenav.opened}\">\r\n        <main role=\"main\" class=\"main-content\">\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<footer>\r\n    <app-footer></app-footer>\r\n</footer>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/examples/basic-usage/basic-usage.component.html":
    /*!**************************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/examples/basic-usage/basic-usage.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExamplesBasicUsageBasicUsageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Basic usage</h1>\r\n\r\n<h2>Working tree</h2>\r\n\r\n<tree-root [nodes]=\"nodes\"></tree-root>\r\n\r\n<h2>How to implement</h2>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions-demo/actions-demo.component.html":
    /*!****************************************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions-demo/actions-demo.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsActionsActionsDemoActionsDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<tree-root\r\n  #tree\r\n  [nodes]=\"nodes\"\r\n  [options]=\"options\"\r\n  [focused]=\"true\"\r\n>\r\n</tree-root>\r\n<br>\r\n<b>Custom Keys:</b><br>\r\nenter - show alert<br>\r\n<br>\r\n<b>Custom Mouse Actions:</b><br>\r\nshift+click - select multi<br>\r\ndouble click - expand / collapse<br>\r\nright-click - show alert\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions.component.html":
    /*!**********************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsActionsActionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Customize Actions</h1>\r\n\r\n<h2>Demo</h2>\r\n\r\n<div class=\"demo-container\">\r\n    <app-actions-demo></app-actions-demo>\r\n</div>\r\n\r\n<h2>Override key and mouse actions</h2>\r\n\r\n<p>Angular Tree Component comes with a default mapping of mouse events and key events to actions. For example - click on the node activates / deactivates it, click on the expander expands / collapses it, pressing space or enter will toggle the node activation (same as click), etc.</p>\r\n<p>Using the <code>actionMapping</code> option, you can override how the tree reacts to mouse and key events, by providing a custom mapping.</p>\r\n\r\n<code-example>{{ actionMapping }}</code-example>\r\n\r\n\r\n<h2>actionMapping (IActionMapping)</h2>\r\n\r\n<p>The <code>actionMapping</code> attribute needs to implement the <code>IActionMapping</code> interface, which is an object that maps predefined mouse events, and key codes, to callbacks.</p>\r\n\r\n\r\n<h2>The callback (IActionHandler)</h2>\r\n\r\n<p>The callback always receives three parameters: <code>TreeModel</code>, <code>TreeNode</code>, and <code>$event</code>.</p>\r\n\r\n\r\n<h2>TREE_ACTIONS</h2>\r\n\r\n<p>Notice the <code>TREE_ACTIONS</code> object. It holds predefined callbacks that do common actions.</p>\r\n<p>The available attributes are:</p>\r\n\r\n<ul>\r\n    <li><code>TOGGLE_ACTIVE</code></li>\r\n    <li><code>TOGGLE_ACTIVE_MULTI</code></li>\r\n    <li><code>ACTIVATE</code></li>\r\n    <li><code>DEACTIVATE</code></li>\r\n    <li><code>TOGGLE_SELECTED</code></li>\r\n    <li><code>SELECT</code></li>\r\n    <li><code>DESELECT</code></li>\r\n    <li><code>FOCUS</code></li>\r\n    <li><code>TOGGLE_EXPANDED</code></li>\r\n    <li><code>EXPAND</code></li>\r\n    <li><code>COLLAPSE</code></li>\r\n    <li><code>DRILL_DOWN</code></li>\r\n    <li><code>DRILL_UP</code></li>\r\n    <li><code>NEXT_NODE</code></li>\r\n    <li><code>PREVIOUS_NODE</code></li>\r\n    <li><code>MOVE_NODE</code></li>\r\n</ul>\r\n\r\n\r\n<h2>Mouse actions</h2>\r\n\r\n<p>In mouse actions, the <code>TreeNode</code> parameter of the callback is the node that the event was activated on (e.g. clicked on).</p>\r\n<p>The possible attributes for <code>actionMapping.mouse</code> are:</p>\r\n\r\n<ul>\r\n    <li><code>click</code></li>\r\n    <li><code>dblClick</code></li>\r\n    <li><code>expanderClick</code></li>\r\n    <li><code>checkboxClick</code></li>\r\n    <li><code>contextMenu</code> (right click)</li>\r\n    <li><code>dragStart</code></li>\r\n    <li><code>drag</code></li>\r\n    <li><code>dragOver</code></li>\r\n    <li><code>dragEnd</code></li>\r\n    <li><code>dragLeave</code></li>\r\n    <li><code>dragEnter</code></li>\r\n    <li><code>drop</code></li>\r\n</ul>\r\n\r\n<code-example>{{ mouseActions }}</code-example>\r\n\r\n\r\n<h2>Shift+Click (Alt / Ctrl)</h2>\r\n\r\n<p>If you want to perform actions based on modifier keys, use <code>$event.shiftKey</code>, <code>$event.ctrlKey</code> etc., provided on the third callback argument - <code>$event</code>.</p>\r\n\r\n\r\n<h2>Keyboard events</h2>\r\n\r\n<p>In keyboard events, the <code>TreeNode</code> parameter of the callback is the currently focused node. In case no node is focused, this will be <code>null</code>.</p>\r\n<p>The attributes for <code>actionMapping.keys</code> are integers which represent the key code (e.g. 32 for Space)</p>\r\n<p>Angular Tree Component exposes a <code>KEYS</code> constant with predefined common key codes:</p>\r\n\r\n<code-example language=\"json\">{{ keys }}</code-example>\r\n\r\n<p>So you can use those, or pass any keycode you'd like.</p>\r\n<p>For example:</p>\r\n\r\n<code-example>{{ keysExample }}</code-example>\r\n\r\n\r\n<h2>Default mapping</h2>\r\n\r\n<p>Here is the default mapping that ships with Angular Tree Component:</p>\r\n\r\n<code-example>{{ defaultMapping }}</code-example>\r\n\r\n\r\n<h2>Context menu</h2>\r\n\r\n<p>In case you want to open your own context menu, you must first run <code>$event.preventDefault()</code> within the callback.</p>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api-demo/api-demo.component.html":
    /*!****************************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api-demo/api-demo.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsApiApiDemoApiDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<tree-root\r\n  #tree\r\n  [nodes]=\"nodes\"\r\n  [options]=\"options\"\r\n  [focused]=\"true\"\r\n>\r\n</tree-root>\r\n<p>API:</p>\r\n<button (click)=\"tree.treeModel.focusNextNode()\">next node</button>\r\n<button (click)=\"tree.treeModel.focusPreviousNode()\">previous node</button>\r\n<button (click)=\"tree.treeModel.focusDrillDown()\">drill down</button>\r\n<button (click)=\"tree.treeModel.focusDrillUp()\">drill up</button>\r\n<button (click)=\"options.allowDrag = true\">allowDrag</button>\r\n<p></p>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().toggleActivated()\">\r\n    {{ tree.treeModel.getFocusedNode()?.isActive ? 'deactivate' : 'activate' }}\r\n</button>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().toggleExpanded()\">\r\n    {{ tree.treeModel.getFocusedNode()?.isExpanded ? 'collapse' : 'expand' }}\r\n</button>\r\n<button\r\n        [disabled]=\"!tree.treeModel.getFocusedNode()\"\r\n        (click)=\"tree.treeModel.getFocusedNode().blur()\">\r\n    blur\r\n</button>\r\n<button\r\n        (click)=\"addNode(tree)\">\r\n    Add Node\r\n</button>\r\n<button\r\n        (click)=\"activateSubSub(tree)\">\r\n    Activate inner node\r\n</button>\r\n<button\r\n        (click)=\"tree.treeModel.expandAll()\">\r\n    Expand All\r\n</button>\r\n<button\r\n        (click)=\"tree.treeModel.collapseAll()\">\r\n    Collapse All\r\n</button>\r\n<button\r\n        (click)=\"activeNodes(tree.treeModel)\">\r\n    getActiveNodes()\r\n</button>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsApiApiComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Calling API Methods</h1>\r\n\r\n<h2>Demo</h2>\r\n\r\n<div class=\"demo-container\">\r\n    <app-api-demo></app-api-demo>\r\n</div>\r\n\r\n<code-example>{{ html }}</code-example>\r\n\r\n<p>Or by accessing the <code>treeNode</code> that is passed through <a [routerLink]=\"['/', 'fundamentals', 'events']\">Events</a> or using <a [routerLink]=\"['/', 'fundamentals', 'actions']\">Action Mapping</a>.</p>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/events/events.component.html":
    /*!********************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/events/events.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsEventsEventsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Events</h1>\r\n\r\n<h2>Registering events</h2>\r\n\r\n<p>You can react to whatever happened on the tree by registering to events.</p>\r\n<p>If you're looking to override behaviour - see Customize actions section.</p>\r\n<p>Events use Angular's output:</p>\r\n\r\n<code-example>{{ event }}</code-example>\r\n\r\n\r\n<h2>treeModel</h2>\r\n\r\n<p>All events have a <code>treeModel</code> attribute that allows you to access the tree API.</p>\r\n<p>Specific events and other attributes are listed below:</p>\r\n\r\n\r\n<h2>toggleExpanded</h2>\r\n\r\n<p>Triggers when expanding / collapsing a tree node.</p>\r\n\r\n<code-example language=\"json\">{{ toggleExpanded }}</code-example>\r\n\r\n\r\n<h2>activate / nodeActivate</h2>\r\n<p>Triggers when activating a tree node, by clicking on the node, or by using the Enter / Space keys.</p>\r\n<p>nodeActivate is an alias to support older browser versions.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>deactivate / nodeDeactivate</h2>\r\n<p>Triggers when deactivating a tree node, by clicking on the node, or by using the Enter or Space keys.</p>\r\n<p>nodeDeactivate is an alias to support older browser versions.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>focus</h2>\r\n<p>Triggers when focusing on a node, by moving with the arrow keys.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>blur</h2>\r\n<p>Triggers when focusing on a node, by moving with the arrow keys.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n<h2>initialized</h2>\r\n<p>Triggers after tree model was created.</p>\r\n<p>Good for performing actions immediately on init, like expanding / activating certain nodes, etc.</p>\r\n<p>You can access the tree model using a ref, as described in the API section.</p>\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n\r\n\r\n<h2>updateData</h2>\r\nTriggers after tree model was updated, either by changing the inputs of the tree (nodes, options, etc.) or a direct call to <code>update()</code>.\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n\r\n\r\n<h2>moveNode</h2>\r\n<p>This event is fired any time moveNode is called on the tree.</p>\r\n<p>Typically - when drag and dropping a node.</p>\r\n<code-example language=\"json\">{{ move }}</code-example>\r\n\r\n\r\n<h2>copyNode</h2>\r\n<p>This event is fired any time copyNode is called on the tree.</p>\r\n<p>Typically - when drag and dropping a node while ctrl key is pressed.</p>\r\n<code-example language=\"json\">{{ copy }}</code-example>\r\n\r\n\r\n<h2>event</h2>\r\n<p>Catch-all event that is triggered on every other event that is triggered.</p>\r\n<p>Useful for doing the same action for different events by checking the eventName.</p>\r\n<p>The parameters will match whatever event was sent originally.</p>\r\n<code-example language=\"json\">{{ baseEvent }}</code-example>\r\n\r\n\r\n<h2>loadNodeChildren</h2>\r\n<p>Callback after async children were added to the tree. The <code>node</code> returned is the parent node.</p>\r\n<code-example language=\"json\">{{ basicEvent }}</code-example>\r\n\r\n\r\n<h2>changeFilter</h2>\r\n<p>Fired after filter has changed or cleared</p>\r\n<code-example language=\"json\">{{ eventName }}</code-example>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/focus/focus.component.html":
    /*!******************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/focus/focus.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsFocusFocusComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Focused</h1>\r\n\r\n<code-example>{{ focus }}</code-example>\r\n\r\n<h2>@Input() focused</h2>\r\n\r\n<p>Whether the tree should be focused. Key navigation only works when the tree is focused.</p>\r\n<p>Default value: <code>false</code>.</p>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/issues/issues.component.html":
    /*!********************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/issues/issues.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsIssuesIssuesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Common Issues</h1>\r\n\r\n<h2>Tree not rendered</h2>\r\n<p>Case: when tree is hidden (for example inside tab or modal), it is not rendered when it becomes visible.</p>\r\n<p>Solution: after it becomes visible (preferably using <code>setTimeout</code>) - call <code>tree.sizeChanged()</code>, which recalculates the rendered nodes according to the actual viewport size.</p>\r\n\r\n<h2>Tree state (expanded / selected nodes) gets lost</h2>\r\n<p>Maybe you are not supplying unique IDs to the nodes.</p>\r\n<p>The tree maintains its state by using IDs, and if you don't supply ones the tree will generate random ones automatically. Which means that if you update the data - the state will be lost.</p>\r\n\r\n<h2>Scroll Into View doesn't work</h2>\r\n<p>See <code>scrollContainer</code> option in <a [routerLink]=\"['/', 'fundamentals', 'options']\">Options</a> for more information.</p>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/nodes/nodes.component.html":
    /*!******************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/nodes/nodes.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsNodesNodesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Nodes</h1>\r\n\r\n<p>Inputs to Tree component:</p>\r\n\r\n<code-example>&lt;tree-root [nodes]=nodes [options]=\"options\"&gt;&lt;/tree-root&gt;</code-example>\r\n\r\n<h2>nodes</h2>\r\n\r\n<p>Array of root nodes of the tree.</p>\r\n<p>Each node may contain the following fields:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <th>Property</th>\r\n        <th>Description</th>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>id</td>\r\n        <td>\r\n            Unique ID for the node.<br>\r\n            If one is not supplied it will be created by the tree library.\r\n        </td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>name</td>\r\n        <td>Will be displayed by default in the tree.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>children</td>\r\n        <td>An array of the node's children.<br>\r\n            Each child is an object with the same structure as the parent node.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>hasChildren</td>\r\n        <td>For async data load. Denotes that this node might have children, even when 'children' attr is empty.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>isExpanded</td>\r\n        <td>Determines whether the node starts as expanded by default. Notice that this field is not bindable, meaning that changing it doesn't affect the tree and vice versa.</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example language=\"json\">{{ nodes }}</code-example>\r\n\r\n<h2>Focused</h2>\r\n\r\n<p>Whether the tree should be focused. Key navigation only works when the tree is focused.</p>\r\n<p>Default value: <code>false</code>.</p>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/options/options.component.html":
    /*!**********************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/options/options.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsOptionsOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Options</h1>\r\n\r\n<code-example>&lt;tree-root [nodes]=nodes [options]=\"options\"&gt;&lt;/tree-root&gt;</code-example>\r\n\r\n<h2>options</h2>\r\n\r\n<p>Object of type <code>ITreeOptions</code></p>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example>{{ options }}</code-example>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.html":
    /*!**********************************************************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.html ***!
      \**********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsStateBindingStateBindingDemoStateBindingDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<input id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"filter nodes\"/>\r\n<tree-root [options]=\"options\" [(state)]=\"state\" #tree [focused]=\"true\" [nodes]=\"nodes\"></tree-root>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding.component.html":
    /*!**********************************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsStateBindingStateBindingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>2-way binding to state</h1>\r\n\r\n<p>You can control the tree state using 2-way binding.</p>\r\n<p>The state includes the following:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <td>expandedNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>selectedLeafNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>activeNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>hiddenNodeIds</td>\r\n        <td>dictionary of node IDs to booleans</td>\r\n    </tr>\r\n    <tr>\r\n        <td>focusedNodeId</td>\r\n        <td>node ID</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>You can change the state reference and the tree will respond automatically, and also access the tree state at any time, as it is always updated via the 2-way binding.</p>\r\n\r\n<p>Example:</p>\r\n\r\n<code-example>{{ example }}</code-example>\r\n\r\n\r\n<h2>!important note</h2>\r\n<p>You must have an 'id' property on the nodes in order for this to work. Otherwise - the tree will automatically generate internal IDs which change every time you change the nodes array.</p>\r\n\r\n\r\n<h2>Persist state to localstorage</h2>\r\n<p>This example is using the 2 way binding to tree state to auto save & restore from localstorage:</p>\r\n<code-example>{{ localStorage }}</code-example>\r\n\r\n<h3>Demo</h3>\r\n\r\n<div class=\"demo-container\">\r\n    <app-state-binding-demo></app-state-binding-demo>\r\n</div>\r\n\r\n\r\n<h2>Using API</h2>\r\n<p>Alternatively, you can use <code>getState</code>, <code>setState</code> and <code>subscribe</code> on treeModel API. <code>subscribe</code> will callback a function every time state changes.</p>\r\n<code-example>{{ api }}</code-example>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/styling/styling.component.html":
    /*!**********************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/styling/styling.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsStylingStylingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Styling</h1>\r\n\r\n<p>The tree comes with very basic style.</p>\r\n<p>The following classes are available for customization:</p>\r\n\r\n<ul>\r\n    <li>.angular-tree-component</li>\r\n    <li>.angular-tree-component-rtl</li>\r\n    <li>.tree-node</li>\r\n    <li>.tree-node-wrapper</li>\r\n    <li>.tree-node-expanded</li>\r\n    <li>.tree-node-collapsed</li>\r\n    <li>.tree-node-focused</li>\r\n    <li>.tree-node-active</li>\r\n    <li>.tree-node-level-X</li>\r\n    <li>.tree-node-leaf</li>\r\n    <li>.node-wrapper</li>\r\n    <li>.toggle-children-wrapper</li>\r\n    <li>.toggle-children</li>\r\n    <li>.toggle-children-placeholder</li>\r\n    <li>.node-content-wrapper</li>\r\n    <li>.tree-children</li>\r\n    <li>.tree-node-loading</li>\r\n    <li>.node-drop-slot</li>\r\n    <li>.is-dragging-over</li>\r\n    <li>.is-dragging-over-disabled</li>\r\n</ul>\r\n\r\n<h2>Overriding style</h2>\r\n<p>Surround your tree with a class, and add your custom style to your style.scss file.</p>\r\n<p>Scope all the custom rules under your custom class - and that's it!</p>\r\n\r\n<h2>Example styles</h2>\r\n<p>These styles were provided by the community. They might be outdated.</p>\r\n<p>If you find an error in these styles please suggest an edit - don't open a github issue.</p>\r\n<p>Thanks</p>\r\n\r\n\r\n<h3>Branch lines</h3>\r\n<p>This theme puts explorer like branch lines that connect the parents with their children</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/f50955b-Screen_Shot_2016-11-29_at_12.11.52_PM.png\" alt=\"Branch lines\">\r\n</div>\r\n<code-example>{{ branchLines }}</code-example>\r\n\r\n\r\n<h3>Pull right</h3>\r\n<p>This theme allows placing items in the right side of the tree nodes using <code>pull-right</code> class.</p>\r\n<p>It is based on flexbox, so relevant only to browsers who support it.</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/28d7625-Screen_Shot_2016-11-29_at_12.11.01_PM.png\" alt=\"Pull right\">\r\n</div>\r\n<code-example>{{ pullRight }}</code-example>\r\n\r\n\r\n<h3>ACE Admin theme</h3>\r\n<p><a href=\"http://ace.jeka.by/treeview.html\" target=\"_blank\">ACE Admin theme</a> style.</p>\r\n<p>Credit to Viet Anh Do for sending this theme!</p>\r\n<div class=\"lightbox\">\r\n    <img src=\"assets/styling/0bd50e1-treecss.png\" alt=\"ACE Admin theme\">\r\n</div>\r\n<code-example>{{ ace }}</code-example>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates-demo/templates-demo.component.html":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates-demo/templates-demo.component.html ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsTemplatesTemplatesDemoTemplatesDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3>treeNodeTemplate and loadingTemplate</h3>\r\n<tree-root id=\"tree1\" [focused]=\"true\" [nodes]=\"nodes1\" [options]=\"options1\">\r\n    <ng-template #treeNodeTemplate let-node let-index=\"index\">\r\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n        <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n    </ng-template>\r\n    <ng-template #loadingTemplate let-node>\r\n        <div [class]=\"node.data.className + 'Loading'\">Loading {{ node.data.title }}...</div>\r\n    </ng-template>\r\n</tree-root>\r\n\r\n<h3>treeNodeWrapper</h3>\r\n<tree-root id=\"tree3\" [focused]=\"true\" [nodes]=\"nodes2\" [options]=\"options1\">\r\n    <ng-template #treeNodeWrapperTemplate let-node let-index=\"index\">\r\n        <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n        <input type=\"checkbox\"><span>&rarr;</span>\r\n        <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n    </ng-template>\r\n</tree-root>\r\n<h3>treeNodeFullTemplate</h3>\r\n<tree-root id=\"tree2\" [focused]=\"true\" [nodes]=\"nodes2\">\r\n    <ng-template #treeNodeFullTemplate let-node let-index=\"index\" let-templates=\"templates\">\r\n        <div class=\"tree-node\">\r\n            <input type=\"checkbox\" [checked]=\"node.isActive\" (change)=\"node.toggleActivated(true)\" />\r\n            <tree-node-expander [node]=\"node\"></tree-node-expander>\r\n            <div\r\n                    class=\"node-content-wrapper\"\r\n                    [class.node-content-wrapper-active]=\"node.isActive\"\r\n                    [class.node-content-wrapper-focused]=\"node.isFocused\"\r\n                    (click)=\"node.toggleActivated(true)\">\r\n                <span [class]=\"node.data.className + 'Index'\">{{ index }}</span>\r\n                <span [class]=\"node.data.className\" [class.title]=\"true\">{{ node.data.title }}</span>\r\n            </div>\r\n            <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\r\n        </div>\r\n    </ng-template>\r\n</tree-root>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates.component.html":
    /*!**************************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFundamentalsTemplatesTemplatesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Custom Templates</h1>\r\n\r\n<p>You can customize the tree's templates using embedded <code>ng-template</code> tags.</p>\r\n\r\n<h2>Demo</h2>\r\n\r\n<div class=\"demo-container\">\r\n    <app-templates-demo></app-templates-demo>\r\n</div>\r\n\r\n\r\n<h2>#treeNodeTemplate</h2>\r\n\r\n<p>Use #treeNodeTemplate for the content of the node.</p>\r\n<p>You will have access to the following variables:</p>\r\n\r\n<table>\r\n    <tr>\r\n        <th>Variable</th>\r\n        <th>Description</th>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>node</td>\r\n        <td>Node of type TreeNode. Exposes many useful methods, as well as a <code>data</code> attribute with the original node's data.</td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>index</td>\r\n        <td>The index of the current node in the parent's children.</td>\r\n    </tr>\r\n</table>\r\n\r\n<p>For example:</p>\r\n\r\n<code-example>{{ template }}</code-example>\r\n\r\n\r\n<h2>#treeNodeWrapperTemplate</h2>\r\n\r\n<p>This option is useful in case all you need to further customise the expander location and the node's event listeners.</p>\r\n<p>Start by specifying the following template, and make sure the tree still renders as expected.</p>\r\n<p>Then remove / change whatever you need:</p>\r\n\r\n<code-example>{{ treeNodeWrapper }}</code-example>\r\n\r\n\r\n<h2>#loadingTemplate</h2>\r\n\r\n<p>For asynchronous data loading, use #loadingTemplate to customize the message that appears while loading the children.</p>\r\n<p>For example:</p>\r\n\r\n<code-example>{{ treeLoading }}</code-example>\r\n\r\n<h2>#treeNodeFullTemplate</h2>\r\n\r\n<p>This option is useful in case all other customisation options are not suitable for you.</p>\r\n<p>It allows for full customisation of the node, as it replaces the internal template for the TreeNode component.</p>\r\n<p>Start by specifying the following template, and make sure the tree still renders as expected.</p>\r\n<p>Then remove / change whatever you need:</p>\r\n\r\n<code-example>{{ fullTemplate }}</code-example>\r\n\r\n<div class=\"alert is-important\">\r\n    <p>Do not remove <code>let-templates=\"templates\"</code> and passing <code>[templates]=\"templates\"</code> to <code>tree-node-children</code>. If you do that, the children of your nodes will not receive the custom template you provided.</p>\r\n</div>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html":
    /*!*************************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGettingStartedGettingStartedComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Getting Started</h1>\r\n\r\n<p>This page will help you get started with angular-tree-component. You'll be up and running in a jiffy! This project is completely free and open to use under the MIT license.</p>\r\n\r\n<h2>Slack Community</h2>\r\n\r\n<p>The best way to get support from the community: <a href=\"https://angular-tree-component.herokuapp.com/\" target=\"_blank\">https://angular-tree-component.herokuapp.com/</a></p>\r\n\r\n<h2>Supported Angular Versions</h2>\r\n\r\n<p>We follow the Angular Versions. Version 10 of the angular-tree-component supports Angular 10, Version 9 of the tree Angular 9.<br>\r\n    Please note that ownership of the tree changed between Version 8 and 9. We will focus all new development on Version 9 and up.</p>\r\n\r\n<h2>Installation</h2>\r\n\r\n<h3>Angular 9 and up</h3>\r\n\r\n<h4>Installing with npm</h4>\r\n\r\n<code-example language=\"sh\">npm install @circlon/angular-tree-component --save</code-example>\r\n\r\n<h4>Installing with yarn</h4>\r\n\r\n<code-example language=\"sh\">yarn add @circlon/angular-tree-component</code-example>\r\n\r\n<h4>Import css</h4>\r\n\r\n<p>Add styles to your <code>styles.scss</code>:</p>\r\n\r\n<code-example language=\"sh\">@import '~@circlon/angular-tree-component/css/angular-tree-component.css';</code-example>\r\n\r\n<h4>Import TreeModule</h4>\r\n\r\n<p>Import the TreeModule into your <code>app.module.ts</code>:</p>\r\n\r\n<code-example language=\"sh\">imports: [TreeModule]</code-example>\r\n\r\n<hr>\r\n\r\n<h3>Angular 8 and down</h3>\r\n\r\n<h4>Installing with npm</h4>\r\n\r\n<code-example language=\"sh\">npm install angular-tree-component --save</code-example>\r\n\r\n<h4>Installing with yarn</h4>\r\n\r\n<code-example language=\"sh\">yarn add angular-tree-component</code-example>\r\n\r\n<h4>Import css</h4>\r\n\r\n<p>Add styles to your <code>styles.scss</code>:</p>\r\n\r\n<code-example language=\"sh\">@import '~angular-tree-component/dist/angular-tree-component.css';</code-example>\r\n\r\n<h4>Import TreeModule</h4>\r\n\r\n<p>Import the TreeModule into your <code>app.module.ts</code>:</p>\r\n\r\n<code-example language=\"sh\">imports: [TreeModule.forRoot()]</code-example>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"footer-blocks\">\r\n    <div class=\"footer-block\">\r\n        <h3>Help</h3>\r\n        <ul>\r\n            <li><a href=\"https://angular-tree-component.herokuapp.com/\" target=\"_blank\">Slack</a></li>\r\n            <li><a href=\"https://stackoverflow.com/questions/tagged/angular-tree-component\" target=\"_blank\">Stackoverflow</a></li>\r\n            <li><a href=\"https://github.com/CirclonGroup/angular-tree-component/issues\" target=\"_blank\">Report Issues</a></li>\r\n            <li><a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/CODE_OF_CONDUCT.md\" target=\"_blank\">Code of Conduct</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<p>Powered by the Community. Code licensed under an <a href=\"https://github.com/CirclonGroup/angular-tree-component/blob/master/LICENSE\" target=\"_blank\">MIT-style License</a>.</p>\r\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-item/nav-item.component.html":
    /*!******************************************************************************************************************************************************!*\
      !*** C:/Users/tengelhardt/source/repos/angular-tree-component/node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-item/nav-item.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavItemNavItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"!node.children\">\r\n    <a [routerLink]=\"node.link\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n       class=\"vertical-menu-item\">\r\n        <span>{{node.title}}</span>\r\n    </a>\r\n</div>\r\n\r\n<div *ngIf=\"node.children\">\r\n    <a *ngIf=\"node.link != null\" [routerLink]=\"node.link\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n       (click)=\"headerClicked()\" class=\"vertical-menu-item heading\">\r\n        <span>{{node.title}}</span>\r\n        <mat-icon class=\"rotating-icon\">chevron_right</mat-icon>\r\n    </a>\r\n\r\n    <button *ngIf=\"node.link == null\" type=\"button\" [ngClass]=\"classes\" title=\"{{node.tooltip}}\"\r\n            (click)=\"headerClicked()\" class=\"vertical-menu-item heading\"\r\n            [attr.aria-pressed]=\"isExpanded\">\r\n        <span>{{node.title}}</span>\r\n        <mat-icon class=\"rotating-icon\">chevron_right</mat-icon>\r\n    </button>\r\n\r\n    <div class=\"heading-children\" [ngClass]=\"classes\">\r\n        <app-nav-item *ngFor=\"let node of nodeChildren\" [level]=\"level + 1\" [isWide]=\"isWide\"\r\n                      [isParentExpanded]=\"isExpanded\"\r\n                      [node]=\"node\" [selectedNodes]=\"selectedNodes\"></app-nav-item>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./getting-started/getting-started.component */
      "./src/app/getting-started/getting-started.component.ts");
      /* harmony import */


      var _examples_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./examples/basic-usage/basic-usage.component */
      "./src/app/examples/basic-usage/basic-usage.component.ts");
      /* harmony import */


      var _fundamentals_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fundamentals/nodes/nodes.component */
      "./src/app/fundamentals/nodes/nodes.component.ts");
      /* harmony import */


      var _fundamentals_options_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fundamentals/options/options.component */
      "./src/app/fundamentals/options/options.component.ts");
      /* harmony import */


      var _fundamentals_actions_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./fundamentals/actions/actions.component */
      "./src/app/fundamentals/actions/actions.component.ts");
      /* harmony import */


      var _fundamentals_templates_templates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./fundamentals/templates/templates.component */
      "./src/app/fundamentals/templates/templates.component.ts");
      /* harmony import */


      var _fundamentals_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./fundamentals/events/events.component */
      "./src/app/fundamentals/events/events.component.ts");
      /* harmony import */


      var _fundamentals_state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./fundamentals/state-binding/state-binding.component */
      "./src/app/fundamentals/state-binding/state-binding.component.ts");
      /* harmony import */


      var _fundamentals_api_api_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./fundamentals/api/api.component */
      "./src/app/fundamentals/api/api.component.ts");
      /* harmony import */


      var _fundamentals_styling_styling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./fundamentals/styling/styling.component */
      "./src/app/fundamentals/styling/styling.component.ts");
      /* harmony import */


      var _fundamentals_focus_focus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./fundamentals/focus/focus.component */
      "./src/app/fundamentals/focus/focus.component.ts");
      /* harmony import */


      var _fundamentals_issues_issues_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./fundamentals/issues/issues.component */
      "./src/app/fundamentals/issues/issues.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__["GettingStartedComponent"],
        pathMatch: 'full'
      }, {
        path: 'examples',
        children: [{
          path: 'basic',
          component: _examples_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_3__["BasicUsageComponent"]
        }]
      }, {
        path: 'fundamentals',
        children: [{
          path: 'nodes',
          component: _fundamentals_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_4__["NodesComponent"]
        }, {
          path: 'options',
          component: _fundamentals_options_options_component__WEBPACK_IMPORTED_MODULE_5__["OptionsComponent"]
        }, {
          path: 'actions',
          component: _fundamentals_actions_actions_component__WEBPACK_IMPORTED_MODULE_6__["ActionsComponent"]
        }, {
          path: 'templates',
          component: _fundamentals_templates_templates_component__WEBPACK_IMPORTED_MODULE_7__["TemplatesComponent"]
        }, {
          path: 'events',
          component: _fundamentals_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"]
        }, {
          path: 'state',
          component: _fundamentals_state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_9__["StateBindingComponent"]
        }, {
          path: 'api',
          component: _fundamentals_api_api_component__WEBPACK_IMPORTED_MODULE_10__["ApiComponent"]
        }, {
          path: 'styling',
          component: _fundamentals_styling_styling_component__WEBPACK_IMPORTED_MODULE_11__["StylingComponent"]
        }, {
          path: 'focus',
          component: _fundamentals_focus_focus_component__WEBPACK_IMPORTED_MODULE_12__["FocusComponent"]
        }, {
          path: 'issues',
          component: _fundamentals_issues_issues_component__WEBPACK_IMPORTED_MODULE_13__["IssuesComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          scrollPositionRestoration: 'enabled'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".example-spacer {\n  flex: 1 1 auto;\n}\n\n.toolbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);\n}\n\n.toolbar-link {\n  display: flex;\n  align-items: center;\n  padding: 24px;\n  margin: 0 -16px;\n}\n\n.main-logo {\n  padding: 0 8px;\n}\n\n.sidenav-container {\n  min-height: 100%;\n  height: auto;\n  max-width: 100%;\n  margin: 0;\n  transform: none;\n}\n\n.sidenav-container .sidenav {\n  position: fixed;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  min-width: 260px;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n\n.sidenav-container .sidenav .sidenav-menu :first-child {\n  margin-top: 16px;\n}\n\n.sidenav-container .sidenav .sidenav-menu .menu-item {\n  display: block;\n  max-width: 260px;\n  font-weight: 400;\n  padding-left: 20px;\n}\n\n.sidenav-container .sidenav-content {\n  height: 100%;\n}\n\n.sidenav-container .sidenav-content.sidenav-open {\n  margin-left: 278px;\n}\n\n.sidenav-container .sidenav-content .main-content {\n  min-height: 100vh;\n  padding: 80px 3rem 2rem;\n}\n\nfooter {\n  padding: 48px;\n  font-weight: 300;\n  background-color: #3f51b5;\n  z-index: 0;\n}\n\nfooter .footer-content {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRU07RUFDRSxnQkFBQTtBQUFSOztBQUdNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURSOztBQU1FO0VBQ0UsWUFBQTtBQUpKOztBQU1JO0VBQ0Usa0JBQUE7QUFKTjs7QUFPSTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUFMTjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFQSiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMyk7XHJcbn1cclxuXHJcbi50b29sYmFyLWxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1hcmdpbjogMCAtMTZweDtcclxufVxyXG5cclxuLm1haW4tbG9nbyB7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gIC5zaWRlbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjRweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAyNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsMCwwLDAuMSk7XHJcblxyXG4gICAgLnNpZGVuYXYtbWVudSB7XHJcbiAgICAgIDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgJi5zaWRlbmF2LW9wZW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjc4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBwYWRkaW5nOiA4MHB4IDNyZW0gMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZzogNDhweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgei1pbmRleDogMDtcclxuXHJcbiAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/fesm2015/icon.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AppComponent = function AppComponent(iconRegistry, sanitizer, router) {
        var _this27 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'docs-app';
        this.nav = [{
          title: 'Getting Started',
          children: null,
          link: ['']
        }, {
          title: 'Fundamentals',
          children: [{
            title: 'Nodes',
            url: 'fundamentals/nodes',
            children: null,
            link: ['fundamentals', 'nodes']
          }, {
            title: 'Options',
            url: 'fundamentals/options',
            children: null,
            link: ['fundamentals', 'options']
          }, {
            title: 'Customize Actions',
            url: 'fundamentals/actions',
            children: null,
            link: ['fundamentals', 'actions']
          }, {
            title: 'Custom Templates',
            url: 'fundamentals/templates',
            children: null,
            link: ['fundamentals', 'templates']
          }, {
            title: 'Events',
            url: 'fundamentals/events',
            children: null,
            link: ['fundamentals', 'events']
          }, {
            title: '2-way binding to state',
            url: 'fundamentals/state',
            children: null,
            link: ['fundamentals', 'state']
          }, {
            title: 'Calling API Methods',
            url: 'fundamentals/api',
            children: null,
            link: ['fundamentals', 'api']
          }, {
            title: 'Styling',
            url: 'fundamentals/styling',
            children: null,
            link: ['fundamentals', 'styling']
          }, {
            title: 'Focused',
            url: 'fundamentals/focus',
            children: null,
            link: ['fundamentals', 'focus']
          }, {
            title: 'Common issues',
            url: 'fundamentals/issues',
            children: null,
            link: ['fundamentals', 'issues']
          }]
        }, {
          title: 'Examples',
          children: [{
            title: 'Basic',
            url: 'examples/basic',
            children: null,
            link: ['examples', 'basic']
          }]
        }];
        this.currentNodes = [];
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github-icon.svg'));
        iconRegistry.addSvgIcon('tree-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/tree-logo.svg')); // TODO: build this nice

        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
        })).subscribe(function (event) {
          var newCurrent = [];

          _this27.nav.forEach(function (navNode) {
            if (navNode.link && _this27.router.isActive(_this27.router.createUrlTree(navNode.link), false)) {
              newCurrent.push(Object.assign({}, navNode));
            }

            if (navNode.children) {
              navNode.children.forEach(function (childNode) {
                if (childNode.link && _this27.router.isActive(_this27.router.createUrlTree(childNode.link), false)) {
                  newCurrent.push(Object.assign({}, childNode));
                }
              });
            }
          });

          if (newCurrent.length >= 2 && newCurrent.find(function (n) {
            return n.title === _this27.nav[0].title;
          }) !== undefined) {
            newCurrent = newCurrent.filter(function (n) {
              return n.title !== _this27.nav[0].title;
            });
          }

          _this27.currentNodes = newCurrent;
        });
      };

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "../../node_modules/@angular/material/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "../../node_modules/@angular/material/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./getting-started/getting-started.component */
      "./src/app/getting-started/getting-started.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _custom_elements_custom_elements_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./custom-elements/custom-elements.module */
      "./src/app/custom-elements/custom-elements.module.ts");
      /* harmony import */


      var _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./custom-elements/code/code-example.module */
      "./src/app/custom-elements/code/code-example.module.ts");
      /* harmony import */


      var _examples_examples_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./examples/examples.module */
      "./src/app/examples/examples.module.ts");
      /* harmony import */


      var angular_tree_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular-tree-component */
      "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js");
      /* harmony import */


      var _fundamentals_fundamentals_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./fundamentals/fundamentals.module */
      "./src/app/fundamentals/fundamentals.module.ts");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./layout/layout.module */
      "./src/app/layout/layout.module.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _custom_elements_custom_elements_module__WEBPACK_IMPORTED_MODULE_11__["CustomElementsModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"], _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_12__["CodeExampleModule"], _examples_examples_module__WEBPACK_IMPORTED_MODULE_13__["ExamplesModule"], angular_tree_component__WEBPACK_IMPORTED_MODULE_14__["TreeModule"], _fundamentals_fundamentals_module__WEBPACK_IMPORTED_MODULE_15__["FundamentalsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/custom-elements/code/code-example.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/custom-elements/code/code-example.component.ts ***!
      \****************************************************************/

    /*! exports provided: CodeExampleComponent */

    /***/
    function srcAppCustomElementsCodeCodeExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodeExampleComponent", function () {
        return CodeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./code.component */
      "./src/app/custom-elements/code/code.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
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


      var CodeExampleComponent = /*#__PURE__*/function () {
        function CodeExampleComponent() {
          _classCallCheck(this, CodeExampleComponent);

          this._path = '';
          this.isAvoid = false;
        }

        _createClass(CodeExampleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.aioCode.code = this.content.nativeElement.innerHTML;
          }
        }, {
          key: "header",
          set: function set(header) {
            this._header = header;
            this.classes = {
              'headed-code': !!this.header,
              'simple-code': !this.header
            };
          },
          get: function get() {
            return this._header;
          }
        }, {
          key: "path",
          set: function set(path) {
            this._path = path;
            this.isAvoid = this.path.indexOf('.avoid.') !== -1;
          },
          get: function get() {
            return this._path;
          }
        }, {
          key: "hidecopy",
          set: function set(hidecopy) {
            // Coerce the boolean value.
            this._hidecopy = hidecopy != null && "".concat(hidecopy) !== 'false';
          },
          get: function get() {
            return this._hidecopy;
          }
        }, {
          key: "hyphenatedHideCopy",
          set: function set(hidecopy) {
            this.hidecopy = hidecopy;
          }
        }, {
          key: "capitalizedHideCopy",
          set: function set(hidecopy) {
            this.hidecopy = hidecopy;
          }
        }]);

        return CodeExampleComponent;
      }();

      CodeExampleComponent.propDecorators = {
        language: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linenums: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        region: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hidecopy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hyphenatedHideCopy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['hide-copy']
        }],
        capitalizedHideCopy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['hideCopy']
        }],
        isAvoid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.avoidFile']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content', {
            "static": true
          }]
        }],
        aioCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_code_component__WEBPACK_IMPORTED_MODULE_1__["CodeComponent"], {
            "static": true
          }]
        }]
      };
      CodeExampleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'code-example',
        template: "\n    <!-- Content projection is used to get the content HTML provided to this component -->\n    <div #content style=\"display: none\"><ng-content></ng-content></div>\n    <header *ngIf=\"header\">{{header}}</header>\n    <aio-code [ngClass]=\"classes\"\n              [language]=\"language\"\n              [linenums]=\"linenums\"\n              [path]=\"path\"\n              [region]=\"region\"\n              [hideCopy]=\"hidecopy\"\n              [header]=\"header\">\n    </aio-code>\n  "
      })], CodeExampleComponent);
      /***/
    },

    /***/
    "./src/app/custom-elements/code/code-example.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/custom-elements/code/code-example.module.ts ***!
      \*************************************************************/

    /*! exports provided: CodeExampleModule */

    /***/
    function srcAppCustomElementsCodeCodeExampleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodeExampleModule", function () {
        return CodeExampleModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _code_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./code-example.component */
      "./src/app/custom-elements/code/code-example.component.ts");
      /* harmony import */


      var _code_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./code.module */
      "./src/app/custom-elements/code/code.module.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CodeExampleModule = function CodeExampleModule() {
        _classCallCheck(this, CodeExampleModule);

        this.customElementComponent = _code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"];
      };

      CodeExampleModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]],
        declarations: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]],
        exports: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]],
        entryComponents: [_code_example_component__WEBPACK_IMPORTED_MODULE_2__["CodeExampleComponent"]]
      })], CodeExampleModule);
      /***/
    },

    /***/
    "./src/app/custom-elements/code/code.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/custom-elements/code/code.component.ts ***!
      \********************************************************/

    /*! exports provided: CodeComponent */

    /***/
    function srcAppCustomElementsCodeCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodeComponent", function () {
        return CodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pretty-printer.service */
      "./src/app/custom-elements/code/pretty-printer.service.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "../../node_modules/@angular/material/fesm2015/snack-bar.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/copier.service */
      "./src/app/shared/copier.service.ts");
      /* harmony import */


      var _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/logger.service */
      "./src/app/shared/logger.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
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


      var CodeComponent = /*#__PURE__*/function () {
        function CodeComponent(snackbar, pretty, copier, logger) {
          _classCallCheck(this, CodeComponent);

          this.snackbar = snackbar;
          this.pretty = pretty;
          this.copier = copier;
          this.logger = logger;
          this.ariaLabel = '';
          this.codeFormatted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** Code that should be formatted with current inputs and displayed in the view. */


        _createClass(CodeComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            // If some inputs have changed and there is code displayed, update the view with the latest
            // formatted code.
            if (this.code) {
              this.formatDisplayedCode();
            }
          }
        }, {
          key: "formatDisplayedCode",
          value: function formatDisplayedCode() {
            var _this28 = this;

            var leftAlignedCode = leftAlign(this.code);
            this.setCodeHtml(leftAlignedCode); // start with unformatted code

            this.codeText = this.getCodeText(); // store the unformatted code as text (for copying)

            this.pretty.formatCode(leftAlignedCode, this.language, this.getLinenums()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this28.codeFormatted.emit();
            })).subscribe(function (c) {
              return _this28.setCodeHtml(c);
            }, function () {});
          }
          /** Sets the message showing that the code could not be found. */

        }, {
          key: "showMissingCodeMessage",
          value: function showMissingCodeMessage() {
            var src = this.path ? this.path + (this.region ? '#' + this.region : '') : '';
            var srcMsg = src ? " for\n".concat(src) : '.';
            this.setCodeHtml("<p class=\"code-missing\">The code sample is missing".concat(srcMsg, "</p>"));
          }
          /** Sets the innerHTML of the code container to the provided code string. */

        }, {
          key: "setCodeHtml",
          value: function setCodeHtml(formattedCode) {
            // **Security:** Code example content is provided by docs authors and as such its considered to
            // be safe for innerHTML purposes.
            this.codeContainer.nativeElement.innerHTML = formattedCode;
          }
          /** Gets the textContent of the displayed code element. */

        }, {
          key: "getCodeText",
          value: function getCodeText() {
            // `prettify` may remove newlines, e.g. when `linenums` are on. Retrieve the content of the
            // container as text, before prettifying it.
            // We take the textContent because we don't want it to be HTML encoded.
            return this.codeContainer.nativeElement.textContent;
          }
          /** Copies the code snippet to the user's clipboard. */

        }, {
          key: "doCopy",
          value: function doCopy() {
            var code = this.codeText;
            var successfullyCopied = this.copier.copyText(code);

            if (successfullyCopied) {
              this.logger.log('Copied code to clipboard:', code);
              this.snackbar.open('Code Copied', '', {
                duration: 800
              });
            } else {
              this.logger.error(new Error("ERROR copying code to clipboard: \"".concat(code, "\"")));
              this.snackbar.open('Copy failed. Please try again!', '', {
                duration: 800
              });
            }
          }
          /** Gets the calculated value of linenums (boolean/number). */

        }, {
          key: "getLinenums",
          value: function getLinenums() {
            var linenums = typeof this.linenums === 'boolean' ? this.linenums : this.linenums === 'true' ? true : this.linenums === 'false' ? false : typeof this.linenums === 'string' ? parseInt(this.linenums, 10) : this.linenums;
            return linenums != null && !isNaN(linenums) && linenums;
          }
        }, {
          key: "code",
          set: function set(code) {
            this._code = code;

            if (!this._code || !this._code.trim()) {
              this.showMissingCodeMessage();
            } else {
              this.formatDisplayedCode();
            }
          },
          get: function get() {
            return this._code;
          }
          /** Optional header to be displayed above the code. */

        }, {
          key: "header",
          set: function set(header) {
            this._header = header;
            this.ariaLabel = this.header ? "Copy code snippet from ".concat(this.header) : '';
          },
          get: function get() {
            return this._header;
          }
        }]);

        return CodeComponent;
      }();

      CodeComponent.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }, {
          type: _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__["PrettyPrinter"]
        }, {
          type: _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__["CopierService"]
        }, {
          type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]
        }];
      };

      CodeComponent.propDecorators = {
        hideCopy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        language: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linenums: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        region: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        codeFormatted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        codeContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['codeContainer', {
            "static": true
          }]
        }]
      };
      CodeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'aio-code',
        template: "\n    <pre class=\"prettyprint lang-{{language}}\">\n      <button *ngIf=\"!hideCopy\" class=\"material-icons copy-button no-print\"\n        title=\"Copy code snippet\"\n        [attr.aria-label]=\"ariaLabel\"\n        (click)=\"doCopy()\">\n        <span aria-hidden=\"true\">content_copy</span>\n      </button>\n      <code class=\"animated fadeIn\" #codeContainer></code>\n    </pre>\n    "
      }), __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _pretty_printer_service__WEBPACK_IMPORTED_MODULE_1__["PrettyPrinter"], _shared_copier_service__WEBPACK_IMPORTED_MODULE_4__["CopierService"], _shared_logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]])], CodeComponent);

      function leftAlign(text) {
        var indent = Number.MAX_VALUE;
        var lines = text.split('\n');
        lines.forEach(function (line) {
          var lineIndent = line.search(/\S/);

          if (lineIndent !== -1) {
            indent = Math.min(lineIndent, indent);
          }
        });
        return lines.map(function (line) {
          return line.substr(indent);
        }).join('\n').trim();
      }
      /***/

    },

    /***/
    "./src/app/custom-elements/code/code.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/custom-elements/code/code.module.ts ***!
      \*****************************************************/

    /*! exports provided: CodeModule */

    /***/
    function srcAppCustomElementsCodeCodeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodeModule", function () {
        return CodeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./code.component */
      "./src/app/custom-elements/code/code.component.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "../../node_modules/@angular/material/fesm2015/snack-bar.js");
      /* harmony import */


      var _pretty_printer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pretty-printer.service */
      "./src/app/custom-elements/code/pretty-printer.service.ts");
      /* harmony import */


      var _shared_copier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/copier.service */
      "./src/app/shared/copier.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CodeModule = function CodeModule() {
        _classCallCheck(this, CodeModule);
      };

      CodeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]],
        declarations: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        entryComponents: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        exports: [_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]],
        providers: [_pretty_printer_service__WEBPACK_IMPORTED_MODULE_4__["PrettyPrinter"], _shared_copier_service__WEBPACK_IMPORTED_MODULE_5__["CopierService"]]
      })], CodeModule);
      /***/
    },

    /***/
    "./src/app/custom-elements/code/pretty-printer.service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/custom-elements/code/pretty-printer.service.ts ***!
      \****************************************************************/

    /*! exports provided: PrettyPrinter */

    /***/
    function srcAppCustomElementsCodePrettyPrinterServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrettyPrinter", function () {
        return PrettyPrinter;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _shared_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/logger.service */
      "./src/app/shared/logger.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      /**
       * Wrapper around the prettify.js library
       */


      var PrettyPrinter = /*#__PURE__*/function () {
        function PrettyPrinter(logger) {
          _classCallCheck(this, PrettyPrinter);

          this.logger = logger;
          this.prettyPrintOne = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.getPrettyPrintOne()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        }

        _createClass(PrettyPrinter, [{
          key: "getPrettyPrintOne",
          value: function getPrettyPrintOne() {
            var _this29 = this;

            var ppo = window['prettyPrintOne'];
            return ppo ? Promise.resolve(ppo) : // `prettyPrintOne` is not on `window`, which means `prettify.js` has not been loaded yet.
            // Import it; ad a side-effect it will add `prettyPrintOne` on `window`.
            __webpack_require__.e(
            /*! import() | assets-js-prettify-js */
            "assets-js-prettify-js").then(__webpack_require__.t.bind(null,
            /*! ../../../assets/js/prettify.js */
            "./src/assets/js/prettify.js", 7)).then(function () {
              return window['prettyPrintOne'];
            }, function (err) {
              var msg = "Cannot get prettify.js from server: ".concat(err.message);

              _this29.logger.error(new Error(msg)); // return a pretty print fn that always fails.


              return function () {
                throw new Error(msg);
              };
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

        }, {
          key: "formatCode",
          value: function formatCode(code, language, linenums) {
            return this.prettyPrintOne.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (ppo) {
              try {
                return ppo(code, language, linenums);
              } catch (err) {
                var msg = "Could not format code that begins '".concat(code.substr(0, 50), "...'.");
                console.error(msg, err);
                throw new Error(msg);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
          }
        }]);

        return PrettyPrinter;
      }();

      PrettyPrinter.ctorParameters = function () {
        return [{
          type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]
        }];
      };

      PrettyPrinter = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_shared_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]])], PrettyPrinter);
      /***/
    },

    /***/
    "./src/app/custom-elements/custom-elements.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/custom-elements/custom-elements.module.ts ***!
      \***********************************************************/

    /*! exports provided: CustomElementsModule */

    /***/
    function srcAppCustomElementsCustomElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomElementsModule", function () {
        return CustomElementsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./elements-loader */
      "./src/app/custom-elements/elements-loader.ts");
      /* harmony import */


      var _element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./element-registry */
      "./src/app/custom-elements/element-registry.ts");
      /* harmony import */


      var _lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lazy-custom-element.component */
      "./src/app/custom-elements/lazy-custom-element.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CustomElementsModule = function CustomElementsModule() {
        _classCallCheck(this, CustomElementsModule);
      };

      CustomElementsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__["LazyCustomElementComponent"]],
        exports: [_lazy_custom_element_component__WEBPACK_IMPORTED_MODULE_3__["LazyCustomElementComponent"]],
        providers: [_elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"], {
          provide: _element_registry__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN"],
          useValue: _element_registry__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_MODULE_LOAD_CALLBACKS"]
        }]
      })], CustomElementsModule);
      /***/
    },

    /***/
    "./src/app/custom-elements/element-registry.ts":
    /*!*****************************************************!*\
      !*** ./src/app/custom-elements/element-registry.ts ***!
      \*****************************************************/

    /*! exports provided: ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES, ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN, ELEMENT_MODULE_LOAD_CALLBACKS */

    /***/
    function srcAppCustomElementsElementRegistryTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES", function () {
        return ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN", function () {
        return ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ELEMENT_MODULE_LOAD_CALLBACKS", function () {
        return ELEMENT_MODULE_LOAD_CALLBACKS;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js"); // Modules containing custom elements must be set up as lazy-loaded routes (loadChildren)
      // TODO(andrewjs): This is a hack, Angular should have first-class support for preparing a module
      // that contains custom elements.


      var ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES = [{
        selector: 'code-example',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./code/code-example.module */
          "./src/app/custom-elements/code/code-example.module.ts")).then(function (m) {
            return m.CodeExampleModule;
          });
        }
      }, {
        selector: 'code-tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | code-code-tabs-module */
          "code-code-tabs-module").then(__webpack_require__.bind(null,
          /*! ./code/code-tabs.module */
          "./src/app/custom-elements/code/code-tabs.module.ts")).then(function (m) {
            return m.CodeTabsModule;
          });
        }
      }];
      /** Injection token to provide the element path modules. */

      var ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('aio/elements-map');
      /** Map of possible custom element selectors to their lazy-loadable module paths. */

      var ELEMENT_MODULE_LOAD_CALLBACKS = new Map();
      ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES.forEach(function (route) {
        ELEMENT_MODULE_LOAD_CALLBACKS.set(route.selector, route.loadChildren);
      });
      /***/
    },

    /***/
    "./src/app/custom-elements/elements-loader.ts":
    /*!****************************************************!*\
      !*** ./src/app/custom-elements/elements-loader.ts ***!
      \****************************************************/

    /*! exports provided: ElementsLoader */

    /***/
    function srcAppCustomElementsElementsLoaderTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElementsLoader", function () {
        return ElementsLoader;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _element_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./element-registry */
      "./src/app/custom-elements/element-registry.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/elements */
      "../../node_modules/@angular/elements/fesm2015/elements.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ElementsLoader = /*#__PURE__*/function () {
        function ElementsLoader(moduleRef, elementModulePaths, compiler) {
          _classCallCheck(this, ElementsLoader);

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


        _createClass(ElementsLoader, [{
          key: "loadContainedCustomElements",
          value: function loadContainedCustomElements(element) {
            var _this30 = this;

            var unregisteredSelectors = Array.from(this.elementsToLoad.keys()).filter(function (s) {
              return element.querySelector(s);
            });

            if (!unregisteredSelectors.length) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            } // Returns observable that completes when all discovered elements have been registered.


            var allRegistered = Promise.all(unregisteredSelectors.map(function (s) {
              return _this30.loadCustomElement(s);
            }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(allRegistered.then(function () {
              return undefined;
            }));
          }
          /** Loads and registers the custom element defined on the `WithCustomElement` module factory. */

        }, {
          key: "loadCustomElement",
          value: function loadCustomElement(selector) {
            var _this31 = this;

            if (this.elementsLoading.has(selector)) {
              // The custom element is in the process of being loaded and registered.
              return this.elementsLoading.get(selector);
            }

            if (this.elementsToLoad.has(selector)) {
              // Load and register the custom element (for the first time).
              var modulePathLoader = this.elementsToLoad.get(selector);
              var loadedAndRegistered = modulePathLoader().then(function (elementModuleOrFactory) {
                /**
                 * With View Engine, the NgModule factory is created and provided when loaded.
                 * With Ivy, only the NgModule class is provided loaded and must be compiled.
                 * This uses the same mechanism as the deprecated `SystemJsNgModuleLoader` in
                 * in `packages/core/src/linker/system_js_ng_module_factory_loader.ts`
                 * to pass on the NgModuleFactory, or compile the NgModule and return its NgModuleFactory.
                 */
                if (elementModuleOrFactory instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactory"]) {
                  return elementModuleOrFactory;
                } else {
                  return _this31.compiler.compileModuleAsync(elementModuleOrFactory);
                }
              }).then(function (elementModuleFactory) {
                var elementModuleRef = elementModuleFactory.create(_this31.moduleRef.injector);
                var injector = elementModuleRef.injector;
                var CustomElementComponent = elementModuleRef.instance.customElementComponent;
                var CustomElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(CustomElementComponent, {
                  injector: injector
                });
                customElements.define(selector, CustomElement);
                return customElements.whenDefined(selector);
              }).then(function () {
                // The custom element has been successfully loaded and registered.
                // Remove from `elementsLoading` and `elementsToLoad`.
                _this31.elementsLoading["delete"](selector);

                _this31.elementsToLoad["delete"](selector);
              })["catch"](function (err) {
                // The custom element has failed to load and register.
                // Remove from `elementsLoading`.
                // (Do not remove from `elementsToLoad` in case it was a temporary error.)
                _this31.elementsLoading["delete"](selector);

                return Promise.reject(err);
              });
              this.elementsLoading.set(selector, loadedAndRegistered);
              return loadedAndRegistered;
            } // The custom element has already been loaded and registered.


            return Promise.resolve();
          }
        }]);

        return ElementsLoader;
      }();

      ElementsLoader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]
        }, {
          type: Map,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_element_registry__WEBPACK_IMPORTED_MODULE_1__["ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]
        }];
      };

      ElementsLoader = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"], Map, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]])], ElementsLoader);
      /***/
    },

    /***/
    "./src/app/custom-elements/lazy-custom-element.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/custom-elements/lazy-custom-element.component.ts ***!
      \******************************************************************/

    /*! exports provided: LazyCustomElementComponent */

    /***/
    function srcAppCustomElementsLazyCustomElementComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyCustomElementComponent", function () {
        return LazyCustomElementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./elements-loader */
      "./src/app/custom-elements/elements-loader.ts");
      /* harmony import */


      var _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/logger.service */
      "./src/app/shared/logger.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LazyCustomElementComponent = /*#__PURE__*/function () {
        function LazyCustomElementComponent(elementRef, elementsLoader, logger) {
          _classCallCheck(this, LazyCustomElementComponent);

          this.elementRef = elementRef;
          this.elementsLoader = elementsLoader;
          this.logger = logger;
          this.selector = '';
        }

        _createClass(LazyCustomElementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.selector || /[^\w-]/.test(this.selector)) {
              this.logger.error(new Error("Invalid selector for 'aio-lazy-ce': ".concat(this.selector)));
              return;
            }

            this.elementRef.nativeElement.innerHTML = "<".concat(this.selector, "></").concat(this.selector, ">");
            this.elementsLoader.loadCustomElement(this.selector);
          }
        }]);

        return LazyCustomElementComponent;
      }();

      LazyCustomElementComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"]
        }, {
          type: _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]
        }];
      };

      LazyCustomElementComponent.propDecorators = {
        selector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      LazyCustomElementComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'aio-lazy-ce',
        template: ''
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _elements_loader__WEBPACK_IMPORTED_MODULE_1__["ElementsLoader"], _shared_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]])], LazyCustomElementComponent);
      /***/
    },

    /***/
    "./src/app/examples/basic-usage/basic-usage.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/examples/basic-usage/basic-usage.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppExamplesBasicUsageBasicUsageComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2V4YW1wbGVzL2Jhc2ljLXVzYWdlL2Jhc2ljLXVzYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/examples/basic-usage/basic-usage.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/examples/basic-usage/basic-usage.component.ts ***!
      \***************************************************************/

    /*! exports provided: BasicUsageComponent */

    /***/
    function srcAppExamplesBasicUsageBasicUsageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicUsageComponent", function () {
        return BasicUsageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var BasicUsageComponent = /*#__PURE__*/function () {
        function BasicUsageComponent() {
          _classCallCheck(this, BasicUsageComponent);

          this.nodes = [{
            name: 'root1',
            children: [{
              name: 'child1'
            }, {
              name: 'child2'
            }]
          }, {
            name: 'root2',
            children: [{
              name: 'child2.1',
              children: []
            }, {
              name: 'child2.2',
              children: [{
                name: 'grandchild2.2.1'
              }]
            }]
          }, {
            name: 'root3'
          }, {
            name: 'root4',
            children: []
          }, {
            name: 'root5',
            children: null
          }];
        }

        _createClass(BasicUsageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasicUsageComponent;
      }();

      BasicUsageComponent.ctorParameters = function () {
        return [];
      };

      BasicUsageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-basic-usage',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./basic-usage.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/examples/basic-usage/basic-usage.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./basic-usage.component.scss */
        "./src/app/examples/basic-usage/basic-usage.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [])], BasicUsageComponent);
      /***/
    },

    /***/
    "./src/app/examples/examples.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/examples/examples.module.ts ***!
      \*********************************************/

    /*! exports provided: ExamplesModule */

    /***/
    function srcAppExamplesExamplesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamplesModule", function () {
        return ExamplesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-usage/basic-usage.component */
      "./src/app/examples/basic-usage/basic-usage.component.ts");
      /* harmony import */


      var angular_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-tree-component */
      "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ExamplesModule = function ExamplesModule() {
        _classCallCheck(this, ExamplesModule);
      };

      ExamplesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_basic_usage_basic_usage_component__WEBPACK_IMPORTED_MODULE_2__["BasicUsageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeModule"]]
      })], ExamplesModule);
      /***/
    },

    /***/
    "./src/app/fundamentals/actions/actions-demo/actions-demo.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/fundamentals/actions/actions-demo/actions-demo.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsActionsActionsDemoActionsDemoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9hY3Rpb25zL2FjdGlvbnMtZGVtby9hY3Rpb25zLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/fundamentals/actions/actions-demo/actions-demo.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/fundamentals/actions/actions-demo/actions-demo.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ActionsDemoComponent */

    /***/
    function srcAppFundamentalsActionsActionsDemoActionsDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionsDemoComponent", function () {
        return ActionsDemoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var angular_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-tree-component */
      "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ActionsDemoComponent = function ActionsDemoComponent() {
        _classCallCheck(this, ActionsDemoComponent);

        this.nodes = [{
          name: 'root1',
          children: [{
            name: 'child1'
          }, {
            name: 'child2'
          }]
        }, {
          name: 'root2',
          children: [{
            name: 'child2.1'
          }, {
            name: 'child2.2',
            children: [{
              id: 1001,
              name: 'subsub'
            }]
          }]
        }];
        this.actionMapping = {
          mouse: {
            contextMenu: function contextMenu(tree, node, $event) {
              $event.preventDefault();
              alert("context menu for ".concat(node.data.name));
            },
            dblClick: function dblClick(tree, node, $event) {
              if (node.hasChildren) {
                angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_EXPANDED(tree, node, $event);
              }
            },
            click: function click(tree, node, $event) {
              $event.shiftKey ? angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(tree, node, $event) : angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["TREE_ACTIONS"].TOGGLE_ACTIVE(tree, node, $event);
            },
            mouseOver: function mouseOver(tree, node, $event) {
              $event.preventDefault();
              console.log("mouseOver ".concat(node.data.name));
            },
            mouseOut: function mouseOut(tree, node, $event) {
              $event.preventDefault();
              console.log("mouseOut ".concat(node.data.name));
            }
          },
          keys: _defineProperty({}, angular_tree_component__WEBPACK_IMPORTED_MODULE_1__["KEYS"].ENTER, function (tree, node, $event) {
            return alert("This is ".concat(node.data.name));
          })
        };
        this.options = {
          actionMapping: this.actionMapping
        };
      };

      ActionsDemoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-actions-demo',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./actions-demo.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions-demo/actions-demo.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./actions-demo.component.scss */
        "./src/app/fundamentals/actions/actions-demo/actions-demo.component.scss"))["default"]]
      })], ActionsDemoComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/actions/actions.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/fundamentals/actions/actions.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsActionsActionsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/fundamentals/actions/actions.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/fundamentals/actions/actions.component.ts ***!
      \***********************************************************/

    /*! exports provided: ActionsComponent */

    /***/
    function srcAppFundamentalsActionsActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionsComponent", function () {
        return ActionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ActionsComponent = function ActionsComponent() {
        _classCallCheck(this, ActionsComponent);

        this.actionMapping = "\nimport { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';\n\nconst actionMapping: IActionMapping = {\n  mouse: {\n    click: TREE_ACTIONS.TOGGLE_SELECTED_MULTI\n  },\n  keys: {\n    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)\n  }\n}\n";
        this.mouseActions = "\nimport { TREE_ACTIONS, IActionMapping } from 'angular-tree-component';\n\nactionMapping: IActionMapping = {\n  mouse: {\n    dblClick: (tree, node, $event) => // Open a modal with node content,\n    click: TREE_ACTIONS.TOGGLE_SELECTED_MULTI,\n  }\n}\n";
        this.keys = "\nKEYS = {\n  LEFT: 37,\n  UP: 38,\n  RIGHT: 39,\n  DOWN: 40,\n  ENTER: 13,\n  SPACE: 32\n}\n";
        this.keysExample = "\nimport { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';\n\nactionMapping:IActionMapping = {\n  keys: {\n    127: (tree, node, $event) => // do something to delete the node,\n    [KEYS.ENTER]: TREE_ACTIONS.EXPAND\n  }\n}\n";
        this.defaultMapping = "\nconst defaultActionMapping: IActionMapping = {\n  mouse: {\n    click: TREE_ACTIONS.TOGGLE_ACTIVE,\n    dblClick: null,\n    contextMenu: null,\n    expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,\n    checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,\n    drop: TREE_ACTIONS.MOVE_NODE\n  },\n  keys: {\n    [KEYS.RIGHT]: TREE_ACTIONS.DRILL_DOWN,\n    [KEYS.LEFT]: TREE_ACTIONS.DRILL_UP,\n    [KEYS.DOWN]: TREE_ACTIONS.NEXT_NODE,\n    [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE,\n    [KEYS.SPACE]: TREE_ACTIONS.TOGGLE_ACTIVE,\n    [KEYS.ENTER]: TREE_ACTIONS.TOGGLE_ACTIVE\n  }\n};\n";
      };

      ActionsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-actions',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./actions.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/actions/actions.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./actions.component.scss */
        "./src/app/fundamentals/actions/actions.component.scss"))["default"]]
      })], ActionsComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/api/api-demo/api-demo.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/fundamentals/api/api-demo/api-demo.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsApiApiDemoApiDemoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9hcGkvYXBpLWRlbW8vYXBpLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/fundamentals/api/api-demo/api-demo.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/fundamentals/api/api-demo/api-demo.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ApiDemoComponent */

    /***/
    function srcAppFundamentalsApiApiDemoApiDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiDemoComponent", function () {
        return ApiDemoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ApiDemoComponent = /*#__PURE__*/function () {
        function ApiDemoComponent() {
          _classCallCheck(this, ApiDemoComponent);

          this.options = {};
          this.nodes = [{
            name: 'root1',
            children: [{
              name: 'child1'
            }, {
              name: 'child2'
            }]
          }, {
            name: 'root2',
            children: [{
              name: 'child2.1'
            }, {
              name: 'child2.2',
              children: [{
                id: 1001,
                name: 'subsub'
              }]
            }]
          }];
        }

        _createClass(ApiDemoComponent, [{
          key: "addNode",
          value: function addNode(tree) {
            this.nodes[0].children.push({
              name: 'a new child'
            });
            tree.treeModel.update();
          }
        }, {
          key: "activateSubSub",
          value: function activateSubSub(tree) {
            // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
            tree.treeModel.getNodeById(1001).setActiveAndVisible();
          }
        }, {
          key: "activeNodes",
          value: function activeNodes(treeModel) {
            console.log(treeModel.activeNodes);
          }
        }]);

        return ApiDemoComponent;
      }();

      ApiDemoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-api-demo',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./api-demo.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api-demo/api-demo.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./api-demo.component.scss */
        "./src/app/fundamentals/api/api-demo/api-demo.component.scss"))["default"]]
      })], ApiDemoComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/api/api.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/fundamentals/api/api.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsApiApiComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9hcGkvYXBpLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/fundamentals/api/api.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/fundamentals/api/api.component.ts ***!
      \***************************************************/

    /*! exports provided: ApiComponent */

    /***/
    function srcAppFundamentalsApiApiComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiComponent", function () {
        return ApiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ApiComponent = function ApiComponent() {
        _classCallCheck(this, ApiComponent);

        this.html = "\n<tree-root #tree [nodes]=\"nodes\"></tree-root>\n\n<button (click)=\"tree.treeModel.focusNextNode()\">next node</button>\n<button (click)=\"tree.treeModel.focusPreviousNode()\">previous node</button>\n<button (click)=\"tree.treeModel.focusDrillDown()\">drill down</button>\n<button (click)=\"tree.treeModel.focusDrillUp()\">drill up</button>\n";
      };

      ApiComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-api',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./api.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/api/api.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./api.component.scss */
        "./src/app/fundamentals/api/api.component.scss"))["default"]]
      })], ApiComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/events/events.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/fundamentals/events/events.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsEventsEventsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/fundamentals/events/events.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/fundamentals/events/events.component.ts ***!
      \*********************************************************/

    /*! exports provided: EventsComponent */

    /***/
    function srcAppFundamentalsEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
        return EventsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var EventsComponent = function EventsComponent() {
        _classCallCheck(this, EventsComponent);

        this.event = "\n<tree-root [nodes]=\"nodes\"\n    (toggleExpanded)=\"onEvent($event)\"\n    (activate)=\"onEvent($event)\"\n    (focus)=\"onEvent($event)\"\n    (blur)=\"onEvent($event)\">\n</tree-root>\n\nonEvent = ($event) => console.log($event);\n";
        this.toggleExpanded = "\n{\n  eventName: string;\n  node: ITreeNode;\n  isActive: boolean;\n}\n";
        this.basicEvent = "\n{\n  eventName: string;\n  node: ITreeNode;\n}\n";
        this.eventName = "\n{\n  eventName: string;\n}\n";
        this.move = "\n{\n  eventName: string;\n  node: ITreeNode; // The node that was moved\n  to: {\n    parent: ITreeNode; // The parent node that contains the moved node\n    index: number; // Index in the parent where the node was moved\n  }\n}\n";
        this.copy = "\n{\n  eventName: string;\n  node: ITreeNode; // The node that was copied\n  to: {\n    parent: ITreeNode; // The parent node that contains the copied node\n    index: number; // Index in the parent where the node was copied\n  }\n}\n";
        this.baseEvent = "\n{\n  eventName: string;\n  ...rest: corresponding to the original event\n}"; // TODO: add stateChange
      };

      EventsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-events',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./events.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/events/events.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./events.component.scss */
        "./src/app/fundamentals/events/events.component.scss"))["default"]]
      })], EventsComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/focus/focus.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/fundamentals/focus/focus.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsFocusFocusComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9mb2N1cy9mb2N1cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/fundamentals/focus/focus.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/fundamentals/focus/focus.component.ts ***!
      \*******************************************************/

    /*! exports provided: FocusComponent */

    /***/
    function srcAppFundamentalsFocusFocusComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusComponent", function () {
        return FocusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var FocusComponent = function FocusComponent() {
        _classCallCheck(this, FocusComponent);

        this.focus = "<tree-root [nodes]=\"nodes\" [focused]=\"true\" [options]=\"options\"></tree-root>";
      };

      FocusComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-focus',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./focus.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/focus/focus.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./focus.component.scss */
        "./src/app/fundamentals/focus/focus.component.scss"))["default"]]
      })], FocusComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/fundamentals.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/fundamentals/fundamentals.module.ts ***!
      \*****************************************************/

    /*! exports provided: FundamentalsModule */

    /***/
    function srcAppFundamentalsFundamentalsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FundamentalsModule", function () {
        return FundamentalsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nodes/nodes.component */
      "./src/app/fundamentals/nodes/nodes.component.ts");
      /* harmony import */


      var _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../custom-elements/code/code-example.module */
      "./src/app/custom-elements/code/code-example.module.ts");
      /* harmony import */


      var _options_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./options/options.component */
      "./src/app/fundamentals/options/options.component.ts");
      /* harmony import */


      var _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./actions/actions.component */
      "./src/app/fundamentals/actions/actions.component.ts");
      /* harmony import */


      var _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./templates/templates.component */
      "./src/app/fundamentals/templates/templates.component.ts");
      /* harmony import */


      var _actions_actions_demo_actions_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./actions/actions-demo/actions-demo.component */
      "./src/app/fundamentals/actions/actions-demo/actions-demo.component.ts");
      /* harmony import */


      var angular_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-tree-component */
      "../../dist/angular-tree-component/fesm2015/circlon-angular-tree-component.js");
      /* harmony import */


      var _templates_templates_demo_templates_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./templates/templates-demo/templates-demo.component */
      "./src/app/fundamentals/templates/templates-demo/templates-demo.component.ts");
      /* harmony import */


      var _events_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./events/events.component */
      "./src/app/fundamentals/events/events.component.ts");
      /* harmony import */


      var _state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./state-binding/state-binding.component */
      "./src/app/fundamentals/state-binding/state-binding.component.ts");
      /* harmony import */


      var _state_binding_state_binding_demo_state_binding_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./state-binding/state-binding-demo/state-binding-demo.component */
      "./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.ts");
      /* harmony import */


      var _api_api_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./api/api.component */
      "./src/app/fundamentals/api/api.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _api_api_demo_api_demo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./api/api-demo/api-demo.component */
      "./src/app/fundamentals/api/api-demo/api-demo.component.ts");
      /* harmony import */


      var _styling_styling_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./styling/styling.component */
      "./src/app/fundamentals/styling/styling.component.ts");
      /* harmony import */


      var _focus_focus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./focus/focus.component */
      "./src/app/fundamentals/focus/focus.component.ts");
      /* harmony import */


      var _issues_issues_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./issues/issues.component */
      "./src/app/fundamentals/issues/issues.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FundamentalsModule = function FundamentalsModule() {
        _classCallCheck(this, FundamentalsModule);
      };

      FundamentalsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_2__["NodesComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"], _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__["ActionsComponent"], _templates_templates_component__WEBPACK_IMPORTED_MODULE_6__["TemplatesComponent"], _actions_actions_demo_actions_demo_component__WEBPACK_IMPORTED_MODULE_7__["ActionsDemoComponent"], _templates_templates_demo_templates_demo_component__WEBPACK_IMPORTED_MODULE_9__["TemplatesDemoComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"], _state_binding_state_binding_component__WEBPACK_IMPORTED_MODULE_11__["StateBindingComponent"], _state_binding_state_binding_demo_state_binding_demo_component__WEBPACK_IMPORTED_MODULE_12__["StateBindingDemoComponent"], _api_api_component__WEBPACK_IMPORTED_MODULE_13__["ApiComponent"], _api_api_demo_api_demo_component__WEBPACK_IMPORTED_MODULE_15__["ApiDemoComponent"], _styling_styling_component__WEBPACK_IMPORTED_MODULE_16__["StylingComponent"], _focus_focus_component__WEBPACK_IMPORTED_MODULE_17__["FocusComponent"], _issues_issues_component__WEBPACK_IMPORTED_MODULE_18__["IssuesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _custom_elements_code_code_example_module__WEBPACK_IMPORTED_MODULE_3__["CodeExampleModule"], angular_tree_component__WEBPACK_IMPORTED_MODULE_8__["TreeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
      })], FundamentalsModule);
      /***/
    },

    /***/
    "./src/app/fundamentals/issues/issues.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/fundamentals/issues/issues.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsIssuesIssuesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9pc3N1ZXMvaXNzdWVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/fundamentals/issues/issues.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/fundamentals/issues/issues.component.ts ***!
      \*********************************************************/

    /*! exports provided: IssuesComponent */

    /***/
    function srcAppFundamentalsIssuesIssuesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssuesComponent", function () {
        return IssuesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var IssuesComponent = function IssuesComponent() {
        _classCallCheck(this, IssuesComponent);
      };

      IssuesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-issues',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./issues.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/issues/issues.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./issues.component.scss */
        "./src/app/fundamentals/issues/issues.component.scss"))["default"]]
      })], IssuesComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/nodes/nodes.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/fundamentals/nodes/nodes.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsNodesNodesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9ub2Rlcy9ub2Rlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/fundamentals/nodes/nodes.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/fundamentals/nodes/nodes.component.ts ***!
      \*******************************************************/

    /*! exports provided: NodesComponent */

    /***/
    function srcAppFundamentalsNodesNodesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodesComponent", function () {
        return NodesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var NodesComponent = /*#__PURE__*/function () {
        function NodesComponent() {
          _classCallCheck(this, NodesComponent);

          this.nodes = "[\n  {\n    id: 1,\n    name: 'root1',\n    children: [\n      { id: 2, name: 'child1' },\n      { id: 3, name: 'child2' }\n    ]\n  }\n]";
        }

        _createClass(NodesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NodesComponent;
      }();

      NodesComponent.ctorParameters = function () {
        return [];
      };

      NodesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nodes',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./nodes.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/nodes/nodes.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./nodes.component.scss */
        "./src/app/fundamentals/nodes/nodes.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [])], NodesComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/options/options.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/fundamentals/options/options.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsOptionsOptionsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/fundamentals/options/options.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/fundamentals/options/options.component.ts ***!
      \***********************************************************/

    /*! exports provided: OptionsComponent */

    /***/
    function srcAppFundamentalsOptionsOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsComponent", function () {
        return OptionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var OptionsComponent = /*#__PURE__*/function () {
        function OptionsComponent() {
          _classCallCheck(this, OptionsComponent);

          this.options = "\nimport { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from '@circlon/angular-tree-component';\n\nclass MyComponent {\n  ...\n  options: ITreeOptions = {\n    displayField: 'nodeName',\n    isExpandedField: 'expanded',\n    idField: 'uuid',\n    hasChildrenField: 'nodes',\n    actionMapping: {\n      mouse: {\n        dblClick: (tree, node, $event) => {\n          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);\n        }\n      },\n      keys: {\n        [KEYS.ENTER]: (tree, node, $event) => {\n          node.expandAll();\n        }\n      }\n    },\n    nodeHeight: 23,\n    allowDrag: (node) => {\n      return true;\n    },\n    allowDrop: (node) => {\n      return true;\n    },\n    allowDragoverStyling: true,\n    levelPadding: 10,\n    useVirtualScroll: true,\n    animateExpand: true,\n    scrollOnActivate: true,\n    animateSpeed: 30,\n    animateAcceleration: 1.2,\n    scrollContainer: document.documentElement // HTML\n  }\n}\n";
        }

        _createClass(OptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OptionsComponent;
      }();

      OptionsComponent.ctorParameters = function () {
        return [];
      };

      OptionsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-options',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./options.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/options/options.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./options.component.scss */
        "./src/app/fundamentals/options/options.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [])], OptionsComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsStateBindingStateBindingDemoStateBindingDemoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9zdGF0ZS1iaW5kaW5nL3N0YXRlLWJpbmRpbmctZGVtby9zdGF0ZS1iaW5kaW5nLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: StateBindingDemoComponent */

    /***/
    function srcAppFundamentalsStateBindingStateBindingDemoStateBindingDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateBindingDemoComponent", function () {
        return StateBindingDemoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var StateBindingDemoComponent = /*#__PURE__*/function () {
        function StateBindingDemoComponent() {
          _classCallCheck(this, StateBindingDemoComponent);

          this.options = {
            getChildren: function getChildren() {
              return new Promise(function (resolve) {
                setTimeout(function () {
                  return resolve([{
                    id: 5,
                    name: 'child2.1',
                    children: []
                  }, {
                    id: 6,
                    name: 'child2.2',
                    children: [{
                      id: 7,
                      name: 'grandchild2.2.1'
                    }]
                  }]);
                }, 2000);
              });
            }
          };
          this.nodes = [{
            id: 1,
            name: 'root1',
            children: [{
              id: 2,
              name: 'child1'
            }, {
              id: 3,
              name: 'child2'
            }]
          }, {
            id: 4,
            name: 'root2',
            hasChildren: true
          }];
        }

        _createClass(StateBindingDemoComponent, [{
          key: "state",
          get: function get() {
            return localStorage.treeState && JSON.parse(localStorage.treeState);
          },
          set: function set(state) {
            localStorage.treeState = JSON.stringify(state);
          }
        }]);

        return StateBindingDemoComponent;
      }();

      StateBindingDemoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-state-binding-demo',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./state-binding-demo.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./state-binding-demo.component.scss */
        "./src/app/fundamentals/state-binding/state-binding-demo/state-binding-demo.component.scss"))["default"]]
      })], StateBindingDemoComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/state-binding/state-binding.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/fundamentals/state-binding/state-binding.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsStateBindingStateBindingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9zdGF0ZS1iaW5kaW5nL3N0YXRlLWJpbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/fundamentals/state-binding/state-binding.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/fundamentals/state-binding/state-binding.component.ts ***!
      \***********************************************************************/

    /*! exports provided: StateBindingComponent */

    /***/
    function srcAppFundamentalsStateBindingStateBindingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateBindingComponent", function () {
        return StateBindingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var StateBindingComponent = function StateBindingComponent() {
        _classCallCheck(this, StateBindingComponent);

        this.example = "\nimport { Component } from '@angular/core';\nimport { ITreeState } from 'angular-tree-component';\n\n@Component({\n  selector: 'app-saverestore',\n  template: `\n    <tree-root [(state)]=\"state\" [nodes]=\"nodes\"></tree-root>\n    <button (click)=\"collapseAll()\">collapse all</button>\n    <button (click)=\"hideFolders()\">hide folders</button>\n  `,\n  styles: []\n})\nexport class MyComponent {\n  state: ITreeState;\n  nodes = [\n    { id: 1, isFolder: true, name: 'folder1', children: [\n      { id: 2, name: 'file1', isFolder: false },\n      { id: 3, name: 'file2', isFolder: false }\n    ] },\n    { id: 4, isFolder: false, name: 'flatfile1' },\n    { id: 5, isFolder: false, name: 'flatfile2' }\n  ];\n\n  collapseAll() {\n    this.state = {\n      ...this.state,\n      expandedNodeIds: {}\n    };\n  }\n\n  hideFolders() {\n    const hiddenNodeIds = {};\n\n    this.nodes.forEach((node) => {\n      if (node.isFolder) {\n        hiddenNodeIds[node.id] = true;\n      }\n    });\n\n    this.state = {\n      ...this.state,\n      hiddenNodeIds\n    };\n  }\n}\n";
        this.localStorage = "\n<tree-root\n  [(state)]=\"state\"\n  [nodes]=\"nodes\">\n</tree-root>\n\nclass MyComponent {\n  get state() {\n    return localStorage.treeState && JSON.parse(localStorage.treeState);\n  }\n  set state(state) {\n    localStorage.treeState = JSON.stringify(state);\n  }\n}\n";
        this.api = "\n<tree-root\n  #tree\n  (initialize)=\"onInit(tree)\"\n  [nodes]=\"nodes\">\n</tree-root>\n\nclass MyComponent {\n  onInit(tree) {\n    if (localStorage.treeState) {\n      tree.treeModel.setState(JSON.parse(localStorage.treeState);\n    }\n    tree.treeModel.subscribe((state) => {\n      localStorage.treeState = JSON.stringify(state);\n    });\n  }\n}\n";
      };

      StateBindingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-state-binding',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./state-binding.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/state-binding/state-binding.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./state-binding.component.scss */
        "./src/app/fundamentals/state-binding/state-binding.component.scss"))["default"]]
      })], StateBindingComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/styling/styling.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/fundamentals/styling/styling.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsStylingStylingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy9zdHlsaW5nL3N0eWxpbmcuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/fundamentals/styling/styling.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/fundamentals/styling/styling.component.ts ***!
      \***********************************************************/

    /*! exports provided: StylingComponent */

    /***/
    function srcAppFundamentalsStylingStylingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StylingComponent", function () {
        return StylingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var StylingComponent = function StylingComponent() {
        _classCallCheck(this, StylingComponent);

        this.branchLines = "\n.node-content-wrapper, .tree-children {\n  position: relative;\n}\n\n.node-content-wrapper::before, .tree-children::after {\n  content: \"\";\n  position: absolute;\n}\n\n.node-content-wrapper::before {\n  border-bottom: 1px solid lightgrey;\n  border-left: 1px solid lightgrey;\n  height: 28px;\n  top: -17px;\n  width: 20px;\n  left: -28px;\n}\n\n.tree-node-level-1 > tree-node-wrapper > .node-wrapper > .node-content-wrapper::before {\n  display: none;\n}\n\n.tree-node-leaf > .node-wrapper > .node-content-wrapper::before {\n  width: 25px;\n}\n\n.tree-children::after {\n  border-left: 1px solid lightgrey;\n  height: 100%;\n  top: -15px;\n  left: -15px;\n}\n\ntree-node:last-child > .tree-node > .tree-children::after {\n  border-left: none;\n}\n\n.toggle-children {\n  z-index: 1;\n}\n";
        this.pullRight = "\n.tree {\n  width: 300px;\n}\n\n.node-content-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n}\n\n.node-content-wrapper {\n  flex-grow: 1;\n  position: relative;\n}\n\n.pull-right {\n  position: absolute;\n  right: 10px;\n}\n";
        this.ace = "\ndiv.tree div.tree-children::before,\ndiv.tree::before {\n    content: \"\";\n    position: absolute;\n    border-left: 1px dotted #23527c;\n    height: 100%;\n    top: -14px;\n    left: 12px\n}\n\ndiv.tree {\n    padding-left: 0;\n    margin-left: -5px\n}\n\ndiv.tree div.tree-children {\n    position: relative;\n    padding-left: 0;\n    margin-left: 16px\n}\n\ndiv.tree div.tree-children::before {\n    left: 5px\n}\n\ndiv.tree tree-node>div>.node-wrapper {\n    margin-left: 24px\n}\n\ndiv.tree tree-node>div>.node-wrapper>.node-content-wrapper {\n    margin-left: 4px\n}\n\ndiv.tree tree-node>div.tree-node-leaf>.node-wrapper {\n    margin-left: 0\n}\n\ndiv.tree tree-node>div::before {\n    content: \"\";\n    position: absolute;\n    border-bottom: 1px dotted #23527c;\n    width: 7px;\n    margin-top: 12px;\n    left: 7px\n}\n\ndiv.tree tree-node>div .toggle-children-wrapper {\n    width: 13px;\n    height: 13px;\n    border: 1px solid #23527c;\n    position: absolute;\n    left: 15px;\n    margin-top: 5px;\n    margin-left: 0;\n    display: inline-block;\n    background-color: #fff;\n    z-index: 1\n}\n\ndiv.tree tree-node>div .toggle-children-wrapper::before {\n    content: \"\";\n    display: inline-block;\n    width: 7px;\n    border-top: 1px solid #23527c;\n    position: absolute;\n    top: 5px;\n    left: 2px\n}\n\ndiv.tree tree-node>div .toggle-children-wrapper.toggle-children-wrapper-collapsed::after {\n    content: \"\";\n    display: inline-block;\n    height: 7px;\n    border-left: 1px solid #23527c;\n    position: absolute;\n    top: 2px;\n    left: 5px\n}\n\ndiv.tree tree-node>div .toggle-children-wrapper .toggle-children {\n    display: none\n}\n\ndiv.tree tree-node>div .node-content-wrapper {\n    margin-left: 4px\n}\n\ndiv.tree>tree-node>div::before {\n    left: 14px\n}\n\ndiv.tree>tree-node>div>.node-wrapper>tree-node-expander>.toggle-children-wrapper {\n    left: 22px\n}\n";
      };

      StylingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-styling',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./styling.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/styling/styling.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./styling.component.scss */
        "./src/app/fundamentals/styling/styling.component.scss"))["default"]]
      })], StylingComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/templates/templates-demo/templates-demo.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/fundamentals/templates/templates-demo/templates-demo.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsTemplatesTemplatesDemoTemplatesDemoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".root1Class {\n  color: blue;\n}\n\n.root2Class {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvZnVuZGFtZW50YWxzL3RlbXBsYXRlcy90ZW1wbGF0ZXMtZGVtby90ZW1wbGF0ZXMtZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy90ZW1wbGF0ZXMvdGVtcGxhdGVzLWRlbW8vdGVtcGxhdGVzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdDFDbGFzcyB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5yb290MkNsYXNzIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/fundamentals/templates/templates-demo/templates-demo.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/fundamentals/templates/templates-demo/templates-demo.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: TemplatesDemoComponent */

    /***/
    function srcAppFundamentalsTemplatesTemplatesDemoTemplatesDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatesDemoComponent", function () {
        return TemplatesDemoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var TemplatesDemoComponent = function TemplatesDemoComponent() {
        _classCallCheck(this, TemplatesDemoComponent);

        this.nodes1 = [{
          title: 'root1',
          className: 'root1Class'
        }, {
          title: 'root2',
          className: 'root2Class',
          hasChildren: true
        }];
        this.nodes2 = [{
          title: 'root1',
          className: 'root1Class'
        }, {
          title: 'root2',
          className: 'root2Class',
          children: [{
            title: 'child1',
            className: 'child1Class'
          }]
        }];
        this.options1 = {
          getChildren: function getChildren() {
            return new Promise(function (resolve, reject) {});
          }
        };
        this.options0 = {
          displayField: 'title',
          nodeClass: function nodeClass(node) {
            return "".concat(node.data.title, "Class");
          }
        };
      };

      TemplatesDemoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-templates-demo',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./templates-demo.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates-demo/templates-demo.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./templates-demo.component.scss */
        "./src/app/fundamentals/templates/templates-demo/templates-demo.component.scss"))["default"]]
      })], TemplatesDemoComponent);
      /***/
    },

    /***/
    "./src/app/fundamentals/templates/templates.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/fundamentals/templates/templates.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFundamentalsTemplatesTemplatesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2Z1bmRhbWVudGFscy90ZW1wbGF0ZXMvdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/fundamentals/templates/templates.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/fundamentals/templates/templates.component.ts ***!
      \***************************************************************/

    /*! exports provided: TemplatesComponent */

    /***/
    function srcAppFundamentalsTemplatesTemplatesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function () {
        return TemplatesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var TemplatesComponent = function TemplatesComponent() {
        _classCallCheck(this, TemplatesComponent);

        this.template = "\n<tree-root [nodes]=\"nodes\">\n  <ng-template #treeNodeTemplate let-node let-index=\"index\">\n    <span>{{ node.data.name }}</span>\n    <button (click)=\"go($event)\">Custom Action</button>\n  </ng-template>\n</tree-root>\n";
        this.treeNodeWrapper = "\n<tree-root [nodes]=\"nodes\">\n  <ng-template #treeNodeWrapperTemplate let-node let-index=\"index\">\n    <div class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n      <tree-node-expander [node]=\"node\"></tree-node-expander>\n      <div class=\"node-content-wrapper\"\n        [class.node-content-wrapper-active]=\"node.isActive\"\n        [class.node-content-wrapper-focused]=\"node.isFocused\"\n        (click)=\"node.mouseAction('click', $event)\"\n        (dblclick)=\"node.mouseAction('dblClick', $event)\"\n        (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n        (treeDrop)=\"node.onDrop($event)\"\n        [treeAllowDrop]=\"node.allowDrop\"\n        [treeDrag]=\"node\"\n        [treeDragEnabled]=\"node.allowDrag()\">\n\n        <tree-node-content [node]=\"node\" [index]=\"index\"></tree-node-content>\n      </div>\n    </div>\n  </ng-template>\n</tree-root>\n";
        this.treeLoading = "\n<tree-root [nodes]=\"nodes\">\n  <template #loadingTemplate>Loading, please hold....</template>\n</tree-root>\n";
        this.fullTemplate = "\n<ng-template #treeNodeFullTemplate\n          let-node\n          let-index=\"index\"\n          let-templates=\"templates\">\n  <div\n    [class]=\"node.getClass()\"\n    [class.tree-node]=\"true\"\n    [class.tree-node-expanded]=\"node.isExpanded && node.hasChildren\"\n    [class.tree-node-collapsed]=\"node.isCollapsed && node.hasChildren\"\n    [class.tree-node-leaf]=\"node.isLeaf\"\n    [class.tree-node-active]=\"node.isActive\"\n    [class.tree-node-focused]=\"node.isFocused\">\n\n    <tree-node-drop-slot\n                         *ngIf=\"index === 0\"\n                         [dropIndex]=\"node.index\"\n                         [node]=\"node.parent\">\n    </tree-node-drop-slot>\n\n    <tree-node-wrapper [node]=\"node\" [index]=\"index\" [templates]=\"templates\">\n    </tree-node-wrapper>\n\n    <tree-node-children [node]=\"node\" [templates]=\"templates\">\n    </tree-node-children>\n    <tree-node-drop-slot [dropIndex]=\"node.index + 1\" [node]=\"node.parent\">\n    </tree-node-drop-slot>\n  </div>\n</ng-template>\n";
      };

      TemplatesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-templates',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./templates.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/fundamentals/templates/templates.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./templates.component.scss */
        "./src/app/fundamentals/templates/templates.component.scss"))["default"]]
      })], TemplatesComponent);
      /***/
    },

    /***/
    "./src/app/getting-started/getting-started.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/getting-started/getting-started.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppGettingStartedGettingStartedComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvYXBwL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/getting-started/getting-started.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/getting-started/getting-started.component.ts ***!
      \**************************************************************/

    /*! exports provided: GettingStartedComponent */

    /***/
    function srcAppGettingStartedGettingStartedComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function () {
        return GettingStartedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var GettingStartedComponent = /*#__PURE__*/function () {
        function GettingStartedComponent() {
          _classCallCheck(this, GettingStartedComponent);
        }

        _createClass(GettingStartedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GettingStartedComponent;
      }();

      GettingStartedComponent.ctorParameters = function () {
        return [];
      };

      GettingStartedComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-getting-started',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./getting-started.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./getting-started.component.scss */
        "./src/app/getting-started/getting-started.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [])], GettingStartedComponent);
      /***/
    },

    /***/
    "./src/app/layout/footer/footer.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/layout/footer/footer.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 40px;\n}\n:host > * {\n  color: #fff;\n}\n.footer-blocks {\n  display: flex;\n  justify-content: center;\n  text-align: left;\n  margin: 0 0 40px;\n}\n.footer-block {\n  margin: 0 24px;\n  vertical-align: top;\n}\na {\n  color: #fff;\n}\nh3 {\n  color: #fff;\n  text-transform: uppercase;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style-type: none;\n  padding: 4px 0;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUFGO0FBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6InByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxuXHJcbiAgPioge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyLWJsb2NrcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItYmxvY2sge1xyXG4gIG1hcmdpbjogMCAyNHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxudWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/footer/footer.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/layout/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./footer.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./footer.component.scss */
        "./src/app/layout/footer/footer.component.scss"))["default"]]
      }), __metadata("design:paramtypes", [])], FooterComponent);
      /***/
    },

    /***/
    "./src/app/layout/layout.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/layout/layout.module.ts ***!
      \*****************************************/

    /*! exports provided: LayoutModule */

    /***/
    function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/layout/footer/footer.component.ts");
      /* harmony import */


      var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nav-item/nav-item.component */
      "./src/app/layout/nav-item/nav-item.component.ts");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/fesm2015/icon.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/fesm2015/router.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      LayoutModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__["NavItemComponent"]],
        exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__["NavItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      })], LayoutModule);
      /***/
    },

    /***/
    "./src/app/layout/nav-item/nav-item.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/layout/nav-item/nav-item.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutNavItemNavItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/************************************\n             Media queries\n To use these, put this snippet in the appropriate selector:\n     @include bp(tiny) {\n         background-color: purple;\n     }\n     Replace \"tiny\" with \"medium\" or \"big\" as necessary.\n*************************************/\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  margin: 0;\n  color: #444444;\n  font-size: 14px;\n  font-size: 1.4rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1, h2, h3, h4, h5, h6 {\n  color: #333333;\n}\nh1 {\n  font-size: 24px;\n  font-size: 2.4rem;\n  font-weight: 500;\n  display: inline-block;\n  margin: 8px 0px;\n}\n@media screen and (max-width: 600px) {\n  h1 {\n    margin-top: 0;\n  }\n}\nh2 {\n  font-size: 22px;\n  font-size: 2.2rem;\n  font-weight: 500;\n  margin: 32px 0px 24px;\n  clear: both;\n}\nh3 {\n  font-size: 20px;\n  font-size: 2rem;\n  font-weight: 400;\n  margin: 24px 0px 12px;\n  clear: both;\n}\nh4 {\n  font-size: 18px;\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 8px 0px;\n  clear: both;\n}\nh5 {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  margin: 8px 0px;\n  clear: both;\n}\nh6 {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: #6E6E6E;\n  margin: 8px 0px;\n  clear: both;\n}\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  font-size: inherit;\n}\n@media screen and (max-width: 600px) {\n  h2,\nh3,\nh4,\nh5,\nh6 {\n    margin: 8px 0;\n  }\n}\n.mat-tab-body-wrapper h2 {\n  margin-top: 0;\n}\np,\nol,\nul,\nol,\nli,\ninput,\na {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n  font-weight: 400;\n  color: #444444;\n}\np > em,\nol > em,\nul > em,\nol > em,\nli > em,\ninput > em,\na > em {\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n}\np {\n  margin: 14px 0 0;\n}\np + ul {\n  margin-top: 4px;\n}\nol li,\nol p {\n  margin: 4px 0;\n}\nol ol {\n  list-style-type: lower-alpha;\n}\nol ol ol {\n  list-style-type: lower-roman;\n}\nli {\n  padding-bottom: 8px;\n}\nli p {\n  margin: 0;\n}\na {\n  text-decoration: none;\n}\n.app-toolbar a {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: #FFFFFF;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  text-transform: uppercase;\n}\nstrong {\n  font-weight: 500;\n}\ntable {\n  border-collapse: collapse;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 12px 0 32px;\n}\ntable tbody th {\n  max-width: 100px;\n  padding: 13px 32px;\n  text-align: left;\n}\ntd {\n  font-weight: 400;\n  padding: 8px 30px;\n  letter-spacing: 0.3px;\n  letter-spacing: 0.03rem;\n}\ntd > p:first-child,\ntd ul:first-child {\n  margin-top: 0;\n}\ntd > p:last-child,\ntd ul:last-child {\n  margin-bottom: 0;\n}\nth {\n  font-size: 16px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  padding: 13px 32px;\n  text-align: left;\n}\ncode {\n  font-family: \"Droid Sans Mono\", monospace;\n  font-size: 90%;\n  color: #444444;\n}\n.sidenav-content a {\n  color: #1976D2;\n}\n.sidenav-content a:hover {\n  color: #6E6E6E;\n}\n:host {\n  display: block;\n}\n.vertical-menu-item {\n  box-sizing: border-box;\n  color: #444444;\n  cursor: pointer;\n  flex: 1;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  max-width: 260px;\n  overflow-wrap: break-word;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  text-decoration: none;\n  text-align: left;\n  word-wrap: break-word;\n}\n.vertical-menu-item:hover {\n  background-color: #DBDBDB;\n  color: #1E88E5;\n  text-shadow: 0 0 5px #ffffff;\n}\n.vertical-menu-item:focus {\n  outline: #1E88E5 auto 2px;\n}\n.vertical-menu-item .node-title {\n  flex: 1;\n}\n.vertical-menu-item .mat-icon {\n  margin: 4px;\n}\n.vertical-menu-item.selected {\n  color: #1E88E5;\n}\nbutton.vertical-menu-item {\n  border: none;\n  background-color: transparent;\n  margin-right: 0;\n  width: 100%;\n}\n.heading-children.expanded {\n  visibility: visible;\n  opacity: 1;\n  max-height: 4000px;\n  transition: visibility 500ms, opacity 500ms, max-height 500ms;\n  transition-timing-function: ease-in-out;\n}\n.heading-children.collapsed {\n  visibility: hidden;\n  opacity: 0;\n  max-height: 1px;\n  transition: visibility 275ms, opacity 275ms, max-height 280ms;\n  transition-timing-function: ease-out;\n}\n.level-1 {\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  padding-left: 14px;\n  transition: background-color 0.2s;\n}\n.level-2 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  padding-left: 12px;\n  text-transform: none;\n}\n.level-3 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 14px;\n  padding-left: 10px;\n}\n.level-4 {\n  color: #6E6E6E;\n  font-family: \"Roboto\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 14px;\n  padding-left: 8px;\n}\n.level-1.expanded .mat-icon, .level-2.expanded .mat-icon {\n  transform: rotate(90deg);\n  transition: transform 150ms;\n  transition-timing-function: ease-in-out;\n}\n.level-1:not(.expanded) .mat-icon, .level-2:not(.expanded) .mat-icon {\n  transform: rotate(0deg);\n  transition: transform 150ms;\n  transition-timing-function: ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RvY3MtYXBwL3NyYy9zdHlsZXMvX21peGlucy5zY3NzIiwicHJvamVjdHMvZG9jcy1hcHAvc3JjL3N0eWxlcy9fdHlwb2dyYXBoeS5zY3NzIiwicHJvamVjdHMvZG9jcy1hcHAvc3JjL2FwcC9sYXlvdXQvbmF2LWl0ZW0vbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9kb2NzLWFwcC9zcmMvc3R5bGVzL19jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxQ0FBQTtBQ0FBO0VBQ0UsZ0JBQUE7QUNTRjtBRE5BO0VBQ0UsOEdFSlU7RUZLVixTQUFBO0VBQ0EsY0VnQlM7RUhpQlQsZUFBQTtFQUNBLGlCQUFBO0VDaENBLG1DQUFBO0VBQ0Esa0NBQUE7QUNVRjtBRFBBO0VBQ0UsY0VVUztBREFYO0FEUEE7RUR1QkUsZUFBQTtFQUNBLGlCQUFBO0VDdEJBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDV0Y7QURURTtFQU5GO0lBT0ksYUFBQTtFQ1lGO0FBQ0Y7QURUQTtFRFlFLGVBQUE7RUFDQSxpQkFBQTtFQ1hBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDYUY7QURWQTtFREtFLGVBQUE7RUFDQSxlQUFBO0VDSkEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNjRjtBRFhBO0VERkUsZUFBQTtFQUNBLGlCQUFBO0VDR0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2VGO0FEWkE7RURURSxlQUFBO0VBQ0EsaUJBQUE7RUNVQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDZ0JGO0FEYkE7RURoQkUsZUFBQTtFQUNBLGlCQUFBO0VDaUJBLGdCQUFBO0VBQ0EsY0VyQ1c7RUZzQ1gsZUFBQTtFQUNBLFdBQUE7QUNpQkY7QURURTs7Ozs7RUFDRSxrQkFBQTtBQ2dCSjtBRGJFO0VBVEY7Ozs7O0lBVUksYUFBQTtFQ29CRjtBQUNGO0FEakJBO0VBQ0UsYUFBQTtBQ29CRjtBRGpCQTs7Ozs7OztFRDFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFTQSxpQkFBQTtFQUNBLG1CQUFBO0VBTkEscUJBQUE7RUFDQSx1QkFBQTtFQzhDQSxnQkFBQTtFQUNBLGNFdEVTO0FENkZYO0FEdEJFOzs7Ozs7O0VEakRBLHFCQUFBO0VBQ0EsdUJBQUE7QUVnRkY7QUQzQkE7RUFDRSxnQkFBQTtBQzhCRjtBRDNCQTtFQUNFLGVBQUE7QUM4QkY7QUQxQkU7O0VBRUUsYUFBQTtBQzZCSjtBRHpCQTtFQUNFLDRCQUFBO0FDNEJGO0FEMUJFO0VBQ0UsNEJBQUE7QUM0Qko7QUR4QkE7RUFDRSxtQkFBQTtBQzJCRjtBRHpCRTtFQUNFLFNBQUE7QUMyQko7QUR2QkE7RUFDRSxxQkFBQTtBQzBCRjtBRHZCQTtFRDlGRSxlQUFBO0VBQ0EsaUJBQUE7RUMrRkEsZ0JBQUE7RUFDQSxjRXpITTtFRjBITiw4R0V6SVU7RUYwSVYseUJBQUE7QUMyQkY7QUR4QkE7RUFDRSxnQkFBQTtBQzJCRjtBRHhCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDMkJGO0FEeEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDMkJGO0FEeEJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFRHBIQSxxQkFBQTtFQUNBLHVCQUFBO0FFZ0pGO0FEeEJJOztFQUNFLGFBQUE7QUMyQk47QUR6Qkk7O0VBQ0UsZ0JBQUE7QUM0Qk47QUR2QkE7RUR2SUUsZUFBQTtFQUNBLGlCQUFBO0VDd0lBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQzJCRjtBRHhCQTtFQUNFLHlDRXJMVTtFRnNMVixjQUFBO0VBQ0EsY0VsS1M7QUQ2TFg7QUR4QkE7RUFDRSxjRWpMSztBRDRNUDtBRDFCRTtFQUNFLGNFektTO0FEcU1iO0FBdk5BO0VBQ0UsY0FBQTtBQTBORjtBQXZOQTtFQUNFLHNCQUFBO0VBQ0EsY0NhUztFRFpULGVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQTBORjtBQXhORTtFQUNFLHlCQ05RO0VET1IsY0NiUztFRGNULDRCQUFBO0FBME5KO0FBdk5FO0VBQ0UseUJBQUE7QUF5Tko7QUF0TkU7RUFDRSxPQUFBO0FBd05KO0FBcE5FO0VBQ0UsV0FBQTtBQXNOSjtBQWxOQTtFQUNFLGNDaENXO0FEcVBiO0FBbE5BO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFxTkY7QUFsTkE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBRUEsdUNBQUE7QUFxTkY7QUFsTkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkRBQUE7RUFFQSxvQ0FBQTtBQXFORjtBQWxOQTtFQUNFLDhHQ3pFVTtFRDBFVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBcU5GO0FBbE5BO0VBQ0UsY0M1RFc7RUQ2RFgsOEdDbEZVO0VEbUZWLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFxTkY7QUFsTkE7RUFDRSxjQ3JFVztFRHNFWCw4R0MzRlU7RUQ0RlYsZUFBQTtFQUNBLGtCQUFBO0FBcU5GO0FBbE5BO0VBQ0UsY0M1RVc7RUQ2RVgsOEdDbEdVO0VEbUdWLGVBQUE7RUFDQSxpQkFBQTtBQXFORjtBQWxOQTtFRm5DRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7QUU2UEY7QUF4TkE7RUZ2Q0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0FFdVFGIiwiZmlsZSI6InByb2plY3RzL2RvY3MtYXBwL3NyYy9hcHAvbGF5b3V0L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgTWVkaWEgcXVlcmllc1xyXG4gVG8gdXNlIHRoZXNlLCBwdXQgdGhpcyBzbmlwcGV0IGluIHRoZSBhcHByb3ByaWF0ZSBzZWxlY3RvcjpcclxuICAgICBAaW5jbHVkZSBicCh0aW55KSB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICAgICB9XHJcbiAgICAgUmVwbGFjZSBcInRpbnlcIiB3aXRoIFwibWVkaXVtXCIgb3IgXCJiaWdcIiBhcyBuZWNlc3NhcnkuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AbWl4aW4gYnAoJHBvaW50KSB7XHJcblxyXG4gICRicC14c21hbGw6IFwiKG1pbi13aWR0aDogMzIwcHgpXCI7XHJcbiAgJGJwLXRlZW55OiBcIihtaW4td2lkdGg6IDQ4MHB4KVwiO1xyXG4gICRicC10aW55OiBcIihtaW4td2lkdGg6IDYwMHB4KVwiO1xyXG4gICRicC1zbWFsbDogXCIobWluLXdpZHRoOiA2NTBweClcIjtcclxuICAkYnAtbWVkaXVtOiBcIihtaW4td2lkdGg6IDgwMHB4KVwiO1xyXG4gICRicC1iaWc6IFwiKG1pbi13aWR0aDogMTAwMHB4KVwiO1xyXG5cclxuICBAaWYgJHBvaW50ID09IGJpZyB7XHJcbiAgICBAbWVkaWEgI3skYnAtYmlnfSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZWRpdW0ge1xyXG4gICAgQG1lZGlhICN7JGJwLW1lZGl1bX0geyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gc21hbGwge1xyXG4gICAgQG1lZGlhICN7JGJwLXNtYWxsfSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkcG9pbnQgPT0gdGlueSB7XHJcbiAgICBAbWVkaWEgI3skYnAtdGlueX0gIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHRlZW55IHtcclxuICAgIEBtZWRpYSAjeyRicC10ZWVueX0gIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJHBvaW50ID09IHhzbWFsbCB7XHJcbiAgICBAbWVkaWEgI3skYnAteHNtYWxsfSAgeyBAY29udGVudDsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUkVNIEZvbnQgQWRqdXN0bWVudHNcclxuQG1peGluIGZvbnQtc2l6ZSgkc2l6ZVZhbHVlKSB7XHJcbiAgZm9udC1zaXplOiAoJHNpemVWYWx1ZSkgKyBweDtcclxuICBmb250LXNpemU6ICgkc2l6ZVZhbHVlIC8gMTApICsgcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gbGV0dGVyLXNwYWNpbmcoJHNwYWNpbmdWYWx1ZSkge1xyXG4gIGxldHRlci1zcGFjaW5nOiAoJHNwYWNpbmdWYWx1ZSkgKyBweDtcclxuICBsZXR0ZXItc3BhY2luZzogKCRzcGFjaW5nVmFsdWUgLyAxMCkgKyByZW07XHJcbn1cclxuXHJcbkBtaXhpbiBsaW5lLWhlaWdodCgkaGVpZ2h0VmFsdWUpIHtcclxuICBsaW5lLWhlaWdodDogKCRoZWlnaHRWYWx1ZSkgKyBweDtcclxuICBsaW5lLWhlaWdodDogKCRoZWlnaHRWYWx1ZSAvIDEwKSArIHJlbTtcclxufVxyXG5cclxuLy8gUExBQ0VIT0xERVJcclxuLy8gTk9URTogVmVuZG9yLXByZWZpeGVkIHNlbGVjdG9ycyBtdXN0IGJlIG9uIHNlcGFyYXRlIGJsb2NrcywgYmVjYXVzZSBvbmUgaW52YWxpZC91bmtub3duXHJcbi8vICAgICAgIHNlbGVjdG9yIHdpbGwgaW52YWxpZGF0ZSB0aGUgd2hvbGUgYmxvY2suXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7IEBjb250ZW50OyB9ICAvLyBJRVxyXG4gICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgeyBAY29udGVudDsgfSAgLy8gRWRnZVxyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBAY29udGVudDsgfSAgLy8gUVEgQnJvd3NlclxyXG4gICY6OnBsYWNlaG9sZGVyICAgICAgICAgICAgICAgeyBAY29udGVudDsgfSAgLy8gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpXHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGNvZGVibG9jaygkYmdjb2xvcikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvOyAvLyB3YXMgMjRcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICRsaWdodGdyYXk7XHJcbn1cclxuXHJcbi8vIElORk8gQ0FSRCBTS0VMRVRPTlxyXG5AbWl4aW4gY2FyZCgkaGVpZ2h0LCAkd2lkdGgpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCRibGFjaywgMC4yNCksIDAgMCAycHggcmdiYSgkYmxhY2ssIDAuMTIpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggOHB4IHJnYmEoJGJsYWNrLCAwLjI0KSwgMCAwIDhweCByZ2JhKCRibGFjaywgMC4xMik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsImh0bWwge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogJGRhcmtncmF5O1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCk7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgY29sb3I6ICRkZWVwZ3JheTtcclxufVxyXG5cclxuaDEge1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgyNCk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA4cHggMHB4O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMjIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAzMnB4IDBweCAyNHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgQGluY2x1ZGUgZm9udC1zaXplKDIwKTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMjRweCAwcHggMTJweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuaDQge1xyXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiA4cHggMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgQGluY2x1ZGUgZm9udC1zaXplKDE2KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAkbWVkaXVtZ3JheTtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtdGFiLWJvZHktd3JhcHBlciBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxucCxcclxub2wsXHJcbnVsLFxyXG5vbCxcclxubGksXHJcbmlucHV0LFxyXG5hIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTQpO1xyXG4gIEBpbmNsdWRlIGxpbmUtaGVpZ2h0KDI0KTtcclxuICBAaW5jbHVkZSBsZXR0ZXItc3BhY2luZygwLjMpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICRkYXJrZ3JheTtcclxuICAmID4gZW0ge1xyXG4gICAgQGluY2x1ZGUgbGV0dGVyLXNwYWNpbmcoMC4zKTtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMTRweCAwIDA7XHJcbn1cclxuXHJcbnAgKyB1bCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG5vbCB7XHJcbiAgbGksXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gIH1cclxufVxyXG5cclxub2wgb2wge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XHJcblxyXG4gIG9sIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XHJcbiAgfVxyXG59XHJcblxyXG5saSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hcHAtdG9vbGJhciBhIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBtYXJnaW46IDEycHggMCAzMnB4O1xyXG59XHJcblxyXG50YWJsZSB0Ym9keSB0aCB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOiAxM3B4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgQGluY2x1ZGUgbGV0dGVyLXNwYWNpbmcoMC4zKTtcclxuXHJcbiAgPiBwLFxyXG4gIHVsIHtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnRoIHtcclxuICBAaW5jbHVkZSBmb250LXNpemUoMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMTNweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmNvZGUge1xyXG4gIGZvbnQtZmFtaWx5OiAkY29kZS1mb250O1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIGNvbG9yOiAkZGFya2dyYXk7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6ICRibHVlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRtZWRpdW1ncmF5O1xyXG4gIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgTWVkaWEgcXVlcmllc1xuIFRvIHVzZSB0aGVzZSwgcHV0IHRoaXMgc25pcHBldCBpbiB0aGUgYXBwcm9wcmlhdGUgc2VsZWN0b3I6XG4gICAgIEBpbmNsdWRlIGJwKHRpbnkpIHtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICAgfVxuICAgICBSZXBsYWNlIFwidGlueVwiIHdpdGggXCJtZWRpdW1cIiBvciBcImJpZ1wiIGFzIG5lY2Vzc2FyeS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDhweCAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMzJweCAwcHggMjRweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMjRweCAwcHggMTJweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDhweCAwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBtYXJnaW46IDhweCAwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5oMiBhLFxuaDMgYSxcbmg0IGEsXG5oNSBhLFxuaDYgYSB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbn1cblxuLm1hdC10YWItYm9keS13cmFwcGVyIGgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxucCxcbm9sLFxudWwsXG5vbCxcbmxpLFxuaW5wdXQsXG5hIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxucCA+IGVtLFxub2wgPiBlbSxcbnVsID4gZW0sXG5vbCA+IGVtLFxubGkgPiBlbSxcbmlucHV0ID4gZW0sXG5hID4gZW0ge1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAxNHB4IDAgMDtcbn1cblxucCArIHVsIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG5vbCBsaSxcbm9sIHAge1xuICBtYXJnaW46IDRweCAwO1xufVxuXG5vbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XG59XG5vbCBvbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XG59XG5cbmxpIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbmxpIHAge1xuICBtYXJnaW46IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hcHAtdG9vbGJhciBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgbWFyZ2luOiAxMnB4IDAgMzJweDtcbn1cblxudGFibGUgdGJvZHkgdGgge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxM3B4IDMycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG59XG50ZCA+IHA6Zmlyc3QtY2hpbGQsXG50ZCB1bDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG50ZCA+IHA6bGFzdC1jaGlsZCxcbnRkIHVsOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEzcHggMzJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRyb2lkIFNhbnMgTW9ub1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzQ0NDQ0NDtcbn1cblxuLnNpZGVuYXYtY29udGVudCBhIHtcbiAgY29sb3I6ICMxOTc2RDI7XG59XG4uc2lkZW5hdi1jb250ZW50IGE6aG92ZXIge1xuICBjb2xvcjogIzZFNkU2RTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZlcnRpY2FsLW1lbnUtaXRlbSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDI2MHB4O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi52ZXJ0aWNhbC1tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEQkRCO1xuICBjb2xvcjogIzFFODhFNTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZmZmZjtcbn1cbi52ZXJ0aWNhbC1tZW51LWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiAjMUU4OEU1IGF1dG8gMnB4O1xufVxuLnZlcnRpY2FsLW1lbnUtaXRlbSAubm9kZS10aXRsZSB7XG4gIGZsZXg6IDE7XG59XG4udmVydGljYWwtbWVudS1pdGVtIC5tYXQtaWNvbiB7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4udmVydGljYWwtbWVudS1pdGVtLnNlbGVjdGVkIHtcbiAgY29sb3I6ICMxRTg4RTU7XG59XG5cbmJ1dHRvbi52ZXJ0aWNhbC1tZW51LWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGluZy1jaGlsZHJlbi5leHBhbmRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIG1heC1oZWlnaHQ6IDQwMDBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1MDBtcywgb3BhY2l0eSA1MDBtcywgbWF4LWhlaWdodCA1MDBtcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLmhlYWRpbmctY2hpbGRyZW4uY29sbGFwc2VkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBtYXgtaGVpZ2h0OiAxcHg7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMjc1bXMsIG9wYWNpdHkgMjc1bXMsIG1heC1oZWlnaHQgMjgwbXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5sZXZlbC0xIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmxldmVsLTIge1xuICBjb2xvcjogIzZFNkU2RTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubGV2ZWwtMyB7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmxldmVsLTQge1xuICBjb2xvcjogIzZFNkU2RTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmxldmVsLTEuZXhwYW5kZWQgLm1hdC1pY29uLCAubGV2ZWwtMi5leHBhbmRlZCAubWF0LWljb24ge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLmxldmVsLTE6bm90KC5leHBhbmRlZCkgLm1hdC1pY29uLCAubGV2ZWwtMjpub3QoLmV4cGFuZGVkKSAubWF0LWljb24ge1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59IiwiLy8gVFlQT0dSQVBIWVxyXG4kbWFpbi1mb250OiBcIlJvYm90b1wiLFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLFwiTHVjaWRhIEdyYW5kZVwiLHNhbnMtc2VyaWY7XHJcbiRjb2RlLWZvbnQ6IFwiRHJvaWQgU2FucyBNb25vXCIsIG1vbm9zcGFjZTtcclxuXHJcbi8vIFotTEFZRVJcclxuJGxheWVyLTE6IDE7XHJcbiRsYXllci0yOiAyO1xyXG4kbGF5ZXItMzogMztcclxuJGxheWVyLTQ6IDQ7XHJcbiRsYXllci01OiA1O1xyXG5cclxuLy8gQ09MT1IgUEFMRVRURVxyXG4kYmx1ZTogIzE5NzZEMjtcclxuJGFjY2VudGJsdWU6ICMxRTg4RTU7XHJcbiRicmlnaHRyZWQ6ICNERDAwMzE7XHJcbiRkYXJrcmVkOiAjQzMwMDJGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRvZmZ3aGl0ZTogI0ZBRkFGQTtcclxuJGJhY2tncm91bmRncmF5OiAjRjFGMUYxO1xyXG4kbGlnaHRncmF5OiAjREJEQkRCO1xyXG4kbGlnaHRib3hncmF5OiAjRUJFQkVCO1xyXG4kbWlzdDogI0VDRUZGMTtcclxuJG1lZGl1bWdyYXk6ICM2RTZFNkU7XHJcbiRkYXJrZ3JheTogIzQ0NDQ0NDtcclxuJGRlZXBncmF5OiAjMzMzMzMzO1xyXG4kYmxhY2s6ICMwQTEwMTQ7XHJcbiRvcmFuZ2U6ICNGRjk4MDA7XHJcbiRkYXJrb3JhbmdlOiAjOTQwO1xyXG4kYW50aS1wYXR0ZXJuOiAkYnJpZ2h0cmVkO1xyXG5cclxuLy8gQVBJICYgQ09ERSBDT0xPUlNcclxuJGFtYmVyLTcwMDogI0ZGQTAwMDtcclxuJGJsdWUtNDAwOiAjNDJBNUY1O1xyXG4kYmx1ZS01MDA6ICMyMTk2RjM7XHJcbiRibHVlLTYwMDogIzFFODhFNTtcclxuJGJsdWUtODAwOiAjMTU2NUMwO1xyXG4kYmx1ZS05MDA6ICMwRDQ3QTE7XHJcbiRibHVlLWdyZXktNTA6ICNFQ0VGRjE7XHJcbiRibHVlLWdyZXktMTAwOiAjQ0ZEOERDO1xyXG4kYmx1ZS1ncmV5LTIwMDogI0IwQkVDNTtcclxuJGJsdWUtZ3JleS0zMDA6ICM5MEE0QUU7XHJcbiRibHVlLWdyZXktNDAwOiAjNzg5MDlDO1xyXG4kYmx1ZS1ncmV5LTUwMDogIzYwN0Q4QjtcclxuJGJsdWUtZ3JleS02MDA6ICM1NDZFN0E7XHJcbiRibHVlLWdyZXktNzAwOiAjNDU1QTY0O1xyXG4kYmx1ZS1ncmV5LTgwMDogIzM3NDc0RjtcclxuJGJsdWUtZ3JleS05MDA6ICMyNjMyMzg7XHJcbiRjb2RlZ3JlZW46ICMxN2ZmMGI7XHJcbiRncmVlbi01MDA6ICM0Q0FGNTA7XHJcbiRncmVlbi04MDA6ICMyRTdEMzI7XHJcbiRsaWdodC1ncmVlbi02MDA6ICM3Q0IzNDI7XHJcbiRwaW5rLTYwMDogI0Q4MUI2MDtcclxuJHB1cnBsZS02MDA6ICM4RTI0QUE7XHJcbiR0ZWFsLTUwMDogIzAwOTY4ODtcclxuJGxpZ2h0Z3JleTogI0Y1RjZGNztcclxuXHJcbi8vIFNUQVRFIENPTE9SU1xyXG4kZm9jdXMtb3V0bGluZS1vbmRhcms6IHJnYmEoJHdoaXRlLCAwLjgpO1xyXG4kZm9jdXMtb3V0bGluZS1vbmxpZ2h0OiAkYWNjZW50Ymx1ZTtcclxuXHJcbi8vIEdSQURJRU5UU1xyXG4kYmx1ZWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCRibHVlLTkwMCwkYmx1ZS00MDApO1xyXG4kcmVkZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsJGRhcmtyZWQsJGJyaWdodHJlZCk7XHJcblxyXG4vLyBBUEkgTEFCRUwgQ09MT1IgQU5EIFNZTUJPTFMgTUFQXHJcbiRhcGktc3ltYm9sczogKFxyXG4gICAgICAgIGFsbDogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlXHJcbiAgICAgICAgKSxcclxuICAgICAgICBjbGFzczogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtNTAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBjb25zdDogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0snLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG1lZGl1bWdyYXlcclxuICAgICAgICApLFxyXG4gICAgICAgIGRlY29yYXRvcjogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0AnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtODAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkaXJlY3RpdmU6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwaW5rLTYwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZW51bTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0UnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFtYmVyLTcwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZnVuY3Rpb246IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdGJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbi01MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIGludGVyZmFjZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0knLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRlYWwtNTAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICBsZXQ6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdLJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtZWRpdW1ncmF5XHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZ21vZHVsZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ00nLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhcmtvcmFuZ2VcclxuICAgICAgICApLFxyXG4gICAgICAgIHBhY2thZ2U6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdQaycsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHVycGxlLTYwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgcGlwZTogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1AnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtZ3JleS02MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIHR5cGUtYWxpYXM6IChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdUJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1ncmVlbi02MDBcclxuICAgICAgICApLFxyXG4gICAgICAgIHZhcjogKFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0snLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG1lZGl1bWdyYXlcclxuICAgICAgICApLFxyXG4pO1xyXG5cclxuLy8gT1RIRVJcclxuJHNtYWxsLWJyZWFrcG9pbnQtd2lkdGg6IDg0MHB4O1xyXG4kcGhvbmUtYnJlYWtwb2ludDogNDgwcHg7XHJcbiR0YWJsZXQtYnJlYWtwb2ludDogODAwcHg7XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/nav-item/nav-item.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/layout/nav-item/nav-item.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavItemComponent */

    /***/
    function srcAppLayoutNavItemNavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
        return NavItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var NavItemComponent = /*#__PURE__*/function () {
        function NavItemComponent() {
          _classCallCheck(this, NavItemComponent);

          this.isWide = false;
          this.level = 1;
          this.isParentExpanded = true;
          this.isExpanded = false;
          this.isSelected = false;
        }

        _createClass(NavItemComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this32 = this;

            this.nodeChildren = this.node && this.node.children ? this.node.children.filter(function (n) {
              return !n.hidden;
            }) : [];

            if (this.selectedNodes) {
              var ix = this.selectedNodes.find(function (node) {
                return node.title === _this32.node.title;
              });
              this.isSelected = ix !== undefined; // this node is the selected node or its ancestor
              // TODO: build this nice

              /*
              this.isExpanded = this.isParentExpanded &&
                (this.isSelected || // expand if selected or ...
                  // preserve expanded state when display is wide; collapse in mobile.
                  (this.isWide && this.isExpanded));
              */
            } else {
              this.isSelected = false;
            }

            this.setClasses();
          }
        }, {
          key: "setClasses",
          value: function setClasses() {
            var _this$classes;

            this.classes = (_this$classes = {}, _defineProperty(_this$classes, 'level-' + this.level, true), _defineProperty(_this$classes, "collapsed", !this.isExpanded), _defineProperty(_this$classes, "expanded", this.isExpanded), _defineProperty(_this$classes, "selected", this.isSelected), _this$classes);
          }
        }, {
          key: "headerClicked",
          value: function headerClicked() {
            this.isExpanded = !this.isExpanded;
            this.setClasses();
          }
        }]);

        return NavItemComponent;
      }();

      NavItemComponent.propDecorators = {
        isWide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isParentExpanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedNodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      NavItemComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-item',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./nav-item.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-item/nav-item.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./nav-item.component.scss */
        "./src/app/layout/nav-item/nav-item.component.scss"))["default"]]
      })], NavItemComponent);
      /***/
    },

    /***/
    "./src/app/shared/copier.service.ts":
    /*!******************************************!*\
      !*** ./src/app/shared/copier.service.ts ***!
      \******************************************/

    /*! exports provided: CopierService */

    /***/
    function srcAppSharedCopierServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CopierService", function () {
        return CopierService;
      });
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


      var CopierService = /*#__PURE__*/function () {
        function CopierService() {
          _classCallCheck(this, CopierService);
        }

        _createClass(CopierService, [{
          key: "copyTextArea",

          /**
           * Copy the contents of a `<textarea>` element to the clipboard.
           *
           * NOTE: For this method to work, the elements must be already inserted into the DOM.
           *
           * @param textArea The area containing the text to be copied to the clipboard.
           * @return Whether the copy operation was successful.
           */
          value: function copyTextArea(textArea) {
            var currentFocus = document.activeElement;

            try {
              textArea.select();
              textArea.setSelectionRange(0, textArea.value.length);
              return document.execCommand('copy');
            } catch (_a) {
              return false;
            } finally {
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

        }, {
          key: "createTextArea",
          value: function createTextArea(text) {
            var docElem = document.documentElement;
            var isRTL = docElem.getAttribute('dir') === 'rtl'; // Create a temporary element to hold the contents to copy.

            var textArea = document.createElement('textarea');
            var style = textArea.style; // Prevent zooming on iOS.

            style.fontSize = '12pt'; // Reset box model.

            style.border = '0';
            style.padding = '0';
            style.margin = '0'; // Make the element invisible and move it out of screen horizontally.

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

        }, {
          key: "copyText",
          value: function copyText(text) {
            // Create a `<textarea>` element with the specified text.
            var textArea = this.createTextArea(text); // Insert it into the DOM.

            document.body.appendChild(textArea); // Copy its contents to the clipboard.

            var success = this.copyTextArea(textArea); // Remove it from the DOM, so it can be garbage-collected.

            if (textArea.parentNode) {
              // We cannot use ChildNode.remove() because of IE11.
              textArea.parentNode.removeChild(textArea);
            }

            return success;
          }
        }]);

        return CopierService;
      }();
      /***/

    },

    /***/
    "./src/app/shared/logger.service.ts":
    /*!******************************************!*\
      !*** ./src/app/shared/logger.service.ts ***!
      \******************************************/

    /*! exports provided: Logger */

    /***/
    function srcAppSharedLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Logger", function () {
        return Logger;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var Logger = /*#__PURE__*/function () {
        function Logger(errorHandler) {
          _classCallCheck(this, Logger);

          this.errorHandler = errorHandler;
        }

        _createClass(Logger, [{
          key: "log",
          value: function log(value) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
              var _console;

              for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                rest[_key - 1] = arguments[_key];
              }

              (_console = console).log.apply(_console, [value].concat(rest));
            }
          }
        }, {
          key: "error",
          value: function error(_error) {
            this.errorHandler.handleError(_error);
          }
        }, {
          key: "warn",
          value: function warn(value) {
            var _console2;

            for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              rest[_key2 - 1] = arguments[_key2];
            }

            (_console2 = console).warn.apply(_console2, [value].concat(rest));
          }
        }]);

        return Logger;
      }();

      Logger.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
        }];
      };

      Logger = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]])], Logger);
      /***/
    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/fesm2015/common.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      })], SharedModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\tengelhardt\source\repos\angular-tree-component\projects\docs-app\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map