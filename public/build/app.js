"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./assets/App.vue");
/* harmony import */ var _components_EtapesKanban_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EtapesKanban.vue */ "./assets/components/EtapesKanban.vue");
/* harmony import */ var _styles_design_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/design-system.css */ "./assets/styles/design-system.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _components_ui_Button_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ui/Button.vue */ "./assets/components/ui/Button.vue");
/* harmony import */ var _components_ui_Card_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ui/Card.vue */ "./assets/components/ui/Card.vue");
/* harmony import */ var _components_ui_Modal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ui/Modal.vue */ "./assets/components/ui/Modal.vue");
/* harmony import */ var _components_ui_Badge_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ui/Badge.vue */ "./assets/components/ui/Badge.vue");




// Import du Design System



// Import des composants UI




var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

// Enregistrer les composants globalement
app.component('Button', _components_ui_Button_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.component('Card', _components_ui_Card_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.component('Modal', _components_ui_Modal_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.component('Badge', _components_ui_Badge_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.component('EtapesKanban', _components_EtapesKanban_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.mount('#app');

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  data: function data() {
    return {
      title: 'Business Manager',
      subtitle: 'Gestion de ton projet entrepreneurial - Mon Assistant Numérique',
      currentView: 'home'
    };
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_44__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }












































function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EtapesKanban',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_44___default())
  },
  data: function data() {
    return {
      etapes: [],
      showAddModal: false,
      editingEtape: null,
      saving: false,
      searchQuery: '',
      sortBy: 'ordre',
      filterPriority: 'all',
      form: {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0,
        priority: '',
        category: ''
      },
      // Listes locales pour le drag & drop
      todoList: [],
      inProgressList: [],
      doneList: []
    };
  },
  computed: {
    filteredEtapes: function filteredEtapes() {
      var _this = this;
      var filtered = _toConsumableArray(this.etapes);

      // Recherche
      if (this.searchQuery) {
        var query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(function (e) {
          return e.titre.toLowerCase().includes(query) || e.description && e.description.toLowerCase().includes(query) || e.category && e.category.toLowerCase().includes(query);
        });
      }

      // Filtre priorité
      if (this.filterPriority !== 'all') {
        filtered = filtered.filter(function (e) {
          return e.priority === _this.filterPriority;
        });
      }

      // Tri
      if (this.sortBy === 'date-asc') {
        filtered.sort(function (a, b) {
          var dateA = a.dateLimite ? new Date(a.dateLimite) : new Date('9999-12-31');
          var dateB = b.dateLimite ? new Date(b.dateLimite) : new Date('9999-12-31');
          return dateA - dateB;
        });
      } else if (this.sortBy === 'date-desc') {
        filtered.sort(function (a, b) {
          var dateA = a.dateLimite ? new Date(a.dateLimite) : new Date('1900-01-01');
          var dateB = b.dateLimite ? new Date(b.dateLimite) : new Date('1900-01-01');
          return dateB - dateA;
        });
      } else if (this.sortBy === 'alpha') {
        filtered.sort(function (a, b) {
          return a.titre.localeCompare(b.titre);
        });
      } else {
        filtered.sort(function (a, b) {
          return a.ordre - b.ordre;
        });
      }
      return filtered;
    },
    filteredEtapesByStatut: function filteredEtapesByStatut() {
      return {
        todo: this.filteredEtapes.filter(function (e) {
          return e.statut === 'todo';
        }),
        in_progress: this.filteredEtapes.filter(function (e) {
          return e.statut === 'in_progress';
        }),
        done: this.filteredEtapes.filter(function (e) {
          return e.statut === 'done';
        })
      };
    },
    progression: function progression() {
      if (this.etapes.length === 0) return 0;
      var done = this.etapes.filter(function (e) {
        return e.statut === 'done';
      }).length;
      return Math.round(done / this.etapes.length * 100);
    },
    progressVariant: function progressVariant() {
      if (this.progression === 100) return 'success';
      if (this.progression >= 50) return 'warning';
      return 'info';
    }
  },
  watch: {
    // Synchronise les listes locales quand les données changent
    filteredEtapesByStatut: {
      handler: function handler(newVal) {
        this.todoList = _toConsumableArray(newVal.todo);
        this.inProgressList = _toConsumableArray(newVal.in_progress);
        this.doneList = _toConsumableArray(newVal.done);
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function mounted() {
    this.loadEtapes();
  },
  methods: {
    loadEtapes: function loadEtapes() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return fetch('/api/etapes');
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.json();
            case 2:
              _this2.etapes = _context.v;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Erreur chargement étapes:', _t);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3]]);
      }))();
    },
    saveEtape: function saveEtape() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var url, method, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this3.saving = true;
              _context2.p = 1;
              url = _this3.editingEtape ? "/api/etapes/".concat(_this3.editingEtape.id) : '/api/etapes';
              method = _this3.editingEtape ? 'PUT' : 'POST';
              _context2.n = 2;
              return fetch(url, {
                method: method,
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(_this3.form)
              });
            case 2:
              _this3.closeModal();
              _context2.n = 3;
              return _this3.loadEtapes();
            case 3:
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error('Erreur sauvegarde:', _t2);
            case 5:
              _context2.p = 5;
              _this3.saving = false;
              return _context2.f(5);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 4, 5, 6]]);
      }))();
    },
    changeStatut: function changeStatut(etape, newStatut) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return fetch("/api/etapes/".concat(etape.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(_objectSpread(_objectSpread({}, etape), {}, {
                  statut: newStatut,
                  dateDebut: newStatut === 'in_progress' && !etape.dateDebut ? new Date().toISOString().split('T')[0] : etape.dateDebut
                }))
              });
            case 1:
              _context3.n = 2;
              return _this4.loadEtapes();
            case 2:
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
              console.error('Erreur changement statut:', _t3);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 3]]);
      }))();
    },
    deleteEtape: function deleteEtape(etape) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (confirm("Supprimer l'\xE9tape \"".concat(etape.titre, "\" ?"))) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _context4.p = 1;
              _context4.n = 2;
              return fetch("/api/etapes/".concat(etape.id), {
                method: 'DELETE'
              });
            case 2:
              _context4.n = 3;
              return _this5.loadEtapes();
            case 3:
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t4 = _context4.v;
              console.error('Erreur suppression:', _t4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 4]]);
      }))();
    },
    editEtape: function editEtape(etape) {
      this.editingEtape = etape;
      this.form = {
        titre: etape.titre,
        description: etape.description || '',
        dateDebut: etape.dateDebut || '',
        dateLimite: etape.dateLimite || '',
        notes: etape.notes || '',
        statut: etape.statut,
        ordre: etape.ordre,
        priority: etape.priority || '',
        category: etape.category || ''
      };
    },
    closeModal: function closeModal() {
      this.showAddModal = false;
      this.editingEtape = null;
      this.saving = false;
      this.form = {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0,
        priority: '',
        category: ''
      };
    },
    // Nouvelle méthode pour gérer le drag
    onDragUpdate: function onDragUpdate(statut) {
      var _this6 = this;
      // Cette fonction est appelée quand une liste change
      return function (event) {
        if (event.added) {
          var etape = event.added.element;
          if (etape.statut !== statut) {
            _this6.updateEtapeStatut(etape, statut);
          }
        }
      };
    },
    updateEtapeStatut: function updateEtapeStatut(etape, newStatut) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var index, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return fetch("/api/etapes/".concat(etape.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(_objectSpread(_objectSpread({}, etape), {}, {
                  statut: newStatut,
                  dateDebut: newStatut === 'in_progress' && !etape.dateDebut ? new Date().toISOString().split('T')[0] : etape.dateDebut
                }))
              });
            case 1:
              // Met à jour localement
              index = _this7.etapes.findIndex(function (e) {
                return e.id === etape.id;
              });
              if (index !== -1) {
                _this7.etapes[index].statut = newStatut;
              }
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t5 = _context5.v;
              console.error('Erreur changement statut:', _t5);
              // En cas d'erreur, recharge
              _context5.n = 3;
              return _this7.loadEtapes();
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      var date = new Date(dateString);
      return date.toLocaleDateString('fr-FR');
    },
    getPriorityIcon: function getPriorityIcon(priority) {
      var icons = {
        urgent: '🔴',
        normal: '🟡',
        low: '🟢'
      };
      return icons[priority] || '';
    },
    getPriorityVariant: function getPriorityVariant(priority) {
      var variants = {
        urgent: 'danger',
        normal: 'warning',
        low: 'success'
      };
      return variants[priority] || 'gray';
    },
    getPriorityLabel: function getPriorityLabel(priority) {
      var labels = {
        urgent: '🔴 Urgent',
        normal: '🟡 Normal',
        low: '🟢 Basse'
      };
      return labels[priority] || priority;
    },
    getDateVariant: function getDateVariant(dateLimite) {
      if (!dateLimite) return 'gray';
      var today = new Date();
      var limite = new Date(dateLimite);
      var diffDays = Math.ceil((limite - today) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) return 'danger';
      if (diffDays <= 7) return 'warning';
      return 'gray';
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Badge',
  props: {
    variant: {
      type: String,
      "default": 'primary',
      validator: function validator(value) {
        return ['primary', 'success', 'warning', 'danger', 'info', 'gray'].includes(value);
      }
    },
    size: {
      type: String,
      "default": 'md',
      validator: function validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
      }
    },
    pill: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    badgeClasses: function badgeClasses() {
      return ['badge', "badge-".concat(this.variant), "badge-".concat(this.size), {
        'badge-pill': this.pill
      }];
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Button',
  props: {
    variant: {
      type: String,
      "default": 'primary',
      // primary, secondary, success, danger, ghost
      validator: function validator(value) {
        return ['primary', 'secondary', 'success', 'danger', 'ghost'].includes(value);
      }
    },
    size: {
      type: String,
      "default": 'md',
      // sm, md, lg
      validator: function validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    buttonClasses: function buttonClasses() {
      return ['btn', "btn-".concat(this.variant), "btn-".concat(this.size), {
        'btn-disabled': this.disabled || this.loading
      }];
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Card',
  props: {
    hoverable: {
      type: Boolean,
      "default": false
    },
    bordered: {
      type: Boolean,
      "default": false
    },
    padding: {
      type: String,
      "default": 'md',
      // sm, md, lg, none
      validator: function validator(value) {
        return ['none', 'sm', 'md', 'lg'].includes(value);
      }
    }
  },
  computed: {
    cardClasses: function cardClasses() {
      return ['card', "card-padding-".concat(this.padding), {
        'card-hoverable': this.hoverable
      }, {
        'card-bordered': this.bordered
      }];
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      "default": 'md',
      // sm, md, lg, xl
      validator: function validator(value) {
        return ['sm', 'md', 'lg', 'xl'].includes(value);
      }
    }
  },
  methods: {
    close: function close() {
      this.$emit('close');
    }
  },
  watch: {
    show: function show(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03&scoped=true"
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

















function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  id: "app"
};
var _hoisted_2 = {
  "class": "app-header"
};
var _hoisted_3 = {
  "class": "app-nav"
};
var _hoisted_4 = {
  "class": "app-main"
};
var _hoisted_5 = {
  key: 0,
  "class": "welcome-card"
};
var _hoisted_6 = {
  "class": "features"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_EtapesKanban = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("EtapesKanban");
  return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.subtitle), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("nav", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.currentView = 'home';
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)({
      active: $data.currentView === 'home'
    })
  }, "🏠 Accueil", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.currentView = 'etapes';
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)({
      active: $data.currentView === 'etapes'
    })
  }, "📋 Suivi des Étapes", 2 /* CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("main", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Accueil "), $data.currentView === 'home' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_5, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h2", null, "Bienvenue sur ton Business Manager", -1 /* CACHED */)), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Ton tableau de bord entrepreneurial est prêt !", -1 /* CACHED */)), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
    "class": "status"
  }, "✅ Symfony 7.2 + Vue.js 3 fonctionnent parfaitement", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "feature",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.currentView = 'etapes';
    })
  }, _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "📋 Suivi des Étapes", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Gère toutes les étapes de création de ton entreprise", -1 /* CACHED */)]))), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "feature coming-soon"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "📁 Documents"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Bientôt disponible")], -1 /* CACHED */)), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "feature coming-soon"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "📅 Calendrier"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Bientôt disponible")], -1 /* CACHED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Suivi des Étapes "), $data.currentView === 'etapes' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_EtapesKanban, {
    key: 1
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true"
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

















function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "etapes-kanban"
};
var _hoisted_2 = {
  "class": "kanban-header"
};
var _hoisted_3 = {
  "class": "header-content"
};
var _hoisted_4 = {
  "class": "header-actions"
};
var _hoisted_5 = {
  "class": "filters-container"
};
var _hoisted_6 = {
  "class": "search-box"
};
var _hoisted_7 = {
  "class": "filters"
};
var _hoisted_8 = {
  key: 0,
  "class": "active-filters"
};
var _hoisted_9 = {
  "class": "progress-header"
};
var _hoisted_10 = {
  "class": "progress-bar"
};
var _hoisted_11 = {
  key: 0,
  "class": "progress-text"
};
var _hoisted_12 = {
  "class": "progress-stats"
};
var _hoisted_13 = {
  "class": "stat"
};
var _hoisted_14 = {
  "class": "stat-value"
};
var _hoisted_15 = {
  "class": "stat"
};
var _hoisted_16 = {
  "class": "stat-value"
};
var _hoisted_17 = {
  "class": "stat"
};
var _hoisted_18 = {
  "class": "stat-value"
};
var _hoisted_19 = {
  "class": "kanban-board"
};
var _hoisted_20 = {
  "class": "kanban-column"
};
var _hoisted_21 = {
  "class": "column-header todo-header"
};
var _hoisted_22 = {
  "class": "column-content"
};
var _hoisted_23 = {
  "class": "card-content"
};
var _hoisted_24 = {
  "class": "card-header-row"
};
var _hoisted_25 = {
  "class": "card-title"
};
var _hoisted_26 = {
  key: 0,
  "class": "card-description"
};
var _hoisted_27 = {
  "class": "card-meta"
};
var _hoisted_28 = {
  "class": "card-actions"
};
var _hoisted_29 = {
  key: 0,
  "class": "empty-state"
};
var _hoisted_30 = {
  "class": "kanban-column"
};
var _hoisted_31 = {
  "class": "column-header progress-header"
};
var _hoisted_32 = {
  "class": "column-content"
};
var _hoisted_33 = {
  "class": "card-content"
};
var _hoisted_34 = {
  "class": "card-header-row"
};
var _hoisted_35 = {
  "class": "card-title"
};
var _hoisted_36 = {
  key: 0,
  "class": "card-description"
};
var _hoisted_37 = {
  "class": "card-meta"
};
var _hoisted_38 = {
  "class": "card-actions"
};
var _hoisted_39 = {
  key: 0,
  "class": "empty-state"
};
var _hoisted_40 = {
  "class": "kanban-column"
};
var _hoisted_41 = {
  "class": "column-header done-header"
};
var _hoisted_42 = {
  "class": "column-content"
};
var _hoisted_43 = {
  "class": "card-content"
};
var _hoisted_44 = {
  "class": "card-title"
};
var _hoisted_45 = {
  key: 0,
  "class": "card-description"
};
var _hoisted_46 = {
  "class": "card-meta"
};
var _hoisted_47 = {
  "class": "card-actions"
};
var _hoisted_48 = {
  key: 0,
  "class": "empty-state"
};
var _hoisted_49 = {
  "class": "form-group"
};
var _hoisted_50 = {
  "class": "form-row"
};
var _hoisted_51 = {
  "class": "form-group"
};
var _hoisted_52 = {
  "class": "form-group"
};
var _hoisted_53 = {
  "class": "form-group"
};
var _hoisted_54 = {
  "class": "form-row"
};
var _hoisted_55 = {
  "class": "form-group"
};
var _hoisted_56 = {
  "class": "form-group"
};
var _hoisted_57 = {
  "class": "form-group"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Button");
  var _component_Badge = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Badge");
  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Card");
  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("draggable");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Header modernisé avec filtres "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_3, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "header-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h2", null, "📋 Suivi des Étapes"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
    "class": "subtitle"
  }, "Création d'Entreprise - Mon Assistant Numérique")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showAddModal = true;
    }),
    size: "lg"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[21] || (_cache[21] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "icon"
      }, "✨", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Nouvelle Étape ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Barre de recherche et filtres "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "filters-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_6, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "search-icon"
      }, "🔍", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.searchQuery = $event;
        }),
        type: "text",
        placeholder: "Rechercher une étape...",
        "class": "search-input"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.searchQuery]]), $data.searchQuery ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $data.searchQuery = '';
        }),
        "class": "clear-search"
      }, "✕")) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.sortBy = $event;
        }),
        "class": "filter-select"
      }, _toConsumableArray(_cache[24] || (_cache[24] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "ordre"
      }, "📊 Ordre", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "date-asc"
      }, "📅 Date (plus ancienne)", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "date-desc"
      }, "📅 Date (plus récente)", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "alpha"
      }, "🔤 Alphabétique", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.sortBy]]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.filterPriority = $event;
        }),
        "class": "filter-select"
      }, _toConsumableArray(_cache[25] || (_cache[25] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "all"
      }, "Toutes priorités", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "urgent"
      }, "🔴 Urgent", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "normal"
      }, "🟡 Normal", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "low"
      }, "🟢 Basse", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.filterPriority]])])]), $data.searchQuery || $data.filterPriority !== 'all' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_8, [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "filter-label"
      }, "Filtres actifs :", -1 /* CACHED */)), $data.searchQuery ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
        key: 0,
        variant: "info",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $data.searchQuery = '';
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 🔍 \"" + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.searchQuery) + "\" ✕ ", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), $data.filterPriority !== 'all' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
        key: 1,
        variant: "warning",
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $data.filterPriority = 'all';
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getPriorityLabel($data.filterPriority)) + " ✕ ", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Barre de progression modernisée "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "progress-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_9, [_cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "progress-label"
      }, "Progression globale", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
        variant: $options.progressVariant,
        size: "lg",
        pill: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.progression) + "%", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["variant"])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "progress-fill",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeStyle)({
          width: $options.progression + '%'
        })
      }, [$options.progression > 10 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.progression) + "%", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)], 4 /* STYLE */)]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.done.length), 1 /* TEXT */), _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "Terminées", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.in_progress.length), 1 /* TEXT */), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "En cours", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.todo.length), 1 /* TEXT */), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "À faire", -1 /* CACHED */))])])];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Board Kanban avec Drag & Drop "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Colonne À FAIRE "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_21, [_cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "column-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "column-icon"
  }, "📝"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "À Faire")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
    variant: "gray",
    pill: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.todo.length), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_draggable, {
    modelValue: $data.todoList,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.todoList = $event;
    }),
    group: "etapes",
    "item-key": "id",
    onChange: _cache[8] || (_cache[8] = function ($event) {
      return $options.onDragUpdate('todo');
    }),
    "class": "draggable-list",
    animation: 200
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function (_ref) {
      var etape = _ref.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
        "class": "kanban-card todo-card",
        hoverable: "",
        onClick: function onClick($event) {
          return $options.editEtape(etape);
        }
      }, {
        footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.changeStatut(etape, 'in_progress');
            }, ["stop"]),
            variant: "ghost",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[32] || (_cache[32] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ▶️ Démarrer ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.deleteEtape(etape);
            }, ["stop"]),
            variant: "danger",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[33] || (_cache[33] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 🗑️ ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"])])];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.priority ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: $options.getPriorityVariant(etape.priority),
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getPriorityIcon(etape.priority)), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)]), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("p", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_27, [etape.dateLimite ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: $options.getDateVariant(etape.dateLimite),
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 📅 " + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatDate(etape.dateLimite)), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), etape.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 1,
            variant: "gray",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.category), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), $options.filteredEtapesByStatut.todo.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_29, [_cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "empty-icon"
  }, "✅", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.searchQuery ? 'Aucun résultat' : 'Aucune étape à faire'), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Colonne EN COURS "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_31, [_cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "column-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "column-icon"
  }, "⏳"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "En Cours")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
    variant: "warning",
    pill: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.in_progress.length), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_draggable, {
    modelValue: $data.inProgressList,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.inProgressList = $event;
    }),
    group: "etapes",
    "item-key": "id",
    onChange: _cache[10] || (_cache[10] = function ($event) {
      return $options.onDragUpdate('in_progress');
    }),
    "class": "draggable-list",
    animation: 200
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function (_ref2) {
      var etape = _ref2.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
        "class": "kanban-card progress-card",
        hoverable: "",
        onClick: function onClick($event) {
          return $options.editEtape(etape);
        }
      }, {
        footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.changeStatut(etape, 'todo');
            }, ["stop"]),
            variant: "ghost",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[37] || (_cache[37] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ⬅️ ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.changeStatut(etape, 'done');
            }, ["stop"]),
            variant: "success",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[38] || (_cache[38] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ✅ Terminer ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"])])];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_33, [_cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
            "class": "card-status"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
            "class": "pulse-dot"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", null, "En cours")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.priority ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: $options.getPriorityVariant(etape.priority),
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getPriorityIcon(etape.priority)), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)]), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("p", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_37, [etape.dateDebut ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: "info",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 🚀 " + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatDate(etape.dateDebut)), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), etape.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 1,
            variant: "gray",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.category), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), $options.filteredEtapesByStatut.in_progress.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_39, [_cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "empty-icon"
  }, "💤", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.searchQuery ? 'Aucun résultat' : 'Aucune étape en cours'), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Colonne TERMINÉ "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_41, [_cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "column-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "column-icon"
  }, "✅"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Terminé")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
    variant: "success",
    pill: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.done.length), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_draggable, {
    modelValue: $data.doneList,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.doneList = $event;
    }),
    group: "etapes",
    "item-key": "id",
    onChange: _cache[12] || (_cache[12] = function ($event) {
      return $options.onDragUpdate('done');
    }),
    "class": "draggable-list",
    animation: 200
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function (_ref3) {
      var etape = _ref3.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
        "class": "kanban-card done-card",
        hoverable: "",
        onClick: function onClick($event) {
          return $options.editEtape(etape);
        }
      }, {
        footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.changeStatut(etape, 'in_progress');
            }, ["stop"]),
            variant: "ghost",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[42] || (_cache[42] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ↩️ Réouvrir ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"])])];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_43, [_cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
            "class": "card-status success"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
            "class": "success-icon"
          }, "🎉"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", null, "Terminé")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("p", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_46, [etape.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: "gray",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.category), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), $options.filteredEtapesByStatut.done.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_48, [_cache[43] || (_cache[43] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "empty-icon"
  }, "🎯", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.searchQuery ? 'Aucun résultat' : 'Aucune étape terminée'), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Modal avec champs de priorité et catégorie "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Modal, {
    show: $data.showAddModal || !!$data.editingEtape,
    title: $data.editingEtape ? 'Modifier l\'étape' : 'Nouvelle étape',
    onClose: $options.closeModal,
    size: "lg"
  }, {
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.closeModal,
        variant: "secondary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[52] || (_cache[52] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Annuler ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.saveEtape,
        loading: $data.saving
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.editingEtape ? '💾 Mettre à jour' : '✨ Créer'), 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick", "loading"])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("form", {
        onSubmit: _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function () {
          return $options.saveEtape && $options.saveEtape.apply($options, arguments);
        }, ["prevent"])),
        "class": "etape-form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_49, [_cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)("Titre "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "required"
      }, "*")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          return $data.form.titre = $event;
        }),
        type: "text",
        "class": "form-input",
        placeholder: "Ex: Étude de marché",
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.titre]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_51, [_cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "Priorité", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
          return $data.form.priority = $event;
        }),
        "class": "form-input"
      }, _toConsumableArray(_cache[45] || (_cache[45] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: ""
      }, "Aucune", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "urgent"
      }, "🔴 Urgent", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "normal"
      }, "🟡 Normal", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "low"
      }, "🟢 Basse", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.form.priority]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_52, [_cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "Catégorie", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
          return $data.form.category = $event;
        }),
        type: "text",
        "class": "form-input",
        placeholder: "Ex: Administratif, Formation..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.category]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_53, [_cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          return $data.form.description = $event;
        }),
        rows: "3",
        "class": "form-input",
        placeholder: "Décrivez cette étape..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_55, [_cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "📅 Date de début", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
          return $data.form.dateDebut = $event;
        }),
        type: "date",
        "class": "form-input"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.dateDebut]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_56, [_cache[50] || (_cache[50] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "⏰ Date limite", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
          return $data.form.dateLimite = $event;
        }),
        type: "date",
        "class": "form-input"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.dateLimite]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_57, [_cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "📝 Notes", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
          return $data.form.notes = $event;
        }),
        rows: "4",
        "class": "form-input",
        placeholder: "Ajoutez des notes, liens, ou informations supplémentaires..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.notes]])])], 32 /* NEED_HYDRATION */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "title", "onClose"])]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.badgeClasses)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)], 2 /* CLASS */);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true"
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["disabled"];
var _hoisted_2 = {
  key: 0,
  "class": "spinner"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.buttonClasses),
    disabled: $props.disabled || $props.loading,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('click', $event);
    })
  }, [$props.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    key: 1
  }, undefined, true)], 10 /* CLASS, PROPS */, _hoisted_1);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "card-header"
};
var _hoisted_2 = {
  "class": "card-body"
};
var _hoisted_3 = {
  key: 1,
  "class": "card-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.cardClasses)
  }, [_ctx.$slots.header ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "header", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _ctx.$slots.footer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal-header"
};
var _hoisted_2 = {
  "class": "modal-body"
};
var _hoisted_3 = {
  key: 0,
  "class": "modal-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "modal"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        "class": "modal-overlay",
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.close && $options.close.apply($options, arguments);
        }, ["self"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["modal-container", "modal-".concat($props.size)])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.close && $options.close.apply($options, arguments);
        }),
        "class": "modal-close"
      }, "✕")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _ctx.$slots.footer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  });
}

