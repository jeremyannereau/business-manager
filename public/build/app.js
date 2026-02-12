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
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");




var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
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

































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EtapesKanban',
  data: function data() {
    return {
      etapes: [],
      showAddModal: false,
      editingEtape: null,
      form: {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0
      }
    };
  },
  computed: {
    etapesByStatut: function etapesByStatut() {
      return {
        todo: this.etapes.filter(function (e) {
          return e.statut === 'todo';
        }),
        in_progress: this.etapes.filter(function (e) {
          return e.statut === 'in_progress';
        }),
        done: this.etapes.filter(function (e) {
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
    }
  },
  mounted: function mounted() {
    this.loadEtapes();
  },
  methods: {
    loadEtapes: function loadEtapes() {
      var _this = this;
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
              _this.etapes = _context.v;
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
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var url, method, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              url = _this2.editingEtape ? "/api/etapes/".concat(_this2.editingEtape.id) : '/api/etapes';
              method = _this2.editingEtape ? 'PUT' : 'POST';
              _context2.n = 1;
              return fetch(url, {
                method: method,
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(_this2.form)
              });
            case 1:
              _this2.closeModal();
              _this2.loadEtapes();
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error('Erreur sauvegarde:', _t2);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    changeStatut: function changeStatut(etape, newStatut) {
      var _this3 = this;
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
              _this3.loadEtapes();
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error('Erreur changement statut:', _t3);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    deleteEtape: function deleteEtape(etape) {
      var _this4 = this;
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
              _this4.loadEtapes();
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              console.error('Erreur suppression:', _t4);
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
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
        ordre: etape.ordre
      };
    },
    closeModal: function closeModal() {
      this.showAddModal = false;
      this.editingEtape = null;
      this.form = {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0
      };
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      var date = new Date(dateString);
      return date.toLocaleDateString('fr-FR');
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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



var _hoisted_1 = {
  "class": "etapes-kanban"
};
var _hoisted_2 = {
  "class": "kanban-header"
};
var _hoisted_3 = {
  "class": "progression"
};
var _hoisted_4 = {
  "class": "progress-bar"
};
var _hoisted_5 = {
  "class": "kanban-board"
};
var _hoisted_6 = {
  "class": "kanban-column"
};
var _hoisted_7 = {
  "class": "column-title todo"
};
var _hoisted_8 = {
  "class": "column-content"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  key: 0,
  "class": "description"
};
var _hoisted_11 = {
  "class": "card-footer"
};
var _hoisted_12 = {
  key: 0,
  "class": "date"
};
var _hoisted_13 = {
  "class": "actions"
};
var _hoisted_14 = ["onClick"];
var _hoisted_15 = ["onClick"];
var _hoisted_16 = {
  "class": "kanban-column"
};
var _hoisted_17 = {
  "class": "column-title in-progress"
};
var _hoisted_18 = {
  "class": "column-content"
};
var _hoisted_19 = ["onClick"];
var _hoisted_20 = {
  key: 0,
  "class": "description"
};
var _hoisted_21 = {
  "class": "card-footer"
};
var _hoisted_22 = {
  key: 0,
  "class": "date"
};
var _hoisted_23 = {
  "class": "actions"
};
var _hoisted_24 = ["onClick"];
var _hoisted_25 = ["onClick"];
var _hoisted_26 = {
  "class": "kanban-column"
};
var _hoisted_27 = {
  "class": "column-title done"
};
var _hoisted_28 = {
  "class": "column-content"
};
var _hoisted_29 = ["onClick"];
var _hoisted_30 = {
  key: 0,
  "class": "description"
};
var _hoisted_31 = {
  "class": "card-footer"
};
var _hoisted_32 = {
  "class": "actions"
};
var _hoisted_33 = ["onClick"];
var _hoisted_34 = {
  "class": "modal-content"
};
var _hoisted_35 = {
  "class": "form-group"
};
var _hoisted_36 = {
  "class": "form-group"
};
var _hoisted_37 = {
  "class": "form-row"
};
var _hoisted_38 = {
  "class": "form-group"
};
var _hoisted_39 = {
  "class": "form-group"
};
var _hoisted_40 = {
  "class": "form-group"
};
var _hoisted_41 = {
  "class": "modal-actions"
};
var _hoisted_42 = {
  type: "submit",
  "class": "btn-save"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_2, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h2", null, "📋 Suivi des Étapes - Création d'Entreprise", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", null, "Progression : " + (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.progression) + "%", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", {
    "class": "progress-fill",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_2__.normalizeStyle)({
      width: $options.progression + '%'
    })
  }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showAddModal = true;
    }),
    "class": "btn-add"
  }, "+ Nouvelle Étape")]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(" Colonne À FAIRE "), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h3", _hoisted_7, "📝 À Faire (" + (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.etapesByStatut.todo.length) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)($options.etapesByStatut.todo, function (etape) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", {
      key: etape.id,
      "class": "kanban-card",
      onClick: function onClick($event) {
        return $options.editEtape(etape);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_11, [etape.dateLimite ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("span", _hoisted_12, "📅 " + (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.formatDate(etape.dateLimite)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
        return $options.changeStatut(etape, 'in_progress');
      }, ["stop"]),
      "class": "btn-mini"
    }, "▶️", 8 /* PROPS */, _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
        return $options.deleteEtape(etape);
      }, ["stop"]),
      "class": "btn-mini danger"
    }, "🗑️", 8 /* PROPS */, _hoisted_15)])])], 8 /* PROPS */, _hoisted_9);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(" Colonne EN COURS "), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h3", _hoisted_17, "⏳ En Cours (" + (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.etapesByStatut.in_progress.length) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)($options.etapesByStatut.in_progress, function (etape) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", {
      key: etape.id,
      "class": "kanban-card in-progress",
      onClick: function onClick($event) {
        return $options.editEtape(etape);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("p", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_21, [etape.dateDebut ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("span", _hoisted_22, "🚀 " + (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.formatDate(etape.dateDebut)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
        return $options.changeStatut(etape, 'todo');
      }, ["stop"]),
      "class": "btn-mini"
    }, "⬅️", 8 /* PROPS */, _hoisted_24), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
        return $options.changeStatut(etape, 'done');
      }, ["stop"]),
      "class": "btn-mini success"
    }, "✅", 8 /* PROPS */, _hoisted_25)])])], 8 /* PROPS */, _hoisted_19);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(" Colonne TERMINÉ "), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h3", _hoisted_27, "✅ Terminé (" + (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.etapesByStatut.done.length) + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_28, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)($options.etapesByStatut.done, function (etape) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", {
      key: etape.id,
      "class": "kanban-card done",
      onClick: function onClick($event) {
        return $options.editEtape(etape);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("p", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_31, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", {
      "class": "date"
    }, "🎉 Terminé", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
        return $options.changeStatut(etape, 'in_progress');
      }, ["stop"]),
      "class": "btn-mini"
    }, "↩️", 8 /* PROPS */, _hoisted_33)])])], 8 /* PROPS */, _hoisted_29);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(" Modal Ajouter/Éditer "), $data.showAddModal || $data.editingEtape ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", {
    key: 0,
    "class": "modal",
    onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    }, ["self"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($data.editingEtape ? 'Modifier l\'étape' : 'Nouvelle étape'), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function () {
      return $options.saveEtape && $options.saveEtape.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_35, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", null, "Titre *", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.titre = $event;
    }),
    type: "text",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, $data.form.titre]])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_36, [_cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", null, "Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.description = $event;
    }),
    rows: "3"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, $data.form.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_38, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", null, "Date de début", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.dateDebut = $event;
    }),
    type: "date"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, $data.form.dateDebut]])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_39, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", null, "Date limite", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.dateLimite = $event;
    }),
    type: "date"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, $data.form.dateLimite]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_40, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", null, "Notes", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.notes = $event;
    }),
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, $data.form.notes]])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    }),
    "class": "btn-cancel"
  }, "Annuler"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($data.editingEtape ? 'Mettre à jour' : 'Créer'), 1 /* TEXT */)])], 32 /* NEED_HYDRATION */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true)]);
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


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_vue_dist_vue_esm-bundler_js-a3f57b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNMOztBQUVqRCxDQUEwRTs7QUFFRztBQUM3RSxpQ0FBaUMseUZBQWUsQ0FBQyx3RUFBTSxhQUFhLHNGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQVlmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnNFO0FBQ3RCO0FBQ0w7O0FBRTFELENBQW1GOztBQUVIO0FBQ2hGLGlDQUFpQyx5RkFBZSxDQUFDLGlGQUFNLGFBQWEsK0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBWWY7OztBQUdELGlFQUFlLFc7Ozs7Ozs7Ozs7Ozs7OztBQ3hCNkssQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWUsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/OWQ3MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZT9iYWUzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V0YXBlc0thbmJhbi52dWU/YzQ2NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZT84OWRjIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V0YXBlc0thbmJhbi52dWU/Yjk4YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZT83ZTAwIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V0YXBlc0thbmJhbi52dWU/NGJhZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZT8yOWYwIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V0YXBlc0thbmJhbi52dWU/NTA2ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZT9mZDdlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V0YXBlc0thbmJhbi52dWU/MDQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IEV0YXBlc0thbmJhbiBmcm9tICcuL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKTtcbmFwcC5jb21wb25lbnQoJ0V0YXBlc0thbmJhbicsIEV0YXBlc0thbmJhbik7XG5hcHAubW91bnQoJyNhcHAnKTsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cclxuICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cclxuICAgICAgPHA+e3sgc3VidGl0bGUgfX08L3A+XHJcbiAgICAgIDxuYXYgY2xhc3M9XCJhcHAtbmF2XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjdXJyZW50VmlldyA9ICdob21lJ1wiIDpjbGFzcz1cInsgYWN0aXZlOiBjdXJyZW50VmlldyA9PT0gJ2hvbWUnIH1cIj7wn4+gIEFjY3VlaWw8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2V0YXBlcydcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogY3VycmVudFZpZXcgPT09ICdldGFwZXMnIH1cIj7wn5OLIFN1aXZpIGRlcyDDiXRhcGVzPC9idXR0b24+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICBcclxuICAgIDxtYWluIGNsYXNzPVwiYXBwLW1haW5cIj5cclxuICAgICAgPCEtLSBWdWUgQWNjdWVpbCAtLT5cclxuICAgICAgPGRpdiB2LWlmPVwiY3VycmVudFZpZXcgPT09ICdob21lJ1wiIGNsYXNzPVwid2VsY29tZS1jYXJkXCI+XHJcbiAgICAgICAgPGgyPkJpZW52ZW51ZSBzdXIgdG9uIEJ1c2luZXNzIE1hbmFnZXI8L2gyPlxyXG4gICAgICAgIDxwPlRvbiB0YWJsZWF1IGRlIGJvcmQgZW50cmVwcmVuZXVyaWFsIGVzdCBwcsOqdCAhPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCI+4pyFIFN5bWZvbnkgNy4yICsgVnVlLmpzIDMgZm9uY3Rpb25uZW50IHBhcmZhaXRlbWVudDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlXCIgQGNsaWNrPVwiY3VycmVudFZpZXcgPSAnZXRhcGVzJ1wiPlxyXG4gICAgICAgICAgICA8aDM+8J+TiyBTdWl2aSBkZXMgw4l0YXBlczwvaDM+XHJcbiAgICAgICAgICAgIDxwPkfDqHJlIHRvdXRlcyBsZXMgw6l0YXBlcyBkZSBjcsOpYXRpb24gZGUgdG9uIGVudHJlcHJpc2U8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlIGNvbWluZy1zb29uXCI+XHJcbiAgICAgICAgICAgIDxoMz7wn5OBIERvY3VtZW50czwvaDM+XHJcbiAgICAgICAgICAgIDxwPkJpZW50w7R0IGRpc3BvbmlibGU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlIGNvbWluZy1zb29uXCI+XHJcbiAgICAgICAgICAgIDxoMz7wn5OFIENhbGVuZHJpZXI8L2gzPlxyXG4gICAgICAgICAgICA8cD5CaWVudMO0dCBkaXNwb25pYmxlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBWdWUgU3VpdmkgZGVzIMOJdGFwZXMgLS0+XHJcbiAgICAgIDxFdGFwZXNLYW5iYW4gdi1pZj1cImN1cnJlbnRWaWV3ID09PSAnZXRhcGVzJ1wiIC8+XHJcbiAgICA8L21haW4+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0FwcCcsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAnQnVzaW5lc3MgTWFuYWdlcicsXHJcbiAgICAgIHN1YnRpdGxlOiAnR2VzdGlvbiBkZSB0b24gcHJvamV0IGVudHJlcHJlbmV1cmlhbCAtIE1vbiBBc3Npc3RhbnQgTnVtw6lyaXF1ZScsXHJcbiAgICAgIGN1cnJlbnRWaWV3OiAnaG9tZSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uYXBwLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIgaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIgcCB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gMCAxcmVtIDA7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uYXBwLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uYXBwLW5hdiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5hcHAtbmF2IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG59XHJcblxyXG4uYXBwLW5hdiBidXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzY2N2VlYTtcclxufVxyXG5cclxuLmFwcC1tYWluIHtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLndlbGNvbWUtY2FyZCBoMiB7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgY29sb3I6ICMxMGI5ODE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmZlYXR1cmVzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcbn1cclxuXHJcbi5mZWF0dXJlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XHJcbn1cclxuXHJcbi5mZWF0dXJlLmNvbWluZy1zb29uIHtcclxuICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gIGNvbG9yOiAjNzE4MDk2O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmZlYXR1cmUuY29taW5nLXNvb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZmVhdHVyZSBoMyB7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImV0YXBlcy1rYW5iYW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJrYW5iYW4taGVhZGVyXCI+XHJcbiAgICAgIDxoMj7wn5OLIFN1aXZpIGRlcyDDiXRhcGVzIC0gQ3LDqWF0aW9uIGQnRW50cmVwcmlzZTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2lvblwiPlxyXG4gICAgICAgIDxzcGFuPlByb2dyZXNzaW9uIDoge3sgcHJvZ3Jlc3Npb24gfX0lPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1maWxsXCIgOnN0eWxlPVwieyB3aWR0aDogcHJvZ3Jlc3Npb24gKyAnJScgfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzaG93QWRkTW9kYWwgPSB0cnVlXCIgY2xhc3M9XCJidG4tYWRkXCI+KyBOb3V2ZWxsZSDDiXRhcGU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJrYW5iYW4tYm9hcmRcIj5cclxuICAgICAgPCEtLSBDb2xvbm5lIMOAIEZBSVJFIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwia2FuYmFuLWNvbHVtblwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImNvbHVtbi10aXRsZSB0b2RvXCI+8J+TnSDDgCBGYWlyZSAoe3sgZXRhcGVzQnlTdGF0dXQudG9kby5sZW5ndGggfX0pPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIHYtZm9yPVwiZXRhcGUgaW4gZXRhcGVzQnlTdGF0dXQudG9kb1wiIFxyXG4gICAgICAgICAgICA6a2V5PVwiZXRhcGUuaWRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImthbmJhbi1jYXJkXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiZWRpdEV0YXBlKGV0YXBlKVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoND57eyBldGFwZS50aXRyZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDxwIHYtaWY9XCJldGFwZS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBldGFwZS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImV0YXBlLmRhdGVMaW1pdGVcIiBjbGFzcz1cImRhdGVcIj7wn5OFIHt7IGZvcm1hdERhdGUoZXRhcGUuZGF0ZUxpbWl0ZSkgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrLnN0b3A9XCJjaGFuZ2VTdGF0dXQoZXRhcGUsICdpbl9wcm9ncmVzcycpXCIgY2xhc3M9XCJidG4tbWluaVwiPuKWtu+4jzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2suc3RvcD1cImRlbGV0ZUV0YXBlKGV0YXBlKVwiIGNsYXNzPVwiYnRuLW1pbmkgZGFuZ2VyXCI+8J+Xke+4jzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gQ29sb25uZSBFTiBDT1VSUyAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImthbmJhbi1jb2x1bW5cIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjb2x1bW4tdGl0bGUgaW4tcHJvZ3Jlc3NcIj7ij7MgRW4gQ291cnMgKHt7IGV0YXBlc0J5U3RhdHV0LmluX3Byb2dyZXNzLmxlbmd0aCB9fSk8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgdi1mb3I9XCJldGFwZSBpbiBldGFwZXNCeVN0YXR1dC5pbl9wcm9ncmVzc1wiIFxyXG4gICAgICAgICAgICA6a2V5PVwiZXRhcGUuaWRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImthbmJhbi1jYXJkIGluLXByb2dyZXNzXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiZWRpdEV0YXBlKGV0YXBlKVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoND57eyBldGFwZS50aXRyZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDxwIHYtaWY9XCJldGFwZS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBldGFwZS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImV0YXBlLmRhdGVEZWJ1dFwiIGNsYXNzPVwiZGF0ZVwiPvCfmoAge3sgZm9ybWF0RGF0ZShldGFwZS5kYXRlRGVidXQpIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljay5zdG9wPVwiY2hhbmdlU3RhdHV0KGV0YXBlLCAndG9kbycpXCIgY2xhc3M9XCJidG4tbWluaVwiPuKshe+4jzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2suc3RvcD1cImNoYW5nZVN0YXR1dChldGFwZSwgJ2RvbmUnKVwiIGNsYXNzPVwiYnRuLW1pbmkgc3VjY2Vzc1wiPuKchTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gQ29sb25uZSBURVJNSU7DiSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImthbmJhbi1jb2x1bW5cIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjb2x1bW4tdGl0bGUgZG9uZVwiPuKchSBUZXJtaW7DqSAoe3sgZXRhcGVzQnlTdGF0dXQuZG9uZS5sZW5ndGggfX0pPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIHYtZm9yPVwiZXRhcGUgaW4gZXRhcGVzQnlTdGF0dXQuZG9uZVwiIFxyXG4gICAgICAgICAgICA6a2V5PVwiZXRhcGUuaWRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImthbmJhbi1jYXJkIGRvbmVcIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJlZGl0RXRhcGUoZXRhcGUpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGg0Pnt7IGV0YXBlLnRpdHJlIH19PC9oND5cclxuICAgICAgICAgICAgPHAgdi1pZj1cImV0YXBlLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGV0YXBlLmRlc2NyaXB0aW9uIH19PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIj7wn46JIFRlcm1pbsOpPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljay5zdG9wPVwiY2hhbmdlU3RhdHV0KGV0YXBlLCAnaW5fcHJvZ3Jlc3MnKVwiIGNsYXNzPVwiYnRuLW1pbmlcIj7ihqnvuI88L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIE1vZGFsIEFqb3V0ZXIvw4lkaXRlciAtLT5cclxuICAgIDxkaXYgdi1pZj1cInNob3dBZGRNb2RhbCB8fCBlZGl0aW5nRXRhcGVcIiBjbGFzcz1cIm1vZGFsXCIgQGNsaWNrLnNlbGY9XCJjbG9zZU1vZGFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgPGgzPnt7IGVkaXRpbmdFdGFwZSA/ICdNb2RpZmllciBsXFwnw6l0YXBlJyA6ICdOb3V2ZWxsZSDDqXRhcGUnIH19PC9oMz5cclxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzYXZlRXRhcGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5UaXRyZSAqPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLnRpdHJlXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJmb3JtLmRlc2NyaXB0aW9uXCIgcm93cz1cIjNcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+RGF0ZSBkZSBkw6lidXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5kYXRlRGVidXRcIiB0eXBlPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+RGF0ZSBsaW1pdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5kYXRlTGltaXRlXCIgdHlwZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Ob3RlczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVwiZm9ybS5ub3Rlc1wiIHJvd3M9XCI0XCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiYnRuLWNhbmNlbFwiPkFubnVsZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4tc2F2ZVwiPnt7IGVkaXRpbmdFdGFwZSA/ICdNZXR0cmUgw6Agam91cicgOiAnQ3LDqWVyJyB9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFdGFwZXNLYW5iYW4nLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldGFwZXM6IFtdLFxyXG4gICAgICBzaG93QWRkTW9kYWw6IGZhbHNlLFxyXG4gICAgICBlZGl0aW5nRXRhcGU6IG51bGwsXHJcbiAgICAgIGZvcm06IHtcclxuICAgICAgICB0aXRyZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGRhdGVEZWJ1dDogJycsXHJcbiAgICAgICAgZGF0ZUxpbWl0ZTogJycsXHJcbiAgICAgICAgbm90ZXM6ICcnLFxyXG4gICAgICAgIHN0YXR1dDogJ3RvZG8nLFxyXG4gICAgICAgIG9yZHJlOiAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBldGFwZXNCeVN0YXR1dCgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b2RvOiB0aGlzLmV0YXBlcy5maWx0ZXIoZSA9PiBlLnN0YXR1dCA9PT0gJ3RvZG8nKSxcclxuICAgICAgICBpbl9wcm9ncmVzczogdGhpcy5ldGFwZXMuZmlsdGVyKGUgPT4gZS5zdGF0dXQgPT09ICdpbl9wcm9ncmVzcycpLFxyXG4gICAgICAgIGRvbmU6IHRoaXMuZXRhcGVzLmZpbHRlcihlID0+IGUuc3RhdHV0ID09PSAnZG9uZScpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9ncmVzc2lvbigpIHtcclxuICAgICAgaWYgKHRoaXMuZXRhcGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcclxuICAgICAgY29uc3QgZG9uZSA9IHRoaXMuZXRhcGVzLmZpbHRlcihlID0+IGUuc3RhdHV0ID09PSAnZG9uZScpLmxlbmd0aFxyXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgoZG9uZSAvIHRoaXMuZXRhcGVzLmxlbmd0aCkgKiAxMDApXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5sb2FkRXRhcGVzKClcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGxvYWRFdGFwZXMoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9ldGFwZXMnKVxyXG4gICAgICAgIHRoaXMuZXRhcGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGNoYXJnZW1lbnQgw6l0YXBlczonLCBlcnJvcilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNhdmVFdGFwZSgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmVkaXRpbmdFdGFwZSBcclxuICAgICAgICAgID8gYC9hcGkvZXRhcGVzLyR7dGhpcy5lZGl0aW5nRXRhcGUuaWR9YFxyXG4gICAgICAgICAgOiAnL2FwaS9ldGFwZXMnXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gdGhpcy5lZGl0aW5nRXRhcGUgPyAnUFVUJyA6ICdQT1NUJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIHRoaXMubG9hZEV0YXBlcygpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIHNhdXZlZ2FyZGU6JywgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBjaGFuZ2VTdGF0dXQoZXRhcGUsIG5ld1N0YXR1dCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL2V0YXBlcy8ke2V0YXBlLmlkfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgIC4uLmV0YXBlLCBcclxuICAgICAgICAgICAgc3RhdHV0OiBuZXdTdGF0dXQsXHJcbiAgICAgICAgICAgIGRhdGVEZWJ1dDogbmV3U3RhdHV0ID09PSAnaW5fcHJvZ3Jlc3MnICYmICFldGFwZS5kYXRlRGVidXQgXHJcbiAgICAgICAgICAgICAgPyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSBcclxuICAgICAgICAgICAgICA6IGV0YXBlLmRhdGVEZWJ1dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubG9hZEV0YXBlcygpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGNoYW5nZW1lbnQgc3RhdHV0OicsIGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZGVsZXRlRXRhcGUoZXRhcGUpIHtcclxuICAgICAgaWYgKCFjb25maXJtKGBTdXBwcmltZXIgbCfDqXRhcGUgXCIke2V0YXBlLnRpdHJlfVwiID9gKSkgcmV0dXJuXHJcbiAgICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL2V0YXBlcy8ke2V0YXBlLmlkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KVxyXG4gICAgICAgIHRoaXMubG9hZEV0YXBlcygpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIHN1cHByZXNzaW9uOicsIGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWRpdEV0YXBlKGV0YXBlKSB7XHJcbiAgICAgIHRoaXMuZWRpdGluZ0V0YXBlID0gZXRhcGVcclxuICAgICAgdGhpcy5mb3JtID0ge1xyXG4gICAgICAgIHRpdHJlOiBldGFwZS50aXRyZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZXRhcGUuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgZGF0ZURlYnV0OiBldGFwZS5kYXRlRGVidXQgfHwgJycsXHJcbiAgICAgICAgZGF0ZUxpbWl0ZTogZXRhcGUuZGF0ZUxpbWl0ZSB8fCAnJyxcclxuICAgICAgICBub3RlczogZXRhcGUubm90ZXMgfHwgJycsXHJcbiAgICAgICAgc3RhdHV0OiBldGFwZS5zdGF0dXQsXHJcbiAgICAgICAgb3JkcmU6IGV0YXBlLm9yZHJlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG4gICAgICB0aGlzLnNob3dBZGRNb2RhbCA9IGZhbHNlXHJcbiAgICAgIHRoaXMuZWRpdGluZ0V0YXBlID0gbnVsbFxyXG4gICAgICB0aGlzLmZvcm0gPSB7XHJcbiAgICAgICAgdGl0cmU6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBkYXRlRGVidXQ6ICcnLFxyXG4gICAgICAgIGRhdGVMaW1pdGU6ICcnLFxyXG4gICAgICAgIG5vdGVzOiAnJyxcclxuICAgICAgICBzdGF0dXQ6ICd0b2RvJyxcclxuICAgICAgICBvcmRyZTogMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XHJcbiAgICAgIGlmICghZGF0ZVN0cmluZykgcmV0dXJuICcnXHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKVxyXG4gICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJylcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uZXRhcGVzLWthbmJhbiB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmthbmJhbi1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5rYW5iYW4taGVhZGVyIGgyIHtcclxuICBjb2xvcjogIzJkMzc0ODtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Npb24ge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLWFkZCB7XHJcbiAgYmFja2dyb3VuZDogIzY2N2VlYTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbn1cclxuXHJcbi5idG4tYWRkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU2OGQzO1xyXG59XHJcblxyXG4ua2FuYmFuLWJvYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi5rYW5iYW4tY29sdW1uIHtcclxuICBiYWNrZ3JvdW5kOiAjZjdmYWZjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmNvbHVtbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5jb2x1bW4tdGl0bGUudG9kbyB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZDdkNztcclxuICBjb2xvcjogI2M1MzAzMDtcclxufVxyXG5cclxuLmNvbHVtbi10aXRsZS5pbi1wcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZWJjODtcclxuICBjb2xvcjogI2MwNTYyMTtcclxufVxyXG5cclxuLmNvbHVtbi10aXRsZS5kb25lIHtcclxuICBiYWNrZ3JvdW5kOiAjYzZmNmQ1O1xyXG4gIGNvbG9yOiAjMjI1NDNkO1xyXG59XHJcblxyXG4uY29sdW1uLWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4ua2FuYmFuLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcclxufVxyXG5cclxuLmthbmJhbi1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcblxyXG4ua2FuYmFuLWNhcmQgaDQge1xyXG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gIGNvbG9yOiAjMmQzNzQ4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiAjNzE4MDk2O1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBjb2xvcjogIzcxODA5NjtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5idG4tbWluaSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uYnRuLW1pbmk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmN2ZhZmM7XHJcbn1cclxuXHJcbi5idG4tbWluaS5zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzZmNmQ1O1xyXG59XHJcblxyXG4uYnRuLW1pbmkuZGFuZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVkN2Q3O1xyXG59XHJcblxyXG4vKiBNb2RhbCAqL1xyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQgaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6ICMyZDM3NDg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0YTU1Njg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0LFxyXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubW9kYWwtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5idG4tY2FuY2VsIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tc2F2ZSB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogIzY2N2VlYTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJ0bi1zYXZlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU2OGQzO1xyXG59XHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwMyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTViY2RhZjAzJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi01YmNkYWYwM1wiXSxbJ19fZmlsZScsXCJhc3NldHMvQXBwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1YmNkYWYwM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzViY2RhZjAzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWJjZGFmMDMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDMmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNWJjZGFmMDMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FdGFwZXNLYW5iYW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMDdlN2M0YzRcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwN2U3YzRjNFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzA3ZTdjNGM0JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDdlN2M0YzQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMDdlN2M0YzQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9FdGFwZXNLYW5iYW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDMmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9FdGFwZXNLYW5iYW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZTdjNGM0JnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWJjZGFmMDMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIl0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsIkFwcCIsIkV0YXBlc0thbmJhbiIsImFwcCIsImNvbXBvbmVudCIsIm1vdW50IiwibmFtZSIsImRhdGEiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY3VycmVudFZpZXciLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImV0YXBlcyIsInNob3dBZGRNb2RhbCIsImVkaXRpbmdFdGFwZSIsImZvcm0iLCJ0aXRyZSIsImRlc2NyaXB0aW9uIiwiZGF0ZURlYnV0IiwiZGF0ZUxpbWl0ZSIsIm5vdGVzIiwic3RhdHV0Iiwib3JkcmUiLCJjb21wdXRlZCIsImV0YXBlc0J5U3RhdHV0IiwidG9kbyIsImZpbHRlciIsImluX3Byb2dyZXNzIiwicHJvZ3Jlc3Npb24iLCJNYXRoIiwicm91bmQiLCJtb3VudGVkIiwibG9hZEV0YXBlcyIsIm1ldGhvZHMiLCJfdGhpcyIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl90IiwiX2NvbnRleHQiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJzYXZlRXRhcGUiLCJfdGhpczIiLCJfY2FsbGVlMiIsInVybCIsIm1ldGhvZCIsIl90MiIsIl9jb250ZXh0MiIsImNvbmNhdCIsImlkIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xvc2VNb2RhbCIsImNoYW5nZVN0YXR1dCIsImV0YXBlIiwibmV3U3RhdHV0IiwiX3RoaXMzIiwiX2NhbGxlZTMiLCJfdDMiLCJfY29udGV4dDMiLCJfb2JqZWN0U3ByZWFkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJkZWxldGVFdGFwZSIsIl90aGlzNCIsIl9jYWxsZWU0IiwiX3Q0IiwiX2NvbnRleHQ0IiwiY29uZmlybSIsImVkaXRFdGFwZSIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzIiLCJfdG9EaXNwbGF5U3RyaW5nIiwiJGRhdGEiLCJfaG9pc3RlZF8zIiwib25DbGljayIsIl9jYWNoZSIsIiRldmVudCIsIl9ub3JtYWxpemVDbGFzcyIsImFjdGl2ZSIsIl9ob2lzdGVkXzQiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X0V0YXBlc0thbmJhbiIsImtleSIsInR5cGUiLCIkb3B0aW9ucyIsInN0eWxlIiwiX25vcm1hbGl6ZVN0eWxlIiwid2lkdGgiLCJfaG9pc3RlZF83IiwiX2hvaXN0ZWRfOCIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwiX2hvaXN0ZWRfMTMiLCJfd2l0aE1vZGlmaWVycyIsIl9ob2lzdGVkXzE0IiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xNiIsIl9ob2lzdGVkXzE3IiwiX2hvaXN0ZWRfMTgiLCJfaG9pc3RlZF8yMCIsIl9ob2lzdGVkXzIxIiwiX2hvaXN0ZWRfMjIiLCJfaG9pc3RlZF8yMyIsIl9ob2lzdGVkXzI0IiwiX2hvaXN0ZWRfMjUiLCJfaG9pc3RlZF8yNiIsIl9ob2lzdGVkXzI3IiwiX2hvaXN0ZWRfMjgiLCJfaG9pc3RlZF8zMCIsIl9ob2lzdGVkXzMxIiwiX2hvaXN0ZWRfMzIiLCJfaG9pc3RlZF8zMyIsIl9ob2lzdGVkXzM0Iiwib25TdWJtaXQiLCJfaG9pc3RlZF8zNSIsInJlcXVpcmVkIiwiX2hvaXN0ZWRfMzYiLCJyb3dzIiwiX2hvaXN0ZWRfMzciLCJfaG9pc3RlZF8zOCIsIl9ob2lzdGVkXzM5IiwiX2hvaXN0ZWRfNDAiLCJfaG9pc3RlZF80MSIsIl9ob2lzdGVkXzQyIl0sInNvdXJjZVJvb3QiOiIifQ==