/***/ },

/***/ "./assets/styles/app.css"
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./assets/styles/design-system.css"
/*!*****************************************!*\
  !*** ./assets/styles/design-system.css ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&scoped=true&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./assets/App.vue"
/*!************************!*\
  !*** ./assets/App.vue ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_5bcdaf03_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5bcdaf03&scoped=true */ "./assets/App.vue?vue&type=template&id=5bcdaf03&scoped=true");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./assets/App.vue?vue&type=script&lang=js");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_5bcdaf03_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5bcdaf03&scoped=true&lang=css */ "./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_5bcdaf03_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5bcdaf03"],['__file',"assets/App.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/EtapesKanban.vue"
/*!********************************************!*\
  !*** ./assets/components/EtapesKanban.vue ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EtapesKanban_vue_vue_type_template_id_07e7c4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true */ "./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true");
/* harmony import */ var _EtapesKanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EtapesKanban.vue?vue&type=script&lang=js */ "./assets/components/EtapesKanban.vue?vue&type=script&lang=js");
/* harmony import */ var _EtapesKanban_vue_vue_type_style_index_0_id_07e7c4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css */ "./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EtapesKanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EtapesKanban_vue_vue_type_template_id_07e7c4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-07e7c4c4"],['__file',"assets/components/EtapesKanban.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/ui/Badge.vue"
/*!****************************************!*\
  !*** ./assets/components/ui/Badge.vue ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Badge_vue_vue_type_template_id_62784023_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge.vue?vue&type=template&id=62784023&scoped=true */ "./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true");
/* harmony import */ var _Badge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge.vue?vue&type=script&lang=js */ "./assets/components/ui/Badge.vue?vue&type=script&lang=js");
/* harmony import */ var _Badge_vue_vue_type_style_index_0_id_62784023_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css */ "./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Badge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Badge_vue_vue_type_template_id_62784023_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-62784023"],['__file',"assets/components/ui/Badge.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/ui/Button.vue"
/*!*****************************************!*\
  !*** ./assets/components/ui/Button.vue ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_77bc3b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=77bc3b3c&scoped=true */ "./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true");
/* harmony import */ var _Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js */ "./assets/components/ui/Button.vue?vue&type=script&lang=js");
/* harmony import */ var _Button_vue_vue_type_style_index_0_id_77bc3b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css */ "./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_77bc3b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-77bc3b3c"],['__file',"assets/components/ui/Button.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/ui/Card.vue"
/*!***************************************!*\
  !*** ./assets/components/ui/Card.vue ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_5576c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=5576c580&scoped=true */ "./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true");
/* harmony import */ var _Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js */ "./assets/components/ui/Card.vue?vue&type=script&lang=js");
/* harmony import */ var _Card_vue_vue_type_style_index_0_id_5576c580_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css */ "./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Card_vue_vue_type_template_id_5576c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5576c580"],['__file',"assets/components/ui/Card.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/ui/Modal.vue"
/*!****************************************!*\
  !*** ./assets/components/ui/Modal.vue ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_65df0a2d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=65df0a2d&scoped=true */ "./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./assets/components/ui/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _Modal_vue_vue_type_style_index_0_id_65df0a2d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css */ "./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_vue_vue_type_template_id_65df0a2d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-65df0a2d"],['__file',"assets/components/ui/Modal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/App.vue?vue&type=script&lang=js"
/*!************************************************!*\
  !*** ./assets/App.vue?vue&type=script&lang=js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/EtapesKanban.vue?vue&type=script&lang=js"
/*!********************************************************************!*\
  !*** ./assets/components/EtapesKanban.vue?vue&type=script&lang=js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EtapesKanban.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/ui/Badge.vue?vue&type=script&lang=js"
/*!****************************************************************!*\
  !*** ./assets/components/ui/Badge.vue?vue&type=script&lang=js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Badge.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/ui/Button.vue?vue&type=script&lang=js"
/*!*****************************************************************!*\
  !*** ./assets/components/ui/Button.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/ui/Card.vue?vue&type=script&lang=js"
/*!***************************************************************!*\
  !*** ./assets/components/ui/Card.vue?vue&type=script&lang=js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/ui/Modal.vue?vue&type=script&lang=js"
/*!****************************************************************!*\
  !*** ./assets/components/ui/Modal.vue?vue&type=script&lang=js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/App.vue?vue&type=template&id=5bcdaf03&scoped=true"
/*!******************************************************************!*\
  !*** ./assets/App.vue?vue&type=template&id=5bcdaf03&scoped=true ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=5bcdaf03&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03&scoped=true");


/***/ },

/***/ "./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true"
/*!**************************************************************************************!*\
  !*** ./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_template_id_07e7c4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_template_id_07e7c4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true");


/***/ },

/***/ "./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true"
/*!**********************************************************************************!*\
  !*** ./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_template_id_62784023_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_template_id_62784023_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Badge.vue?vue&type=template&id=62784023&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true");


/***/ },

/***/ "./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true"
/*!***********************************************************************************!*\
  !*** ./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_77bc3b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_77bc3b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=template&id=77bc3b3c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true");


/***/ },

/***/ "./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true"
/*!*********************************************************************************!*\
  !*** ./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_5576c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_5576c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=template&id=5576c580&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true");


/***/ },

/***/ "./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true"
/*!**********************************************************************************!*\
  !*** ./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_65df0a2d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_65df0a2d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=template&id=65df0a2d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true");


/***/ },

/***/ "./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&scoped=true&lang=css"
/*!********************************************************************************!*\
  !*** ./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&scoped=true&lang=css ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_5bcdaf03_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=5bcdaf03&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css"
/*!****************************************************************************************************!*\
  !*** ./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_style_index_0_id_07e7c4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css"
/*!************************************************************************************************!*\
  !*** ./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_style_index_0_id_62784023_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css"
/*!*************************************************************************************************!*\
  !*** ./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_style_index_0_id_77bc3b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css"
/*!***********************************************************************************************!*\
  !*** ./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_5576c580_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css"
/*!************************************************************************************************!*\
  !*** ./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_65df0a2d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css");


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_vuedraggable_dist_vuedragga-a560ae"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkQsQ0FBNEU7O0FBRU87QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMsMEVBQU0sYUFBYSx3RkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFO0FBQUEsRUFZZjs7O0FBR0QsaUVBQWUsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJnRTtBQUN0QjtBQUNMOztBQUVwRCxDQUE2RTs7QUFFTTtBQUNuRixpQ0FBaUMseUZBQWUsQ0FBQywyRUFBTSxhQUFhLHlGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQVlmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjhEO0FBQ3RCO0FBQ0w7O0FBRWxELENBQTJFOztBQUVRO0FBQ25GLGlDQUFpQyx5RkFBZSxDQUFDLHlFQUFNLGFBQWEsdUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBWWY7OztBQUdELGlFQUFlLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCK0Q7QUFDdEI7QUFDTDs7QUFFbkQsQ0FBNEU7O0FBRU87QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMsMEVBQU0sYUFBYSx3RkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFO0FBQUEsRUFZZjs7O0FBR0QsaUVBQWUsVzs7Ozs7Ozs7Ozs7Ozs7O0FDeEI2SyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNBZSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNBRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNBRixDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9CdXR0b24udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/OWQ3MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Rlc2lnbi1zeXN0ZW0uY3NzP2RiN2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/YmFlMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlP2M0NjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQmFkZ2UudnVlPzI5NzYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZT9jNzE3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlP2U1MzYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvTW9kYWwudnVlP2UzODQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/ODlkYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlP2I5OGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQmFkZ2UudnVlPzU4NDgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZT9mODMyIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlPzU1MTIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvTW9kYWwudnVlPzFmMzAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/N2UwMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlPzRiYWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQmFkZ2UudnVlPzAwNjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZT8wMThhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlP2U2ZWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvTW9kYWwudnVlP2QzMjUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/MjlmMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlPzUwNmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQmFkZ2UudnVlP2Y0OWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZT83YTlhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlPzQ1Y2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvTW9kYWwudnVlP2JlODkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/ZmQ3ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlPzA0OWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQmFkZ2UudnVlP2NkOTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZT8zOWZiIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlPzVkMmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvTW9kYWwudnVlPzFmN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xyXG5pbXBvcnQgRXRhcGVzS2FuYmFuIGZyb20gJy4vY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlJztcclxuXHJcbi8vIEltcG9ydCBkdSBEZXNpZ24gU3lzdGVtXHJcbmltcG9ydCAnLi9zdHlsZXMvZGVzaWduLXN5c3RlbS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5cclxuLy8gSW1wb3J0IGRlcyBjb21wb3NhbnRzIFVJXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL3VpL0J1dHRvbi52dWUnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvdWkvQ2FyZC52dWUnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZSc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvQmFkZ2UudnVlJztcclxuXHJcbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApO1xyXG5cclxuLy8gRW5yZWdpc3RyZXIgbGVzIGNvbXBvc2FudHMgZ2xvYmFsZW1lbnRcclxuYXBwLmNvbXBvbmVudCgnQnV0dG9uJywgQnV0dG9uKTtcclxuYXBwLmNvbXBvbmVudCgnQ2FyZCcsIENhcmQpO1xyXG5hcHAuY29tcG9uZW50KCdNb2RhbCcsIE1vZGFsKTtcclxuYXBwLmNvbXBvbmVudCgnQmFkZ2UnLCBCYWRnZSk7XHJcbmFwcC5jb21wb25lbnQoJ0V0YXBlc0thbmJhbicsIEV0YXBlc0thbmJhbik7XHJcblxyXG5hcHAubW91bnQoJyNhcHAnKTsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cclxuICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cclxuICAgICAgPHA+e3sgc3VidGl0bGUgfX08L3A+XHJcbiAgICAgIDxuYXYgY2xhc3M9XCJhcHAtbmF2XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjdXJyZW50VmlldyA9ICdob21lJ1wiIDpjbGFzcz1cInsgYWN0aXZlOiBjdXJyZW50VmlldyA9PT0gJ2hvbWUnIH1cIj7wn4+gIEFjY3VlaWw8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2V0YXBlcydcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogY3VycmVudFZpZXcgPT09ICdldGFwZXMnIH1cIj7wn5OLIFN1aXZpIGRlcyDDiXRhcGVzPC9idXR0b24+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICBcclxuICAgIDxtYWluIGNsYXNzPVwiYXBwLW1haW5cIj5cclxuICAgICAgPCEtLSBWdWUgQWNjdWVpbCAtLT5cclxuICAgICAgPGRpdiB2LWlmPVwiY3VycmVudFZpZXcgPT09ICdob21lJ1wiIGNsYXNzPVwid2VsY29tZS1jYXJkXCI+XHJcbiAgICAgICAgPGgyPkJpZW52ZW51ZSBzdXIgdG9uIEJ1c2luZXNzIE1hbmFnZXI8L2gyPlxyXG4gICAgICAgIDxwPlRvbiB0YWJsZWF1IGRlIGJvcmQgZW50cmVwcmVuZXVyaWFsIGVzdCBwcsOqdCAhPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCI+4pyFIFN5bWZvbnkgNy4yICsgVnVlLmpzIDMgZm9uY3Rpb25uZW50IHBhcmZhaXRlbWVudDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlXCIgQGNsaWNrPVwiY3VycmVudFZpZXcgPSAnZXRhcGVzJ1wiPlxyXG4gICAgICAgICAgICA8aDM+8J+TiyBTdWl2aSBkZXMgw4l0YXBlczwvaDM+XHJcbiAgICAgICAgICAgIDxwPkfDqHJlIHRvdXRlcyBsZXMgw6l0YXBlcyBkZSBjcsOpYXRpb24gZGUgdG9uIGVudHJlcHJpc2U8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlIGNvbWluZy1zb29uXCI+XHJcbiAgICAgICAgICAgIDxoMz7wn5OBIERvY3VtZW50czwvaDM+XHJcbiAgICAgICAgICAgIDxwPkJpZW50w7R0IGRpc3BvbmlibGU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlIGNvbWluZy1zb29uXCI+XHJcbiAgICAgICAgICAgIDxoMz7wn5OFIENhbGVuZHJpZXI8L2gzPlxyXG4gICAgICAgICAgICA8cD5CaWVudMO0dCBkaXNwb25pYmxlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBWdWUgU3VpdmkgZGVzIMOJdGFwZXMgLS0+XHJcbiAgICAgIDxFdGFwZXNLYW5iYW4gdi1pZj1cImN1cnJlbnRWaWV3ID09PSAnZXRhcGVzJ1wiIC8+XHJcbiAgICA8L21haW4+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0FwcCcsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAnQnVzaW5lc3MgTWFuYWdlcicsXHJcbiAgICAgIHN1YnRpdGxlOiAnR2VzdGlvbiBkZSB0b24gcHJvamV0IGVudHJlcHJlbmV1cmlhbCAtIE1vbiBBc3Npc3RhbnQgTnVtw6lyaXF1ZScsXHJcbiAgICAgIGN1cnJlbnRWaWV3OiAnaG9tZSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uYXBwLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIgaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIgcCB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gMCAxcmVtIDA7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uYXBwLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uYXBwLW5hdiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5hcHAtbmF2IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG59XHJcblxyXG4uYXBwLW5hdiBidXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzY2N2VlYTtcclxufVxyXG5cclxuLmFwcC1tYWluIHtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLndlbGNvbWUtY2FyZCBoMiB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgY29sb3I6ICMxMGI5ODE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmZlYXR1cmVzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcbn1cclxuXHJcbi5mZWF0dXJlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XHJcbn1cclxuXHJcbi5mZWF0dXJlLmNvbWluZy1zb29uIHtcclxuICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gIGNvbG9yOiAjNzE4MDk2O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmZlYXR1cmUuY29taW5nLXNvb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZmVhdHVyZSBoMyB7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImV0YXBlcy1rYW5iYW5cIj5cclxuICAgIDwhLS0gSGVhZGVyIG1vZGVybmlzw6kgYXZlYyBmaWx0cmVzIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImthbmJhbi1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPvCfk4sgU3VpdmkgZGVzIMOJdGFwZXM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPkNyw6lhdGlvbiBkJ0VudHJlcHJpc2UgLSBNb24gQXNzaXN0YW50IE51bcOpcmlxdWU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIEBjbGljaz1cInNob3dBZGRNb2RhbCA9IHRydWVcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+4pyoPC9zcGFuPiBOb3V2ZWxsZSDDiXRhcGVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDwhLS0gQmFycmUgZGUgcmVjaGVyY2hlIGV0IGZpbHRyZXMgLS0+XHJcbiAgICAgIDxDYXJkIGNsYXNzPVwiZmlsdGVycy1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlYXJjaC1pY29uXCI+8J+UjTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hRdWVyeVwiIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyIHVuZSDDqXRhcGUuLi5cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwic2VhcmNoLWlucHV0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJzZWFyY2hRdWVyeVwiIEBjbGljaz1cInNlYXJjaFF1ZXJ5ID0gJydcIiBjbGFzcz1cImNsZWFyLXNlYXJjaFwiPuKclTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJzXCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInNvcnRCeVwiIGNsYXNzPVwiZmlsdGVyLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcmRyZVwiPvCfk4ogT3JkcmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGF0ZS1hc2NcIj7wn5OFIERhdGUgKHBsdXMgYW5jaWVubmUpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhdGUtZGVzY1wiPvCfk4UgRGF0ZSAocGx1cyByw6ljZW50ZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxwaGFcIj7wn5SkIEFscGhhYsOpdGlxdWU8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJmaWx0ZXJQcmlvcml0eVwiIGNsYXNzPVwiZmlsdGVyLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5Ub3V0ZXMgcHJpb3JpdMOpczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1cmdlbnRcIj7wn5S0IFVyZ2VudDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3JtYWxcIj7wn5+hIE5vcm1hbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj7wn5+iIEJhc3NlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiB2LWlmPVwic2VhcmNoUXVlcnkgfHwgZmlsdGVyUHJpb3JpdHkgIT09ICdhbGwnXCIgY2xhc3M9XCJhY3RpdmUtZmlsdGVyc1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWx0ZXItbGFiZWxcIj5GaWx0cmVzIGFjdGlmcyA6PC9zcGFuPlxyXG4gICAgICAgICAgPEJhZGdlIHYtaWY9XCJzZWFyY2hRdWVyeVwiIHZhcmlhbnQ9XCJpbmZvXCIgQGNsaWNrPVwic2VhcmNoUXVlcnkgPSAnJ1wiPlxyXG4gICAgICAgICAgICDwn5SNIFwie3sgc2VhcmNoUXVlcnkgfX1cIiDinJVcclxuICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8QmFkZ2Ugdi1pZj1cImZpbHRlclByaW9yaXR5ICE9PSAnYWxsJ1wiIHZhcmlhbnQ9XCJ3YXJuaW5nXCIgQGNsaWNrPVwiZmlsdGVyUHJpb3JpdHkgPSAnYWxsJ1wiPlxyXG4gICAgICAgICAgICB7eyBnZXRQcmlvcml0eUxhYmVsKGZpbHRlclByaW9yaXR5KSB9fSDinJVcclxuICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgXHJcbiAgICAgIDwhLS0gQmFycmUgZGUgcHJvZ3Jlc3Npb24gbW9kZXJuaXPDqWUgLS0+XHJcbiAgICAgIDxDYXJkIGNsYXNzPVwicHJvZ3Jlc3MtY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1oZWFkZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZ3Jlc3MtbGFiZWxcIj5Qcm9ncmVzc2lvbiBnbG9iYWxlPC9zcGFuPlxyXG4gICAgICAgICAgPEJhZGdlIDp2YXJpYW50PVwicHJvZ3Jlc3NWYXJpYW50XCIgc2l6ZT1cImxnXCIgcGlsbD57eyBwcm9ncmVzc2lvbiB9fSU8L0JhZGdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1maWxsXCIgOnN0eWxlPVwieyB3aWR0aDogcHJvZ3Jlc3Npb24gKyAnJScgfVwiPlxyXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwicHJvZ3Jlc3Npb24gPiAxMFwiIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPnt7IHByb2dyZXNzaW9uIH19JTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1zdGF0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+e3sgZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC5kb25lLmxlbmd0aCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LWxhYmVsXCI+VGVybWluw6llczwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+e3sgZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC5pbl9wcm9ncmVzcy5sZW5ndGggfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPkVuIGNvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LnRvZG8ubGVuZ3RoIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj7DgCBmYWlyZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIEJvYXJkIEthbmJhbiBhdmVjIERyYWcgJiBEcm9wIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImthbmJhbi1ib2FyZFwiPlxyXG4gICAgICA8IS0tIENvbG9ubmUgw4AgRkFJUkUgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJrYW5iYW4tY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1oZWFkZXIgdG9kby1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4taWNvblwiPvCfk508L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMz7DgCBGYWlyZTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwiZ3JheVwiIHBpbGw+e3sgZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC50b2RvLmxlbmd0aCB9fTwvQmFkZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ0b2RvTGlzdFwiXHJcbiAgICAgICAgICAgIGdyb3VwPVwiZXRhcGVzXCJcclxuICAgICAgICAgICAgaXRlbS1rZXk9XCJpZFwiXHJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkRyYWdVcGRhdGUoJ3RvZG8nKVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZHJhZ2dhYmxlLWxpc3RcIlxyXG4gICAgICAgICAgICA6YW5pbWF0aW9uPVwiMjAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwieyBlbGVtZW50OiBldGFwZSB9XCI+XHJcbiAgICAgICAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImthbmJhbi1jYXJkIHRvZG8tY2FyZFwiXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cImVkaXRFdGFwZShldGFwZSlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBldGFwZS50aXRyZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImV0YXBlLnByaW9yaXR5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6dmFyaWFudD1cImdldFByaW9yaXR5VmFyaWFudChldGFwZS5wcmlvcml0eSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRQcmlvcml0eUljb24oZXRhcGUucHJpb3JpdHkpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJldGFwZS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiY2FyZC1kZXNjcmlwdGlvblwiPnt7IGV0YXBlLmRlc2NyaXB0aW9uIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZXRhcGUuZGF0ZUxpbWl0ZVwiIDp2YXJpYW50PVwiZ2V0RGF0ZVZhcmlhbnQoZXRhcGUuZGF0ZUxpbWl0ZSlcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIPCfk4Uge3sgZm9ybWF0RGF0ZShldGFwZS5kYXRlTGltaXRlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHYtaWY9XCJldGFwZS5jYXRlZ29yeVwiIHZhcmlhbnQ9XCJncmF5XCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBldGFwZS5jYXRlZ29yeSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiY2hhbmdlU3RhdHV0KGV0YXBlLCAnaW5fcHJvZ3Jlc3MnKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIOKWtu+4jyBEw6ltYXJyZXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJkZWxldGVFdGFwZShldGFwZSlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg8J+Xke+4j1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC9kcmFnZ2FibGU+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgdi1pZj1cImZpbHRlcmVkRXRhcGVzQnlTdGF0dXQudG9kby5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZW1wdHktaWNvblwiPuKchTwvc3Bhbj5cclxuICAgICAgICAgICAgPHA+e3sgc2VhcmNoUXVlcnkgPyAnQXVjdW4gcsOpc3VsdGF0JyA6ICdBdWN1bmUgw6l0YXBlIMOgIGZhaXJlJyB9fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuPCEtLSBDb2xvbm5lIEVOIENPVVJTIC0tPlxyXG48ZGl2IGNsYXNzPVwia2FuYmFuLWNvbHVtblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb2x1bW4taGVhZGVyIHByb2dyZXNzLWhlYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbi10aXRsZVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1pY29uXCI+4o+zPC9zcGFuPlxyXG4gICAgICA8aDM+RW4gQ291cnM8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8QmFkZ2UgdmFyaWFudD1cIndhcm5pbmdcIiBwaWxsPnt7IGZpbHRlcmVkRXRhcGVzQnlTdGF0dXQuaW5fcHJvZ3Jlc3MubGVuZ3RoIH19PC9CYWRnZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY29sdW1uLWNvbnRlbnRcIj5cclxuICAgIDxkcmFnZ2FibGVcclxuICAgICAgdi1tb2RlbD1cImluUHJvZ3Jlc3NMaXN0XCJcclxuICAgICAgZ3JvdXA9XCJldGFwZXNcIlxyXG4gICAgICBpdGVtLWtleT1cImlkXCJcclxuICAgICAgQGNoYW5nZT1cIm9uRHJhZ1VwZGF0ZSgnaW5fcHJvZ3Jlc3MnKVwiXHJcbiAgICAgIGNsYXNzPVwiZHJhZ2dhYmxlLWxpc3RcIlxyXG4gICAgICA6YW5pbWF0aW9uPVwiMjAwXCJcclxuICAgID5cclxuICAgICAgPHRlbXBsYXRlICNpdGVtPVwieyBlbGVtZW50OiBldGFwZSB9XCI+XHJcbiAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICBjbGFzcz1cImthbmJhbi1jYXJkIHByb2dyZXNzLWNhcmRcIlxyXG4gICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICBAY2xpY2s9XCJlZGl0RXRhcGUoZXRhcGUpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxzZS1kb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5FbiBjb3Vyczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlci1yb3dcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgZXRhcGUudGl0cmUgfX08L2g0PlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJldGFwZS5wcmlvcml0eVwiIFxyXG4gICAgICAgICAgICAgICAgOnZhcmlhbnQ9XCJnZXRQcmlvcml0eVZhcmlhbnQoZXRhcGUucHJpb3JpdHkpXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3sgZ2V0UHJpb3JpdHlJY29uKGV0YXBlLnByaW9yaXR5KSB9fVxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCB2LWlmPVwiZXRhcGUuZGVzY3JpcHRpb25cIiBjbGFzcz1cImNhcmQtZGVzY3JpcHRpb25cIj57eyBldGFwZS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW1ldGFcIj5cclxuICAgICAgICAgICAgICA8QmFkZ2Ugdi1pZj1cImV0YXBlLmRhdGVEZWJ1dFwiIHZhcmlhbnQ9XCJpbmZvXCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICDwn5qAIHt7IGZvcm1hdERhdGUoZXRhcGUuZGF0ZURlYnV0KSB9fVxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIHYtaWY9XCJldGFwZS5jYXRlZ29yeVwiIHZhcmlhbnQ9XCJncmF5XCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBldGFwZS5jYXRlZ29yeSB9fVxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiY2hhbmdlU3RhdHV0KGV0YXBlLCAndG9kbycpXCIgXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIiBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4qyF77iPXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiY2hhbmdlU3RhdHV0KGV0YXBlLCAnZG9uZScpXCIgXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiIFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDinIUgVGVybWluZXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvZHJhZ2dhYmxlPlxyXG4gICAgXHJcbiAgICA8ZGl2IHYtaWY9XCJmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LmluX3Byb2dyZXNzLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiZW1wdHktc3RhdGVcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJlbXB0eS1pY29uXCI+8J+SpDwvc3Bhbj5cclxuICAgICAgPHA+e3sgc2VhcmNoUXVlcnkgPyAnQXVjdW4gcsOpc3VsdGF0JyA6ICdBdWN1bmUgw6l0YXBlIGVuIGNvdXJzJyB9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gQ29sb25uZSBURVJNSU7DiSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImthbmJhbi1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlciBkb25lLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi10aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1pY29uXCI+4pyFPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDM+VGVybWluw6k8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInN1Y2Nlc3NcIiBwaWxsPnt7IGZpbHRlcmVkRXRhcGVzQnlTdGF0dXQuZG9uZS5sZW5ndGggfX08L0JhZGdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRyYWdnYWJsZVxyXG4gICAgICAgICAgICB2LW1vZGVsPVwiZG9uZUxpc3RcIlxyXG4gICAgICAgICAgICBncm91cD1cImV0YXBlc1wiXHJcbiAgICAgICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG4gICAgICAgICAgICBAY2hhbmdlPVwib25EcmFnVXBkYXRlKCdkb25lJylcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImRyYWdnYWJsZS1saXN0XCJcclxuICAgICAgICAgICAgOmFuaW1hdGlvbj1cIjIwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaXRlbT1cInsgZWxlbWVudDogZXRhcGUgfVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJrYW5iYW4tY2FyZCBkb25lLWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0RXRhcGUoZXRhcGUpXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXN0YXR1cyBzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWNjZXNzLWljb25cIj7wn46JPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlRlcm1pbsOpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGV0YXBlLnRpdHJlIH19PC9oND5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImV0YXBlLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3sgZXRhcGUuZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHYtaWY9XCJldGFwZS5jYXRlZ29yeVwiIHZhcmlhbnQ9XCJncmF5XCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBldGFwZS5jYXRlZ29yeSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiY2hhbmdlU3RhdHV0KGV0YXBlLCAnaW5fcHJvZ3Jlc3MnKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIOKGqe+4jyBSw6lvdXZyaXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvZHJhZ2dhYmxlPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LmRvbmUubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJlbXB0eS1zdGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVtcHR5LWljb25cIj7wn46vPC9zcGFuPlxyXG4gICAgICAgICAgICA8cD57eyBzZWFyY2hRdWVyeSA/ICdBdWN1biByw6lzdWx0YXQnIDogJ0F1Y3VuZSDDqXRhcGUgdGVybWluw6llJyB9fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gTW9kYWwgYXZlYyBjaGFtcHMgZGUgcHJpb3JpdMOpIGV0IGNhdMOpZ29yaWUgLS0+XHJcbiAgICA8TW9kYWwgXHJcbiAgICAgIDpzaG93PVwic2hvd0FkZE1vZGFsIHx8ICEhZWRpdGluZ0V0YXBlXCIgXHJcbiAgICAgIDp0aXRsZT1cImVkaXRpbmdFdGFwZSA/ICdNb2RpZmllciBsXFwnw6l0YXBlJyA6ICdOb3V2ZWxsZSDDqXRhcGUnXCJcclxuICAgICAgQGNsb3NlPVwiY2xvc2VNb2RhbFwiXHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICA+XHJcbiAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInNhdmVFdGFwZVwiIGNsYXNzPVwiZXRhcGUtZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VGl0cmUgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udGl0cmVcIiBcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDogw4l0dWRlIGRlIG1hcmNow6lcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlByaW9yaXTDqTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImZvcm0ucHJpb3JpdHlcIiBjbGFzcz1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QXVjdW5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVyZ2VudFwiPvCflLQgVXJnZW50PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vcm1hbFwiPvCfn6EgTm9ybWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPvCfn6IgQmFzc2U8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkNhdMOpZ29yaWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uY2F0ZWdvcnlcIiBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDogQWRtaW5pc3RyYXRpZiwgRm9ybWF0aW9uLi4uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmRlc2NyaXB0aW9uXCIgXHJcbiAgICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEw6ljcml2ZXogY2V0dGUgw6l0YXBlLi4uXCJcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPvCfk4UgRGF0ZSBkZSBkw6lidXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZGF0ZURlYnV0XCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPuKPsCBEYXRlIGxpbWl0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5kYXRlTGltaXRlXCIgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+8J+TnSBOb3RlczwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5vdGVzXCIgXHJcbiAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBam91dGV6IGRlcyBub3RlcywgbGllbnMsIG91IGluZm9ybWF0aW9ucyBzdXBwbMOpbWVudGFpcmVzLi4uXCJcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIFxyXG4gICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uIEBjbGljaz1cImNsb3NlTW9kYWxcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICBBbm51bGVyXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBAY2xpY2s9XCJzYXZlRXRhcGVcIiA6bG9hZGluZz1cInNhdmluZ1wiPlxyXG4gICAgICAgICAge3sgZWRpdGluZ0V0YXBlID8gJ/Cfkr4gTWV0dHJlIMOgIGpvdXInIDogJ+KcqCBDcsOpZXInIH19XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L01vZGFsPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGRyYWdnYWJsZSBmcm9tICd2dWVkcmFnZ2FibGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0V0YXBlc0thbmJhbicsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgZHJhZ2dhYmxlXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXRhcGVzOiBbXSxcclxuICAgICAgc2hvd0FkZE1vZGFsOiBmYWxzZSxcclxuICAgICAgZWRpdGluZ0V0YXBlOiBudWxsLFxyXG4gICAgICBzYXZpbmc6IGZhbHNlLFxyXG4gICAgICBzZWFyY2hRdWVyeTogJycsXHJcbiAgICAgIHNvcnRCeTogJ29yZHJlJyxcclxuICAgICAgZmlsdGVyUHJpb3JpdHk6ICdhbGwnLFxyXG4gICAgICBmb3JtOiB7XHJcbiAgICAgICAgdGl0cmU6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBkYXRlRGVidXQ6ICcnLFxyXG4gICAgICAgIGRhdGVMaW1pdGU6ICcnLFxyXG4gICAgICAgIG5vdGVzOiAnJyxcclxuICAgICAgICBzdGF0dXQ6ICd0b2RvJyxcclxuICAgICAgICBvcmRyZTogMCxcclxuICAgICAgICBwcmlvcml0eTogJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIExpc3RlcyBsb2NhbGVzIHBvdXIgbGUgZHJhZyAmIGRyb3BcclxuICAgICAgdG9kb0xpc3Q6IFtdLFxyXG4gICAgICBpblByb2dyZXNzTGlzdDogW10sXHJcbiAgICAgIGRvbmVMaXN0OiBbXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGZpbHRlcmVkRXRhcGVzKCkge1xyXG4gICAgICBsZXQgZmlsdGVyZWQgPSBbLi4udGhpcy5ldGFwZXNdXHJcbiAgICAgIFxyXG4gICAgICAvLyBSZWNoZXJjaGVcclxuICAgICAgaWYgKHRoaXMuc2VhcmNoUXVlcnkpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKGUgPT4gXHJcbiAgICAgICAgICBlLnRpdHJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpIHx8XHJcbiAgICAgICAgICAoZS5kZXNjcmlwdGlvbiAmJiBlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKSB8fFxyXG4gICAgICAgICAgKGUuY2F0ZWdvcnkgJiYgZS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSlcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEZpbHRyZSBwcmlvcml0w6lcclxuICAgICAgaWYgKHRoaXMuZmlsdGVyUHJpb3JpdHkgIT09ICdhbGwnKSB7XHJcbiAgICAgICAgZmlsdGVyZWQgPSBmaWx0ZXJlZC5maWx0ZXIoZSA9PiBlLnByaW9yaXR5ID09PSB0aGlzLmZpbHRlclByaW9yaXR5KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBUcmlcclxuICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnZGF0ZS1hc2MnKSB7XHJcbiAgICAgICAgZmlsdGVyZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZUEgPSBhLmRhdGVMaW1pdGUgPyBuZXcgRGF0ZShhLmRhdGVMaW1pdGUpIDogbmV3IERhdGUoJzk5OTktMTItMzEnKVxyXG4gICAgICAgICAgY29uc3QgZGF0ZUIgPSBiLmRhdGVMaW1pdGUgPyBuZXcgRGF0ZShiLmRhdGVMaW1pdGUpIDogbmV3IERhdGUoJzk5OTktMTItMzEnKVxyXG4gICAgICAgICAgcmV0dXJuIGRhdGVBIC0gZGF0ZUJcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29ydEJ5ID09PSAnZGF0ZS1kZXNjJykge1xyXG4gICAgICAgIGZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGVBID0gYS5kYXRlTGltaXRlID8gbmV3IERhdGUoYS5kYXRlTGltaXRlKSA6IG5ldyBEYXRlKCcxOTAwLTAxLTAxJylcclxuICAgICAgICAgIGNvbnN0IGRhdGVCID0gYi5kYXRlTGltaXRlID8gbmV3IERhdGUoYi5kYXRlTGltaXRlKSA6IG5ldyBEYXRlKCcxOTAwLTAxLTAxJylcclxuICAgICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNvcnRCeSA9PT0gJ2FscGhhJykge1xyXG4gICAgICAgIGZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IGEudGl0cmUubG9jYWxlQ29tcGFyZShiLnRpdHJlKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJlZC5zb3J0KChhLCBiKSA9PiBhLm9yZHJlIC0gYi5vcmRyZSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGZpbHRlcmVkXHJcbiAgICB9LFxyXG4gICAgZmlsdGVyZWRFdGFwZXNCeVN0YXR1dCgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b2RvOiB0aGlzLmZpbHRlcmVkRXRhcGVzLmZpbHRlcihlID0+IGUuc3RhdHV0ID09PSAndG9kbycpLFxyXG4gICAgICAgIGluX3Byb2dyZXNzOiB0aGlzLmZpbHRlcmVkRXRhcGVzLmZpbHRlcihlID0+IGUuc3RhdHV0ID09PSAnaW5fcHJvZ3Jlc3MnKSxcclxuICAgICAgICBkb25lOiB0aGlzLmZpbHRlcmVkRXRhcGVzLmZpbHRlcihlID0+IGUuc3RhdHV0ID09PSAnZG9uZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9ncmVzc2lvbigpIHtcclxuICAgICAgaWYgKHRoaXMuZXRhcGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcclxuICAgICAgY29uc3QgZG9uZSA9IHRoaXMuZXRhcGVzLmZpbHRlcihlID0+IGUuc3RhdHV0ID09PSAnZG9uZScpLmxlbmd0aFxyXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgoZG9uZSAvIHRoaXMuZXRhcGVzLmxlbmd0aCkgKiAxMDApXHJcbiAgICB9LFxyXG4gICAgcHJvZ3Jlc3NWYXJpYW50KCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9ncmVzc2lvbiA9PT0gMTAwKSByZXR1cm4gJ3N1Y2Nlc3MnXHJcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzaW9uID49IDUwKSByZXR1cm4gJ3dhcm5pbmcnXHJcbiAgICAgIHJldHVybiAnaW5mbydcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICAvLyBTeW5jaHJvbmlzZSBsZXMgbGlzdGVzIGxvY2FsZXMgcXVhbmQgbGVzIGRvbm7DqWVzIGNoYW5nZW50XHJcbiAgICBmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0OiB7XHJcbiAgICAgIGhhbmRsZXIobmV3VmFsKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IFsuLi5uZXdWYWwudG9kb11cclxuICAgICAgICB0aGlzLmluUHJvZ3Jlc3NMaXN0ID0gWy4uLm5ld1ZhbC5pbl9wcm9ncmVzc11cclxuICAgICAgICB0aGlzLmRvbmVMaXN0ID0gWy4uLm5ld1ZhbC5kb25lXVxyXG4gICAgICB9LFxyXG4gICAgICBkZWVwOiB0cnVlLFxyXG4gICAgICBpbW1lZGlhdGU6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmxvYWRFdGFwZXMoKVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgbG9hZEV0YXBlcygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2V0YXBlcycpXHJcbiAgICAgICAgdGhpcy5ldGFwZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgY2hhcmdlbWVudCDDqXRhcGVzOicsIGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2F2ZUV0YXBlKCkge1xyXG4gICAgICB0aGlzLnNhdmluZyA9IHRydWVcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmVkaXRpbmdFdGFwZSBcclxuICAgICAgICAgID8gYC9hcGkvZXRhcGVzLyR7dGhpcy5lZGl0aW5nRXRhcGUuaWR9YFxyXG4gICAgICAgICAgOiAnL2FwaS9ldGFwZXMnXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gdGhpcy5lZGl0aW5nRXRhcGUgPyAnUFVUJyA6ICdQT1NUJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEV0YXBlcygpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIHNhdXZlZ2FyZGU6JywgZXJyb3IpXHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY2hhbmdlU3RhdHV0KGV0YXBlLCBuZXdTdGF0dXQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9ldGFwZXMvJHtldGFwZS5pZH1gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxyXG4gICAgICAgICAgICAuLi5ldGFwZSwgXHJcbiAgICAgICAgICAgIHN0YXR1dDogbmV3U3RhdHV0LFxyXG4gICAgICAgICAgICBkYXRlRGVidXQ6IG5ld1N0YXR1dCA9PT0gJ2luX3Byb2dyZXNzJyAmJiAhZXRhcGUuZGF0ZURlYnV0IFxyXG4gICAgICAgICAgICAgID8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gXHJcbiAgICAgICAgICAgICAgOiBldGFwZS5kYXRlRGVidXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRFdGFwZXMoKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBjaGFuZ2VtZW50IHN0YXR1dDonLCBlcnJvcilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbGV0ZUV0YXBlKGV0YXBlKSB7XHJcbiAgICAgIGlmICghY29uZmlybShgU3VwcHJpbWVyIGwnw6l0YXBlIFwiJHtldGFwZS50aXRyZX1cIiA/YCkpIHJldHVyblxyXG4gICAgICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9ldGFwZXMvJHtldGFwZS5pZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSlcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRFdGFwZXMoKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBzdXBwcmVzc2lvbjonLCBlcnJvcilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVkaXRFdGFwZShldGFwZSkge1xyXG4gICAgICB0aGlzLmVkaXRpbmdFdGFwZSA9IGV0YXBlXHJcbiAgICAgIHRoaXMuZm9ybSA9IHtcclxuICAgICAgICB0aXRyZTogZXRhcGUudGl0cmUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGV0YXBlLmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICAgIGRhdGVEZWJ1dDogZXRhcGUuZGF0ZURlYnV0IHx8ICcnLFxyXG4gICAgICAgIGRhdGVMaW1pdGU6IGV0YXBlLmRhdGVMaW1pdGUgfHwgJycsXHJcbiAgICAgICAgbm90ZXM6IGV0YXBlLm5vdGVzIHx8ICcnLFxyXG4gICAgICAgIHN0YXR1dDogZXRhcGUuc3RhdHV0LFxyXG4gICAgICAgIG9yZHJlOiBldGFwZS5vcmRyZSxcclxuICAgICAgICBwcmlvcml0eTogZXRhcGUucHJpb3JpdHkgfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGV0YXBlLmNhdGVnb3J5IHx8ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG4gICAgICB0aGlzLnNob3dBZGRNb2RhbCA9IGZhbHNlXHJcbiAgICAgIHRoaXMuZWRpdGluZ0V0YXBlID0gbnVsbFxyXG4gICAgICB0aGlzLnNhdmluZyA9IGZhbHNlXHJcbiAgICAgIHRoaXMuZm9ybSA9IHtcclxuICAgICAgICB0aXRyZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGRhdGVEZWJ1dDogJycsXHJcbiAgICAgICAgZGF0ZUxpbWl0ZTogJycsXHJcbiAgICAgICAgbm90ZXM6ICcnLFxyXG4gICAgICAgIHN0YXR1dDogJ3RvZG8nLFxyXG4gICAgICAgIG9yZHJlOiAwLFxyXG4gICAgICAgIHByaW9yaXR5OiAnJyxcclxuICAgICAgICBjYXRlZ29yeTogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIE5vdXZlbGxlIG3DqXRob2RlIHBvdXIgZ8OpcmVyIGxlIGRyYWdcclxuICAgIG9uRHJhZ1VwZGF0ZShzdGF0dXQpIHtcclxuICAgICAgLy8gQ2V0dGUgZm9uY3Rpb24gZXN0IGFwcGVsw6llIHF1YW5kIHVuZSBsaXN0ZSBjaGFuZ2VcclxuICAgICAgcmV0dXJuIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5hZGRlZCkge1xyXG4gICAgICAgICAgY29uc3QgZXRhcGUgPSBldmVudC5hZGRlZC5lbGVtZW50XHJcbiAgICAgICAgICBpZiAoZXRhcGUuc3RhdHV0ICE9PSBzdGF0dXQpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFdGFwZVN0YXR1dChldGFwZSwgc3RhdHV0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHVwZGF0ZUV0YXBlU3RhdHV0KGV0YXBlLCBuZXdTdGF0dXQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9ldGFwZXMvJHtldGFwZS5pZH1gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxyXG4gICAgICAgICAgICAuLi5ldGFwZSwgXHJcbiAgICAgICAgICAgIHN0YXR1dDogbmV3U3RhdHV0LFxyXG4gICAgICAgICAgICBkYXRlRGVidXQ6IG5ld1N0YXR1dCA9PT0gJ2luX3Byb2dyZXNzJyAmJiAhZXRhcGUuZGF0ZURlYnV0IFxyXG4gICAgICAgICAgICAgID8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gXHJcbiAgICAgICAgICAgICAgOiBldGFwZS5kYXRlRGVidXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBNZXQgw6Agam91ciBsb2NhbGVtZW50XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV0YXBlcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSBldGFwZS5pZClcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLmV0YXBlc1tpbmRleF0uc3RhdHV0ID0gbmV3U3RhdHV0XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBjaGFuZ2VtZW50IHN0YXR1dDonLCBlcnJvcilcclxuICAgICAgICAvLyBFbiBjYXMgZCdlcnJldXIsIHJlY2hhcmdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkRXRhcGVzKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcm1hdERhdGUoZGF0ZVN0cmluZykge1xyXG4gICAgICBpZiAoIWRhdGVTdHJpbmcpIHJldHVybiAnJ1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZylcclxuICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicpXHJcbiAgICB9LFxyXG4gICAgZ2V0UHJpb3JpdHlJY29uKHByaW9yaXR5KSB7XHJcbiAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgIHVyZ2VudDogJ/CflLQnLFxyXG4gICAgICAgIG5vcm1hbDogJ/Cfn6EnLFxyXG4gICAgICAgIGxvdzogJ/Cfn6InXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGljb25zW3ByaW9yaXR5XSB8fCAnJ1xyXG4gICAgfSxcclxuICAgIGdldFByaW9yaXR5VmFyaWFudChwcmlvcml0eSkge1xyXG4gICAgICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgICB1cmdlbnQ6ICdkYW5nZXInLFxyXG4gICAgICAgIG5vcm1hbDogJ3dhcm5pbmcnLFxyXG4gICAgICAgIGxvdzogJ3N1Y2Nlc3MnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHZhcmlhbnRzW3ByaW9yaXR5XSB8fCAnZ3JheSdcclxuICAgIH0sXHJcbiAgICBnZXRQcmlvcml0eUxhYmVsKHByaW9yaXR5KSB7XHJcbiAgICAgIGNvbnN0IGxhYmVscyA9IHtcclxuICAgICAgICB1cmdlbnQ6ICfwn5S0IFVyZ2VudCcsXHJcbiAgICAgICAgbm9ybWFsOiAn8J+foSBOb3JtYWwnLFxyXG4gICAgICAgIGxvdzogJ/Cfn6IgQmFzc2UnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxhYmVsc1twcmlvcml0eV0gfHwgcHJpb3JpdHlcclxuICAgIH0sXHJcbiAgICBnZXREYXRlVmFyaWFudChkYXRlTGltaXRlKSB7XHJcbiAgICAgIGlmICghZGF0ZUxpbWl0ZSkgcmV0dXJuICdncmF5J1xyXG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgICAgY29uc3QgbGltaXRlID0gbmV3IERhdGUoZGF0ZUxpbWl0ZSlcclxuICAgICAgY29uc3QgZGlmZkRheXMgPSBNYXRoLmNlaWwoKGxpbWl0ZSAtIHRvZGF5KSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcclxuICAgICAgXHJcbiAgICAgIGlmIChkaWZmRGF5cyA8IDApIHJldHVybiAnZGFuZ2VyJ1xyXG4gICAgICBpZiAoZGlmZkRheXMgPD0gNykgcmV0dXJuICd3YXJuaW5nJ1xyXG4gICAgICByZXR1cm4gJ2dyYXknXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmV0YXBlcy1rYW5iYW4ge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBhbmltYXRpb246IGZhZGVJbiB2YXIoLS10cmFuc2l0aW9uLXNsb3cpO1xyXG59XHJcblxyXG4vKiBGaWx0cmVzICovXHJcbi5maWx0ZXJzLWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmZpbHRlcnMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IHZhcigtLXNwYWNlLW1kKTtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKSB2YXIoLS1zcGFjZS1tZCkgdmFyKC0tc3BhY2UtbWQpIDNyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG4uY2xlYXItc2VhcmNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IHZhcigtLXNwYWNlLW1kKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG59XHJcblxyXG4uY2xlYXItc2VhcmNoOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XHJcbn1cclxuXHJcbi5maWx0ZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4uZmlsdGVyLXNlbGVjdCB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpIHZhcigtLXNwYWNlLWxnKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG59XHJcblxyXG4uZmlsdGVyLXNlbGVjdDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLmZpbHRlci1zZWxlY3Q6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG4uYWN0aXZlLWZpbHRlcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLW1kKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xyXG59XHJcblxyXG4uZmlsdGVyLWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmFjdGl2ZS1maWx0ZXJzIC5iYWRnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBEcmFnICYgRHJvcCBhbcOpbGlvcsOpICovXHJcbi5kcmFnZ2FibGUtbGlzdCB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4ua2FuYmFuLWNhcmQge1xyXG4gIGN1cnNvcjogZ3JhYjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLmthbmJhbi1jYXJkOmFjdGl2ZSB7XHJcbiAgY3Vyc29yOiBncmFiYmluZztcclxufVxyXG5cclxuLmRyYWctY2FyZCB7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTJ4bCkgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmdob3N0LWNhcmQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcclxufVxyXG5cclxuLyogSGVhZGVyICovXHJcbi5rYW5iYW4taGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UteGwpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2Utc20pIDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi8qIFByb2dyZXNzIENhcmQgKi9cclxuLnByb2dyZXNzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnkpIDAlLCB2YXIoLS1zZWNvbmRhcnkpIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByb2dyZXNzLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNSwgMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1maWxsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMjU1LDI1NSwyNTUsMC4zKSwgdHJhbnNwYXJlbnQpO1xyXG4gIGFuaW1hdGlvbjogc2hpbW1lciAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICB0byB7IGxlZnQ6IDEwMCU7IH1cclxufVxyXG5cclxuLnByb2dyZXNzLXRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1zdGF0cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uc3RhdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdC12YWx1ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UteHMpO1xyXG59XHJcblxyXG4uc3RhdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi8qIEthbmJhbiBCb2FyZCAqL1xyXG4ua2FuYmFuLWJvYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UteGwpO1xyXG59XHJcblxyXG4ua2FuYmFuLWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY29sdW1uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG5cclxuLmNvbHVtbi10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG59XHJcblxyXG4uY29sdW1uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY29sdW1uLXRpdGxlIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi50b2RvLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZlZjNjNywgI2ZkZTY4YSk7XHJcbiAgY29sb3I6ICM5MjQwMGU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkZGQ2ZmUsICNjNGI1ZmQpO1xyXG4gIGNvbG9yOiAjNWIyMWI2O1xyXG59XHJcblxyXG4uZG9uZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkMWZhZTUsICNhN2YzZDApO1xyXG4gIGNvbG9yOiAjMDY1ZjQ2O1xyXG59XHJcblxyXG4uY29sdW1uLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBLYW5iYW4gQ2FyZHMgKi9cclxuLmthbmJhbi1jYXJkIHtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udG9kby1jYXJkIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogI2Y1OWUwYjtcclxufVxyXG5cclxuLnByb2dyZXNzLWNhcmQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjOGI1Y2Y2O1xyXG59XHJcblxyXG4uZG9uZS1jYXJkIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzEwYjk4MTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5kb25lLWNhcmQ6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmNhcmQtc3RhdHVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhzKSB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLmNhcmQtc3RhdHVzLnN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6ICNkMWZhZTU7XHJcbiAgY29sb3I6ICMwNjVmNDY7XHJcbn1cclxuXHJcbi5wdWxzZS1kb3Qge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgfVxyXG59XHJcblxyXG4uc3VjY2Vzcy1pY29uIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zbSkgMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLW1kKSAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2FyZC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKSB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLyogRW1wdHkgU3RhdGUgKi9cclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMnhsKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbn1cclxuXHJcbi5lbXB0eS1pY29uIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4vKiBGb3JtICovXHJcbi5ldGFwZS1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmthbmJhbi1ib2FyZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVycy1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWJveCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXJzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVyLXNlbGVjdCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8c3BhbiA6Y2xhc3M9XCJiYWRnZUNsYXNzZXNcIj5cclxuICAgIDxzbG90Pjwvc2xvdD5cclxuICA8L3NwYW4+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0JhZGdlJyxcclxuICBwcm9wczoge1xyXG4gICAgdmFyaWFudDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcclxuICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IFsncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2luZm8nLCAnZ3JheSddLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgfSxcclxuICAgIHNpemU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnbWQnLFxyXG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4gWydzbScsICdtZCcsICdsZyddLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgfSxcclxuICAgIHBpbGw6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBiYWRnZUNsYXNzZXMoKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgJ2JhZGdlJyxcclxuICAgICAgICBgYmFkZ2UtJHt0aGlzLnZhcmlhbnR9YCxcclxuICAgICAgICBgYmFkZ2UtJHt0aGlzLnNpemV9YCxcclxuICAgICAgICB7ICdiYWRnZS1waWxsJzogdGhpcy5waWxsIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5iYWRnZS1waWxsIHtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbn1cclxuXHJcbi8qIFNpemVzICovXHJcbi5iYWRnZS1zbSB7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uYmFkZ2UtbWQge1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmJhZGdlLWxnIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi8qIFZhcmlhbnRzICovXHJcbi5iYWRnZS1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhZGdlLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhZGdlLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhZGdlLWluZm8ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWluZm8pO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhZGdlLWdyYXkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8YnV0dG9uIFxyXG4gICAgOmNsYXNzPVwiYnV0dG9uQ2xhc3Nlc1wiIFxyXG4gICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgbG9hZGluZ1wiXHJcbiAgICBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCAkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8c3BhbiB2LWlmPVwibG9hZGluZ1wiIGNsYXNzPVwic3Bpbm5lclwiPjwvc3Bhbj5cclxuICAgIDxzbG90IHYtZWxzZT48L3Nsb3Q+XHJcbiAgPC9idXR0b24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0J1dHRvbicsXHJcbiAgcHJvcHM6IHtcclxuICAgIHZhcmlhbnQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeScsIC8vIHByaW1hcnksIHNlY29uZGFyeSwgc3VjY2VzcywgZGFuZ2VyLCBnaG9zdFxyXG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4gWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdzdWNjZXNzJywgJ2RhbmdlcicsICdnaG9zdCddLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgfSxcclxuICAgIHNpemU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnbWQnLCAvLyBzbSwgbWQsIGxnXHJcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ3NtJywgJ21kJywgJ2xnJ10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZWQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgYnV0dG9uQ2xhc3NlcygpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAnYnRuJyxcclxuICAgICAgICBgYnRuLSR7dGhpcy52YXJpYW50fWAsXHJcbiAgICAgICAgYGJ0bi0ke3RoaXMuc2l6ZX1gLFxyXG4gICAgICAgIHsgJ2J0bi1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8qIFNpemVzICovXHJcbi5idG4tc20ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi5idG4tbWQge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmJ0bi1sZyB7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbn1cclxuXHJcbi8qIFZhcmlhbnRzICovXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeSkgMCUsIHZhcigtLXNlY29uZGFyeSkgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoLmJ0bi1kaXNhYmxlZCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6YWN0aXZlOm5vdCguYnRuLWRpc2FibGVkKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyOm5vdCguYnRuLWRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6aG92ZXI6bm90KC5idG4tZGlzYWJsZWQpIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyOmhvdmVyOm5vdCguYnRuLWRpc2FibGVkKSB7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4uYnRuLWdob3N0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5idG4tZ2hvc3Q6aG92ZXI6bm90KC5idG4tZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIERpc2FibGVkICovXHJcbi5idG4tZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBTcGlubmVyICovXHJcbi5zcGlubmVyIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNwaW4gMC42cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiA6Y2xhc3M9XCJjYXJkQ2xhc3Nlc1wiPlxyXG4gICAgPGRpdiB2LWlmPVwiJHNsb3RzLmhlYWRlclwiIGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1pZj1cIiRzbG90cy5mb290ZXJcIiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQ2FyZCcsXHJcbiAgcHJvcHM6IHtcclxuICAgIGhvdmVyYWJsZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJvcmRlcmVkOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdtZCcsIC8vIHNtLCBtZCwgbGcsIG5vbmVcclxuICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IFsnbm9uZScsICdzbScsICdtZCcsICdsZyddLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNhcmRDbGFzc2VzKCkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgICdjYXJkJyxcclxuICAgICAgICBgY2FyZC1wYWRkaW5nLSR7dGhpcy5wYWRkaW5nfWAsXHJcbiAgICAgICAgeyAnY2FyZC1ob3ZlcmFibGUnOiB0aGlzLmhvdmVyYWJsZSB9LFxyXG4gICAgICAgIHsgJ2NhcmQtYm9yZGVyZWQnOiB0aGlzLmJvcmRlcmVkIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBhbmltYXRpb246IHNjYWxlSW4gdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLmNhcmQtaG92ZXJhYmxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhvdmVyYWJsZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XHJcbn1cclxuXHJcbi5jYXJkLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbn1cclxuXHJcbi8qIFBhZGRpbmcgdmFyaWFudHMgKi9cclxuLmNhcmQtcGFkZGluZy1ub25lIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jYXJkLXBhZGRpbmctc20gLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4uY2FyZC1wYWRkaW5nLW1kIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmNhcmQtcGFkZGluZy1sZyAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxUcmFuc2l0aW9uIG5hbWU9XCJtb2RhbFwiPlxyXG4gICAgPGRpdiB2LWlmPVwic2hvd1wiIGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiIEBjbGljay5zZWxmPVwiY2xvc2VcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiIDpjbGFzcz1cImBtb2RhbC0ke3NpemV9YFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMz57eyB0aXRsZSB9fTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNsb3NlXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiPuKclTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiJHNsb3RzLmZvb3RlclwiIGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCI+PC9zbG90PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvVHJhbnNpdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnTW9kYWwnLFxyXG4gIHByb3BzOiB7XHJcbiAgICBzaG93OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHNpemU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnbWQnLCAvLyBzbSwgbWQsIGxnLCB4bFxyXG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4gWydzbScsICdtZCcsICdsZycsICd4bCddLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzaG93KG5ld1ZhbCkge1xyXG4gICAgICBpZiAobmV3VmFsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IHZhcigtLXotbW9kYWwpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMnhsKTtcclxuICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbC1zbSB7IG1heC13aWR0aDogNDAwcHg7IH1cclxuLm1vZGFsLW1kIHsgbWF4LXdpZHRoOiA2MDBweDsgfVxyXG4ubW9kYWwtbGcgeyBtYXgtd2lkdGg6IDgwMHB4OyB9XHJcbi5tb2RhbC14bCB7IG1heC13aWR0aDogMTIwMHB4OyB9XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG4ubW9kYWwtZW50ZXItYWN0aXZlLFxyXG4ubW9kYWwtbGVhdmUtYWN0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5tb2RhbC1lbnRlci1hY3RpdmUgLm1vZGFsLWNvbnRhaW5lcixcclxuLm1vZGFsLWxlYXZlLWFjdGl2ZSAubW9kYWwtY29udGFpbmVyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLm1vZGFsLWVudGVyLWZyb20sXHJcbi5tb2RhbC1sZWF2ZS10byB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1vZGFsLWVudGVyLWZyb20gLm1vZGFsLWNvbnRhaW5lcixcclxuLm1vZGFsLWxlYXZlLXRvIC5tb2RhbC1jb250YWluZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgtMjBweCk7XHJcbn1cclxuPC9zdHlsZT4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViY2RhZjAzJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWJjZGFmMDMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTViY2RhZjAzXCJdLFsnX19maWxlJyxcImFzc2V0cy9BcHAudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjViY2RhZjAzXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNWJjZGFmMDMnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1YmNkYWYwMycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwMyZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1YmNkYWYwMycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3ZTdjNGM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0wN2U3YzRjNFwiXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjA3ZTdjNGM0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMDdlN2M0YzQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcwN2U3YzRjNCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwN2U3YzRjNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQmFkZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNzg0MDIzJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFkZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0JhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQmFkZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjI3ODQwMjMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTYyNzg0MDIzXCJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2Mjc4NDAyM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzYyNzg0MDIzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjI3ODQwMjMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0JhZGdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Mjc4NDAyMyZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2Mjc4NDAyMycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03N2JjM2IzYyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3YmMzYjNjJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi03N2JjM2IzY1wiXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy91aS9CdXR0b24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjc3YmMzYjNjXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNzdiYzNiM2MnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc3N2JjM2IzYycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03N2JjM2IzYyZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc3N2JjM2IzYycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU3NmM1ODAmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NTc2YzU4MCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNTU3NmM1ODBcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvdWkvQ2FyZC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNTU3NmM1ODBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1NTc2YzU4MCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzU1NzZjNTgwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTc2YzU4MCZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1NTc2YzU4MCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1ZGYwYTJkJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjVkZjBhMmQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTY1ZGYwYTJkXCJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2NWRmMGEyZFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzY1ZGYwYTJkJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjVkZjBhMmQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NWRmMGEyZCZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2NWRmMGEyZCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9FdGFwZXNLYW5iYW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CYWRnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CYWRnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViY2RhZjAzJnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JhZGdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Mjc4NDAyMyZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdiYzNiM2Mmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTc2YzU4MCZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NWRmMGEyZCZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTViY2RhZjAzJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9FdGFwZXNLYW5iYW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JhZGdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyNzg0MDIzJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzdiYzNiM2Mmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTU3NmM1ODAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY1ZGYwYTJkJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiXSwibmFtZXMiOlsiY3JlYXRlQXBwIiwiQXBwIiwiRXRhcGVzS2FuYmFuIiwiQnV0dG9uIiwiQ2FyZCIsIk1vZGFsIiwiQmFkZ2UiLCJhcHAiLCJjb21wb25lbnQiLCJtb3VudCIsIm5hbWUiLCJkYXRhIiwidGl0bGUiLCJzdWJ0aXRsZSIsImN1cnJlbnRWaWV3IiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsImRyYWdnYWJsZSIsImNvbXBvbmVudHMiLCJldGFwZXMiLCJzaG93QWRkTW9kYWwiLCJlZGl0aW5nRXRhcGUiLCJzYXZpbmciLCJzZWFyY2hRdWVyeSIsInNvcnRCeSIsImZpbHRlclByaW9yaXR5IiwiZm9ybSIsInRpdHJlIiwiZGVzY3JpcHRpb24iLCJkYXRlRGVidXQiLCJkYXRlTGltaXRlIiwibm90ZXMiLCJzdGF0dXQiLCJvcmRyZSIsInByaW9yaXR5IiwiY2F0ZWdvcnkiLCJ0b2RvTGlzdCIsImluUHJvZ3Jlc3NMaXN0IiwiZG9uZUxpc3QiLCJjb21wdXRlZCIsImZpbHRlcmVkRXRhcGVzIiwiX3RoaXMiLCJmaWx0ZXJlZCIsInF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInNvcnQiLCJiIiwiZGF0ZUEiLCJEYXRlIiwiZGF0ZUIiLCJsb2NhbGVDb21wYXJlIiwiZmlsdGVyZWRFdGFwZXNCeVN0YXR1dCIsInRvZG8iLCJpbl9wcm9ncmVzcyIsInByb2dyZXNzaW9uIiwiTWF0aCIsInJvdW5kIiwicHJvZ3Jlc3NWYXJpYW50Iiwid2F0Y2giLCJoYW5kbGVyIiwibmV3VmFsIiwiZGVlcCIsImltbWVkaWF0ZSIsIm1vdW50ZWQiLCJsb2FkRXRhcGVzIiwibWV0aG9kcyIsIl90aGlzMiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl90IiwiX2NvbnRleHQiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJzYXZlRXRhcGUiLCJfdGhpczMiLCJfY2FsbGVlMiIsInVybCIsIm1ldGhvZCIsIl90MiIsIl9jb250ZXh0MiIsImNvbmNhdCIsImlkIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xvc2VNb2RhbCIsImNoYW5nZVN0YXR1dCIsImV0YXBlIiwibmV3U3RhdHV0IiwiX3RoaXM0IiwiX2NhbGxlZTMiLCJfdDMiLCJfY29udGV4dDMiLCJfb2JqZWN0U3ByZWFkIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImRlbGV0ZUV0YXBlIiwiX3RoaXM1IiwiX2NhbGxlZTQiLCJfdDQiLCJfY29udGV4dDQiLCJjb25maXJtIiwiZWRpdEV0YXBlIiwib25EcmFnVXBkYXRlIiwiX3RoaXM2IiwiZXZlbnQiLCJhZGRlZCIsImVsZW1lbnQiLCJ1cGRhdGVFdGFwZVN0YXR1dCIsIl90aGlzNyIsIl9jYWxsZWU1IiwiaW5kZXgiLCJfdDUiLCJfY29udGV4dDUiLCJmaW5kSW5kZXgiLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRQcmlvcml0eUljb24iLCJpY29ucyIsInVyZ2VudCIsIm5vcm1hbCIsImxvdyIsImdldFByaW9yaXR5VmFyaWFudCIsInZhcmlhbnRzIiwiZ2V0UHJpb3JpdHlMYWJlbCIsImxhYmVscyIsImdldERhdGVWYXJpYW50IiwidG9kYXkiLCJsaW1pdGUiLCJkaWZmRGF5cyIsImNlaWwiLCJwcm9wcyIsInZhcmlhbnQiLCJ0eXBlIiwiU3RyaW5nIiwidmFsaWRhdG9yIiwic2l6ZSIsInBpbGwiLCJCb29sZWFuIiwiYmFkZ2VDbGFzc2VzIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiYnV0dG9uQ2xhc3NlcyIsImhvdmVyYWJsZSIsImJvcmRlcmVkIiwicGFkZGluZyIsImNhcmRDbGFzc2VzIiwic2hvdyIsInJlcXVpcmVkIiwiY2xvc2UiLCIkZW1pdCIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzIiLCJfdG9EaXNwbGF5U3RyaW5nIiwiJGRhdGEiLCJfaG9pc3RlZF8zIiwib25DbGljayIsIl9jYWNoZSIsIiRldmVudCIsIl9ub3JtYWxpemVDbGFzcyIsImFjdGl2ZSIsIl9ob2lzdGVkXzQiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X0V0YXBlc0thbmJhbiIsImtleSIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfQnV0dG9uIiwiX2NvbXBvbmVudF9DYXJkIiwicGxhY2Vob2xkZXIiLCJfaG9pc3RlZF83IiwiX2hvaXN0ZWRfOCIsIl9jb21wb25lbnRfQmFkZ2UiLCIkb3B0aW9ucyIsIl9ob2lzdGVkXzkiLCJfaG9pc3RlZF8xMCIsIl9ub3JtYWxpemVTdHlsZSIsIndpZHRoIiwiX2hvaXN0ZWRfMTEiLCJfaG9pc3RlZF8xMiIsIl9ob2lzdGVkXzEzIiwiX2hvaXN0ZWRfMTQiLCJfaG9pc3RlZF8xNSIsIl9ob2lzdGVkXzE2IiwiX2hvaXN0ZWRfMTciLCJfaG9pc3RlZF8xOCIsIl9ob2lzdGVkXzE5IiwiX2hvaXN0ZWRfMjAiLCJfaG9pc3RlZF8yMSIsIl9ob2lzdGVkXzIyIiwiX2NvbXBvbmVudF9kcmFnZ2FibGUiLCJncm91cCIsIm9uQ2hhbmdlIiwiYW5pbWF0aW9uIiwiaXRlbSIsIl93aXRoQ3R4IiwiX3JlZiIsImZvb3RlciIsIl9ob2lzdGVkXzI4IiwiX3dpdGhNb2RpZmllcnMiLCJfaG9pc3RlZF8yMyIsIl9ob2lzdGVkXzI0IiwiX2hvaXN0ZWRfMjUiLCJfaG9pc3RlZF8yNiIsIl9ob2lzdGVkXzI3IiwiX2hvaXN0ZWRfMjkiLCJfaG9pc3RlZF8zMCIsIl9ob2lzdGVkXzMxIiwiX2hvaXN0ZWRfMzIiLCJfcmVmMiIsIl9ob2lzdGVkXzM4IiwiX2hvaXN0ZWRfMzMiLCJfaG9pc3RlZF8zNCIsIl9ob2lzdGVkXzM1IiwiX2hvaXN0ZWRfMzYiLCJfaG9pc3RlZF8zNyIsIl9ob2lzdGVkXzM5IiwiX2hvaXN0ZWRfNDAiLCJfaG9pc3RlZF80MSIsIl9ob2lzdGVkXzQyIiwiX3JlZjMiLCJfaG9pc3RlZF80NyIsIl9ob2lzdGVkXzQzIiwiX2hvaXN0ZWRfNDQiLCJfaG9pc3RlZF80NSIsIl9ob2lzdGVkXzQ2IiwiX2hvaXN0ZWRfNDgiLCJfY29tcG9uZW50X01vZGFsIiwib25DbG9zZSIsIm9uU3VibWl0IiwiX2hvaXN0ZWRfNDkiLCJfaG9pc3RlZF81MCIsIl9ob2lzdGVkXzUxIiwiX2hvaXN0ZWRfNTIiLCJfaG9pc3RlZF81MyIsInJvd3MiLCJfaG9pc3RlZF81NCIsIl9ob2lzdGVkXzU1IiwiX2hvaXN0ZWRfNTYiLCJfaG9pc3RlZF81NyIsIl9yZW5kZXJTbG90IiwiX2N0eCIsIiRzbG90cyIsInVuZGVmaW5lZCIsIiRwcm9wcyIsImhlYWRlciIsIl9UcmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==